import { Hero } from "../components/EventDetail-Section/Hero";
import { useParams } from "react-router-dom";
import { mockEvents } from "../components/landing-data/mockEvents"
import { AboutUs } from "../components/EventDetail-Section/AboutUs"
import { LineUps } from "../components/EventDetail-Section/LineUps";
import { Featuring } from "../components/EventDetail-Section/Featuring";

function EventDetails() {

    const { id } = useParams();

    const event = mockEvents.find(
    (event) => event.id === Number(id)
    );

 
  return (
    <div>
       <Hero event={event} />
       <AboutUs event={event} />
       <LineUps  event={event} /> 
       <Featuring event={event} />
    </div>
  )
}

export default EventDetails;
