import { useOutletContext } from "react-router";


function TicketStep () {

    const { event, ticket } = useOutletContext();

         
    
    
   

    return(
        <div className="bg-[#F0EBFC] flex justify-center items-center">
        {/* Outer div */}
        <div className="md:w-[80%] flex flex-col">

            {/* Tickets Value */}
            <div>
                 
            </div>

            {/* Live Ticket Preview */}
            <div></div>
        </div>
        </div>
    );
}

export default TicketStep;