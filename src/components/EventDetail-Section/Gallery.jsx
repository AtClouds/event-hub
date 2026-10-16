import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ImageLightbox } from "../EventDetails-UI/ImageLightbox";

export function Gallery({ event }) {
  const gallery = event.gallery;
  const few = gallery.length <= 2;

  const [selectedImage, setSelectedImage] = useState(null);

  const fewWidth =
    gallery.length === 1
      ? "w-full md:w-[calc((100%-2rem)/3)]"
      : "w-[calc((100%-1rem)/2)] md:w-[calc((100%-2rem)/3)]";

  const openLightbox = (index) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const showNext = () => {
    setSelectedImage((current) =>
      current === gallery.length - 1 ? 0 : current + 1,
    );
  };

  const showPrevious = () => {
    setSelectedImage((current) =>
      current === 0 ? gallery.length - 1 : current - 1,
    );
  };

  return (
    <div className="flex justify-center items-center">
      {/* Outer div */}
      <div className="py-15 md:px-10 px-5 flex flex-col lg:w-[90%] w-full">
        {/* Heading */}
        <div className="mb-6 text-center">
          <p className="lg:text-[16px] text-[13px] text-brand-secondary font-normal">
            Take a look inside
          </p>

          <h1 className="lg:text-[35px] text-[25px] text-brand-primary font-extrabold">
            Gallery Section
          </h1>
        </div>

        {/* Gallery layout */}
        <div
          className={
            few
              ? "flex justify-center gap-4"
              : "grid grid-cols-2 md:grid-cols-3 gap-4"
          }
        >
          {gallery.map((photo, index) => (
            <motion.button
              key={photo.id}
              type="button"
              onClick={() => openLightbox(index)}
              className={`group relative overflow-hidden rounded-2xl ${few ? fewWidth : "w-full"}`}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src={photo.url}
                alt={event.title}
                loading="lazy"
                className="
                  aspect-[4/3]
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />

              {/* Hover overlay */}
              <div
                className="
                  absolute inset-0
                  bg-black/0
                  transition-colors
                  duration-300
                  group-hover:bg-black/15
                "
              />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <ImageLightbox
            images={gallery.map((photo) => photo.url)}
            activeIndex={selectedImage}
            onClose={closeLightbox}
            onNext={showNext}
            onPrevious={showPrevious}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
