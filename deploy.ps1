# deploy.ps1
# Usage:
#   pwsh .\deploy.ps1 -HostName "your.server.tld" -User "root"
# Optional:
#   -KeyPath "C:\Users\You\.ssh\id_ed25519"

[CmdletBinding()]
param(
  [Parameter(Mandatory=$true)][string]$HostName,
  [Parameter(Mandatory=$true)][string]$User,
  [string]$KeyPath = ""
)

$ErrorActionPreference = "Stop"

# Konfiguration
$remoteDir = "/var/www/cv.kernke.dev/html"
$tmpDir    = "/tmp/cv-deploy"
$zipLocal  = Join-Path $env:TEMP "cv-site.zip"
$zipRemote = "$tmpDir/site.zip"

# Dependency Check
function Assert-CommandExists([string]$cmd) {
  if (-not (Get-Command $cmd -ErrorAction SilentlyContinue)) {
    throw "Abbruch: Benötigtes Tool '$cmd' fehlt im PATH."
  }
}

Assert-CommandExists "ssh"
Assert-CommandExists "scp"
Assert-CommandExists "bun"

# SSH Argumente dynamisch aufbauen (Splatting)
$sshArgs = @()
if ([System.String]::IsNullOrWhiteSpace($KeyPath) -eq $false) { 
  $sshArgs += @("-i", $KeyPath) 
}

# 1. Build
Write-Host "==> Build (static export)..." -ForegroundColor Cyan
# npm ci
bun install --frozen-lockfile
# npm run build
bun run build

if (-not (Test-Path ".\out")) {
  throw "Ordner '.\out' fehlt. Stellen Sie sicher, dass in der Next.js Config 'output: export' gesetzt ist."
}

# 2. Package
Write-Host "==> Erstelle lokales ZIP-Archiv..." -ForegroundColor Cyan
if (Test-Path $zipLocal) { Remove-Item $zipLocal -Force }
# tar.exe erzwingt POSIX-Pfade (/). Wir wechseln ins Verzeichnis, 
# damit der Root-Ordner 'out' nicht mit ins ZIP gepackt wird.
Push-Location ".\out"
try {
    # -a = Auto-Format (aus .zip ableiten), -c = Create, -f = File
    tar.exe -a -c -f $zipLocal *
} finally {
    Pop-Location
}

# 3. Upload
Write-Host "==> Lade Archiv auf den Server hoch..." -ForegroundColor Cyan
ssh @sshArgs "$User@$HostName" "mkdir -p '$tmpDir'"
scp @sshArgs $zipLocal "$User@${HostName}:$zipRemote"

# 4. Deploy
Write-Host "==> Fuehre Deployment-Skript auf dem Server aus..." -ForegroundColor Cyan

# Das Skript wird definiert und zwingend auf Unix-Line-Endings (LF) normalisiert
$remoteScript = @"
set -euo pipefail
sudo mkdir -p '$remoteDir'
sudo rm -rf '$remoteDir'/*
sudo unzip -o '$zipRemote' -d '$remoteDir' >/dev/null
sudo chown -R www-data:www-data '$remoteDir' || true
rm -rf '$tmpDir'
echo "Erfolgreich nach $remoteDir deployed."
"@.Replace("`r`n", "`n")

# Piped execution: Sauberster Weg, um mehrzeilige Skripte ohne Escaping-Konflikte auszuführen
$remoteScript | ssh @sshArgs "$User@$HostName" "bash -s"

Write-Host "==> Deployment abgeschlossen." -ForegroundColor Green