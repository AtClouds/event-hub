import { CheckoutNavbar } from "../components/ticket-checkout/nav-footer/CheckoutNavbar"
import { CheckoutFooter } from "../components/ticket-checkout/nav-footer/CheckoutFooter";
import { Outlet } from "react-router";
import { mockEvents } from "../components/landing-data/mockEvents";
import { useParams } from "react-router";
import { usePersistedState } from "../components/ticket-check-out-UI/usePersistedState";


function TicketCheckout () {

       const { id, ticketId } = useParams();

        const event = mockEvents.find((e) => String(e.id) === id); 
        const ticket = event?.tickets.find((t) => t.id === ticketId);

        //Hook call   
           const [order, setOrder] = usePersistedState(`checkout:${ticketId}`, { qty: 1 }); 
           const subtotal = order.qty * ticket.price;
           const orderFee = 250;
           const bookingFee = subtotal + orderFee;
        
        



        if (!event || !ticket) return <p>Ticket not found</p>;
       
      return (
        <div>
        <CheckoutNavbar />
        <Outlet context={{ event, ticket, order, setOrder, subtotal, orderFee, bookingFee }} />  
        <CheckoutFooter  />  
        </div>
      )
}

export default TicketCheckout;
