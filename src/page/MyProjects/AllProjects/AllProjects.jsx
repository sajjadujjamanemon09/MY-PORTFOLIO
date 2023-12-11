import ProjectHome from "./ProjectHome";
import ProjectNews from "./ProjectNews";
import ProjectTech from "./ProjectTech";

const AllProjects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <ProjectNews />
      <ProjectHome />
      <ProjectTech />
    </div>
  );
};

export default AllProjects;
