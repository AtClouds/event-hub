import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"
import { months } from "../landing-data/months";

export function SearchBar({
  searchTerm,
  setSearchTerm,
  place,
  setPlace,
  date,
  setDate,
}) {

    const [isOpen, setIsOpen] = useState(false);
    const [isMonth, setIsMonth] = useState('Any date')

  return (
    <div className="w-full flex justify-center items-center md:px-0 px-4  transition-all duration-300 ease-out mb-2 hover:-translate-y-2
     ">
      <div className="bg-brand-primary/80 backdrop-blur-md xl:w-[77%] md:w-[90%] w-full  flex flex-col md:flex-row items-center justify-between lg:px-20 px-10 gap-3  rounded-[20px] md:py-10 py-10 py-8transition motion-card-button ">
        {/* search event by title */}
        <div className="border-b border-white/50 w-full md:w-fit">
          <p className="text-[14px] text-white">Search Event</p>
          <input
            className="border-none md:w-[200px] lg:w-[300px] w-full outline-none bg-transparent mt-5 font-bold text-[18px] placeholder:text-white text-white pb-1 "
            placeholder="Search event"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>


        {/* search event by place */}
        <div className="border-b border-white/50 w-full md:w-fit">
            <p className="text-[14px] text-white">Place</p>
           <input 
            className="border-none outline-none lg:w-[300px] md:w-[200px] full bg-transparent mt-5 font-bold text-[18px] placeholder:text-white text-white pb-1"
            placeholder="Place"
           value={place} onChange={(e) => setPlace(e.target.value)} /> 
        </div>

        
        {/* search event by date */}
        <div className="w-full md:w-fit">
          <div >
            <p className="text-[14px] text-white">Date</p>
            <div className=" relative  mt-5  border-b border-white/50">

                 {/* container */}
                 <div className=" relative flex justify-start  xl:space-x-25 md:space-x-5 space-x-8 items-center ">
                    <p className="text-[18px] text-white font-bold pb-1">
                      {isMonth === "" ? "Any date" : isMonth}</p>

                   {!isOpen && (
                    <ChevronDown 
                      onClick={() => setIsOpen(!isOpen)}
                      className="w-6 h-6 text-[18px] text-white font-bold pb-1 cursor-pointer" 
                    />
                  )}
                  {isOpen && (
                    <ChevronUp 
                      onClick={() => setIsOpen(!isOpen)}
                      className="w-6 h-6 text-[18px] text-white font-bold pb-1 cursor-pointer" 
                    />
                  )}
                 </div>
                 
                 {/*Dropdown of events months*/}
                    {
                    isOpen && (
                     <div  className="absolute top-full left-0 w-full z-20 mt-2 bg-brand-primary/10 backdrop-blur-md max-h-[100px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/40 scrollbar-track-transparent rounded-2xl p-3">
                        {
                          months.map((month) => (
                            <div
                            key={month.value}
                            onClick={() => {
                                setDate(month.value);
                                setIsOpen(false);
                                setIsMonth(month.label)
                            }}
                            className="cursor-pointer hover:bg-white/30 px-2 py-1 text-[16px] rounded-[8px]"
                            >
                             {month.label}   
                            </div>
                          ))
                        }
                     </div>   
                    )}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
