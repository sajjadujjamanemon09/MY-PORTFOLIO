import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const TechProjects = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div className="mx-7 md:mx-20 py-16 flex flex-col md:flex-row items-center gap-16">
      <div className="w-full md:w-1/2">
        <AutoplaySlider
          className="rounded-xl overflow-hidden"
          play={true}
          cancelOnInteraction={false}
          interval={1000}
        >
          <div data-src="https://i.ibb.co/1nw61jt/Screenshot-2023-12-11-213643.png" />
          <div
            data-src="https://i.ibb.co/YfH9j6T/Screenshot-2023-12-11-213819.png
"
          />
          <div
            data-src="https://i.ibb.co/9T7mY86/Screenshot-2023-12-11-213850.png
"
          />
          <div
            data-src="https://i.ibb.co/7GNSWQn/Screenshot-2023-12-11-213928.png
"
          />
          <div
            data-src="https://i.ibb.co/6XKK5ZD/Screenshot-2023-12-11-213959.png
"
          />
          <div
            data-src="https://i.ibb.co/dB0G6jx/Screenshot-2023-12-11-214029.png
"
          />
          <div
            data-src="https://i.ibb.co/3vL0tJD/Screenshot-2023-12-11-214054.png
"
          />
          <div data-src="https://i.ibb.co/Kxr9qY4/Screenshot-2023-12-11-214114.png" />
        </AutoplaySlider>
      </div>
      <div className="md:w-1/2">
        <h1 className=" text-yellow-300">Name:</h1>
        <h2 className="text-4xl font-semibold text-white py-1">
          Tech Fusion X
        </h2>
        <p className="text-gray-200 text-lg">- A Tech Product Shop</p>
        <h1 className=" text-yellow-300 pt-4 pb-2">Features:</h1>
        <ul className="list-disc pl-5 list-inside space-y-2 text-gray-200">
          <li>
            Smart Product Recommendations:Implement an intelligent system
            suggesting products based on user behavior and preferences.
          </li>
          <li>
            Virtual Showroom:Create an interactive 3D environment for users to
            explore products in a virtual showroom.
          </li>
          <li>
            Augmented Reality (AR) Try-On:Allow users to virtually try products
            like phones or headphones using AR technology.
          </li>
          <li>
            Community Reviews:Foster a community-driven review section where
            users share experiences, tips, and photos.
          </li>
          <li>
            Personalized Profiles:Enable user profiles for order history,
            preferences, wishlists, and personalized recommendations.
          </li>
          <li>
            Live Chat Support:Provide real-time customer support through a live
            chat feature for instant assistance.
          </li>
          <li>
            Gamified Loyalty Program:Introduce a gamified loyalty system
            rewarding users for purchases, reviews, and engagement.
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
                href="https://assignment-10-8538b.web.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                🔗Project Live Link
              </a>
            </li>
            <li>
              <a
                href="https://github.com/sajjadujjamanemon09/Tech-Fusion-clientA10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                🔗GitHub Client Link
              </a>
            </li>
            <li>
              <a
                href="https://github.com/sajjadujjamanemon09/Tech-Fusion-serverA10"
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
    </div>
  );
};

export default TechProjects;
