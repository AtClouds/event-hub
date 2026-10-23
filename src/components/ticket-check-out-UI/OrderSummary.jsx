import { useOutletContext } from "react-router";
import { LuCalendar, LuMapPin } from "react-icons/lu";

export function OderSummary () {

    const { event, ticket, order, orderFee, bookingFee, subtotal } = useOutletContext();

     const formatPrice = (amount, currency) =>
        new Intl.NumberFormat("en-NG", {
            style: "currency",
            currency,
            maximumFractionDigits: 0,
      }).format(amount);   


    return(
        <div className="bg-white rounded-3xl p-6">
            {/* title and order */}
             <div className="flex justify-between items-center mt-3">
                <h1 className="lg:text-[25px]  text-[20px] text-brand-primary font-bold ">Order Summary</h1>

                <p className="font-semibold text-[14px] py-1 px-3 text-brand-secondary bg-brand-secondary/10 rounded-2xl">
                    {ticket.name} &times; {order.qty}
                </p>
             </div>

             {/* event flyer */}
             <div className="mt-5 flex gap-5 md:gap-0 items-center">
                <img src={event.banner} alt="event banner"  className="md:w-full md:h-[200px] w-1/3 h-[100px] object-cover rounded-2xl" />
                <h1 className="md:hidden lg:text-[25px]  text-[24px] text-brand-primary font-bold ">{event.title}</h1>
             </div>

            {/* title, date  and venue */}
            <div className="mt-5 border-b border-brand-light-text/20 pb-5">
                <h1 className="hidden md:block lg:text-[25px]  text-[20px] text-brand-primary font-bold">{event.title}</h1>

                <div className="text-[16px] font-light gap-5 mt-4 flex items-center">
                    <LuCalendar className="text-brand-secondary" size={24} />
                    <p className="text-brand-primary">{event.date} · {event.startTime}</p>
                </div>

                <div className="text-[16px] font-light gap-5 mt-3 flex items-center">
                    <LuMapPin className="text-brand-secondary" size={24} />
                    <p className="text-brand-primary">{event.venue.name} · {event.venue.address}</p>
                </div>
            </div>

            {/* Price preview */}
            <div className="mt-6 border-b border-brand-light-text/20 pb-5">
                <div className="text-[16px] font-light gap-5 mt-3 flex items-center justify-between">
                    <p className="text-brand-primary"> {ticket.name} · {order.qty} {order.qty > 1 ? "tickets" : "ticket"} </p>
                    <p className="text-brand-primary font-semibold">{formatPrice(subtotal, ticket.currency)}</p>
                </div>

                 <div className="text-[16px] font-light gap-5 mt-3 flex items-center justify-between">
                    <p className="text-brand-primary">SubTotal</p>
                    <p className="text-brand-primary font-semibold">{formatPrice(subtotal, ticket.currency)}</p>
                </div>

                 <div className="text-[16px] font-light gap-5 mt-3 flex items-center justify-between">
                    <p className="text-brand-primary">Booking fee · per order</p>
                    <p className="text-brand-primary font-semibold">{formatPrice(orderFee, ticket.currency)}</p>
                </div>
            </div>

            {/* Total price preview */}
            <div className="mt-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-brand-primary text-[16px] font-bold ">Total ({ticket.currency})</h1>
                    <h1 className="text-brand-primary text-[24px] font-bold">{formatPrice(bookingFee, ticket.currency)}</h1>
                </div>

                <p className="text-[12px] text-brand-light-text mt-5 mb-3">Includes a ₦250 booking fee. No hidden charges.</p>
            </div>

        </div>
    );
}