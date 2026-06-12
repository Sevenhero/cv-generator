import Contact from "./Contact";
import Image from "next/image";
import SocialIcon from "../svgs/SocialIcons";
import { UserData } from "../interfaces/userData";
import { hidden } from "../page";
import { useState } from "react";
import userData from "@/data/userData";

export default function HeaderComponent() {
  const [user] = useState<UserData>(userData);
  const getFullName = () => {
    return `${userData.firstName} ${userData.lastName}`;
  };

  return (
    <div className="flex gap-4 items-center sm:flex-row flex-col justify-around">
      <div className="flex flex-col items-center self-center ">
        <div className="relative mb-2 h-32 w-32">
          {!hidden && (
            <Image
              src="/smaller.png"
              alt="Message Image"
              fill
              sizes="128px"
              className="rounded-full border object-cover object-center"
            />
          )}
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
          {userData.social?.map(({ social, email, url, phone }, index) => (
            <SocialIcon
              key={index}
              url={url}
              email={email}
              phone={phone}
              social={social}
            />
          ))}
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
  );
}
