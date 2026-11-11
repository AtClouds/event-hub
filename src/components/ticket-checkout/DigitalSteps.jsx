import { useOutletContext,  Link } from "react-router";
import { FiArrowLeft } from "react-icons/fi";
import { QRCodeSVG } from "qrcode.react";
import { LuCalendar, LuMapPin,  } from "react-icons/lu";
import { useRef } from "react";
import { toPng } from "html-to-image";

function DigitalStep () {

    const { event, ticket, order, } = useOutletContext();

    const ticketRef = useRef(null);

    const handleDownload = async () => {
    const dataUrl = await toPng(ticketRef.current, { pixelRatio: 2 });
    const link = document.createElement("a");
    link.download = "ticket.png";
    link.href = dataUrl;
    link.click();
    };


       return(
           <div className="bg-brand-light-bg flex justify-center  min-h-screen">
   
           {/* Outer div */}   
           <div className="w-full px-4 md:w-[80%] mt-6">

               {/* Heading/button */}
               <div>
                   {/* button */}
                   <div className=" transition-all duration-300 ease-out hover:-translate-y-1">
                       <Link
                           to="../details"
                           className="flex items-center font-semibold text-[14px] gap-2 text-brand-secondary motion-card-button
                           cursor-pointer">
                            <FiArrowLeft />
                           Back to details
                       </Link>
                   </div>
   
                   {/* heading */}
                   <div>
                       <h1 className="lg:text-[35px] md:text-[30px] text-[24px] text-brand-primary font-extrabold ">One last look.</h1>
                       <p className="lg:text-[16px] text-[14px] text-brand-light-text font-medium ">Check your ticket and buyer details before heading to payment.</p>
                   </div>
               </div>

               

                {/* Card container */}
                <div className="mx-auto">
                    {/* Card div */}
                    <div className="w-full grid grid-cols-1 lg:grid-cols-[2fr_1fr] mt-6 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(30,27,75,0.08)] " ref={ticketRef}>
    
                        {/* Tickets details*/}
                        <div className="bg-white">

                            {/* ticket type */}
                            <div className="bg-brand-primary py-3 px-6 md:px-10 flex justify-between ">
                                <p className="text-white text-[16px] font-bold">Event-hub</p>
                                <p className="text-white text-[16px] font-bold">{ticket.name} · ADMIT {order.qty}</p>
                            </div>

                            {/* banner */}
                            <div className="">
                                <img src={event.banner} alt="" className="object-cover w-full h-[250px]" />
                            </div>                       
    
                            {/* content */}
                            <div className="md:p-10 p-6">
    
                            {/* title, date  and venue */}
                            <div className="flex flex-col  pb-6 border-b border-brand-light-text/20">
                                <h1 className="lg:text-[40px] md:text-[30px]  text-[25px] text-brand-primary font-bold">{event.title}</h1>
    
                                <div className="md:text-[16px] text-[14px] font-light gap-5 mt-4 flex items-center">
                                    <LuCalendar className="text-brand-secondary" size={24} />
                                    <p className="text-brand-primary">{event.date} · {event.startTime}</p>
                                </div>
    
                                <div className="md:text-[16px] text-[14px] font-light gap-5 mt-3 flex items-center md:w-[50%]">
                                    <LuMapPin className="text-brand-secondary" size={24} />
                                    <p className="text-brand-light-text">{event.venue.name} · {event.venue.address}</p>
                                </div>
                            </div> 
    
    
                                {/* ticket name, number of attendee */}
                            <div className="flex flex-col  mt-4 pb-2">
                                <div className="flex justify-start gap-[50%] items-center">
                                    <p className="md:text-[16px] text-[14px] font-light text-brand-light-text flex flex-col">ATTENDEE <span className="text-[14px] mt-1 md:text-[16px] text-brand-primary font-semibold">{order.fullName}</span></p> 

                                    <p className="md:text-[16px] text-[14px] font-light text-brand-light-text flex flex-col ">TICKET TYPE <span className="text-[14px] md:text-[16px] text-brand-primary font-semibold">{ticket.name} · {order.qty} {order.qty > 1 ? "tickets" : "ticket"}</span></p> 
                                </div>
    
                               <div className="flex justify-between items-center mt-4">
                                    <p className="md:text-[16px] text-[14px] font-light text-brand-light-text flex flex-col">ORDER NUMBER<span className="text-[14px] md:text-[16px] text-brand-primary mt-1 font-semibold">EVT-0414-08261</span></p>
                                </div>
    

                            </div> 
    
                        </div>

                        </div>
    
                        {/* Order Summary */}
                        <div className="flex flex-col justify-center items-center bg-[#F0EBFC]">

                              {/* confirmed */}
                            <div className="flex justify-between items-start  mt-3 ">
                                <p className="bg-[#EAF7F1] py-2 px-5 rounded-2xl text-[#18765B] text-[16px] font-bold ">Confirmed</p>
                            </div>    

                            {/* QR CODE */}
                            <div className="bg-white p-4 rounded-2xl mt-6">
                                <QRCodeSVG  size={160} className="text-brand-primary" />
                            </div>

                            {/* texts */}
                            <div className="flex flex-col mt-4 text-center">
                                <h1 className="text-[14px] font-bold text-brand-primary ">Your digital admission pass</h1>
                                <p className="text-[12px] text-brand-light-text font-light mt-2">QR design preview only. Not a functioning issued ticket.</p>
                                <span className="text-[14px] md:text-[16px] text-brand-primary mt-4 font-semibold">EVT-0414-08261</span>
                            </div>
                            
                        </div>
                    </div>
                
            </div>                        

                       
                   

                {/* Outside box content */}           
                    {/* download button */}
                    <div className="flex md:flex-row flex-col gap-4 w-full">
                        <div className="w-full">
                            <button onClick={handleDownload} className="bg-brand-secondary text-white text-[18px] font-bold py-3 px-4 w-full rounded-3xl mt-5 transition-all duration-300 ease-out hover:-translate-y-1 cursor-pointer hover:text-brand-secondary hover:bg-brand-secondary/20"
                            type="button">
                                Download Ticket      
                            </button>
                        </div>

                        <Link to={`/events/${event.id}`} className="w-full">
                            <button className="bg-white text-brand-primary text-[18px] font-bold py-3 border border-brand-light-text/30 px-4 w-full rounded-3xl mt-5 transition-all duration-300 ease-out hover:-translate-y-1 cursor-pointer hover:text-white hover:bg-brand-primary/10"
                            >
                                Return to Events       
                            </button>
                        </Link>
                    </div>

                   
           </div> 

           </div>
       );
}

export default DigitalStep;