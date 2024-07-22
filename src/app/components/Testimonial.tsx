import { Testimonial } from "../interfaces/userData";
import ScaledImage from "./ScaledImages";
import Image from "next/image";

interface TestimonialWithClassName extends Testimonial {
  className?: string;
  imgwidth?: number;
}

const TestimonialComponent = ({
  name,
  testimonial,
  jobDescription,
  imgName,
  className = "",
  imgwidth: imgWidth = 128,
}: TestimonialWithClassName) => {
  return (
    <li className={"flex mb-8" + " " + className}>
      <div className="flex flex-col min-w-60 items-center flex-wrap">
        {imgName && (
          <Image
            className="rounded-full pb-2"
            width={imgWidth}
            height={imgWidth}
            src={imgName}
            alt={imgName}
          />
        )}
        <h3 className="font-bold">{name}</h3>
        <span className="text-center whitespace-pre-line">
          {jobDescription}
        </span>
      </div>
      <p className="whitespace-pre-line italic">“{testimonial}”</p>
    </li>
  );
};

export default TestimonialComponent;
