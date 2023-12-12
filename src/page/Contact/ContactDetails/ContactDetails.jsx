import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

const ContactDetails = () => {


        const emailAddress = "sajjaduj.jaman09@gmail.com";
      
        const sendMail = () => {
          window.location.href = `mailto:${emailAddress}`;
        };
      

  return (
    <div className="w-1/2 flex justify-center">
    <div>
    <div className="flex">
        <div>
          <IoLocationOutline className="text-5xl mx-auto bg-white rounded-full p-3 mr-5" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-yellow-500">Address</h2>
          <h3 className="text-gray-300">New Adorsho Para,Shapla Chattar</h3>
          <h3 className="text-gray-300">Rangpur City</h3>
          <h3 className="text-gray-300">5400</h3>
        </div>
      </div>
    <div className="flex py-7">
        <div>
          <MdOutlinePhoneInTalk className="text-5xl mx-auto bg-white rounded-full p-3 mr-5" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-yellow-500">Phone</h2>
          <h3 className="text-gray-300">+8801797936736</h3>
        </div>
      </div>
    <div className="flex">
        <div>
          <MdOutlineEmail className="text-5xl mx-auto bg-white rounded-full p-3 mr-5" />
        </div>
        <div>
      <h2 className="text-xl font-semibold text-yellow-500">Email</h2>
      <a
        href={`mailto:${emailAddress}`}
        onClick={sendMail}
        className="text-gray-300 hover:text-blue-500"
      >
        {emailAddress}
      </a>
    </div>
      </div>
    </div>
    </div>
  );
};

export default ContactDetails;
