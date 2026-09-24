import { Navbar } from "../landing-layout/NavBar";
import { mockEvents } from "../landing-data/mockEvents";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { AnimatedTitle } from "../Animmation/AnimatedTitle"


export function Hero() {

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);


  return (
    <div className="">
      {/*Carousel background*/}
       <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {mockEvents.map((event) => (
            <div className="relative min-w-full xl:h-[80vh] lg:h-[70vh]  h-[80vh] md:h-[60vh] " key={event.id}>
              {/* Background */}
              <img src={event.banner} className="absolute inset-0 w-full h-full object-cover" />
               {/* Gradient overlay*/}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F5167E]/92  to-[#3D37F1]/92" />
              {/*NavBar*/}
              <div className="absolute inset-x-0 top-0 z-10"> 
                <Navbar /> 
                </div>
                {/*Title*/}
                <div className="absolute md:top-[35%] top-[25%]  left-0 right-0 flex flex-col items-center justify-center text-center text-white text-[45px] xl:text-[50px] p-4">            
              
                <AnimatedTitle  text={event.title} />
                {/*Description*/}
                <div className=" mt-1 flex items-center justify-center  text-white text-[18px] xl:text-[20px] font-regular leading-none  px-5">
                  <p className="lg:w-[50%] md:w-[60%]">{event.description.slice(0, 100) + "..."}</p>
                </div>

                {/*Button*/}
                <div className="space-x-4">
                  {/*Ticket*/}
                  <button className="bg-brand-secondary xl:py-3 xl:px-8 xl:rounded-3xl py-2 px-5 rounded-[17px] text-white text-[16px] transition-all duration-300 ease-out hover:-translate-y-1 active:translate-y-0 hover:brightness-110  cursor-pointer ">
                    Get Ticket
                  </button>
                  {/*Learn*/}
                  <button className="bg-transparent border border-white xl:py-3 xl:px-8 xl:rounded-3xl py-2 px-5 rounded-[17px] text-white text-[16px] transition-all duration-300 ease-out hover:-translate-y-1 active:translate-y-0 hover:brightness-110  cursor-pointer">
                    Learn More
                  </button>
                </div>

                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
