import React from "react";
import mainDesktopImage from "../assets/images/image-web-3-desktop.jpg";
import mainMobileImage from "../assets/images/image-web-3-mobile.jpg";

function MainSection() {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex flex-col justify-between items-start lg:flex-row lg:gap-8 gap-4">
        <div className="lg:w-[68%] w-full mb-10">
          <div className="lg:mb-8 mb-6">
            <picture>
              <source media="(min-width:768px)" srcSet={mainDesktopImage} />
              <img src={mainMobileImage} alt="Flowers" />
            </picture>
          </div>
          <div className="flex flex-col item-center lg:flex-row lg:justify-between">
            <div className="">
              <h1 className="text-skin-dark xl:text-[4.5rem] lg:text-6xl text-[2.2rem] font-bold lg:mb-0 mb-3 leading-8 xl:w-[430px] lg:w-[315px] w-[260px]">
                The Bright Future of Web 3.0?
              </h1>
            </div>
            <div className="lg:w-3/6 w-full lg:pl-6 lg:pr-7">
              <p className="text-skin-muted">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <a
                href="#"
                type="button"
                className="bg-skin-primary px-10 py-4 mt-8 text-skin-white tracking-[5px] uppercase font-medium hover:bg-skin-dark transition-all ease-in-out duration-100"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-[30%] w-full bg-skin-dark px-5 pt-12 pb-14">
          <h2 className="lg:text-5xl text-3xl text-skin-primary font-bold">
            New
          </h2>
          <ul>
            <li className="lg:py-10 py-6 border-b">
              <h4 className="text-[1.3rem] font-medium text-skin-white">
                Hydrogen VS Electric Cars
              </h4>
              <p className="text-skin-white text-1xl">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </li>

            <li className="lg:py-10 py-6 border-b">
              <h4 className="text-[1.3rem] font-medium text-skin-white">
                The Downsides of AI Artistry
              </h4>
              <p className="text-skin-white text-1xl">
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </li>
            <li className="lg:py-10 py-6 border-b">
              <h4 className="text-[1.3rem] font-medium text-skin-white">
                Is VC Funding Drying Up?
              </h4>
              <p className="text-skin-white text-1xl">
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
