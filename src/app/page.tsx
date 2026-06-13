"use client";

import { Experience } from "./interfaces/experience";
import ExperienceComponent from "./components/Experience";
import HeaderComponent from "./components/Header";
import SkillCategories from "./components/SkillCategories";
import TestimonialComponent from "./components/Testimonial";
import userData from "../data/userData";

export const hidden = false;

/* ------------------------------------------------------------------ */
/*  Helpers                                                         */
/* ------------------------------------------------------------------ */

const parseDate = (s: string): number => {
  const m = s.trim().match(/(\d{1,2})[^\d]*(\d{4})/);
  if (!m) return 0;
  return Number(m[2]) * 100 + Number(m[1]);
};

function toDisplay(date: number): string {
  if (!date) return "";
  const y = String(Math.floor(date / 100)).padStart(4, "0");
  const m = date % 100;
  // German two-digit months
  return `${String(m).padStart(2, "0")}.${y}`;
}

type AggregatedEntry = {
  company: string;
  companyUrl: string;
  roles: string[];
  startDate: number;
  endDate: number;
  displayRange: string;
  isCurrent: boolean;
};

function aggregateEmployers(): AggregatedEntry[] {
  const parseRange = (
    workRange: string | null | undefined,
  ): { start: number; end: number; isCurrent: boolean } => {
    if (!workRange?.trim()) {
      return { start: 0, end: 0, isCurrent: false };
    }

    const normalized = workRange
      .toLowerCase()
      .replace(/\s+/g, " ")
      .replace(/\s*(?:-|–|—|bis)\s*/g, " bis ")
      .trim();

    const [rawStart = "", rawEnd = ""] = normalized.split(" bis ");

    const start = parseDate(rawStart.trim());
    const isCurrent = /^(heute|present|current|now)$/i.test(rawEnd.trim());
    const end = isCurrent ? Date.now() : parseDate(rawEnd.trim());

    return {
      start: Number.isFinite(start) ? start : 0,
      end: Number.isFinite(end) ? end : 0,
      isCurrent,
    };
  };

  const groups = new Map<string, Experience[]>();

  for (const exp of userData.experience ?? []) {
    const company = exp.company?.trim();
    if (!company) continue;

    const existing = groups.get(company) ?? [];
    existing.push(exp);
    groups.set(company, existing);
  }

  const results: AggregatedEntry[] = [];

  for (const [company, entries] of groups.entries()) {
    const parsedEntries = entries.map((entry) => ({
      entry,
      range: parseRange(entry.workRange),
    }));

    const validRanges = parsedEntries
      .map(({ range }) => range)
      .filter((range) => range.start > 0);

    if (validRanges.length === 0) {
      results.push({
        company,
        companyUrl: entries.find((e) => e.companyUrl)?.companyUrl ?? "",
        roles: [...new Set(entries.flatMap((e) => e.roles ?? []))],
        startDate: 0,
        endDate: 0,
        displayRange: "",
        isCurrent: false,
      });
      continue;
    }

    const startDate = Math.min(...validRanges.map((r) => r.start));
    const isCurrent = validRanges.some((r) => r.isCurrent);
    const endDate = isCurrent
      ? Date.now()
      : Math.max(...validRanges.map((r) => r.end));

    const roles = [...new Set(entries.flatMap((e) => e.roles ?? []))];

    results.push({
      company,
      companyUrl: entries.find((e) => e.companyUrl)?.companyUrl ?? "",
      roles,
      startDate,
      endDate,
      displayRange: `${toDisplay(startDate)} bis ${isCurrent ? "heute" : toDisplay(endDate)}`,
      isCurrent,
    });
  }

  return results.sort((a, b) => {
    if (a.isCurrent !== b.isCurrent) {
      return a.isCurrent ? -1 : 1;
    }

    return b.endDate - a.endDate;
  });
}

/* ------------------------------------------------------------------ */

