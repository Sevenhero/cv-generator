import { Mail, MapPin, Phone } from "lucide-react";

import { ContactData } from "../interfaces/userData";

const Contact = ({ email, phone, street, city, zip }: ContactData) => {
  const hasContactData = email || phone || (street && city);
  
  if (!hasContactData) {
    return null;
  }

  return (
    <div className="space-y-2 print:space-y-1.5">
      {email && (
        <a 
          href={`mailto:${email}`}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer print:text-gray-700"
        >
          <Mail className="h-4 w-4 shrink-0 text-gray-400" />
          <span>{email}</span>
        </a>
      )}
      
      {phone && (
        <a 
          href={`tel:${phone}`}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer print:text-gray-700"
        >
          <Phone className="h-4 w-4 shrink-0 text-gray-400" />
          <span>{phone}</span>
        </a>
      )}
      
      {(street || city) && (
        <div className="flex items-start mb-2 gap-2 text-sm text-gray-600 print:text-gray-700">
          <MapPin className="h-4 w-4 shrink-0 text-gray-400 mt-1" />
          <span>
            {street && <>{street}<br /></>}
            {zip && <>{zip} <>&nbsp;</></>}
            {city}
          </span>
        </div>
      )}
    </div>
  );
};

export default Contact;
