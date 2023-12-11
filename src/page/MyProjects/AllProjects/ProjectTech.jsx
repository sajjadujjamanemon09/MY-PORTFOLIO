
import { FaExternalLinkAlt, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { Link } from "react-router-dom";


const ProjectTech = () => {
    return (
        <Link to="/techProject">
                        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
  <div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
    <a href="#">
      <img
        className="w-full"
        src="https://i.ibb.co/59c0PB0/Screenshot-2023-12-11-225035.png"
        alt="Sunset in the mountains"
      />
    </a>
    <div className="relative rounded-xl -mt-16 px-10 pt-5 pb-8 bg-white m-10">
      <a
        href="#"
        className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
      >
       Tech Fusion X
      </a>
      <p className="text-gray-500 text-sm">
      - A Tech Product Shop
      </p>
      <p className="my-1 text-gray-600 text-xs">
       - Technology Use
       <div className="flex">
       <SiTailwindcss className="mx-2 my-2 text-xl text-blue-600"/>
       <DiJavascript className="mr-2 my-2 text-xl text-red-700"/>
       <FaReact className=" my-2 text-xl text-blue-400"/>
       </div>
      </p>
      
      <p className="font-semibold flex items-center gap-1 text-blue-700">Click For More Details<FaExternalLinkAlt /></p>
    </div>
  </div>
</div>
        </Link>
    );
};

export default ProjectTech;
