import { ContactData } from "../interfaces/userData";

const Contact = (props: ContactData) => {
  const { email, phone, street, zip, city } = props;
  const hasContactData = email || phone || street || zip || city;
  if (!hasContactData) {
    return null;
  }
  return (
    <>
      <hr className="my-4 border-t border-gray-300" />
      <div className="flex flex-col">
        <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
          Contact
        </span>
        <div className="flex flex-col">
          {email && (
            <a className="hover:text-green-400" href={`mailto:${email}`}>
              {email}
            </a>
          )}
          {phone && (
            <a className="hover:text-green-400" href={`tel:${phone}`}>
              {phone}
            </a>
          )}
          {street && <span>{street}</span>}
          <div>
            {zip && <span>{zip}</span>} {city && <span>{city}</span>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
