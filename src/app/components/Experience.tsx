import { Experience } from "../interfaces/userData";
import Link from "next/link";
import { BookOpen, Briefcase, Tags, Users } from "lucide-react";

interface ExperienceCardProps extends Omit<Experience, "roles" | "technologies"> {
  roles?: string[];
  technologies?: string[];
  className?: string;
}

const isActiveRange = (workRange?: string): boolean =>
  workRange ? /heute|present|now/i.test(workRange) : false;

const formatRange = (range?: string): string => {
  if (!range) return "Unbekannt";
  return range.replace(/bis|–/gu, "–");
};

const ExperienceCard = ({
  className,
  description,
  title,
  company,
  workRange,
  projectName,
  projectUrl,
  companyUrl,
  technologies = [],
  roles = [],
  addition = [],
}: ExperienceCardProps) => {
  const active = isActiveRange(workRange);
  const hasExtraLinks = !!company || !!projectName;

  return (
    <article
      className={
        "mt-6 rounded-xl bg-white p-5 sm:p-6 shadow-sm hover:shadow-md" +
        " transition-shadow duration-200 no-print-break" +
        " print:shadow-none print:border print:border-gray-300 print:p-4" +
        (className ? ` ${className}` : "")
      }
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
        <div className="space-y-1 min-w-0">
          <h3 className="text-lg font-bold text-gray-900 leading-snug tracking-tight truncate">
            {title}
          </h3>

          {hasExtraLinks && (
            <div className="flex items-center flex-wrap gap-x-2 text-sm text-gray-500">
              {companyUrl && company ? (
                <Link
                  href={companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium underline-offset-2 decoration-blue-300 hover:decoration-blue-500 transition-colors cursor-pointer print:inline print:text-gray-700 print:no-underline"
                >
                  {company}
                </Link>
              ) : company ? (
                <span className="font-medium">{company}</span>
              ) : null}
            </div>
          )}

          {projectUrl && projectName ? (
            <div className="flex items-center gap-1 text-sm">
              <BookOpen className="h-3.5 w-3.5 text-gray-400 flex-shrink-0" />
              <Link
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium underline-offset-2 decoration-blue-300 hover:decoration-blue-500 transition-colors cursor-pointer print:inline print:text-gray-700 print:no-underline"
              >
                {projectName}
              </Link>
            </div>
          ) : null}
        </div>

        <span
          className={
            "inline-flex items-center gap-1.5 text-xs font-semibold whitespace-nowrap" +
            " rounded-full px-3 py-1 shrink-0 self-start" +
            (active
              ? "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200"
              : "bg-gray-100 text-gray-500 ring-1 ring-inset ring-gray-200") +
            " print:bg-transparent print:text-gray-600 print:ring-0"
          }
        >
          {active && (
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          )}
          {formatRange(workRange)}
        </span>
      </div>

      {/* Description */}
      {description ? (
        <p className="mt-3 text-sm text-gray-600 leading-relaxed">{description}</p>
      ) : null}

      {/* Aufgaben / bullet list */}
      {addition.length > 0 && (
        <ul className="mt-4 grid gap-1.5">
          {addition.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Rollen */}
      {roles.length > 0 && (
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          <Users className="h-3 w-3 text-gray-400 flex-shrink-0" />
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mr-1">
            Rollen
          </span>
          {roles.map((role, i) => (
            <span
              key={i}
              className="inline-block rounded-md px-2.5 py-1 text-xs font-medium bg-green-50 text-green-700 ring-1 ring-inset ring-green-200/60"
              style={{
                WebkitPrintColorAdjust: 'exact',
                printColorAdjust: 'exact',
                backgroundColor: '#dcfce7',
                color: '#1e3a5f',
                borderColor: '#bbf7d0' as any,
              }}
            >
              {role}
            </span>
          ))}
        </div>
      )}

      {/* Technologien */}
      {technologies.length > 0 && (
        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          <Tags className="h-3 w-3 text-gray-400 flex-shrink-0" />
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mr-1">
            Tech
          </span>
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="inline-block rounded-md px-2.5 py-1 text-xs font-medium bg-slate-50 text-blue-600 ring-1 ring-inset ring-blue-200/60"
              style={{
                WebkitPrintColorAdjust: 'exact',
                printColorAdjust: 'exact',
                backgroundColor: '#f1f5f9',
                color: '#1e40af',
                borderColor: '#bfdbfe' as any,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </article>
  );
};

export default ExperienceCard;
