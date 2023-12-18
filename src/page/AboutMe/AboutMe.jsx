import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";
import banner from "../../assets/BannerImage/Secondary.png";

const AboutMe = () => {
  const [text] = useTypewriter({
    words: ["Sajjaduj Jaman,"],
    loop: 0,
    typeSpeed: 400,
  });
  return (
    <div>
      <Helmet>
        <title>Sajjaduj's | About</title>
      </Helmet>
      <h2 className="text-4xl text-center text-gray-100 font-semibold py-6">
        About Myself
      </h2>
      <div className="w-1/3 mx-auto pb-10 border-t border-solid border-white"></div>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="w-2/3 md:px-28">
          <div>
            <h2 className="text-3xl font-semibold text-black">
              Greetings,
              <h2>I am <span className="text-yellow-400">{text}_</span></h2>
            </h2>
            <div className="container mx-auto py-8">
              <div className="text-lg leading-relaxed mb-14">
                <p className="  text-gray-200">
                  -- My professional journey in the development field spans
                  several months, where I have made significant strides.
                  Presently, I hold the position of a Junior Developer,
                  showcasing my commitment to continuous growth. I have evolved
                  into a Full Stack Developer, with aspirations to further
                  specialize as a MERN Stack Developer in the future. My
                  enthusiasm for staying abreast of emerging technologies
                  reflects my commitment to ongoing learning. In the realm of
                  front-end development, I possess proficiency in React, HTML,
                  and JavaScript, incorporating the latest features and industry
                  best practices. On the back-end, my expertise extends to
                  MongoDB, Node.js, and Express, ensuring a comprehensive skill
                  set for full-stack development.
                </p>

                <p className="py-6 text-yellow-600">
                  As I actively work towards refining my capabilities, I am
                  dedicated to addressing and overcoming any weaknesses. I
                  recognize and am diligently working to eradicate any tendency
                  to leave tasks unfinished, emphasizing a commitment to
                  thorough and timely completion. Motivated by a passion for
                  precision and a determination to excel, I approach each task
                  with meticulous attention.
                </p>

                <p className=" text-gray-200">
                  My professional journey and skill set are encapsulated in my
                  portfolio, where you can gain further insights into my
                  experiences and projects. I welcome you to explore my
                  portfolio for a more comprehensive understanding of my
                  capabilities.
                </p>

                <p className="py-6 text-gray-200">
                  A dedicated individual with a background rooted in Rangpur
                  city. My academic journey includes the successful completion
                  of my SSC in Pirganj Rangpur, followed by higher studies at
                  Hazi-Boyen-Uddin Public School. For my HSC I Studied Rural
                  Development Academy Laboratory School and College in Bogura..
                  Subsequently, I pursued my Honors in Business Administration
                  with a focus on the Accounting department at Rangpur Govt
                  College, Rangpur.
                </p>

                <p className="text-gray-200">
                  Thank you for taking the time to learn about my background and
                  aspirations. I look forward to the opportunity to contribute
                  my skills and knowledge in a meaningful way.
                </p>
              </div>
              <Link to="/contact">
                {" "}
                <div>
                  <a className="relative inline-flex items-center justify-start px-5 py-2 overflow-hidden font-medium transition-all bg-[#323232] btn border-none hover:bg-white group">
                    <span className="w-60 h-48 rounded rotate-[-50deg] bg-[#fce626] absolute bottom-0 left-0 -translate-x-full ease-in-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
                    <a className="relative w-full text-left text-white transition-colors duration-700 ease-in-out group-hover:text-black font-semibold">
                      Hire Me
                    </a>
                  </a>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos="zoom-in-down"
          className="w-1/3 md:pl-16 py-5"
        >
          <img
            className="rounded-full w-80"
            src={banner}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