export default function Home() {
  const formats = (range?: string): string => {
    if (!range) return "Unbekannt";
    return range.replace(/bis|–/gu, "–");
  };

  const employers = aggregateEmployers();

  return (
    <>
      <div className="bg-gray-100 print:bg-white">
        <div className="mx-auto w-full max-w-250">
          <div className="grid gap-6 sm:px-8">
            <div className="col-span-12 md:col-span-4">
              <div className="p-6">
                <section>
                  <HeaderComponent />
                </section>

                {/* Über mich */}
                {userData.description && (
                  <section className="mt-8">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Über mich
                    </h2>
                    <div className="space-y-3">
                      {userData.description
                        .split("\n")
                        .filter(Boolean)
                        .map((paragraph, i) => (
                          <p
                            key={i}
                            className="text-sm text-gray-600 leading-relaxed"
                          >
                            {paragraph}
                          </p>
                        ))}
                    </div>
                  </section>
                )}

                {/* Technologien */}
                <section className="mt-8">
                  <SkillCategories />
                </section>

                {/* Sonstiges */}
                {userData.everythingElse && (
                  <section className="mt-8">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Sonstiges
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {userData.everythingElse.map((e) => e).join(", ")}
                    </p>
                  </section>
                )}

                {/* Werdegang — career timeline */}
                <section className="mt-8">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">
                    Beruflicher Weg
                  </h2>

                  <div className="flex flex-col relative before:absolute before:left-2 before:top-1 before:bottom-1 before:w-0.5 before:bg-linear-to-b before:from-blue-400 before:to-cyan-300">
                    {employers.map((emp, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-4 py-4 last:pb-0"
                      >
                        {/* Timeline dot */}
                        <span
                          className={`shrink-0 mt-1 relative ml-[3] flex h-3 w-3 rounded-full ring-2 ring-gray-100 ${
                            emp.isCurrent ||
                            (!employers.some((e) => e.isCurrent) && idx === 0)
                              ? "bg-emerald-500 animate-pulse"
                              : "bg-blue-400"
                          }`}
                        />

                        {/* Card content */}
                        <div className="flex flex-col gap-0.5 w-full">
                          {/* Date pill */}
                          <span
                            className={`inline-flex items-center gap-1 text-[11px] font-semibold whitespace-nowrap rounded-full px-2 py-0.5 self-start ${
                              emp.isCurrent ||
                              (!employers.some((e) => e.isCurrent) && idx === 0)
                                ? "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200"
                                : "bg-gray-50 text-gray-400 ring-1 ring-inset ring-gray-200"
                            }`}
                          >
                            {formats(emp.displayRange)}
                          </span>

                          {/* Company name */}
                          <a href={emp.companyUrl}>
                            <p className="text-sm font-bold text-gray-800 hover:text-blue-700 transition-colors">
                              {emp.company}
                            </p>
                          </a>

                          {/* Roles */}
                          <div className="flex flex-wrap gap-1 mt-0.5">
                            {emp.roles.map((role, ri) => (
                              <span
                                key={ri}
                                className="text-[10px] font-medium text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100"
                              >
                                {role}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
              <div className="p-6 sm:px-0 page-break-before">
                <section>
                  <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
                    Projekte
                  </h2>
                  {userData.experience?.map((data, index) => (
                    <ExperienceComponent
                      className="avoid-break"
                      key={index}
                      {...data}
                    />
                  ))}
                </section>
              </div>

              {userData.testimonials && userData.testimonials.length > 0 && (
                <section className="sm:px-0 px-6">
                  <h2 className="text-sm font-bold uppercase tracking-widest sm:px-0 px-6 text-gray-400 mb-2">
                    Testimonials
                  </h2>
                  <ul className="grid gap-4 sm:grid-cols-2 print:grid-cols-1">
                    {userData.testimonials.map((testimonial, index) => (
                      <TestimonialComponent key={index} {...testimonial} />
                    ))}
                  </ul>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
