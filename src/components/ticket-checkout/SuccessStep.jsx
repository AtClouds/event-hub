import { useOutletContext,  Link } from "react-router";
import { LuCalendar, LuMapPin, LuMailCheck, LuCheck } from "react-icons/lu";
import { FiArrowLeft } from "react-icons/fi";

 function SuccessStep () {
   const { event, ticket, order, bookingFee } = useOutletContext();

    
       const formatPrice = (amount, currency) =>
        new Intl.NumberFormat("en-NG", {
            style: "currency",
            currency,
            maximumFractionDigits: 0,
      }).format(amount);   


       return(
           <div className="bg-brand-light-bg flex justify-center  min-h-screen">
   
           {/* Outer div */}   
           <div className="w-full px-4 md:w-[80%] mt-6">
               {/* Heading */}
               <div className="flex flex-col justify-center items-center"> 
                    <div className="bg-[#18765B]/10 p-4 rounded-full"><LuCheck className="size-10 text-[#18765B]" /></div>
                    <h1 className="lg:text-[35px] md:text-[30px] text-[24px] text-brand-primary font-extrabold ">Payment Successful!</h1>
                    <p className="lg:text-[16px] text-[14px] text-brand-light-text font-medium  text-center">
                        You’re in, {order.fullName?.trim().split(/\s+/)[0] ?? ""}. A great experience awaits.</p>
               </div>
               
                    {/* Tickets Value */}
                    <div className="bg-white rounded-3xl  self-start mt-6  overflow-hidden shadow-[0_8px_30px_rgba(30,27,75,0.08)]">

                         {/* banner */}
                        <div className="">
                            <img src={event.banner} alt="" className="object-cover w-full h-[250px]" />
                        </div>                       

                        {/* content */}
                        <div className="p-6">
                        {/* confirmed */}
                        <div className="flex justify-between items-start  mt-3 ">
                            <p className="bg-[#18765B]/10 py-2 px-4 rounded-2xl text-[#18765B] text-[14px] font-bold ">Confirmed</p>
                        </div>

                        {/* title, date  and venue */}
                        <div className="flex flex-col  items-start mt-4 pb-6 border-b border-brand-light-text/20">
                            <h1 className="lg:text-[35px] md:text-[30px]  text-[25px] text-brand-primary font-bold">{event.title}</h1>

                            <div className="md:text-[16px] text-[14px] font-light gap-5 mt-4 flex items-center">
                                <LuCalendar className="text-brand-secondary" size={24} />
                                <p className="text-brand-primary">{event.date} · {event.startTime}</p>
                            </div>

                            <div className="md:text-[16px] text-[14px] font-light gap-5 mt-3 flex items-center md:w-[50%]">
                                <LuMapPin className="text-brand-secondary" size={24} />
                                <p className="text-brand-light-text">{event.venue.name} · {event.venue.address}</p>
                            </div>
                        </div> 


                         {/* ticket type/ ref / amount paid */}
                        <div className="flex flex-col  mt-4 pb-2">
                            <div className="flex justify-between items-center">
                                <p className="md:text-[16px] text-[14px] font-light text-brand-light-text">Ticket type / quantity</p>
                               <p className="text-[16px] font-semibold text-brand-primary">{ticket.name} &times; {order.qty}</p> 
                            </div>

                             <div className="flex mt-4 justify-between items-center">
                                <p className="md:text-[16px] text-[14px] font-light text-brand-light-text">Reference No.</p>
                               <p className="md:text-[16px] text-[14px] font-semibold text-brand-primary">EVT-0414-08261</p> 
                            </div>

                            <div className="flex mt-4 justify-between items-center">
                                <h1 className="md:text-[16px] text-[14px] font-bold text-brand-primary">Amount paid ({ticket.currency})</h1>
                               <h1 className="text-brand-primary md:text-[24px] text-[16px] font-bold">{formatPrice(bookingFee, ticket.currency)}</h1> 
                            </div>
                        </div> 

                    </div>
                    </div>

                {/* Outside box content */}
                {/* segment */}
                    <div className="bg-[#18765B]/10 rounded-2xl p-5 flex items-start gap-3 mt-10">
                        <LuMailCheck className="text-[#18765B]" size={20} />
                        <div>
                            <h1 className="text-[16px] text-[#18765B] font-bold">Your ticket is in your inbox</h1>
                            <p className="text-[13px] text-[#18765B] font-medium">Ticket and receipt sent to {order.email}. You can also view your digital ticket below.</p>
                        </div>
                    </div>

                    {/* Continue button */}
                    <Link to="../digital-ticket">
                    <button className="bg-brand-secondary text-white text-[18px] font-bold py-3 px-4 w-full rounded-3xl mt-5 transition-all duration-300 ease-out hover:-translate-y-1 cursor-pointer hover:text-brand-secondary hover:bg-brand-secondary/20"
                    >
                        View My Ticket       
                    </button>
                    </Link>

                     {/* button */}
                    <div className=" transition-all duration-300 ease-out hover:-translate-y-1 mt-5">
                        <Link
                            to={`/events/${event.id}`}
                            className="flex items-center justify-center font-semibold text-[14px] gap-2 text-brand-secondary motion-card-button
                            cursor-pointer">
                                <FiArrowLeft />
                            Back to event
                        </Link>
                    </div>
           </div> 

           </div>
       );
}

export default SuccessStep;