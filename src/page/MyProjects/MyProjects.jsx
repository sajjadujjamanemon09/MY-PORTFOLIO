import { Helmet } from "react-helmet";
import AllProjects from "./AllProjects/AllProjects";



const MyProjects = () => {
    return (
        <div className="mx-3 md:mx-24">
              <Helmet>
        <title>Sajjaduj's | Projects</title>
      </Helmet>
           <div className="text-center my-10">
           <h2 className="text-white">Some Of My Recent Works</h2>
           <h1 className="text-gray-200 py-3 text-5xl font-bold">PROJECTS</h1>
           <div className="w-1/3 mx-auto pb-10 border-t border-solid border-white"></div>
           </div>
         <AllProjects/>
        </div>
    );
};

export default MyProjects;