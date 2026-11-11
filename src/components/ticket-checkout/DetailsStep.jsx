import { useOutletContext, useNavigate, Link } from "react-router";
import { FiArrowLeft } from "react-icons/fi";
import { LuLock } from "react-icons/lu";
import { OderSummary } from "../ticket-check-out-UI/OrderSummary"; 
import { useState } from "react";


function DetailsStep () {

       const {  ticket, order,  field  } = useOutletContext();

       const navigate = useNavigate();
   
       const [errors, setErrors] = useState({});

       const  handleContinue = () => {
            const newErrors = {}

            if (!order.fullName?.trim()) {
                newErrors.fullName = "Full name is required";
            }

            if (!order.email?.trim()) {
                newErrors.email = "Email is required";
            }

            if (!order.tel?.trim()) {
                newErrors.tel = "Phone number is required";
            }

            setErrors(newErrors)

            if (Object.keys(newErrors).length === 0) {
                navigate("../review");
            }
       }


       return(
           <div className="bg-brand-light-bg flex justify-center  min-h-screen">
   
           {/* Outer div */}   
           <div className="w-full px-4 md:w-[80%] mt-6">
               {/* Heading/button */}
               <div>
                   {/* button */}
                   <div className=" transition-all duration-300 ease-out hover:-translate-y-1">
                       <Link
                           to=".."
                           className="flex items-center font-semibold text-[14px] gap-2 text-brand-secondary motion-card-button
                           cursor-pointer">
                            <FiArrowLeft />
                           Back to tickets
                       </Link>
                   </div>
   
                   {/* heading */}
                   <div>
                       <h1 className="lg:text-[35px] md:text-[30px] text-[24px] text-brand-primary font-extrabold ">Who’s joining the crowd?</h1>
                       <p className="lg:text-[16px] text-[14px] text-[#707087] font-medium ">Add your details so we can send your ticket to the right place.</p>
                   </div>
               </div>
               
   
               {/* Card container */}
               <div className="mx-auto">
                   {/* Card div */}
                   <div className="w-full grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr] mt-6 ">
   
                       {/* Tickets Value */}
                       <div className="bg-white rounded-3xl p-6 self-start">
   
                           {/* heading */}
                           <div className="flex justify-between items-center mt-3">
                               <div>
                                   <h1 className="lg:text-[30px]  text-[24px] text-brand-primary font-extrabold ">Buyer details</h1>
                               </div>
                               <div>
                                   <p className="font-semibold text-[14px] py-1 px-3 text-brand-secondary bg-brand-secondary/10 rounded-2xl">{ticket.name} &times; {order.qty}</p>
                               </div>
                           </div>


   
                           {/* ticket field */}
                           <div className="mt-6">
                                {/* Name field */}
                                <div>
                                    <h2 className="text-[16px] font-semibold text-brand-primary">Full Name</h2>
                                    <input
                                    placeholder="example, Ada Okafor"
                                    type="text"
                                    className={`w-full rounded-xl  bg-white px-4 py-3 text-brand-light-text outline-none focus:outline-none focus:ring-0 mt-3 ${errors.fullName ? "border-2 border-red-600" :"border border-brand-light-text/30"}`}
                                    {...field('fullName')}
                                    />
                                    {errors.fullName && <p className="text-red-600 text-[12px] font-medium mt-2">{errors.fullName}</p>}
                                </div>

                                {/* field two */}
                                <div className="mt-5">
                                    <h2 className="text-[16px] font-semibold text-brand-primary">Email</h2>
                                    <input
                                    placeholder="ada.okafor@example.com"
                                    type="email"
                                    className={`w-full rounded-xl  bg-white px-4 py-3 text-brand-light-text outline-none focus:outline-none focus:ring-0 mt-3 ${errors.email ? "border-2 border-red-600" :"border border-brand-light-text/30"}`}
                                    {...field('email')}
                                    />
                                     {errors.email && <p className="text-red-600 text-[12px] font-medium mt-2">{errors.email}</p>}
                                    <p className="text-[12px] text-brand-light-text mt-2">Your ticket and receipt will be sent here.</p>
                                </div>

                                {/* field two */}
                                <div className="mt-5">
                                    <h2 className="text-[16px] font-semibold text-brand-primary">Phone Number</h2>
                                    <input
                                    placeholder="+234 803 555 0124"
                                    type="tel"
                                    className={`w-full rounded-xl  bg-white px-4 py-3 text-brand-light-text outline-none focus:outline-none focus:ring-0 mt-3 ${errors.tel ? "border-2 border-red-600" :"border border-brand-light-text/30"}`}
                                    {...field('tel')}
                                    />
                                     {errors.tel && <p className="text-red-600 text-[12px] font-medium mt-2">{errors.tel}</p>}
                                </div>
                           </div>
   

   
                       {/* segment */}
                       <div className="bg-[#F0EBFC] rounded-2xl p-5 flex items-start gap-3 mt-5">
                           <LuLock  className="text-brand-primary" size={20} />
                           <div>
                               <h1 className="text-[16px] text-brand-primary font-bold">Picked up right where you left off</h1>
                               <p className="text-[13px] text-brand-primary font-medium">Your {ticket.name} selection from Buy Now is ready. No need to choose a ticket again.</p>
                           </div>
                       </div>
   
                       {/* Continue button */}
                       <button className="bg-brand-secondary text-white text-[18px] font-bold py-3 px-4 w-full rounded-3xl mt-5 transition-all duration-300 ease-out hover:-translate-y-1 cursor-pointer hover:text-brand-secondary hover:bg-brand-secondary/20"
                       onClick={handleContinue}>
                           Continue to Review         
                       </button>
   
                       {/* Comment */}
                       <div className="mt-5 flex justify-center items-center">
                           <p className="text-[13px] text-[#707087] font-light">Your order stays with you at every step</p>
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

export default DetailsStep;