import React from "react";

function Hero() {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/* overley */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/70 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl ">
            The <span className="text-orange-600">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl ">
             <span className="text-orange-600">Foods</span> Delivered
          </h1>
        </div>
        <img
        className="w-full max-h-[500px] object-fit"
          src="https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
