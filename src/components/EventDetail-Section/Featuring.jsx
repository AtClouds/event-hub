import { GuestCard } from "../EventDetails-UI/GuestCard";
import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";

export function Featuring({ event }) {

  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const [dragLeft, setDragLeft] = useState(0);

  useEffect(() => {
    const update = () => {
      const overflow =
        trackRef.current.scrollWidth - viewportRef.current.offsetWidth;
      setDragLeft(-Math.max(0, overflow));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [event.featuredPeople.items]);


  return (
    <div className="flex justify-center items-center">
      {/* outer div */}
      <div className="py-15 md:px-10 px-5 flex flex-col  lg:w-[90%] w-full">
        {/* heading */}
        <div className="mb-6 text-center">
          <p className="lg:text-[16px] text-[13px]  text-brand-secondary font-normal ">
            Meet the voices behind the event
          </p>
          <h1 className="lg:text-[35px] text-[25px] text-brand-primary font-extrabold ">
            {event.featuredPeople.title}
          </h1>
        </div>

        {/* card layout */}
         <div ref={viewportRef} className="overflow-hidden pb-8">
            <motion.div
            ref={trackRef}
            drag={dragLeft < 0 ? "x" : false}
            dragConstraints={{ left: dragLeft, right: 0 }}
            dragElastic={0.1}
            className="flex gap-6 w-max mx-auto px-4 cursor-grab active:cursor-grabbing"
            >
            {event.featuredPeople.items.map((guest) => (
                <GuestCard guest={guest} key={guest.id} />
            ))}
            </motion.div>
        </div>
      </div>
    </div>
  );
}
