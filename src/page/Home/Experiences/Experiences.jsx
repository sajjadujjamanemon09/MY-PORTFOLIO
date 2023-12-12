import { useTypewriter } from "react-simple-typewriter";

const Experiences = () => {

  const [text] = useTypewriter({
    words: ['9 million'],
    loop: 0
});
  const [text2] = useTypewriter({
    words: ['0+'],
    loop: 0
});

  const [text4] = useTypewriter({
    words: ['.1k'],
    loop: 0
});

    return (
        <div>
            <div className=" py-24 sm:py-32 my-16">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:max-w-none">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        My Experiences
        </h2>
        <p className="text-lg leading-8 text-gray-300">
          I can help you grow your audience and your business, no matter the
          size.
        </p>
      </div>
<div className="bg-yellow-400 rounded-2xl">
<dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col bg-white/5 p-12">
          <dt className="text-sm font-semibold leading-6 text-gray-700">
            Code written in 2023
          </dt>
          <dd className="order-first text-4xl font-semibold tracking-tight text-black">
           0{text}
          </dd>
        </div>
        <div className="flex flex-col bg-white/5 p-12">
          <dt className="text-sm font-semibold leading-6 text-gray-700">
            Website uploaded
          </dt>
          <dd className="order-first text-4xl font-semibold tracking-tight text-black">
            5{text2}
          </dd>
        </div>
        <div className="flex flex-col bg-white/5 p-12">
          <dt className="text-sm font-semibold leading-6 text-gray-700">
            working Hour Per Day
          </dt>
          <dd className="order-first text-4xl font-semibold tracking-tight text-black">
            8+
          </dd>
        </div>
        <div className="flex flex-col bg-white/5 p-12">
          <dt className="text-sm font-semibold leading-6 text-gray-700">
            answers
          </dt>
          <dd className="order-first text-4xl font-semibold tracking-tight text-black">
            2{text4}
          </dd>
        </div>
      </dl>
</div>
    </div>
  </div>
</div>

        </div>
    );
};

export default Experiences;