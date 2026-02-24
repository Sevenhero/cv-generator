import { Experience } from "../interfaces/experience";
import Link from "next/link";

const ExperienceComponent = ({
  title,
  company,
  description,
  workRange,
  projectUrl,
  companyUrl,
  technologies,
  addition,
  roles,
  projectName,
}: Experience) => {
  const isActive = !workRange || workRange.toLowerCase().includes("heute");

  const renderLink = (url: string | undefined, label: string | undefined) => {
    if (!label) return null;
    return url ? (
      <Link
        className="text-blue-600 hover:text-blue-700 font-medium underline underline-offset-2
                   decoration-blue-300 hover:decoration-blue-500 transition-all"
        href={url}
        target="_blank"
      >
        {label}
      </Link>
    ) : (
      <span className="font-medium">{label}</span>
    );
  };

  const renderTags = (items: string[], variant: "tech" | "role" = "tech") => {
    const styles = {
      tech: "bg-blue-50 text-blue-600 ring-blue-200/60 print:bg-transparent print:ring-blue-300",
      role: "bg-green-50 text-green-600 ring-green-200/60 print:bg-transparent print:ring-green-300",
    };

    return items.map((item, i) => (
      <span
        key={i}
        className={`inline-block px-2.5 py-0.5 text-xs font-medium rounded-md
                     ring-1 ring-inset ${styles[variant]}
                     print:px-1 print:py-0`}
      >
        {item}
      </span>
    ));
  };

  return (
    <div
      className={`mt-6 rounded-lg bg-white p-5 sm:p-6
                   shadow-sm
                   print:shadow-none print:border-gray-300 print:p-4`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-gray-900 leading-snug tracking-tight">
            {title}
          </h3>
          <div className="text-sm text-gray-500 flex items-center flex-wrap gap-x-1">
            {renderLink(companyUrl, company)}
            {projectName && <span>-</span>}
            {renderLink(projectUrl, projectName)}
          </div>
        </div>

        <span
          className={`inline-flex items-center gap-1.5 text-xs font-semibold whitespace-nowrap
                       rounded-full px-3 py-1 shrink-0 self-start
                       ${isActive
              ? "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200"
              : "bg-gray-100 text-gray-500 ring-1 ring-inset ring-gray-200"
            }`}
        >
          {isActive && (
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          )}
          {workRange}
        </span>
      </div>

      {/* Description */}
      {description && (
        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      )}

      {/* Aufgaben */}
      {addition && addition.length > 0 && (
        <ul className="mt-4 grid gap-1.5 text-sm">
          {addition.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-gray-700">
              <span
                className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400"
                aria-hidden="true"
              />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Tech & Rollen */}
      {((technologies && technologies.length > 0) ||
        (roles && roles.length > 0)) && (
          <div className="mt-4 pt-4 border-t border-gray-100 space-y-2.5 print:border-gray-200">
            {technologies && technologies.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mr-1">
                  Tech
                </span>
                {renderTags(technologies, "tech")}
              </div>
            )}
            {roles && roles.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mr-1">
                  Rollen
                </span>
                {renderTags(roles, "role")}
              </div>
            )}
          </div>
        )}
    </div>
  );
};

export default ExperienceComponent;