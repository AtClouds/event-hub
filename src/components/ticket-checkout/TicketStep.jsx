import { useOutletContext } from "react-router";
import { Link } from "react-router";
import { FiArrowLeft } from "react-icons/fi";
import { HiOutlineTicket } from "react-icons/hi2"; 
import { OderSummary } from "../ticket-check-out-UI/OrderSummary"; 


function TicketStep () {

    const { event, ticket, order, setOrder, subtotal } = useOutletContext();

      const formatPrice = (amount, currency) =>
        new Intl.NumberFormat("en-NG", {
            style: "currency",
            currency,
            maximumFractionDigits: 0,
      }).format(amount);   

     

   

    return(
        <div className="bg-[#F7F7FC] flex justify-center  min-h-screen">

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
                    <h1 className="lg:text-[35px] md:text-[30px] text-[24px] text-brand-primary font-extrabold ">Your night starts here.</h1>
                    <p className="lg:text-[16px] text-[14px] text-[#707087] font-medium ">Your {ticket.name} ticket is selected. Choose how many guests are joining you.</p>
                </div>
            </div>
            

            {/* Card container */}
            <div className="mx-auto">
                {/* Card div */}
                <div className="w-full grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr] mt-6 ">

                    {/* Tickets Value */}
                    <div className="bg-white rounded-3xl p-6 self-start">
                        <p className="text-[12px] text-brand-secondary font-semibold uppercase">Your Selected Ticket</p>

                        {/* Ticket Type */}
                        <div className="flex justify-between items-center mt-3">
                            <div>
                                <h1 className="lg:text-[30px]  text-[24px] text-brand-primary font-extrabold ">{ticket.name} Ticket</h1>
                                <p className="text-[14px] text-[#707087] font-medium">{formatPrice(ticket.price, ticket.currency)} per ticket</p>
                            </div>
                            <div>
                                <p className="font-semibold text-[14px] py-1 px-3 text-brand-secondary bg-brand-secondary/10 rounded-2xl">Selected</p>
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

                        {/* Benefits of ticket */}
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
                                    className="font-bold text-[20px] text-brand-light-text cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 ">-</p>
                                    <p className="text-[20px] text-brand-primary font-bold ">{order.qty}</p>
                                    <div>
                                    <p onClick={() => {
                                        setOrder({ ...order, qty: order.qty + 1 })
                                    }}
                                    className="font-bold text-[20px] text-brand-secondary cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 ">+</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Subtotal */}
                    <div className="flex justify-between items-center mt-2">
                        <p className="text-[14px] text-brand-light-text font-light">Ticket subtotal</p>
                        <p className="text-[16px] text-brand-primary font-semibold">{formatPrice(subtotal, ticket.currency)}</p>
                    </div>

                    {/* segment */}
                    <div className="bg-[#F0EBFC] rounded-2xl p-5 flex items-start gap-3 mt-5">
                        <HiOutlineTicket  className="text-brand-primary" size={20} />
                        <div>
                            <h1 className="text-[16px] text-brand-primary font-bold">Picked up right where you left off</h1>
                            <p className="text-[13px] text-brand-primary font-medium">Your {ticket.name} selection from Buy Now is ready. No need to choose a ticket again.</p>
                        </div>
                    </div>

                    {/* Continue button */}
                    <Link to="details">
                    <button className="bg-brand-secondary text-white text-[18px] font-bold py-3 px-4 w-full rounded-3xl mt-5 transition-all duration-300 ease-out hover:-translate-y-1 cursor-pointer hover:text-brand-secondary hover:bg-brand-secondary/20">
                        Continue          
                    </button>
                    </Link>

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

export default TicketStep;