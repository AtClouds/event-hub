
import { Navbar } from "../landing-layout/NavBar"


export function Hero({event}) {


  return (
    <div className="relative">
       {/*NavBar*/}
        <div className="absolute inset-x-0 top-0 z-20 py-8"> 
          <Navbar /> 
        </div>

      {/*Carousel background*/}
       <div className="overflow-hidden" >
        <div className="flex">
            <div className="relative min-w-full h-auto md:min-h-[600px] lg:min-h-[650px]" key={event.id}>
              {/* Background */}
              <img src={event.banner} className="absolute inset-0 w-full h-full object-cover" />
               {/* Gradient overlay*/}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F5167E]/72  to-[#3D37F1]/72 backdrop-blur-[5px]" />
               
                {/* Content */}
                <div className="relative md:absolute md:inset-0 flex items-center justify-center w-full px-4 pt-24 pb-12 md:px-0 md:py-0">            
                    <div className="grid grid-cols-1 md:grid-cols-[40%_1fr] lg:w-[90%] w-full md:w-[80%] gap-15 max-w-6xl mx-auto">
                            {/* Main Flyer design */}
                            <div className="xl:aspect-[5/4] md:block hidden  rounded-3xl overflow-hidden order-2 md:order-1">
                                <img src={event.banner} alt="event-main-image" className="h-full w-full  object-cover" />
                            </div>
                            {/* Content */}
                            <div className=" flex flex-col md:justify-start md:items-start justify-center items-centerorder-1 md:order-2 ">
                                {/* Event type */}
                                <p className="bg-white/20 py-2 px-4 rounded-md text-white text-[12px]">
                                    {event.type}
                                </p>

                                 {/*Title*/}
                                <h1 className="text-white lg:text-[50px]  md:text-[30px] mt-5 text-[35px] font-bold leading-tight text-center md:text-start  xl:w-[70%] lg:w-[80%]">
                                    {event.title}
                                </h1>

                                {/* Date and Time */}
                                <div className="mt-3 flex justify-center items-center">
                                <p className="text-[14px] text-white">
                                   {event.date} 

                                   <span className="text-[14px] px-2 leading-none">•</span>

                                    <span>
                                     {event.startTime}
                                   </span>
                                </p>
                                </div>

                                {/* Venue */}
                                <div className="mt-4 flex justify-center items-center ">
                                <p className="text-[14px] text-white">
                                   {event.venue.address} 
                                </p>
                                </div> 

                                {/*Button*/}
                                <div className="mt-4 flex flex-col flex-wrap justify-center gap-4">
                                {/*Ticket*/}
                                <button className="bg-brand-secondary xl:py-3 xl:px-8 xl:rounded-3xl py-2 px-5 rounded-[17px] text-white text-[16px] transition-all duration-300 ease-out hover:-translate-y-1 active:translate-y-0 hover:brightness-110  cursor-pointer ">
                                    Get Ticket
                                </button>
                                {/*Learn*/}
                                <button className="bg-transparent border border-white xl:py-3 xl:px-8 xl:rounded-3xl py-2 px-5 rounded-[17px] text-white text-[16px] transition-all duration-300 ease-out hover:-translate-y-1 active:translate-y-0 hover:brightness-110  cursor-pointer">
                                    View Schedule
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
