import Link from "next/link";
import { Experience } from "../interfaces/experience";

const ExperienceComponent = ({
  title,
  company,
  description,
  from,
  till,
  projectUrl,
  companyUrl,
  technologies,
  roles,
  projectName,
}: Experience) => (
  <div className="mt-4 break-fot-print">
    <div className="flex justify-between flex-wrap gap-2 w-full">
      <span className="w-[49%] flex flex-col">
        <span className="text-gray-700">
          {projectUrl && (
            <Link
              className="text-blue-600 font-semibold"
              href={projectUrl}
              target="_blank"
            >
              {projectName}
            </Link>
          )}
          {!projectUrl && <span>{projectName}</span>}
        </span>
        <span className="font-bold w-[49%]">{title}</span>
      </span>
      <span className="w-[49%] flex flex-col items-end">
        <span className="text-gray-700">
          {from} {till ? "-" : ""} {till}
        </span>
        <span className="text-gray-700">
          {companyUrl && (
            <Link
              className="text-blue-600 font-semibold"
              href={companyUrl}
              target="_blank"
            >
              {company}
            </Link>
          )}
          {!companyUrl && <span>{company}</span>}
        </span>
      </span>
    </div>
    <p className="mt-2">{description}</p>
    {technologies && (
      <p className="mt-2">
        Technologien:{" "}
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
        Rollen:{" "}
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
