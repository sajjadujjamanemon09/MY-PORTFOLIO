import { RiGraduationCapLine } from "react-icons/ri";
import { IoBookOutline } from "react-icons/io5";
import { LuSchool } from "react-icons/lu";


const Education = () => {
    return (
        <div>
            <section id="works" className="relative md:pb-20  py-10 sm:py-16">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-4xl text-white font-extrabold mx-auto md:text-6xl lg:text-5xl">
        My Education
      </h2>
      <p className="max-w-2xl mx-auto mt-4 text-base text-gray-300 leading-relaxed md:text-xl">
      My Educational Odyssey' is a compelling narrative of personal growth and the pursuit of excellence in learning
      </p>
    </div>
    <div className="relative mt-12 lg:mt-20">
      <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
        <img
          alt=""
          loading="lazy"
          width={1000}
          height={500}
          decoding="async"
          data-nimg={1}
          className="w-full"
          style={{ color: "transparent" }}
          src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
        />
      </div>
      <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
        <div>
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-yellow-400 border-2 border-gray-200 rounded-full shadow">
            <span className="text-3xl font-semibold text-gray-800"><RiGraduationCapLine/></span>
          </div>
          <h3 className="mt-6 text-2xl  text-white font-semibold leading-tight md:mt-10">
            Bachelor Degree
          </h3>
          <p className="mt-4 text-base  text-gray-300 md:text-lg">
            Rangpur Govt College, Rangpur. <br />
            - Bachelor of Business Administration. <br />
            - session: 2019-2020
          </p>
        </div>
        <div>
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-yellow-400 border-2 border-gray-200 rounded-full shadow">
            <span className="text-3xl font-semibold text-gray-800"><IoBookOutline/></span>
          </div>
          <h3 className="mt-6 text-2xl text-white font-semibold leading-tight md:mt-10">
            Higher Secondary Certificate
          </h3>
          <p className="mt-4 text-base text-gray-300 md:text-lg">
            RDA Laboratory School & College, Bogra.
            <br />- in science <br />
            - session: 2017-2018
          </p>
        </div>
        <div>
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-yellow-400 border-2 border-gray-200 rounded-full shadow">
            <span className="text-3xl  font-semibold text-gray-800"><LuSchool/></span>
          </div>
          <h3 className="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">
            Secondary School Certificate
          </h3>
          <p className="mt-4 text-base text-gray-300 md:text-lg">
            Hazi Boyen Uddin Public School & College Pirganj, Rangpur. <br />
            - in Science <br />
            - session: 2015-2016
          </p>
        </div>
      </div>
    </div>
  </div>
  <div
    className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
    style={{
      background:
        "radial-gradient(1.89deg, rgba(34, 78, 95, 0.4) -1000%, rgba(191, 227, 205, 0.26) 1500.74%, rgba(34, 140, 165, 0.41) 56.49%, rgba(28, 47, 99, 0.11) 1150.91%)"
    }}
  ></div>
</section>

        </div>
    );
};

export default Education;