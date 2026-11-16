import { Routes, Route, useLocation } from "react-router-dom"
import Landing from "./pages/Landing.jsx"
import AuthPage from "./pages/auth/AuthPage.jsx"
import Login from "./pages/auth/Login.jsx"
import Signup from "./pages/auth/Signup.jsx"
import AllEvent from "./pages/AllEvent.jsx"
import EventDetail from "./pages/EventDetail.jsx"
import TicketCheckout from "./pages/TicketCheckOut.jsx"
import TicketStep from "./components/ticket-checkout/TicketStep.jsx"
import DetailsStep from "./components/ticket-checkout/DetailsStep.jsx"
import ReviewStep from "./components/ticket-checkout/ReviewStep.jsx"
import PaymentStep from "./components/ticket-checkout/PaymentStep.jsx"
import SuccessStep from "./components/ticket-checkout/SuccessStep.jsx"
import DigitalTicketStep from "./components/ticket-checkout/DigitalSteps.jsx"
import SoldOut from "./components/ticket-checkout/SoldOut.jsx"
import { AnimatePresence } from "motion/react";
import PageTransition from "./components/Landing-page-UI/PageTransition.jsx";

import './App.css'

function App() {

     const location = useLocation();

    const pageKey = location.pathname.split("/").slice(0, 5).join("/");

  return (
     <AnimatePresence mode="wait">
     <Routes location={location} key={pageKey}>
        <Route path="/" element={<PageTransition><Landing /></PageTransition>} />
        <Route path="/auth-page" element={<PageTransition><AuthPage /></PageTransition>} >
            <Route path="login" element={<Login />} />
            <Route path="sign-up" element={<Signup />} />
        </Route>
        <Route path="/all-event" element={<PageTransition><AllEvent /></PageTransition>} />
        <Route path="/events/:id" element={<PageTransition><EventDetail /></PageTransition>} />
        <Route path="/events/:id/checkout/:ticketId" element={<PageTransition><TicketCheckout /></PageTransition>}>
            <Route index element={<TicketStep />} />
            <Route path="details" element={<DetailsStep />} />
            <Route path="review" element={<ReviewStep />} />
            <Route path="payment" element={<PaymentStep />} />
            <Route path="success" element={<SuccessStep />} />
            <Route path="digital-ticket" element={<DigitalTicketStep />} />
            <Route path="sold-out" element={<SoldOut />} />
        </Route>
     </Routes>
    </AnimatePresence>
  )
}

export default App
