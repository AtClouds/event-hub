import { useEffect, useRef, useState } from "react";
import createHolder from "../../assets/createHolder.png";

export function CreateYourEvent() {
  const componentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      },
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div ref={componentRef} className="relative md:mt-10">
      {/* background */}
      <div
        className={`transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] bg-[#EEE1FF] 
          flex md:flex-row flex-col-reverse justify-center items-center mt-5 mb-10 px-5 ${
          isVisible
            ? "translate-x-0 translate-y-0 opacity-100"
            : "translate-x-[-60px] translate-y-[20px] scale-[0.98] opacity-0"
        }`}
      >
        {/* image */}
        <div className="xl:w-1/3 md:w-1/2 w-full">
          <img
            src={createHolder}
            className={` lg:w-[450px] w-[450px] object-right z-99 md:absolute bottom-0 xl:left-35 lg:left-20 md:left-18
        transition-all duration-700 ease-out delay-500 ${
          isVisible
            ? "translate-x-0 scale-100 opacity-100"
            : "translate-x-[-80px] scale-95 opacity-0"
        }
          `}
            alt=""
          />
        </div> 

        {/* content */}
        <div className={`md:w-1/2 w-full md:pl-30 lg:pl-5 flex flex-col md:items-start items-center justify-center lg:py-8 py-5 mb-3
         transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] delay-300 ${
          isVisible
            ? "translate-x-0 translate-y-0 opacity-100"
            : "translate-x-[-60px] translate-y-[20px] scale-[0.98] opacity-0"
        }`}>
          <h1 className="lg:text-[30px] text-[20px] font-bold">Make your own Event </h1>
          <p className="lg:w-[50%] md:w-[70%] w-full lg:text-[14px] text-[12px]">
            Create, customize, and share your event with your audience.
            Everything you need is in one place.
          </p>

          {/* Create event button */}
          <div
      className="flex justify-center items-center mt-2
      group/button       
      text-[18px]
      font-medium
      transition-all
      duration-300
      ease-out
      hover:-translate-y-1
      hover:border-brand-primary/30
      hover:bg-brand-secondary[0.2]"
          >
            <button
              className="
        flex 
        items-center
        justify-between
        rounded-[20px]
        bg-brand-secondary
        px-8 py-2 
        text-sm
        font-medium
        text-white
        transition
        hover:bg-brand-secondary[0.2]
        motion-card-button
        cursor-pointer
      "
            >
              Create Events
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


