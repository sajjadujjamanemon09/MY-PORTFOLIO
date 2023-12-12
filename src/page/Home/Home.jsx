import Container from "../../components/ui/Container";
import Banner from "./Banner/Banner";
import MySkills from "./MySkills/MySkills";
import Statistic from "./Experiences/Experiences";
import Education from "./Education/Education";

const Home = () => {
  return (
    <Container>
		<Banner/>
    <div className="w-full my-20 border-t border-solid border-white"></div>
    <Statistic/>
    <div className="w-full my-20 border-t border-solid border-white"></div>
		<MySkills/>
    <div className="w-full my-20 border-t border-solid border-white"></div>
    <Education/>
    </Container>
  );
};

export default Home;
