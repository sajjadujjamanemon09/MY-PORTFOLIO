
import HomeProjects from "./HomeProjects/HomeProjects";
import NewsProject from "./NewsProject/NewsProject";


const MyProjects = () => {
    return (
        <div className="mx-3 md:mx-24">
           <div className="text-center my-10">
           <h2 className="text-white">Some Of My Recent Works</h2>
           <h1 className="text-gray-200 py-3 text-5xl font-bold">PROJECTS</h1>
           <div className="w-1/3 mx-auto pb-10 border-t border-solid border-white"></div>
           </div>
            <NewsProject/>
            <div className="w-full my-20 border-t border-solid border-white"></div>
            <HomeProjects/>
        </div>
    );
};

export default MyProjects;