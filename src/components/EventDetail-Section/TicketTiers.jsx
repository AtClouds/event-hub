import { TicketCards } from "../EventDetails-UI/TicketCards"


export function TicketTiers({event}) {


    return(
        <div className="bg-[#EFE1FF] flex justify-center items-center">
            
            {/* Outer div */}
            <div className="py-15 md:px-10 px-5 flex flex-col  lg:w-[90%] w-full">
                {/* headings */}
                <div className="mb-6 text-center">
                <p className="lg:text-[16px] text-[13px]  text-brand-secondary font-normal ">
                    Choose your experience
                </p>
                <h1 className="lg:text-[35px] text-[25px] text-brand-primary font-extrabold ">
                   Ticket Tiers
                </h1>
                </div>

                {/* card layout */}
                <div className="flex flex-wrap justify-center gap-10">
                {event.tickets.map((ticket) => (
                    <TicketCards key={ticket.id} ticket={ticket} className="w-full sm:w-[300px]" />
                ))}
                </div>
            </div>
        </div>
    );
}