import { Hero } from "../components/landing-sections/Hero";
import { useState } from "react";
import { mockEvents } from "../components/landing-data/mockEvents";
import { SearchBar } from "../components/landing-sections/SearchBar";
import { UpcomingEvents } from "../components/landing-sections/UpcomingEvents";
import { months } from "../components/landing-data/months";
import { CreateYourEvent } from "../components/landing-sections/MakeYourOwnEvent"
import { Brands } from "../components/landing-sections/Brands";
import { Blogs } from "../components/landing-sections/Blogs";
import { Footer } from "../components/landing-layout/Footer";

function Landing() {
  const [searchTerm, setSearchTerm] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");

  const filteredEvents = mockEvents.filter((event) => {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesPlace =
      place === "" || event.place.toLowerCase().includes(place.toLowerCase());
    const matchesDate =
      date === "" ||
      event.date.split(" ")[1].replace(",", "") ===
        months.find((m) => m.value === date)?.label;

    return matchesSearch && matchesPlace && matchesDate;
  });

  return (
    <div>
      <div className="relative">
        <div>
          <Hero />
        </div>
        <div className="absolute md:bottom-[-12%] bottom-[-35%] left-1/2 -translate-x-1/2 w-full z-99">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            place={place}
            setPlace={setPlace}
            date={date}
            setDate={setDate}
          />
        </div>
      </div>

      <div className="flex justify-center items-center space-x-5 md:mt-[10%] mt-[70%]">
        <UpcomingEvents events={filteredEvents} />
      </div>

      <div>

      </div>
        <CreateYourEvent />
        <Brands />
        <Blogs />
        <Footer />
    </div>
  );
}

export default Landing;
