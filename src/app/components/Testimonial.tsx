import { Testimonial } from "../interfaces/userData";

interface TestimonialCardProps extends Testimonial {
  className?: string;
  imgwidth?: number;
}

const getInitials = (name: string): string => {
  const parts = name.split(" ").filter(Boolean);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return parts.slice(0, 2).map(p => p.charAt(0)).join("").toUpperCase();
};

const TestimonialCard = ({
  name,
  testimonial,
  jobDescription,
  imgName,
  company,
  className = "",
  imgwidth: imgWidth = 48,
}: TestimonialCardProps) => {
  const hasImage = !!(imgName && name);

  return (
    <li
      className={`relative rounded-xl bg-white p-5 sm:p-6 shadow-sm hover:shadow-md 
                   transition-shadow duration-200 list-none avoid-break
                   print:shadow-none print:border print:border-gray-300 print:p-4 ${className}`}
    >
      {/* Quote icon */}
      <blockquote className="text-sm text-gray-600 leading-relaxed italic">
        <span className="absolute top-4 left-5 text-4xl font-serif text-blue-200 select-none leading-none pointer-events-none" aria-hidden="true">"</span>
        <span className="block pl-7 pt-1">{testimonial}</span>
      </blockquote>

      {company && (
        <cite className="mt-2 block text-xs font-medium text-gray-500 not-italic print:text-gray-600">
          — {company}
        </cite>
      )}

      {/* Author */}
      <div className="mt-4 flex items-center gap-3 border-t border-gray-100 pt-4 print:border-gray-200">
        {hasImage ? (
          <img
            className="rounded-full ring-2 ring-gray-100 object-cover"
            width={imgWidth}
            height={imgWidth}
            src={imgName}
            alt={`${name}'s portrait`}
            loading="lazy"
          />
        ) : (
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full ring-2 ring-gray-100 bg-linear-to-br from-blue-50 to-indigo-100 text-sm font-bold text-primary"
            aria-label={name}
          >
            {getInitials(name)}
          </span>
        )}
        <div className="min-w-0">
          <p className="sm:text-sm text-xs font-semibold text-gray-900 truncate">{name}</p>
          {jobDescription && (
            <p className="sm:text-xs text-[11px] text-gray-500 leading-snug line-clamp-2 print:line-clamp-none">
              {jobDescription}
            </p>
          )}
        </div>
      </div>
    </li>
  );
};

export default TestimonialCard;
