"use client";

import Image from "next/image";
import { useState } from "react";
import userData from "../data/userData";
import ExperienceComponent from "./components/Experience";
import { getFormattedDate } from "./helper/utils";
import { UserData } from "./interfaces/userData";
import SocialIcon from "./svgs/SocialIcons";
import Contact from "./components/Contact";

export default function Home() {
  const getFullName = () => {
    return userData.firstName + " " + userData.lastName;
  };

  const [user] = useState<UserData>(userData);
  return (
    <>
      <div className="bg-gray-100">
        <div className="md:container md:mx-auto py-8">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-8">
            <div className="col-span-12 md:col-span-4">
              <div className="bg-white border rounded-lg p-6">
                <div className="max-md:flex max-md:items-center max-md:space-x-6">
                  <div className="flex flex-col items-center">
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
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    >
                      Contact
                    </a>
                    <a
                      href="#"
                      className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
                    >
                      Resume
                    </a>
                  </div> */}
                  </div>
                  <Contact {...user.contact} />
                </div>
                <hr className="my-4 md:hidden border-t border-gray-300" />
                <div className="max-md:flex max-md:space-x-6">
                  <hr className="my-4 border-t border-gray-300" />
                  <div className="flex flex-col">
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
                  </div>
                  <hr className="my-4 border-t border-gray-300" />
                  <div className="flex flex-col">
                    <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                      Languages
                    </span>
                    <ul>
                      {user.languages.map(({ language, level }, index) => (
                        <li key={index} className="mb-2">
                          {language}
                          {level && <span> - {level}</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <hr className="my-4 border-t border-gray-300" />
                <div className="flex flex-col">
                  <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                    Find me on
                  </span>
                  <div className="flex items-center gap-6 my-2 flex-wrap">
                    {userData.social?.map(({ social, email, url }, index) => (
                      <SocialIcon
                        key={index}
                        url={url}
                        email={email}
                        social={social}
                      />
                    ))}
                  </div>
                </div>
                {userData.description && (
                  <>
                    <hr className="my-4 border-t border-gray-300" />
                    <h2 className="text-xl font-bold mb-4">About Me</h2>
                    <p className="text-gray-700">{userData.description}</p>
                  </>
                )}
              </div>
              y
            </div>
            <div className="col-span-12 md:col-span-8">
              <div className="bg-white border rounded-lg p-6">
                <section className="break-for-print">
                  <h2 className="text-2xl font-bold mt-6 mb-4">Experience</h2>
                  {userData.experience?.map((data, index) => (
                    <ExperienceComponent key={index} {...data} />
                  ))}
                </section>
                <section>
                  <h2 className="text-2xl font-bold mt-6 mb-4">Education</h2>
                  {userData.education?.map((data, index) => (
                    <ExperienceComponent key={index} {...data} />
                  ))}
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
