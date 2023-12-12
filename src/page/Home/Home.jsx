import Container from "../../components/ui/Container";
import Banner from "./Banner/Banner";
import MySkills from "./MySkills/MySkills";
import Statistic from "./Experiences/Experiences";
import Education from "./Education/Education";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <Container>
        <Helmet>
        <title>Sajjaduj's | Portfolio</title>
      </Helmet>
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
