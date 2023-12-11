import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { SiMongodb } from "react-icons/si";
import { FaReact, FaNodeJs  } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";



const SkillCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
                       <div className="card w-96 mb-9 glass">
  <div className="card-body">
    <FaReact className="text-7xl text-yellow-500" />
    <h2 className="text-2xl text-white">React.js</h2>
    <p className="text-slate-900">Being skilled in React is crucial as it is the front-end library used in MERN stack development. It allows for building interactive user interfaces efficiently.</p>
    <div className="card-actions justify-end">
      <button className="text-yellow-500 text-xl flex items-center gap-1">Learn More <MdOutlineKeyboardDoubleArrowRight  /></button>
    </div>
  </div>
</div>
                       <div className="card w-96 mb-9 glass">
  <div className="card-body">
    <SiMongodb className="text-7xl text-yellow-500"/>
    <h2 className="text-2xl text-white">MongoDB</h2>
    <p className="text-slate-900">Expertise in MongoDB is necessary as it is the NoSQL database used in the MERN stack. It allows for storing and retrieving data efficiently, making it an integral part of the development process.</p>
    <div className="card-actions justify-end">
      <button className="text-yellow-500 text-xl flex items-center gap-1">Learn More <MdOutlineKeyboardDoubleArrowRight  /></button>
    </div>
  </div>
</div>
                       <div className="card w-96 mb-9 glass">
  <div className="card-body">
    <FaNodeJs  className="text-7xl text-yellow-500"/>
    <h2 className="text-2xl text-white">Node.js</h2>
    <p className="text-slate-900">Knowledge of Node.js is important as it is the runtime environment used for server-side development in the MERN stack. It enables building scalable and high-performance web applications.</p>
    <div className="card-actions justify-end">
      <button className="text-yellow-500 text-xl flex items-center gap-1">Learn More <MdOutlineKeyboardDoubleArrowRight  /></button>
    </div>
  </div>
</div>
                       <div className="card w-96 mb-9 glass">
  <div className="card-body">
    <DiJavascript className="text-7xl text-yellow-500"/>
    <h2 className="text-2xl text-white">JavaScript</h2>
    <p className="text-slate-900">Proficiency in JavaScript is essential for MERN stack development as it is the primary language used for both front-end and back-end development.</p>
    <div className="card-actions justify-end">
      <button className="text-yellow-500 text-xl flex items-center gap-1">Learn More <MdOutlineKeyboardDoubleArrowRight  /></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SkillCard;