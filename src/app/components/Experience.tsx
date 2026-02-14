import Link from "next/link";
import { Experience } from "../interfaces/experience";
import "./Experience.css";

const ExperienceComponent = ({
  title,
  company,
  description,
  from,
  till,
  projectUrl,
  companyUrl,
  technologies,
  addition,
  roles,
  projectName,
}: Experience) => (
  <div className="mt-8 break-fot-print">
    <div className="grid experience-header">
      <div className="font-bold">{title}</div>
      <span className="text-gray-700 sm:text-end text-left">
        {from} {till ? "-" : ""} {till}
      </span>
      <div>
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
        {projectName && " - "}
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
      </div>
    </div>
    <div className="mt-2">{description}</div>
    {addition && (
      <div className="mt-2">
        <ul>
          {addition?.map((role, index) => (
            <li className="text-gray-800 italic font-bold" key={index}>
              {role}
              {index + 1 < addition.length ? ", " : ""}
            </li>
          ))}
        </ul>
      </div>
    )}
    {technologies && (
      <div>
        Technologien:{" "}
        {technologies?.map((technology, index) => (
          <span className="text-gray-800 italic font-bold" key={index}>
            {technology}
            {index + 1 < technologies.length ? ", " : ""}
          </span>
        ))}
      </div>
    )}
    {roles && (
      <div>
        Rollen:{" "}
        {roles?.map((role, index) => (
          <span className="text-gray-800 italic font-bold" key={index}>
            {role}
            {index + 1 < roles.length ? ", " : ""}
          </span>
        ))}
      </div>
    )}
  </div>
);

export default ExperienceComponent;
