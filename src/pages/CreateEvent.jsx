import { useEffect, useRef, useState } from "react";


export function CreateEvent() {
      const componentRef = useRef(null);
      const [isVisible, setIsVisible] = useState(false);

      useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        {
          threshold: 0.3,
        }
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
    <div ref={componentRef}>
      {/* background */}
    <div className={`transition-all duration-1000 ease-out bg-[#EEE1FF] ${
      isVisible
        ? "translate-x-0 opacity-100"
        : "translate-x-[-100px] opacity-0"
    }`}>

      {/* image */}
      <div className="w-1/2">
        
      </div>

      {/* content */}
      <div className=" w-1/2 flex flex-col items-start justify-start ">
        <h1 className="text-[30px]  ">Make your own Event </h1>
        <p>Create, customize, and share your event with your audience. Everything you need is in one place.</p>

        {/* Create event button */}
      <div className="flex justify-center items-center mt-12 mb-12
      group/button       
      text-[18px]
      font-medium
      transition-all
      duration-300
      ease-out
      mb-2
      hover:-translate-y-1
      hover:border-brand-primary/30
      hover:bg-brand-secondary[0.2]">
        <button
        className="
        flex 
        items-center
        justify-between
        rounded-xl
        border border-brand-primary
        xl:px-4 xl:py-3.5
        px-2 py-2 
        text-sm
        font-medium
        text-black
        transition
        hover:bg-brand-secondary[0.2]

        motion-card-button
        cursor-pointer
      " >
          Create Events  
      </button>
      </div>
      </div>
    </div>
    </div>
  )
}

export default CreateEvent;
