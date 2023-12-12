import ContactDetails from "./ContactDetails/ContactDetails";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  return (
    <div className="h-screen ">
      <h2 className="text-5xl text-gray-100 font-bold py-10 text-center">
        Reach me at
      </h2>
      <div className="w-1/3 mx-auto pb-10 border-t border-solid border-white"></div>
      <div className="flex items-center">
        <ContactDetails />
        <div className=" h-56 my-auto items-center justify-center  border-r border-solid border-white"></div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
