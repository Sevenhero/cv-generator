import Contact from "./Contact";
import Image from "next/image";
import SocialIcon from "../svgs/SocialIcons"
import { UserData } from "../interfaces/userData";
import { hidden } from "../page";
import { useState } from "react";
import userData from "@/data/userData";

export default function HeaderComponent() {
  const [user] = useState<UserData>(userData);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-blue-500 to-cyan-600 shadow-lg print:bg-white/30 print:shadow-none">
      {/* Subtle pattern dots */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

      <div className="relative z-10 flex flex-col sm:flex-row overflow-hidden rounded-2xl">

        {/* LEFT: photo + name strip */}
        <div className="shrink-0 bg-white/15 grid place-items-center w-full px-5 py-6 sm:w-60 sm:py-8 md:w-70 md:px-6">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-3 h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-xl print:border-gray-300 print:shadow-none" style={{ padding: 0 }}>
              {!hidden && (
                <>
                  <Image
                    src="/smaller.png"
                    alt="Message Image"
                    width={112}
                    height={112}
                    className="object-cover object-center"
                    priority
                  />
                </>
              )}
            </div>

            {!hidden && (
              <div className="flex flex-col items-center text-center">
                <h1 className="text-base font-semibold tracking-tight text-white drop-shadow-sm">
                  {user.firstName} {user.lastName}
                </h1>
                <p className="mt-0.5 text-xs font-medium text-blue-100/90 sm:text-sm">
                  {user.title}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: white content panel */}
        <div className="flex flex-1 flex-col bg-white rounded-tr-2xl shadow-inner print:shadow-none">

          {/* Kontakt row — top half */}
          <div className="flex-1 print:border-r print:border-t px-5 py-4 sm:px-6 sm:py-5 md:pr-8 lg:pr-10">
            <h4 className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-gray-400">
              Kontakt
            </h4>

            {/* Contact info — compact row */}
            <div className="space-y-1.5 sm:space-y-2">
              <Contact { ...user.contact } />
            </div>

            {/* Social icons — natural colors, inline pills */}
            <div className="mt-3 flex shrink-0 gap-2 sm:gap-2.5">
              {!hidden && user.social?.map(({ social, email, url, phone }, index) => (
                <span key={index}>
                  <SocialIcon
                    url={url}
                    email={email}
                    phone={phone}
                    social={social}
                  />
                </span>
              ))}
            </div>
          </div>

          {/* Divider — thin line */}
          <hr className="mx-5 sm:mx-6 border-t border-gray-200" />

          {/* Sprache row — bottom half */}
          <div className="px-5 py-4 sm:px-6 sm:py-5 md:px-8 lg:px-10 print:border-r print:border-b">
            <h4 className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-gray-400">
              Sprachen
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {user.languages.map(({ language, level }, index) => (
                <li key={index} className="flex items-center gap-x-3">
                  {/* Color dot */}
                  <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-linear-to-br from-blue-400 to-cyan-500 shadow-sm" />
                  <div className="min-w-0 text-sm sm:text-base">
                    <span className="font-medium text-gray-900">{language}</span>
                    {level && (
                      <span className="ml-1.5 text-xs text-gray-400 sm:ml-2">{level}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
