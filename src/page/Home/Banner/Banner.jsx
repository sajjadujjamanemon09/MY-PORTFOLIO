import { FaDownload } from "react-icons/fa";
import pdf from "../../../../public/Md Sajjaduj Jamans Resume.pdf";
import { useTypewriter } from "react-simple-typewriter";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Sajjaduj"],
    loop: 0,
    typeSpeed: 400,
  });

  return (
    <div>
      <section className="mt-2 md:mt-20 dark:text-gray-100">
        <div className="container flex flex-col-reverse justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-3xl text-white font-semibold">
              Hi, Meet{" "}
              <span className="text-5xl font-bold text-yellow-500">{text}_</span>
            </h1>
            <p className="mt-6 text-slate-300 mb-8 font-thin sm:mb-12">
              I am a Front-End Developer passionate about the MERN stack. With
              expertise in HTML, CSS, and JavaScript, I specialize in creating
              seamless web experiences. Experienced in React, Node.js, Express,
              and MongoDB, I love building engaging full-stack applications.
              Lets collaborate on crafting digital solutions!
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a href={pdf} download="Sajjaduj Jaman Resume.pdf">
                {" "}
                <div>
                  <a className="relative inline-flex items-center justify-start px-5 py-2 overflow-hidden font-medium transition-all bg-[#323232] btn border-none hover:bg-white group">
                    <span className="w-60 h-48 rounded rotate-[-50deg] bg-[#fce626] absolute bottom-0 left-0 -translate-x-full ease-in-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
                    <a className="relative flex gap-2 font-medium w-full text-left text-white transition-colors duration-700 ease-in-out group-hover:text-black">
                      <FaDownload></FaDownload>RESUME
                    </a>
                  </a>
                </div>
              </a>
            </div>
          </div>

          <div
            data-aos-easing="linear"
            data-aos-duration="1500"
            data-aos="zoom-in-down"
            className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          >
            <img
              src='https://iili.io/JA2S8rv.jpg'
              alt=""
              className="object-contain rounded-full h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
