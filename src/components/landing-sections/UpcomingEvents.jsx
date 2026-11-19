import { EventCard } from "../Landing-page-UI/EventCard";
import { EventCategories } from "../Landing-page-UI/EventCategories";
import { useState } from "react";
import { Link } from "react-router";
import { LuSearchX } from "react-icons/lu";

// UpcomingEvents.jsx (just renders whatever array it's handed)
export function UpcomingEvents({ events }) {
  const [category, setCategory] = useState("");

  const categoryFilteredEvents = events.filter((event) => {
    return category === "" || event.categories.includes(category);
  });

  const clearCategory = () => setCategory("");

  const previewEvents = categoryFilteredEvents.slice(0, 6);

  return (
    <div className="md:px-0 px-4">
      {/* Header and dropdown event filter */}
      <div
        className={`flex justify-between items-center mb-8  ${
          categoryFilteredEvents.length === 0
            ? "justify-center"
            : "justify-between"
        }`}
      >
        <div>
          <h1 className="text-brand-primary xl:text-[40px] lg:text-[30px] md:text-[20px] text-[14px] font-bold">
            Upcoming Events
          </h1>
        </div>
        <EventCategories
          category={category}
          setCategory={setCategory}
          className={`${categoryFilteredEvents.length === 0 ? "hidden" : "block"}`}
        />
      </div>

      {/* Upcoming events preview cards */}
      <div className="">
        {categoryFilteredEvents.length === 0 ? (
          <div className="flex justify-center items-center flex-col ">
            {/* Icon */}
            <div className="bg-[#F2F4FF] p-8 rounded-full  ">
              <LuSearchX size={40} className="text-[#3D37F1] " />
            </div>

            <h1 className="lg:text-[40px] md:text-[30px] text-[24px] text-brand-primary font-black text-center mt-2">
              No events match your filters
            </h1>
            <p className="text-[14px] lg:text-[16px] text-brand-light-text font-normal w-[80%] md:w-[60%] lg:w-[50%] text-center mt-2 ">
              Try a different search, date or location, or clear your filters to
              explore all events.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-col-2 xl:gap-15 gap-4">
            {previewEvents.map((event, index) => (
              <div
                key={event.id}
                className={index >= 3 ? "hidden lg:block" : ""}
              >
                <EventCard event={event} />
              </div>
            ))}
          </div>
        )}
      </div>

      {categoryFilteredEvents.length === 0 ? (
        <div className="flex justify-center">
          <button
            className="rounded-3xl bg-[#f5157d] mt-4 text-[16px] py-3 px-6 font-semibold text-white cursor-pointer  transition-all
      duration-300 ease-out hover:-translate-y-1"
            onClick={clearCategory}
          >
            Any Category
          </button>
        </div>
      ) : (
        <Link to="/all-event">
          <div
            className="flex justify-center items-center mt-12 mb-12
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
        border border-brand-primary
        px-4 py-2 
        text-sm
        font-medium
        text-black
        transition
        hover:bg-brand-secondary[0.2]

        motion-card-button
        cursor-pointer
      "
            >
              View More
            </button>
          </div>
        </Link>
      )}
    </div>
  );
}
