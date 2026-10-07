




export function TicketCards ({ticket}) {

    return(
        <div>
            {/* outer div */}
            <div className="bg-white group rounded-2xl overflow-hidden shadow-[0_10px_15px_rgba(0,0,0,0.12)] py-5 px-12 cursor-pointer   hover:bg-brand-primary">
                {/* ticket type */}
                <h1 className="text-[14px] lg:text-[16px] font-bold text-brand-primary transition-colors duration-300 group-hover:text-white font-bold ">{ticket.name}</h1>
                {/* Price */}
                <h1 className="text-[18px] lg:text-[24px] font-extrabold text-brand-secondary mt-5">
                    {new Intl.NumberFormat("en-NG", {
                        style: "currency",
                        currency: ticket.currency,
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                    }).format(ticket.price)}
                </h1>
                {/* benefits */}
                <ul className="flex flex-col gap-3 mt-4">
                {ticket.benefits.map((benefit, index) => (
                    <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-[#6A6A6A]"
                    >
                    <span className="text-[#6A6A6A] transition-colors duration-300  group-hover:text-white text-[14px]">✓</span>
                    <span className="text-[#6A6A6A] transition-colors duration-300 group-hover:text-white text-[14px]">{benefit}</span>
                    </li>
                ))}
                </ul>
                {/* Buttons */}
                <div className=" transition-all duration-300 ease-out hover:-translate-y-1">
                    <button className="bg-brand-secondary py-2 rounded-3xl text-white text-[14px] w-full cursor-pointer mt-4 transition motion-card-button">
                    Buy Now
                    </button>
                </div>
                
            </div>
        </div>
    );
}