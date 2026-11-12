import { useOutletContext,  Link } from "react-router";
import { FiArrowLeft } from "react-icons/fi";
import { OderSummary } from "../OrderSummary"; 
import {  LuCircleAlert,  LuCircleX, LuBookmarkCheck  } from "react-icons/lu";


export function FailedPayments ({ card, setMethod, setStatus }) {

    const {  ticket, bookingFee, order } = useOutletContext();

    
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
                           to="../payment"
                           className="flex items-center font-semibold text-[14px] gap-2 text-brand-secondary motion-card-button
                           cursor-pointer">
                            <FiArrowLeft />
                           Back to payment
                       </Link>
                   </div>
   
                   {/* heading */}
                   <div>
                       <h1 className="lg:text-[35px] md:text-[30px] text-[24px] text-brand-primary font-extrabold ">That payment didn’t go through.</h1>
                       <p className="lg:text-[16px] text-[14px] text-brand-light-text font-medium ">Your order is saved. Try again or choose another way to pay.</p>
                   </div>
               </div>
               
   
               {/* Card container */}
               <div className="mx-auto">
                   {/* Card div */}
                   <div className="w-full grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr] mt-6 ">
   
                       {/* Tickets Value */}
                       <div className="bg-white rounded-3xl p-6 self-start">
   
                            {/* heading */}
                            <div className="flex flex-col  mt-3  pb-6">
                                <div className="flex size-20 items-center justify-center rounded-full bg-[#C33652]/10">
                                    <LuCircleX  className="size-10 text-[#C33652] stroke-1" />
                                </div>
                                <div className="mt-3 bg-[#C33652]/10 md:p-5 p-4 rounded-2xl flex items-start md:gap-4 gap-3">
                                    <LuCircleAlert className="md:size-5 size-12 text-[#C33652] stroke-1.5" />
                                    <div>
                                        <h1 className="font-bold text-[#C33652] text-[16px] ">Your payment was declined</h1>
                                        <p className="font-light text-[#C33652] text-[14px] ">Your bank couldn’t approve this payment. Check your card details or use Bank Transfer instead. No payment was taken.</p>
                                    </div>
                                </div>
                            </div>

                       {/* amount to retry */}
                        <div className="text-[16px] font-light gap-5 mt-3 flex items-center justify-between border-b border-brand-light-text/30 pb-5 ">
                            <p className="text-brand-primary text-[18px] font-bold">Amount to retry</p>
                            <p className="text-brand-primary font-bold text-[35px]">{formatPrice(bookingFee, ticket.currency)}</p>
                        </div>     

                        {/* details below */}
                        <div className="mt-5">
                            <h1 className="text-brand-primary text-[16px] font-bold">Nothing to fill in again</h1>
                            <h1 className="text-brand-primary text-[16px] font-bold pt-3">{order.fullName} · {ticket.name} &times; {order.qty} </h1>

                            <p className="text-brand-light-text font-light text-[16px] pt-3">{order.email}</p>
                            <p className="text-brand-light-text font-light text-[16px] pt-3">{order.number}</p>
                            <p className="text-brand-light-text font-light text-[16px] pt-3">Order EVT-0414-0826 · Card ending {card.number.slice(-4)}</p>
                        </div> 


   
                       {/* segment */}
                       <div className="bg-[#F0EBFC] rounded-2xl p-5 flex items-start gap-3 mt-5">
                           <LuBookmarkCheck  className="text-brand-primary" size={20} />
                           <div>
                               <h1 className="text-[16px] text-brand-primary font-bold">Your order and details are preserved</h1>
                               <p className="text-[13px] text-brand-primary font-medium">Retry with your card or change to Bank Transfer. Your selected {ticket.name} ticket and buyer details stay the same.</p>
                           </div>
                       </div>
   
                       {/* button */}
                       <button className="bg-brand-secondary text-white text-[18px] font-bold py-4 px-4 w-full rounded-3xl mt-5 transition-all duration-300 ease-out hover:-translate-y-1 cursor-pointer hover:text-brand-secondary hover:bg-brand-secondary/20"
                        type="button" 
                       onClick={() => {
                            setStatus("idle")
                       }}
                      >
                           Retry payment · {formatPrice(bookingFee, ticket.currency)}       
                       </button>

                       <button className="bg-white text-brand-primary text-[18px] border border-brand-light-text/20 font-bold py-4 px-4 w-full rounded-3xl mt-2 transition-all duration-300 ease-out hover:-translate-y-1 cursor-pointer hover:text-brand-primary hover:bg-brand-primary/10" 
                       type="button" 
                       onClick={() => {
                            setStatus("idle")
                            setMethod("transfer")
                            
                       }}
                      >
                           Change payment method        
                       </button>
   
                       {/* Comment */}
                       <div className="mt-5 flex justify-center items-center">
                           <p className="text-[13px] text-brand-light-text font-light">Encrypted payment · Your details stay protected</p>
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
