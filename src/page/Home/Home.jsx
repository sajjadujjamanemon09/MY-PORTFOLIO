import Container from "../../components/ui/Container";
import Banner from "./Banner/Banner";
import MySkills from "./MySkills/MySkills";
import Statistic from "./Experiences/Experiences";

const Home = () => {
  return (
    <Container>
		<Banner/>
    <div className="w-full my-20 border-t border-solid border-white"></div>
    <Statistic/>
    <div className="w-full my-20 border-t border-solid border-white"></div>
		<MySkills/>
    <div className="w-full my-20 border-t border-solid border-white"></div>
    </Container>
  );
};

export default Home;
