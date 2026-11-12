import { useOutletContext,  Link } from "react-router";
import { FiArrowLeft } from "react-icons/fi";
import { OderSummary } from "../OrderSummary"; 
import {  LuCircleAlert, LuLock } from "react-icons/lu";


export function ProcessingPayment ({ card,}) {

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
                       <h1 className="lg:text-[35px] md:text-[30px] text-[24px] text-brand-primary font-extrabold ">Confirming your payment…</h1>
                       <p className="lg:text-[16px] text-[14px] text-brand-light-text font-medium ">Please stay on this screen while your bank responds.</p>
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

                                  {/* spin icon */}
                                  <div className="flex items-center w-full justify-center">
                                    <div className="flex size-22 items-center justify-center rounded-full bg-brand-primary/10">
                                   <div className="size-10 animate-spin rounded-full border-2 border-brand-secondary/30 border-t-brand-secondary" />
                                </div>
                                  </div>
                               
                                 
                                 {/* heading */}
                                 <div className="mt-5 justify-center items-center text-center">
                                   <h1 className="lg:text-[30px] md:text-[25px] text-[20px] text-brand-primary font-extrabold ">A moment for your moment.</h1>
                                   <p className="lg:text-[16px] text-[14px] text-brand-light-text font-medium pt-3">We’re securely checking your card payment. Your {ticket.name} order is still here.</p>
                                 </div>

                                {/* amount to retry */}
                        <div className="md:mt-10 mt-5 flex md:flex-row flex-col items-center justify-between pb-5 ">
                            <p className="text-brand-primary text-[18px] font-bold">Payment in progress</p>
                            <p className="text-brand-primary font-bold text-[35px]">{formatPrice(bookingFee, ticket.currency)}</p>
                        </div>      

                             <div className=" border-b border-brand-light-text/30 pb-6">
                                <div className="mt-3 bg-brand-primary/10 md:p-5 p-4 rounded-2xl flex items-start md:gap-4 gap-3">
                                    <LuLock className="md:size-5 size-12 text-brand-primary stroke-1.5" />
                                    <div>
                                        <h1 className="font-bold text-brand-primary text-[16px] ">Please don’t pay again</h1>
                                        <p className="font-light text-brand-primary ">Payment is already in progress. The pay button is disabled to prevent a duplicate charge. Don’t refresh or close this screen.</p>
                                    </div>
                                </div>
                            </div>
                           </div>

                      

                        {/* details below */}
                        <div className="">
                            <h1 className="text-brand-secondary text-[14px] font-bold">YOUR SAVED ORDER</h1>
                            <h1 className="text-brand-primary text-[16px] font-bold pt-3">{order.fullName} · {ticket.name} &times; {order.qty} </h1>

                            <p className="text-brand-light-text font-light text-[16px] pt-3">{order.email}</p>
                            <p className="text-brand-light-text font-light text-[16px] pt-3">{order.number}</p>
                            <p className="text-brand-light-text font-light text-[16px] pt-3">Order EVT-0414-0826 · Card ending {card.number.slice(-4)}</p>
                        </div> 

   
                       {/* button */}
                       <button className="bg-brand-light-text/10 text-brand-light-text/80 text-[18px] font-bold py-4 px-4 w-full rounded-3xl mt-5 "
                        type="button" 
                      >
                           Processing payment…       
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
