import { Hero } from "../components/EventDetail-Section/Hero";
import { useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { mockEvents } from "../components/landing-data/mockEvents";
import { AboutUs } from "../components/EventDetail-Section/AboutUs";
import { LineUps } from "../components/EventDetail-Section/LineUps";
import { Featuring } from "../components/EventDetail-Section/Featuring";
import { TicketTiers } from "../components/EventDetail-Section/TicketTiers";
import { Gallery } from "../components/EventDetail-Section/Gallery";
import { Venue } from "../components/EventDetail-Section/Venue";
import { Footer } from "../components/landing-layout/Footer";

function EventDetails() {
  const { id } = useParams();
  const { hash } = useLocation();

  const event = mockEvents.find((event) => event.id === Number(id));

  useEffect(() => {
    if (hash !== "#tickets" || !event) return;

    document.getElementById("tickets")?.scrollIntoView({ behavior: "smooth" });
  }, [hash, event]);

  return (
    <div>
      <Hero event={event} />
      <AboutUs event={event} />
      <LineUps event={event} />
      {event.featuredPeople?.items?.length > 0 && <Featuring event={event} />}
      <TicketTiers event={event} />
      {event.gallery?.length > 0 && <Gallery event={event} />}
      <Venue event={event} />
      <Footer event={event} />
    </div>
  );
}

export default EventDetails;
