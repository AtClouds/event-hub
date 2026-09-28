import { Navbar } from "../landing-layout/NavBar";
import { mockEvents } from "../landing-data/mockEvents";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { AnimatedTitle } from "../Landing-page-UI/AnimatedTitle"
import { Link } from "react-router-dom";

export function Hero() {

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);


  return (
    <div className="relative">
       {/*NavBar*/}
        <div className="absolute inset-x-0 top-0 z-20"> 
          <Navbar /> 
        </div>

      {/*Carousel background*/}
       <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {mockEvents.map((event) => (
            <div className="relative min-w-full min-h-[620px] md:min-h-[600px] lg:min-h-[650px] " key={event.id}>
              {/* Background */}
              <img src={event.banner} className="absolute inset-0 w-full h-full object-cover" />
               {/* Gradient overlay*/}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F5167E]/72  to-[#3D37F1]/72 backdrop-blur-[5px]" />
                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center px-4 pt-16 text-center text-white">            
                    <div className="flex flex-col items-center">
                        {/*Title*/}
                        <AnimatedTitle  text={event.title} />
                        {/*Description*/}
                        <div className="mt-4 flex justify-center px-5">
                          <p className="max-w-2xl text-base md:text-lg xl:text-xl leading-relaxed">
                            {event.description}
                          </p>
                      </div>

                        {/*Button*/}
                        <div className="mt-6 flex flex-wrap justify-center gap-4">
                          {/*Ticket*/}
                          <button className="bg-brand-secondary xl:py-3 xl:px-8 xl:rounded-3xl py-2 px-5 rounded-[17px] text-white text-[16px] transition-all duration-300 ease-out hover:-translate-y-1 active:translate-y-0 hover:brightness-110  cursor-pointer ">
                            Get Ticket
                          </button>
                          {/*Learn*/}
                          <Link to={`/events/${event.id}`}>
                          <button className="bg-transparent border border-white xl:py-3 xl:px-8 xl:rounded-3xl py-2 px-5 rounded-[17px] text-white text-[16px] transition-all duration-300 ease-out hover:-translate-y-1 active:translate-y-0 hover:brightness-110  cursor-pointer">
                            Learn More
                          </button>
                          </Link>
                        </div>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
