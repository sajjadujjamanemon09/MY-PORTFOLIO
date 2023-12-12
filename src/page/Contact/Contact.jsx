import ContactDetails from "./ContactDetails/ContactDetails";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  return (
    <div className="py-5 md:py-24">
      <h2 className="text-5xl text-gray-100 font-bold text-center">
        Reach me at
      </h2>
        <p  className=" text-gray-100  text-center pt-2 pb-5"> I'm here to assist you! If you have any questions or need assistance, please feel free to reach out to
                me.</p>
      <div className="w-2/3 mx-auto pb-10 border-t border-solid border-white"></div>
      <div className="flex flex-col md:flex-row items-center">
        <ContactDetails />
        <div className="hidden md:block h-56 my-auto items-center justify-center  border-r border-solid border-yellow-400"></div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
