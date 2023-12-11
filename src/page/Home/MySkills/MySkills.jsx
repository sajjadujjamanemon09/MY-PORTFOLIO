import SkillCard from "./SkillCard";
import { MdArrowOutward } from "react-icons/md";

const MySkills = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-1/3 pt-20">
        <h2 className="text-5xl font-semibold text-white">My Key Skills</h2>
        <p className="pr-16 py-4 text-stone-200">Im skilled in both front-end and back-end web development, proficient in HTML, CSS, JavaScript, backend frameworks, and database management. They can build complete web applications from start to finish.</p>
        <button className="btn btn-outline my-6 flex border-yellow-300 text-yellow-300">VIEW ALL SKILLS<MdArrowOutward /></button>
      </div>
      <div className="w-2/3">
        <SkillCard />
      </div>
    </div>
  );
};

export default MySkills;
