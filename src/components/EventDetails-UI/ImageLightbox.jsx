import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";



export const ImageLightbox = ({
  images,
  activeIndex,
  onClose,
  onNext,
  onPrevious,
}) => {
  const activeImage = images[activeIndex];

  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        setDirection(1);
        onNext();
      }

      if (event.key === "ArrowLeft") {
        setDirection(-1);
        onPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNext, onPrevious]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleNext = () => {
    setDirection(1);
    onNext();
  };

  const handlePrevious = () => {
    setDirection(-1);
    onPrevious();
  };

  const imageVariants = {
    enter: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 80 : -80,
      scale: 0.96,
    }),

    center: {
      opacity: 1,
      x: 0,
      scale: 1,
    },

    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -80 : 80,
      scale: 0.96,
    }),
  };

  return (
    <motion.div
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-black/90
        backdrop-blur-md
        p-4
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
    >
      {/* Close button */}
      <motion.button
        onClick={onClose}
        aria-label="Close gallery"
        className="
          absolute right-5 top-5 z-30
          flex h-11 w-11
          items-center justify-center
          rounded-full
          bg-white/10
          text-white
          backdrop-blur-md
          border border-white/10
        "
        initial={{
          opacity: 0,
          scale: 0.7,
          y: -10,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          delay: 0.15,
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{
          scale: 1.08,
          backgroundColor: "rgba(255,255,255,0.18)",
        }}
        whileTap={{
          scale: 0.92,
        }}
      >
        <X size={21} />
      </motion.button>

      {/* Image counter */}
      <motion.div
        className="
          absolute
          top-6
          left-1/2
          -translate-x-1/2
          z-30
          rounded-full
          bg-white/10
          px-4
          py-1.5
          text-sm
          font-medium
          text-white
          backdrop-blur-md
          border border-white/10
        "
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.15,
        }}
      >
        {activeIndex + 1} / {images.length}
      </motion.div>

      {/* Previous */}
      <motion.button
        onClick={handlePrevious}
        aria-label="Previous image"
        className="
          absolute
          left-4 md:left-8
          z-30
          flex
          h-12 w-12
          items-center
          justify-center
          rounded-full
          bg-white/10
          text-white
          backdrop-blur-md
          border border-white/10
        "
        initial={{
          opacity: 0,
          x: -20,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 0.2,
          duration: 0.4,
        }}
        whileHover={{
          scale: 1.08,
          backgroundColor: "rgba(255,255,255,0.18)",
        }}
        whileTap={{
          scale: 0.92,
        }}
      >
        <ChevronLeft size={25} />
      </motion.button>

      {/* Image */}
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
        <AnimatePresence
          mode="wait"
          custom={direction}
        >
          <motion.img
            key={activeImage}
            src={activeImage}
            alt={`Gallery image ${activeIndex + 1}`}
            custom={direction}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-h-[90vh]
              max-w-[92vw]
              object-contain
              rounded-lg
              select-none
            "
            draggable={false}
          />
        </AnimatePresence>
      </div>

      {/* Next */}
      <motion.button
        onClick={handleNext}
        aria-label="Next image"
        className="
          absolute
          right-4 md:right-8
          z-30
          flex
          h-12 w-12
          items-center
          justify-center
          rounded-full
          bg-white/10
          text-white
          backdrop-blur-md
          border border-white/10
        "
        initial={{
          opacity: 0,
          x: 20,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 0.2,
          duration: 0.4,
        }}
        whileHover={{
          scale: 1.08,
          backgroundColor: "rgba(255,255,255,0.18)",
        }}
        whileTap={{
          scale: 0.92,
        }}
      >
        <ChevronRight size={25} />
      </motion.button>
    </motion.div>
  );
};
