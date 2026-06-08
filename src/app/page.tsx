"use client";

import ExperienceComponent from "./components/Experience";
import Image from "next/image";
import Link from "next/link";
import SkillCategories from "./components/SkillCategories";
import SkillIcon from "./components/SkillIcon";
import SocialIcon from "./svgs/SocialIcons";
import TestimonialComponent from "./components/Testimonial";
import { UserData } from "./interfaces/userData";
import { useState } from "react";
import userData from "../data/userData";
import Contact from "./components/Contact";

const hidden = false

export default function Home() {
  const getFullName = () => {
    return `${userData.firstName} ${userData.lastName}`;
  };

  const getCompanyNames = () => {
    const experiences = userData.experience ?? [];
    return Array.from(
      new Map(
        [...experiences].map(item => [item.company, { company: item.company, url: item.companyUrl }])
      ).values()
    );
  };


  const getTechnologies = () => {
    return Array.from(new Set(((userData.experience ?? []).map(item => item.technologies).flatMap(tech => tech))))
  }

  const [user] = useState<UserData>(userData);
  return (
    <>
      <div className="bg-gray-100 print:bg-white">
        <div className="mx-auto sm:py-8 w-full max-w-250">
          <div className="grid gap-6 sm:px-8">
            <div className="col-span-12 md:col-span-4">
              <div className="bg-white p-6">
                <div className="flex gap-4 items-center sm:flex-row flex-col justify-around">
                  <div className="flex flex-col items-center self-center ">
                    <div className="relative mb-2 h-32 w-32">
                      {!hidden && <Image
                        src="/smaller.png"
                        alt="Message Image"
                        fill
                        sizes="128px"
                        className="rounded-full border object-cover object-center"
                      />}
                    </div>
                    {!hidden && <h1 className="text-xl font-bold">{getFullName()}</h1>}
                    <p className="text-gray-700">{userData.title}</p>
                  </div>
                  <div className="self-center">
                    <h4 className="text-gray-700 uppercase sm:text-left text-center font-bold tracking-wider mb-2">
                      Kontakt
                    </h4>
                    <Contact {...user.contact} />
                    <div className="flex items-center gap-6 flex-wrap">
                      {userData.social?.map(
                        ({ social, email, url, phone }, index) => (
                          <SocialIcon
                            key={index}
                            url={url}
                            email={email}
                            phone={phone}
                            social={social}
                          />
                        )
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col self-center">
                    <h4 className="text-gray-700 uppercase text-center sm:text-left font-bold tracking-wider">
                      Sprachen
                    </h4>
                    <ul>
                      {user.languages.map(({ language, level }, index) => (
                        <li key={index}>
                          {language}
                          {level && <span> - {level}</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <hr className="my-4 border-t border-gray-300" />
                {/* <div className="flex flex-col">
                  <span className="text-gray-700 uppercase font-bold text-center tracking-wider mb-2 sm:text-left">
                    Skills
                  </span>
                  <ul className="flex gap-4 flex-wrap justify-evenly items-center">
                    {user.skills.map((skill, index) => (
                      <li
                        key={index}
                        className="mb-2 flex flex-col items-center flex-1"
                      >
                        <SkillIcon skill={skill}></SkillIcon>
                      </li>
                    ))}
                  </ul>
                </div> */}
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
                          <p key={i} className="text-sm text-gray-600 leading-relaxed">
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
                          <span className="text-sm font-medium text-gray-900">{company}</span>
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
                    <ExperienceComponent className="no-print-break" key={index} {...data} />
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
