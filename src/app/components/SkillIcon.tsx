import AngularIcon from "../icons/AngularIcon";
import CssIcon from "../icons/CSSIcon";
import HtmlIcon from "../icons/HtmlIcon";
import IonicIcon from "../icons/IonicIcon";
import JavaScriptIcon from "../icons/JavascriptIcon";
import NestJsIcon from "../icons/NestjsIcon";
import NextJsIcon from "../icons/NextjsIcon";
import TypeScriptIcon from "../icons/Typescript";
import ReactIcon from "../icons/ReactIcon";
import { Skill } from "../interfaces/userData";

interface SkillIconProps {
  skill: Skill;
}

type IconMapping = { [key in Skill]: JSX.Element };

const mapping: IconMapping = {
  Nestjs: <NestJsIcon />,
  Nextjs: <NextJsIcon />,
  Angular: <AngularIcon />,
  Typescript: <TypeScriptIcon />,
  Javascript: <JavaScriptIcon />,
  CSS3: <CssIcon />,
  HTML5: <HtmlIcon />,
  Ionic: <IonicIcon />,
  React: <ReactIcon />,
};

const SkillIcon = ({ skill }: SkillIconProps) => {
  const found = mapping[skill];
  if (!found) return (<div>{skill}</div>);
  return (
    <>
      <div className="max-w-10">
        {found}
      </div>
      <div>{skill}</div>
    </>
  );
}

export default SkillIcon;
