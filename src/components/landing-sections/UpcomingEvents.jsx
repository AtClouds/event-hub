import { EventCard } from "../Animmation/motion-card/EventCard"


// UpcomingEvents.jsx (just renders whatever array it's handed)
export function UpcomingEvents({ events }) {
  return (
    <div>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}