import Link from "next/link";
import { Experience } from "../interfaces/experience";
import userData from "../../data/userData";

const ExperienceComponent = ({
  title,
  company,
  description,
  from,
  till,
  url,
  technologies,
  roles,
  projectName,
}: Experience) => (
  <div className="mb-4">
    <div className="flex justify-between flex-wrap gap-2 w-full">
      <span className="w-[49%] flex flex-col">
        <span className="font-bold w-[49%]">{title}</span>
        {projectName && <span>{projectName}</span>}
      </span>
      <span className="w-[49%] flex flex-col items-end">
        <span className="text-gray-700">
          {url && (
            <Link
              className="text-blue-600 font-semibold"
              href={url}
              target="_blank"
            >
              {company}
            </Link>
          )}
          {!url && <span>{company}</span>}
        </span>
        <span className="text-gray-700">
          {from} - {till}
        </span>
      </span>
    </div>
    <p className="mt-2">{description}</p>
    {technologies && (
      <p className="mt-2">
        technologies:{" "}
        {technologies?.map((technology, index) => (
          <span className="text-gray-800 italic font-bold" key={index}>
            {technology}
            {index + 1 < technologies.length ? ", " : ""}
          </span>
        ))}
      </p>
    )}
    {roles && (
      <p className="mt-2">
        roles:{" "}
        {roles?.map((role, index) => (
          <span className="text-gray-800 italic font-bold" key={index}>
            {role}
            {index + 1 < roles.length ? ", " : ""}
          </span>
        ))}
      </p>
    )}
  </div>
);

export default ExperienceComponent;
