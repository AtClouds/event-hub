import { Hero } from '../components/landing-sections/Hero'
import { useState } from 'react';
import { mockEvents } from '../components/landing-data/mockEvents';
import { SearchBar } from '../components/landing-sections/SearchBar';
import { UpcomingEvents } from '../components/landing-sections/UpcomingEvents';



function Landing() {


    const [searchTerm, setSearchTerm] = useState("");
    const [place, setPlace] = useState("");
    const [date, setDate] = useState("");

    const filteredEvents = mockEvents.filter((event) => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPlace = place === "" || event.place.toLowerCase().includes(place.toLowerCase());
      const matchesDate = date === "" || event.date.split("-")[1] === date;
      return matchesSearch && matchesPlace && matchesDate;
    });
 
  return (
    <div className='relative'>
        <div>
           <Hero />
        </div>
        <div className='absolute bottom-[-12%] left-1/2 -translate-x-1/2 w-full'>
        <SearchBar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        place={place}
        setPlace={setPlace}
        date={date}
        setDate={setDate}
        />
        <UpcomingEvents events={filteredEvents} />
        </div>
    </div>
  )
}

export default Landing;
