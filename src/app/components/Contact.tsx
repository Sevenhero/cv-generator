import { ContactData } from "../interfaces/userData";

const Contact = (props: ContactData) => {
  const { email, phone, street, zip, city, className } = props;
  const hasContactData = email || phone || street || zip || city;
  if (!hasContactData) {
    return null;
  }
  return (
    <>
      <div className={className}>
        <div className="flex flex-col">
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
      </div>
    </>
  );
};

export default Contact;
