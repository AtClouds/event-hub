import { useOutletContext, useNavigate, Link } from "react-router";
import { FiArrowLeft } from "react-icons/fi";
import { LuCreditCard, LuLandmark } from "react-icons/lu";
import { OderSummary } from "../ticket-check-out-UI/OrderSummary"; 
import { useState, useEffect } from "react";
import { TransferMethod } from "../ticket-check-out-UI/paymentCardMethod/TransferMethod";
import { CardMethod } from "../ticket-check-out-UI/paymentCardMethod/CardMethod";
import { FailedPayments } from "../ticket-check-out-UI/paymentCardMethod/FailedPayments"
const DECLINE_TEST_CARD = "4000 0000 0000 0002";

function PaymentStep() {

    const { ticket, order,  bookingFee, orderFee  } = useOutletContext();
            const navigate = useNavigate();
          
            const [method, setMethod] = useState("card")       
            const [status, setStatus] = useState("idle");
            const [card, setCard] = useState({ name: "", number: "", expiry: "", cvv: "" });      

     
            // check status 
            useEffect(() => {
                              console.log("render, status is:", status); 
                if (status !== "processing") return;
 
                const id = setTimeout(() => {
                    if (method === "card" && card.number === DECLINE_TEST_CARD) {
                    setStatus("failed");
                    } else {
                    navigate("../success");
                    }
                }, 3000);

                return () => clearTimeout(id);
                }, [status, method, setStatus, card.number, navigate]);



            const formatPrice = (amount, currency) =>
                new Intl.NumberFormat("en-NG", {
                    style: "currency",
                    currency,
                    maximumFractionDigits: 0,
            }).format(amount);   



             if (status === "processing") return <p>Processing…</p>;
             if (status === "failed") return <p><FailedPayments /></p>;


           return(
               <div className="bg-brand-light-bg flex justify-center  min-h-screen">
       
               {/* Outer div */}   
               <div className="w-full px-4 md:w-[80%] mt-6">
                   {/* Heading/button */}
                   <div>
                       {/* button */}
                       <div className=" transition-all duration-300 ease-out hover:-translate-y-1">
                           <Link
                               to="../review"
                               className="flex items-center font-semibold text-[14px] gap-2 text-brand-secondary motion-card-button
                               cursor-pointer">
                                <FiArrowLeft />
                               Back to payment
                           </Link>
                       </div>
       
                       {/* heading */}
                       <div>
                           <h1 className="lg:text-[35px] md:text-[30px] text-[24px] text-brand-primary font-extrabold">That payment didn’t go through.</h1>
                           <p className="lg:text-[16px] text-[14px] text-brand-light-text font-medium ">
                            Your order is saved. Try again or choose another way to pay.
                            </p>
                       </div>
                   </div>
                   
       
                   {/* Card container */}
                   <div className="mx-auto">
                       {/* Card div */}
                       <div className="w-full grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr] mt-6 ">
       
                           {/* Details card */}
                           <div className="bg-white rounded-3xl p-6 self-start">
       
                               {/* heading */}
                               <div className="flex flex-col  mt-3 bg-brand-primary p-5 rounded-2xl">
                                   <div>
                                        <p className="text-[12px] text-white font-light ">TOTAL TO PAY · {ticket.currency}</p>
                                       <h1 className="lg:text-[35px]  text-[30px] text-white font-extrabold mt-2 ">{formatPrice(bookingFee, ticket.currency)}</h1>
                                   </div>
                                   <div>
                                       <p className="font-light text-[14px]  text-white mt-1">{ticket.name} &times; {order.qty} · Includes {formatPrice(orderFee, ticket.currency)} booking fee </p>
                                   </div>
                               </div>

                               {/* payment methods */}
                               <div className="mt-5 flex flex-col md:flex-row items-center gap-3">
                                    {/* Card */}
                                    <button
                                        className={`flex  items-center justify-between md:w-1/2 w-full
                                        rounded-2xl py-4 px-6 ${method === "card" ? "border-2 border-brand-secondary bg-brand-secondary/10" : "border border-brand-light-text/30"}`}
                                        type="button"
                                        onClick={() => setMethod("card")} >
                                        <div className="text-start flex gap-5 items-center">
                                            <LuCreditCard className={`size-5  ${method === "card" ? "text-brand-secondary" : "text-brand-light-text"}`} />
                                            <span className="">
                                            <h1 className="text-brand-primary text-[18px] font-bold">Card</h1>
                                            <p className="text-[12px] text-brand-light-text font-light">Debit or credit card</p>
                                            </span> 
                                        </div>
                                        <span
                                        className={`flex size-5 items-center justify-center rounded-full border-2 ${
                                            method === "card" ? "border-brand-secondary" : "border-brand-light-text/30"
                                        }`}
                                        >
                                        {method === "card" && <span className="size-2.5 rounded-full bg-brand-secondary" />}
                                        </span>
                                    </button>
                                    {/* Transfer */}
                                    <button
                                        className={`flex  items-center justify-between md:w-1/2 w-full
                                        rounded-2xl py-4 px-6 ${method === "transfer" ? "border-2 border-brand-secondary bg-brand-secondary/10" : "border border-brand-light-text/30"}`}
                                        type="button"
                                        onClick={() => setMethod("transfer")}>
                                        <div className="text-start flex gap-5 items-center">
                                            <LuLandmark className={`size-5  ${method === "transfer" ? "text-brand-secondary" : "text-brand-light-text"}`} />
                                            <span>
                                            <h1 className="text-brand-primary text-[18px] font-bold">Bank Transfer</h1>
                                            <p className="text-[12px] text-brand-light-text font-light">Pay from your bank</p>
                                            </span>
                                        </div>
                                        <span
                                        className={`flex size-5 items-center justify-center rounded-full border-2 ${
                                            method === "transfer" ? "border-brand-secondary" : "border-brand-light-text/30"
                                        }`}
                                        >
                                        {method === "transfer" && <span className="size-2.5 rounded-full bg-brand-secondary" />}
                                        </span>
                                    </button>
                               </div>
       
                              
                               {method === "card" ?
                               //Card form
                               <CardMethod card={card} setCard={setCard} setStatus={setStatus} status={status} />
                               :
                                //Transfer form
                                <TransferMethod />
                                }
                                
                               
                           
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

export default PaymentStep;