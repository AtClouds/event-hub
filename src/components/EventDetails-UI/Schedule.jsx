import { useRef } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useInView,
} from "motion/react";

const variants = {
  hide: { opacity: 0, x: -40, transition: { duration: 0 } },
  show: ({ dir, index }) => ({
    opacity: 1,
    x: 0,
    transition:
      dir === "down"
        ? { type: "spring", stiffness: 120, damping: 16, delay: index * 0.12 }
        : { duration: 0 },
  }),
};

function ScheduleRow({ item, index, direction }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.4 });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hide"
      animate={inView ? "show" : "hide"}
      custom={{ dir: direction.current, index }}
      className="grid grid-cols-[40%_10%_1fr] md:grid-cols-[15%_5%_25%_55%] items-center px-4 md:px-8 py-6"
    >
      <span className="text-[16px] text-brand-secondary font-bold">
        {item.time}
      </span>
      <span className="size-2.5 rounded-full bg-brand-primary" />
      <h3 className="text-[16px] text-brand-primary font-bold">{item.title}</h3>
      <p className="text-[#6A6A6A] text-[16px] hidden md:block">
        {item.description}
      </p>
    </motion.div>
    
  );
}

export  function ScheduleSection({ schedule }) {
  const direction = useRef("down");
  const lastY = useRef(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    direction.current = y > lastY.current ? "down" : "up";
    lastY.current = y;
  });

  return (
    <div className="w-full rounded-2xl bg-white divide-y divide-slate-200 overflow-hidden">
      {schedule.map((item, index) => (
        <ScheduleRow
          key={item.id}
          item={item}
          index={index}
          direction={direction}
        />
      ))}
    </div>
  );
}
