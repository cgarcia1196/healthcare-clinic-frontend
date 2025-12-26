import React from "react";

const About = () => {
  return (
    <div className="text-center text-2xl pt-10 text-gray-500">
      <div>
        <p>About Us</p>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-12">
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas in quis,
            sapiente illum iusto dicta nesciunt quibusdam nemo sequi soluta expedita enim
            accusamus doloremque autem, asperiores inventore vel! Quae, sequi?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa explicabo
            dignissimos optio eos perspiciatis natus magnam eveniet magni at, aliquid nemo
            voluptate quia facilis veritatis repellat, eaque eum fugiat dolore!
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, pariatur error
            blanditiis minus sunt possimus quod maxime, exercitationem nobis, ad a? Sit
            voluptatem quo sapiente. Voluptates repudiandae consectetur ipsum cum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
