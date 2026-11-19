import { Navbar } from "../components/landing-layout/NavBar";
import { Footer } from "../components/landing-layout/Footer";
import { useState } from "react";
import { mockEvents } from "../components/landing-data/mockEvents";
import { AllEventSearch } from "../components/Landing-page-UI/AllEventSearch";
import { EventCard } from "../components/Landing-page-UI/EventCard";
import { LuLoaderCircle, LuSearchX } from "react-icons/lu";

function AllEvent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");

  const filteredEvents = mockEvents.filter((event) => {
    const matchesSearch =
      searchTerm === "" ||
      event.title.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPlace =
      place === "" ||
      event.venue.city.toLowerCase().includes(place.toLowerCase());

    const matchesDate = date === "" || event.dateISO === date;

    const matchesCategory =
      category === "" || event.categories.includes(category);

    return matchesSearch && matchesPlace && matchesDate && matchesCategory;
  });

  const clearFilters = () => {
    setSearchTerm("");
    setPlace("");
    setDate("");
    setCategory("");
  };

  const [visibleCount, setVisibleCount] = useState(3);
  const visibleEvents = filteredEvents.slice(0, visibleCount);

  const allLoaded = visibleCount >= filteredEvents.length;
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = () => {
    if (isLoading) return;
    setIsLoading(true);

    setTimeout(() => {
      setVisibleCount((prev) => prev + 6);
      setIsLoading(false);
    }, 4000);
  };

  return (
    <div>
      {/*NavBar*/}
      <div className="bg-linear-to-r from-brand-secondary to-brand-primary py-5">
        <Navbar />
      </div>

      {/* Main contents */}
      <div className="xl:px-[12%] lg:px-[6%] md:px-[5%] px-4">
        {/* Title */}
        <div className="mt-8">
          <h1 className="text-[30px] lg:text-[40px] xl:text-[45px] text-brand-primary font-bold ">
            All Events
          </h1>
          <p className="text-[14px] lg:text-[18px] text-brand-light-text font-light ">
            Find your next live experience, from concerts to unforgettable
            shows.
          </p>
        </div>

        {/* Header and dropdown event filter */}
        <div className="mt-7">
          <AllEventSearch
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            place={place}
            setPlace={setPlace}
            date={date}
            setDate={setDate}
            category={category}
            setCategory={setCategory}
            clearFilters={clearFilters}
          />
        </div>

        {/* Events preview cards */}
        <div className="lg:mt-12 md:mt-10 mt-6">
          {visibleEvents.length === 0 ? (
            <div className="flex justify-center items-center flex-col ">
              {/* Icon */}
              <div className="bg-[#F2F4FF] p-8 rounded-full  ">
                <LuSearchX size={40} className="text-[#3D37F1] " />
              </div>

              <h1 className="lg:text-[40px] md:text-[30px] text-[24px] text-brand-primary font-black text-center mt-2">
                No events match your filters
              </h1>
              <p className="text-[14px] lg:text-[16px] text-brand-light-text font-normal w-[80%] md:w-[60%] lg:w-[50%] text-center mt-2 ">
                Try a different search, date or location, or clear your filters
                to explore all events.
              </p>

              <button
                onClick={clearFilters}
                className="rounded-3xl bg-[#f5157d] mt-4 text-[16px] py-3 px-6 font-semibold text-white cursor-pointer transition-all
      duration-300 ease-out hover:-translate-y-1  "
              >
                Apply filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-col-2 lg:gap-10 xl:gap-15 gap-4">
              {visibleEvents.map((event, index) => (
                <div>
                  <div
                    key={event.id}
                    className={index >= 3 ? "hidden lg:block" : ""}
                  >
                    <EventCard event={event} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={visibleEvents.length === 0 ? "hidden" : "block"}>
          {/* load more button */}

          <div
            className="flex justify-center items-center mt-12 
                    group/button       
                    text-[18px]
                    font-medium
                    text-black
                    transition-all
                    duration-300
                    ease-out
                    mb-2
                    hover:-translate-y-1
                    hover:border-brand-primary/30
                    hover:bg-brand-secondary[0.2]"
          >
            <button
              className="
                      flex 
                      items-center
                      justify-between
                      rounded-xl
                      border-2 border-brand-primary
                      hover:border-0
                      hover:bg-[#3D37F1]
                      hover:text-white
                      px-6 py-3 
                      text-sm
                      font-medium
                      text-black
                      transition
                      hover:bg-brand-secondary[0.2]
                      text-[16px]
                      motion-card-button
                      cursor-pointer
                      ... disabled:bg-brand-light-bg
                       disabled:border-brand-light-text
                        disabled:text-brand-light-text 
                        disabled:cursor-not-allowed disabled:opacity-60
                    "
              onClick={loadMore}
              disabled={isLoading || allLoaded}
            >
              {isLoading ? (
                <div className="flex gap-3">
                  <LuLoaderCircle size={18} className="animate-spin" />
                  Loading...
                </div>
              ) : (
                "Load more"
              )}
            </button>
          </div>

          {allLoaded && (
            <p className="mt-3 text-center text-[16px] text-brand-light-text">
              You've seen all events
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default AllEvent;
