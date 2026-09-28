import { useParams } from "react-router-dom";
import { mockEvents } from "../landing-data/mockEvents"
import { Navbar } from "../landing-layout/NavBar"


export function Hero() {

    const { id } = useParams();

    const event = mockEvents.find(
    (event) => event.id === Number(id)
    );


  return (
    <div className="relative">
       {/*NavBar*/}
        <div className="absolute inset-x-0 top-0 z-20"> 
          <Navbar /> 
        </div>

      {/*Carousel background*/}
       <div className="overflow-hidden" >
        <div className="flex">
            <div className="relative min-w-full min-h-[620px] md:min-h-[600px] lg:min-h-[650px] " key={event.id}>
              {/* Background */}
              <img src={event.banner} className="absolute inset-0 w-full h-full object-cover" />
               {/* Gradient overlay*/}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F5167E]/72  to-[#3D37F1]/72 backdrop-blur-[5px]" />
               
                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center px-4 w-full">            
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:w-[90%] w-full md:w-[80%] ">
                            {/* Main Flyer design */}
                            <div>

                            </div>
                            {/* Content */}
                            <div className="flex flex-col md:justify-start md:items-start justify-center items-center">
                                {/* Event type */}
                                <p className="bg-white/20 py-2 px-4 rounded-md text-white text-[12px]">
                                    {event.type}
                                </p>
                                 {/*Title*/}
                                <h1 className="text-white lg:text-[50px] md:text-[30px] text-[35px] font-bold leading-tight text-center md:text-start">
                                    {event.title}
                                </h1>
                                {/* Date and Time */}
                                <div className="mt-4 flex justify-center px-5">
                                <p className="text-[14px] text-white">
                                   {event.date}
                                   <span>
                                    . {event.openTime}
                                   </span>
                                </p>
                                </div>

                                {/*Button*/}
                                <div className="mt-6 flex flex-wrap justify-center gap-4">
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
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
