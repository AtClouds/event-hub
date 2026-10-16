import { CheckoutNavbar } from "../components/ticket-checkout/nav-footer/CheckoutNavbar"
import { Outlet } from "react-router";
import { mockEvents } from "../components/landing-data/mockEvents";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

function TicketCheckout () {

       const { id, ticketId } = useParams();

        const event = mockEvents.find((e) => String(e.id) === id); 
        const ticket = event?.tickets.find((t) => t.id === ticketId);

        // SessionStorage hook 
        function usePersistedState(key, initialValue) {
        const [value, setValue] = useState(() => {
            const saved = sessionStorage.getItem(key);
            return saved ? JSON.parse(saved) : initialValue;
        });

        useEffect(() => {
            sessionStorage.setItem("persisted", JSON.stringify(value))
        }, [value])

        return [value, setValue];
        }


        if (!event || !ticket) return <p>Ticket not found</p>;
       
  return (
    <div>
    <CheckoutNavbar />
    <Outlet context={{ event, ticket }} />    
    </div>
  )
}

export default TicketCheckout;
