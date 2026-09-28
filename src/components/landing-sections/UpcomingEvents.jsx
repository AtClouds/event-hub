import { EventCard } from "../Landing-page-UI/EventCard"
import { ChevronDown, ChevronUp } from "lucide-react"
import { eventCategories } from "../landing-data/eventCategories";
import { useState } from "react";


// UpcomingEvents.jsx (just renders whatever array it's handed)
export function UpcomingEvents({ events }) {

   const [category, setCategory] = useState("");
   const [isOpen, setIsOpen] = useState(false);

    const categoryFilteredEvents = events.filter((event) => {
    return category === "" || event.categories.includes(category);
    });

    const previewEvents = categoryFilteredEvents.slice(0, 6);

  return (
    <div className="md:px-0 px-4">
      {/* Header and dropdown event filter */}
      <div className="flex justify-between items-center mb-8">

         <div>
             <h1 className="text-brand-primary lg:text-[40px] md:text-[20px] text-[18px] font-bold ">Upcoming Events</h1>
         </div>

          <div className="relative">
               {/* dropdown */}
           <div>
               {/* container */}
                 <div className="flex justify-center md:space-x-8 space-x-2 items-center bg-brand-primary/10 md:rounded-[20px] rounded-[5px] md:py-2 py-1  md:px-4 px-2">
                     <p className="lg:text-[18px] md:text-[14px] text-[12px] text-brand-primary font-medium">{category === "" ? "Any Category" : category}</p>
                  {!isOpen && (
                  <ChevronDown 
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-4 h-4 md:w-6 md:h-6 text-brand-primary font-bold cursor-pointer" 
                  />
                )}
                {isOpen && (
                  <ChevronUp 
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-4 h-4 md:w-6 md:h-6 text-brand-primary font-bold  cursor-pointer" 
                  />
                )}
                 </div>

                  {/*Dropdown of events months*/}
                  {
                  isOpen && (
                  <div  className="absolute top-full left-0 w-full z-20 mt-2 bg-brand-primary/10 backdrop-blur-md max-h-[100px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/40 scrollbar-track-transparent rounded-2xl p-3">
                      {
                        eventCategories.map((cat) => (
                          <div
                          key={cat.key}
                          onClick={() => {
                              setCategory(cat.label);
                              setIsOpen(false);
                          }}
                          className="cursor-pointer hover:bg-white/30 px-2 py-1 text-[16px] rounded-[8px]"
                          >
                          {cat.label}   
                          </div>
                        ))
                      }
                  </div>   
                  )}
          </div>
          </div>
         

      </div>


      {/* Upcoming events preview cards */}
      <div className="">
      {categoryFilteredEvents.length === 0 ? "Hey! we don't currently have any event's by that search!" :
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
      }
      
      </div>

      {/* load more button */}
      <div className="flex justify-center items-center mt-12 mb-12
      group/button       
      text-[18px]
      font-medium
      text-balck
      transition-all
      duration-300
      ease-out
      mb-2
      hover:-translate-y-1
      hover:border-brand-primary/30
      hover:bg-brand-secondary[0.2]">
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
      " >
          Load More  
      </button>
      </div>
        
    </div>
    
  );
}