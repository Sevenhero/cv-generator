"use client";

import Image from "next/image";
import { useState } from "react";
import userData from "../data/userData";
import ExperienceComponent from "./components/Experience";
import SkillIcon from "./components/SkillIcon";
import { UserData } from "./interfaces/userData";
import SocialIcon from "./svgs/SocialIcons";
import TestimonialComponent from "./components/Testimonial";
import Link from "next/link";

export default function Home() {
  const getFullName = () => {
    return `${userData.firstName} ${userData.lastName}`;
  };

  const getCompanyNames = () => {
    const experiences = userData.experience ?? [];
    return Array.from(
      new Map(
        experiences.map(item => [item.company, { company: item.company, url: item.companyUrl }])
      ).values()
    );
  };


  const getTechnologies = () => {
    return Array.from(new Set(((userData.experience ?? []).map(item => item.technologies).flatMap(tech => tech))))
  }

  const [user] = useState<UserData>(userData);
  return (
    <>
      <div className="bg-gray-100">
        <div className="mx-auto sm:py-8 w-full max-w-[1000px]">
          <div className="grid gap-6 sm:px-8">
            <div className="col-span-12 md:col-span-4">
              <div className="bg-white border rounded-lg p-6">
                <div className="flex items-center sm:flex-row flex-col space-x-6 justify-around">
                  <div className="flex flex-col sm:items-center self-start ">
                    <div className="relative w-32 h-32 mb-6">
                      <Image
                        alt="Message Image"
                        src={"/smaller.jpg"}
                        className="rounded-full border shrink-0 top-8"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                    <h1 className="text-xl font-bold">{getFullName()}</h1>
                    <p className="text-gray-700">{userData.title}</p>
                    {/* <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    <a
                      href="#"
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-sm"
                    >
                      Contact
                    </a>
                    <a
                      href="#"
                      className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-sm"
                    >
                      Resume
                    </a>
                  </div> */}
                  </div>
                  <div className="self-start pt-4">
                    <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                      Kontakt
                    </span>
                    {/* <Contact  {...user.contact} /> */}
                    <div className="flex items-center gap-6 my-2 flex-wrap">
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
                  <div className="flex flex-col self-start pt-4">
                    <span className="text-gray-700 uppercase font-bold tracking-wider">
                      Sprachen
                    </span>
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
                    <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                      Top-Skills
                    </span>
                    <ul>
                      {user.topSkills.map((skill, index) => (
                        <li key={index} className="mb-2">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div> */}
                <div className="flex flex-col">
                  <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
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
                </div>
                {userData.description && (
                  <>
                    <hr className="my-4 border-t border-gray-300" />
                    <h2 className="text-xl font-bold mb-4">Über mich:</h2>
                    <p className="text-gray-700 whitespace-pre-wrap leading-6">
                      {userData.description}
                    </p>
                  </>
                )}
                <section>
                  <h2 className="text-2xl font-bold mt-6 mb-4">Firmen</h2>
                  <ul>
                    {getCompanyNames().map(({ company, url }, index) =>
                      url ? (
                        <li key={index}><Link
                          className="text-blue-600 font-semibold"
                          href={url}
                          target="_blank"
                        >
                          {company}
                        </Link>
                        </li>
                      ) : (
                        <li key={index}>
                          <span className="font-semibold">
                            {company}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </section>
                <section>
                  <h2 className="text-2xl font-bold mt-6 mb-4">Technologien</h2>
                  <div>{getTechnologies().join(", ")}</div>
                </section>
              </div>
              <div className="bg-white border rounded-lg p-6">
                <section>
                  <h2 className="text-2xl font-bold mt-6 mb-4">Projekte</h2>
                  {userData.experience?.map((data, index) => (
                    <ExperienceComponent key={index} {...data} />
                  ))}
                </section>
              </div>

              {userData.testimonials && userData.testimonials.length > 0 && (
                <div className="bg-white border rounded-lg p-6 page-break-before">
                  <h2 className="text-xl font-bold mb-4">Testimonials:</h2>
                  <ul>
                    {userData.testimonials.map((testimonial, index) => (
                      <TestimonialComponent
                        key={index}
                        {...testimonial}
                        className={index % 2 !== 0 ?  "sm:flex-row md:flex-row-reverse" : ""}
                      />
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
