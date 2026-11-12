import { useOutletContext,  Link } from "react-router";
import { FiArrowLeft } from "react-icons/fi";
import { OderSummary } from "../ticket-check-out-UI/OrderSummary"; 
import { LuTicketX, LuCircleAlert } from "react-icons/lu";

 function SoldOut () {
   
    const { event, ticket, order, setOrder,  subtotal } = useOutletContext();
    
        
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
                               to="../details"
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
       
                           {/* Main details*/}
                           <div className="bg-white rounded-3xl p-6 self-start">
       
                               {/* heading */}
                               <div className="flex flex-col  mt-3  pb-6">
                                    <div className="flex size-20 items-center justify-center rounded-full bg-[#C33652]/10">
                                        <LuTicketX className="size-10 text-[#C33652] stroke-1" />
                                    </div>
                                    <div className="mt-3 bg-[#C33652]/10 md:p-5 p-4 rounded-2xl flex items-start md:gap-4 gap-3">
                                        <LuCircleAlert className="md:size-5 size-12 text-[#C33652] stroke-1.5" />
                                        <div>
                                            <h1 className="font-bold text-[#C33652] text-[16px] ">We couldn’t reserve your {ticket.name} ticket</h1>
                                            <p className="font-light text-[#C33652] text-[14px] ">The last {ticket.name} ticket was purchased before checkout. Your selection has not been changed and no payment was taken.</p>
                                        </div>
                                    </div>
                               </div>
    
    
                                {/* Tickets left */}
                               <div className="flex justify-between items-start  mt-3  pb-6 ">
                                   <div>
                                        <h1 className="text-[26px] text-brand-primary font-bold mt-3">{ticket.name} ticket</h1>
                                        <p className="text-[14px] text-brand-light-text font-normal mt-1">{formatPrice(ticket.price, ticket.currency)} per ticket</p>
                                   </div>
                                   <div>
                                        <h1  className="text-[16px] text-[#C33652] font-bold flex items-center gap-1 mt-3 bg-[#C33652]/10 py-1 px-4 rounded-2xl" >
                                            Sold out
                                        </h1>
                                   </div>
                               </div>

                                 {/* Benefits of ticket */}
                        <div className="mt-5 bg-[#F0EBFC] rounded-2xl p-4 ">
                            {ticket.benefits.map((benefit, index) => (
                                <li
                                key={index}
                                className="flex items-center gap-3 "
                                >
                                <span className="text-brand-secondary transition-colors duration-300  group-hover:text-white text-[14px] pl-2">✓</span>
                                <span className="text-brand-primary transition-colors duration-300 group-hover:text-white text-[14px]">{benefit}</span>
                                </li>
                            ))}
                        </div>
    
                                {/* numbers of ticket */}
                            <div className="border-t border-brand-light-text/20 py-4 mt-6">
                            {/* Ticket quantity */}
                            <div className="flex justify-between items-center">
                                <div>
                                    <h1 className="text-[18px] text-brand-primary font-bold">Quantity</h1>
                                    <p className="text-[12px] text-brand-light-text">{event.type}</p>
                                </div>

                                {/* Add and Subtract */}
                                <div className="flex gap-4 py-2 px-4 rounded-2xl border border-brand-light-text/30">
                                    <p onClick={() => {
                                        setOrder({ ...order, qty: order.qty - 1 })
                                    }}
                                    className="font-bold text-[20px] text-brand-light-text/40 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 ">-</p>
                                    <p className="text-[20px] text-brand-primary/20 font-bold ">{order.qty}</p>
                                    <div>
                                    <p onClick={() => {
                                        setOrder({ ...order, qty: order.qty + 1 })
                                    }}
                                    className="font-bold text-[20px] text-brand-secondary/20 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 ">+</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                       
                         {/* Subtotal */}
                    <div className="flex justify-between items-center mt-2">
                        <p className="text-[14px] text-brand-light-text font-light">Ticket subtotal</p>
                        <p className="text-[16px] text-brand-primary font-semibold">{formatPrice(subtotal, ticket.currency)}</p>
                    </div>               
       
                    {/* Instructions */}
                    <div className="mt-4">
                         <p className="text-[16px] text-brand-light-text">Return to the event to check other availability. We won’t switch your ticket automatically.</p>                
                    </div>
                                   
       
                           {/* Unavailable button */}
                           <button className="bg-brand-light-bg text-brand-light-text text-[18px] font-bold py-3 px-4 w-full rounded-3xl mt-5 transition-all duration-300 ease-out hover:-translate-y-1 cursor-pointer hover:text-brand-light-text-40 hover:bg-brand-light-bg/30"
                          >
                               {ticket.name} unavailable       
                           </button>
                            
                            {/* Return to event */}
                            <Link to={`/events/${event.id}`}>
                            <button className="bg-brand-white border border-brand-light-text/20 hover:border-0 text-brand-primary text-[18px] font-bold py-3 px-4 w-full rounded-3xl mt-3 transition-all duration-300 ease-out hover:-translate-y-1 cursor-pointer hover:text-brand-primary/60 hover:bg-brand-primary/10"
                          >
                               Return to Event        
                           </button>
                           </Link>
                     
       
                           {/* Comment */}
                           <div className="mt-5 flex justify-center items-center">
                               <p className="text-[13px] text-brand-light-text font-light">No payment taken</p>
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

export default SoldOut;