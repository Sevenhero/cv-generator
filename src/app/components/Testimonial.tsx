import { Testimonial } from "../interfaces/userData";
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
  company,
  className = "",
  imgwidth: imgWidth = 80,
}: TestimonialWithClassName) => {
  return (
    <li
      className={`relative rounded-lg print:border-0 print:shadow-none border border-gray-200 bg-white p-5 sm:p-6 sm:mx-0 mx-6
                   shadow-sm hover:shadow-md transition-shadow duration-300 list-none ${className}`}
    >
      {/* Quote icon + Testimonial text */}
      <blockquote className="text-sm text-gray-600 leading-relaxed italic">
        <span className="text-3xl font-serif text-blue-400/40 select-none leading-none mr-1">
          "
        </span>
        {testimonial}
      </blockquote>
      {company && <span className="text-sm text-gray-600 leading-relaxed italic">- {company}</span>}

      {/* Author */}
      <div className="mt-4 flex items-center gap-3 border-t border-gray-100 pt-4">
        {imgName ? (
          <Image
            className="rounded-full ring-2 ring-gray-100 object-cover"
            width={imgWidth}
            height={imgWidth}
            src={imgName}
            alt={name}
          />
        ) : (
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full
                       bg-blue-50 text-sm font-bold text-blue-600"
          >
            {name.charAt(0)}
          </span>
        )}
        <div className="min-w-0">
          <p className="text-sm font-semibold text-gray-900 truncate">{name}</p>
          {jobDescription && (
            <p className="text-xs text-gray-500 leading-snug">{jobDescription}</p>
          )}
        </div>
      </div>
    </li>
  );
};

export default TestimonialComponent;