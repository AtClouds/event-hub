import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo-2.png";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "motion/react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  // lock page scroll while the menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const MotionLink = motion.create(Link); // lets a router Link animate

  const ease = [0.76, 0, 0.24, 1];

  const menuVariants = {
    hidden: { clipPath: "inset(0% 0% 100% 0%)" },
    show: {
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        duration: 0.7,
        ease,
        delayChildren: 0.25,
        staggerChildren: 0.08,
      },
    },
    exit: {
      clipPath: "inset(0% 0% 100% 0%)",
      transition: { duration: 0.5, ease },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
    exit: { opacity: 0, transition: { duration: 0.15 } },
  };

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Events", to: "/all-event" },
  ];

  const itemClass =
    "block w-full text-left text-brand-primary text-[16px] border-b border-brand-light-text/20 py-4 transition-colors duration-300 hover:text-brand-secondary cursor-pointer";

  return (
    <div className="">
      {/*Top nav bar Desktop*/}
      <nav className="hidden lg:flex w-full items-center justify-between  xl:px-[12%] lg:px-[6%] md:px-[5%]">
        {/*Logo*/}
        <div>
          <a href="">
            <img src={logo} alt="Event Hub logo" />
          </a>
        </div>

        {/*nav links*/}
        <div className="flex items-center justify-between space-x-8">
          <Link
            to="/"
            className="text-white xl:text-[24px] lg:text-[18px] font-regular transition-all duration-300 ease-out hover:-translate-y-1 active:translate-y-0 hover:brightness-110  cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/all-event"
            className="text-white xl:text-[24px] lg:text-[18px] font-regular transition-all duration-300 ease-out hover:-translate-y-1 active:translate-y-0 hover:brightness-110  cursor-pointer"
          >
            Events
          </Link>
          <a
            onClick={() =>
              window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
              })
            }
            className="text-white xl:text-[24px] lg:text-[18px] font-regular transition-all duration-300 ease-out hover:-translate-y-1 active:translate-y-0 hover:brightness-110  cursor-pointer"
          >
            Contact
          </a>

          {/*nav button*/}
          <div>
            <button className="text-white xl:text-[24px] lg:text-[18px] font-regular border-2 border-white py-1 px-5 rounded-2xl transition-all duration-300 ease-out hover:-translate-y-1 active:translate-y-0 hover:brightness-110  cursor-pointer ">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/*Top nav bar Mobile*/}
      <nav className="flex lg:hidden w-full  items-center justify-between">
        {!isOpen && (
          <div className="flex justify-between items-center w-full md:py-4 md:px-5 py-4 px-4">
            {/*Logo*/}
            <div>
              <a href="">
                <img src={logo} className="w-30" alt="Event Hub logo" />
              </a>
            </div>

            {/*menu icon*/}
            <div>
              <button
                className="border border-white rounded-full md:p-4 py-2 p-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Menu className=" w-6 h-6 text-nav-text transition-all duration-300 ease-out hover:-translate-y-1 active:translate-y-0 hover:brightness-110  cursor-pointer text-white" />
              </button>
            </div>
          </div>
        )}

        <AnimatePresence>
          {isOpen && (
            <motion.nav
              variants={menuVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="fixed inset-x-0 top-0 z-50 bg-brand-light-bg/95 backdrop-blur-xl pt-5 shadow-xl"
            >
              {/* Header row: logo + close */}
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-between px-8 pb-4 border-b border-brand-light-text/20"
              >
                <Link to="/" onClick={closeMenu}>
                  <img src={logo2} className="w-30" alt="Event Hub logo" />
                </Link>
                <button
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="p-1 cursor-pointer"
                >
                  <X className="h-6 w-6 text-brand-primary" />
                </button>
              </motion.div>

              <div className="flex flex-col px-8 pb-6">
                {navLinks.map(({ label, to }) => (
                  <MotionLink
                    key={label}
                    to={to}
                    variants={itemVariants}
                    onClick={closeMenu}
                    className={itemClass}
                  >
                    {label}
                  </MotionLink>
                ))}

                <motion.button
                  variants={itemVariants}
                  onClick={() => {
                    closeMenu();
                    window.scrollTo({
                      top: document.documentElement.scrollHeight,
                      behavior: "smooth",
                    });
                  }}
                  className={itemClass}
                >
                  Contact
                </motion.button>

                <motion.button
                  variants={itemVariants}
                  whileTap={{ scale: 0.97 }}
                  className="mt-8 rounded-2xl bg-brand-secondary py-3 text-[16px] font-semibold text-white cursor-pointer"
                >
                  Login
                </motion.button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
