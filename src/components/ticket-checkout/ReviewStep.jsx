import { useOutletContext,  Link } from "react-router";
import { FiArrowLeft } from "react-icons/fi";
import { LuLock } from "react-icons/lu";
import { OderSummary } from "../ticket-check-out-UI/OrderSummary"; 
import { LuCalendar, LuMapPin, LuPencil, LuCircleCheck } from "react-icons/lu";


function ReviewStep () {

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
               {/* Heading/button */}
               <div>
                   {/* button */}
                   <div className=" transition-all duration-300 ease-out hover:-translate-y-1">
                       <Link
                           to={`/events/${event.id}`}
                           className="flex items-center font-semibold text-[14px] gap-2 text-brand-secondary motion-card-button
                           cursor-pointer">
                            <FiArrowLeft />
                           Back to event
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
                   <div className="w-full grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr] mt-6 ">
   
                       {/* Tickets Value */}
                       <div className="bg-white rounded-3xl p-6 self-start">
   
                           {/* heading */}
                           <div className="flex flex-col  mt-3 border-b border-brand-light-text/20 pb-6">
                                <div>
                                   <p className="font-semibold text-[15px]   text-brand-secondary rounded-2xl">YOUR EVENT</p>
                               </div> 
                               <div>
                                   <h1 className="lg:text-[30px]  text-[24px] text-brand-primary font-extrabold ">{event.title}</h1>
                               </div>
                                <div className="text-[16px] font-light gap-5 mt-4 flex items-center">
                                    <LuCalendar className="text-brand-secondary" size={24} />
                                    <p className="text-brand-primary">{event.date} · {event.startTime}</p>
                                </div>
                
                                <div className="text-[16px] font-light gap-5 mt-3 flex items-center">
                                    <LuMapPin className="text-brand-secondary" size={24} />
                                    <p className="text-brand-primary w-[50%]">{event.venue.name} · {event.venue.address}</p>
                                </div>
                           </div>


                            {/* Edit ticket */}
                           <div className="flex justify-between items-start  mt-3 border-b border-brand-light-text/20 pb-6 ">
                               <div>
                                    <h1 className="text-[18px] text-brand-primary font-bold mt-3">{ticket.name} ticket &times; {order.qty}</h1>
                                    <p className="text-[13px] text-brand-light-text font-normal mt-3">{formatPrice(ticket.price, ticket.currency)} per ticket · {ticket.benefits.slice(0, 2).join(" & ")}</p>
                               </div>
                               <div>
                                    <Link to=".." className="text-[16px] text-brand-secondary font-bold flex items-center gap-1 mt-3" >
                                        <LuPencil className="size-4  transition-all duration-300 ease-out hover:-translate-y-1 cursor-pointer" /> Edit
                                    </Link>
                               </div>
                           </div>

                            {/* Edit Details */}
                           <div className="flex justify-between items-start mt-3 border-b border-brand-light-text/20 pb-6 ">
                               <div>
                                    <h1 className="text-[20px] text-brand-primary font-bold mt-3">Buyer details</h1>
                                    <h1 className="text-[18px] text-brand-primary font-bold mt-3">{order.fullName}</h1>
                                    <p className="text-[13px] text-brand-light-text font-normal mt-1">{order.email}</p>
                                    <p className="text-[13px] text-brand-light-text font-normal mt-1">{order.tel}</p>
                               </div>
                               <div>
                                    <Link to="../details" className="text-[16px] text-brand-secondary font-bold flex items-center gap-1 mt-3" >
                                        <LuPencil className="size-4  transition-all duration-300 ease-out hover:-translate-y-1 cursor-pointer" /> Edit
                                    </Link>
                               </div>
                           </div> 
  
   

   
                       {/* segment */}
                       <div className="bg-[#F0EBFC] rounded-2xl p-5 flex items-start gap-3 mt-5">
                           <LuCircleCheck  className="text-brand-primary" size={20} />
                           <div>
                               <h1 className="text-[16px] text-brand-primary font-bold">Ready when you are</h1>
                               <p className="text-[13px] text-brand-primary font-medium">Your total is {formatPrice(bookingFee, ticket.currency)} including the booking fee. You’ll choose a payment method next.</p>
                           </div>
                       </div>
   
                       {/* Continue button */}
                       <button className="bg-brand-secondary text-white text-[18px] font-bold py-3 px-4 w-full rounded-3xl mt-5 transition-all duration-300 ease-out hover:-translate-y-1 cursor-pointer hover:text-brand-secondary hover:bg-brand-secondary/20"
                      >
                           Continue to Payment        
                       </button>
   
                       {/* Comment */}
                       <div className="mt-5 flex justify-center items-center">
                           <p className="text-[13px] text-brand-light-text font-light">Your order stays with you at every step</p>
                       </div>
                       </div>
   
                       {/* Order Summary */}
                       <div>
                           <OderSummary />
                       </div>
                   </div>
               
           </div> 
           </div>
           </div>
       );
}

export default ReviewStep;