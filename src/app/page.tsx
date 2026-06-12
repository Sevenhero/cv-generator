"use client";

import ExperienceComponent from "./components/Experience";
import HeaderComponent from "./components/Header";
import Link from "next/link";
import SkillCategories from "./components/SkillCategories";
import TestimonialComponent from "./components/Testimonial";
import userData from "../data/userData";

export const hidden = false;

export default function Home() {
  const getCompanyNames = () => {
    const experiences = userData.experience ?? [];
    return Array.from(
      new Map(
        [...experiences].map((item) => [
          item.company,
          { company: item.company, url: item.companyUrl },
        ]),
      ).values(),
    );
  };

  return (
    <>
      <div className="bg-gray-100 print:bg-white">
        <div className="mx-auto sm:py-8 w-full max-w-250">
          <div className="grid gap-6 sm:px-8">
            <div className="col-span-12 md:col-span-4">
              <div className="bg-white p-6">
                <section>
                 <HeaderComponent/>
                </section>
                <hr className="my-4 border-t border-gray-300" />
                {/* Über mich */}
                {userData.description && (
                  <section className="mt-8">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Über mich
                    </h2>
                    <div className="bg-white space-y-3">
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

                {/* Firmen */}
                <section className="mt-8 print:hidden">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
                    Firmen
                  </h2>
                  <div className="grid gap-2 sm:grid-cols-2 print:grid-cols-1">
                    {getCompanyNames().map(({ company, url }, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white
                   px-4 py-3 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <span
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md
                     bg-blue-50 text-sm font-bold text-blue-600"
                        >
                          {company.charAt(0)}
                        </span>
                        {url ? (
                          <Link
                            className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors"
                            href={url}
                            target="_blank"
                          >
                            {company}
                          </Link>
                        ) : (
                          <span className="text-sm font-medium text-gray-900">
                            {company}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
                {/* Technologien */}
                <section className="mt-8">
                  {/* <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
                    Technologien
                  </h2> */}
                  {/* <div className="rounded-lg bg-white">
                    <div className="flex flex-wrap gap-2">
                      {getTechnologies().sort((a, b) => a!!.localeCompare(b!!)).map((tech, i) => (
                        <span
                          key={i}
                          className="inline-block rounded-md px-2.5 py-1 text-xs font-medium
                     bg-slate-100 ring-1 ring-inset  text-blue-600 ring-blue-200/60 print:bg-transparent print:ring-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div> */}
                  <SkillCategories />
                </section>
              </div>
              <div className="bg-white p-6 page-break-before">
                <section>
                  <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
                    Projekte
                  </h2>
                  {userData.experience?.map((data, index) => (
                    <ExperienceComponent
                      className="no-print-break"
                      key={index}
                      {...data}
                    />
                  ))}
                </section>
              </div>

              {userData.testimonials && userData.testimonials.length > 0 && (
                <section className="mt-4 mb-8">
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
