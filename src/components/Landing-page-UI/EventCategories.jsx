
import { ChevronDown, ChevronUp } from "lucide-react"
import {eventCategories } from "../landing-data/eventCategories"
import { useState } from "react";

export function EventCategories ({ category, setCategory }) {
         const [isOpen, setIsOpen] = useState(false);
    return(
                 <div className="relative">
                      {/* dropdown */}
                  <div>
                      {/* container */}
                        <div className="flex justify-between items-center bg-[#F2F4FF]  rounded-3xl   py-3  md:px-6 px-4 ">
                            <p className="lg:text-[14px]  text-[14px] text-brand-primary font-medium">{category === "" ? "Any Category" : category}</p>
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
                                 className="cursor-pointer hover:bg-white/30 px-2 py-1 text-[14px] rounded-[8px]"
                                 >
                                 {cat.label}   
                                 </div>
                               ))
                             }
                         </div>   
                         )}
                 </div>
                 </div>
    );
}