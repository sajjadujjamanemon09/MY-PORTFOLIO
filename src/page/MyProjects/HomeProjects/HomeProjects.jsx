/* eslint-disable react/no-unescaped-entities */
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { Helmet } from "react-helmet";

const HomeProjects = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div className="mx-7 md:mx-20 py-20 flex flex-col-reverse md:flex-row items-center gap-16">
      <Helmet>
        <title>Sajjaduj's | HomeProject</title>
      </Helmet>
      <div className="md:w-1/2">
        <h1 className=" text-yellow-300">Name:</h1>
        <h2 className="text-4xl font-semibold text-white py-1">HomeSwap Hub</h2>
        <p className="text-gray-200 text-lg">- A Online Home Service Website</p>
        <h1 className=" text-yellow-300 pt-4 pb-2">Features:</h1>
        <ul className="list-disc pl-5 list-inside space-y-2 text-gray-200">
          <li>
            Service Bundles:Introduce discounted service bundles/packages.
          </li>
          <li>
            Instant Messaging:Real-time chat between users and service
            providers.
          </li>
          <li>
            Dynamic Pricing:Allow service providers to offer dynamic pricing.
          </li>
          <li>
            Service Customization:Specify preferences or additional
            requirements.
          </li>
          <li>
            Provider Portfolios:Service providers showcase their work through
            portfolios
          </li>
          <li>
            Availability Calendar:Users can easily schedule services based on
            provider availability.
          </li>
          <li>
            Interactive Ratings and Reviews:Users can rate and review services.
          </li>
        </ul>
        <h1 className=" text-yellow-300 pt-4 pb-2">Technologies:</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <ul className="list-disc space-y-1 pl-5 list-inside text-gray-200">
            <li>HTML5</li>
            <li>CSS</li>
            <li>ES6</li>
          </ul>
          <ul className="list-disc pl-5 list-inside text-gray-200">
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express</li>
          </ul>
          <ul className="list-disc pl-5 list-inside text-gray-200">
            <li>Firebase</li>
            <li>Vercel</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div>
          <h1 className=" text-yellow-300 pt-4 pb-2">Links:</h1>
          <ul className=" pl-5 list-inside flex items-center gap-6 font-semibold text-xl text-gray-200">
            <li>
              <a
                href="https://assignment-11-abaf2.web.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                🔗Project Live Link
              </a>
            </li>
            <li>
              <a
                href="https://github.com/sajjadujjamanemon09/HomeSwap-Hub-clientA11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                🔗GitHub Client Link
              </a>
            </li>
            <li>
              <a
                href="https://github.com/sajjadujjamanemon09/HomeSwap-Hub-serverA11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                🔗GitHub Server Link
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <AutoplaySlider
          className="rounded-xl overflow-hidden"
          play={true}
          cancelOnInteraction={false}
          interval={1000}
        >
          <div data-src="https://iili.io/JAFt4un.png" />
          <div data-src="  https://iili.io/JAoSAil.png" />
          <div data-src="https://iili.io/JAoScJ9.png" />
          <div data-src="https://iili.io/JAoS7lS.png" />
          <div data-src="https://iili.io/JAoSuV4.png" />
          <div data-src="https://iili.io/JAoSYU7.png"/>
          <div data-src="https://iili.io/JAoS0Ou.png" />
          <div data-src="https://iili.io/JAoS1Db.png" />
          <div data-src="https://iili.io/JAogwwg.png" />
        </AutoplaySlider>
      </div>
    </div>
  );
};

export default HomeProjects;
