import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const NewsProject = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div className="pb-10 flex flex-col md:flex-row items-center gap-16">
      <div className="w-full md:w-1/2">
        <AutoplaySlider
          className="rounded-xl overflow-hidden"
          play={true}
          cancelOnInteraction={false}
          interval={1000}
        >
          <div data-src="https://i.ibb.co/TwQQZLw/Screenshot-2023-12-11-183737.png" />
          <div data-src="https://i.ibb.co/Qb22C3t/Screenshot-2023-12-11-183842.png" />
          <div data-src="https://i.ibb.co/xHbWgMx/Screenshot-2023-12-11-183919.png" />
          <div data-src="https://i.ibb.co/7Q7xT29/Screenshot-2023-12-11-183954.png" />
          <div data-src="https://i.ibb.co/Gxmy4SL/Screenshot-2023-12-11-184017.png" />
          <div data-src="https://i.ibb.co/0CPsJRb/Screenshot-2023-12-11-184045.png" />
          <div data-src="https://i.ibb.co/8z0PN9y/Screenshot-2023-12-11-184136.png" />
          <div data-src="https://i.ibb.co/F5gMPhW/Screenshot-2023-12-11-184202.png" />
          <div data-src="https://i.ibb.co/G9GCJ4D/Screenshot-2023-12-11-184308.png" />
          <div data-src="https://i.ibb.co/hZMh5nh/Screenshot-2023-12-11-184350.png" />
          <div data-src="https://i.ibb.co/XkKNpG9/Screenshot-2023-12-11-184442.png" />
          <div data-src="https://i.ibb.co/dgk9bdY/Screenshot-2023-12-11-184512.png" />
          <div data-src="https://i.ibb.co/f81CwD7/Screenshot-2023-12-11-184557.png" />
        </AutoplaySlider>
      </div>
      <div className="md:w-1/2">
        <h1 className=" text-yellow-300">Name:</h1>
        <h2 className="text-4xl font-semibold text-white py-1">
          News<span className="text-red-500">12</span>Paper
        </h2>
        <p className="text-gray-200 text-lg">- A Online NewsPaper Website</p>
        <h1 className=" text-yellow-300 pt-4 pb-2">Features:</h1>
        <ul className="list-disc pl-5 list-inside space-y-2 text-gray-200">
          <li>
            This website is comprised of two panels: one for users and the other
            for administrators.
          </li>
          <li>
            Trending Articles:Showcase popular articles prominently on the
            homepage.
          </li>
          <li>
            Publisher Management:Admin panel for adding, editing, and removing
            publishers.
          </li>
          <li>
            Subscription Plans:Differentiate free and premium features clearly.
          </li>
          <li>
            Article Submission Form:User-friendly form for seamless article
            submissions.
          </li>
          <li>
            Article Filtering/Search:Improve user experience with robust
            filtering and search.
          </li>
          <li>
            Infinite Scrolling:Enhance browsing with smooth, endless content
            flow.
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
       <li><a href="https://assignment-12-c8954.web.app" target="_blank" rel="noopener noreferrer" className="text-blue-500">🔗Project Live Link</a></li>
        <li><a href="https://github.com/sajjadujjamanemon09/News12Paper-clientA12" target="_blank" rel="noopener noreferrer" className="text-blue-500">🔗GitHub Client Link</a></li>
        <li><a href="https://github.com/sajjadujjamanemon09/News12Paper-serverA12" target="_blank" rel="noopener noreferrer" className="text-blue-500">🔗GitHub Server Link</a></li>
       </ul>
       </div>
      </div>

    </div>
  );
};

export default NewsProject;
