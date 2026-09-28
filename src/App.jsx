import { Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing.jsx"
import AuthPage from "./pages/auth/AuthPage.jsx"
import Login from "./pages/auth/Login.jsx"
import Signup from "./pages/auth/Signup.jsx"
import CreateEvent from "./pages/CreateEvent.jsx"
import EventDetail from "./pages/EventDetail.jsx"
import TicketSelection from "./pages/TicketSelection.jsx"
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
        <Route path="/events/:id/tickets" element={<TicketSelection />} />
    </Routes>
  )
}

export default App
