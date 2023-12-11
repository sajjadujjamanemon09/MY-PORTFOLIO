
const Banner = () => {
    return (
        <div>
                  <section className="mt-2 md:mt-20 dark:text-gray-100">
        <div className="container flex flex-col-reverse justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-3xl text-white font-semibold">
              Hi, Meet {" "}
              <span className="text-5xl font-bold text-red-500">Sajjad</span>
            </h1>
            <p className="mt-6 text-slate-300 mb-8 font-thin sm:mb-12">
              I am a Front-End Developer passionate about the MERN stack. With
              expertise in HTML, CSS, and JavaScript, I specialize in creating
              seamless web experiences. Experienced in React, Node.js, Express,
              and MongoDB, I love building engaging full-stack applications.
              Lets collaborate on crafting digital solutions!
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
             <button className="btn border-none bg-yellow-300">See My Work</button>
             
            </div>
          </div>

          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://i.ibb.co/YtKz5s7/Untitled-design-3.jpg"
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