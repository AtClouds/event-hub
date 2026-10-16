import { Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing.jsx"
import AuthPage from "./pages/auth/AuthPage.jsx"
import Login from "./pages/auth/Login.jsx"
import Signup from "./pages/auth/Signup.jsx"
import CreateEvent from "./pages/CreateEvent.jsx"
import EventDetail from "./pages/EventDetail.jsx"
import TicketCheckout from "./pages/TicketCheckOut.jsx"
import TicketStep from "./components/ticket-checkout/TicketStep.jsx"
import DetailsStep from "./components/ticket-checkout/DetailsStep.jsx"
import ReviewStep from "./components/ticket-checkout/ReviewStep.jsx"
import PaymentStep from "./components/ticket-checkout/PaymentStep.jsx"
import SuccessStep from "./components/ticket-checkout/SuccessStep.jsx"
import DigitalTicketStep from "./components/ticket-checkout/DigitalSteps.jsx"

import './App.css'

function App() {
 
    console.log("APP IS RUNNING");

  return (
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth-page" element={<AuthPage />} >
            <Route path="login" element={<Login />} />
            <Route path="sign-up" element={<Signup />} />
        </Route>
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/events/:id/checkout/:ticketId" element={<TicketCheckout />}>
            <Route index element={<TicketStep />} />
            <Route path="details" element={<DetailsStep />} />
            <Route path="review" element={<ReviewStep />} />
            <Route path="payment" element={<PaymentStep />} />
            <Route path="success" element={<SuccessStep />} />
            <Route path="digital-ticket" element={<DigitalTicketStep />} />
        </Route>
    </Routes>
  )
}

export default App
