import logo from "../../../assets/logo-1.png"
import { FiLock } from "react-icons/fi";
import { steps } from "../../landing-data/checkoutStepper";
import { useLocation } from "react-router";




export function CheckoutNavbar () {

        const { pathname } = useLocation();

       // last piece of the URL: 
        const lastSegment = pathname.split("/").pop();

        // no step path matched" (step 1), so fall back to 0 
        const activeIndex = Math.max(
        steps.findIndex((step) => step.path === lastSegment),
        0
        );

const circleStyles = {
  done: "bg-[#26245F] text-white",
  current: "bg-[#F5167E] text-white",
  upcoming: "bg-gray-100 text-brand-light-text",
};

const labelStyles = {
  done: "text-brand-light-text",
  current: "text-[#F5167E] font-semibold",
  upcoming: "text-brand-light-text",
};
    

    return(
        <div className="bg-white">
            {/* Outer div */}
            <div className="flex flex-col  py-5">
                
                {/* logo */}
                <div className="flex justify-center items-center border-b border-brand-primary/20">
                    <div className=" md:w-[90%] w-full px-4 flex justify-between items-center pb-4">
                         <a href="">
                            <img src={logo} alt="Event Hub logo" />
                        </a>

                        <div className="flex justify-center items-center gap-2">
                            <FiLock className="size-4 text-brand-light-text" />
                            <p className="text-[12px] text-brand-light-text font-medium md:hidden">Secure</p>
                            <p className="text-[12px] text-brand-light-text font-medium hidden md:block">Secure checkout</p>
                        </div>
                    </div>
                   
                </div>

                {/* Desktop Nav bar panel */}
                <div className="py-5  justify-center items-center hidden md:flex">
                    <ol className="flex justify-between items-center px-4 md:w-[80%]">

                    {steps.map((step, i) => {
                    const status =
                        i < activeIndex
                        ? "done"
                        : i === activeIndex
                        ? "current"
                        : "upcoming";

                    return (
                        <li
                        key={step.label}
                        className="flex items-center justify-center gap-2"
                        >
                        <span
                            className={`grid size-6 place-items-center rounded-full text-[14px] ${circleStyles[status]}`}
                        >
                            {i + 1}
                        </span>

                        <span
                            className={`hidden md:inline text-[14px] ${labelStyles[status]}`}
                        >
                            {step.label}
                        </span>
                        </li>
                    );
                    })}
                    </ol>
                </div>

                {/* Mobile Nav bar panel */}
                <div className="flex md:hidden flex-col px-5 pt-5 pb-3">
                    <ol className="flex flex-col justify-center">
                        {/* heading */}
                            <p className="font-bold text-[12px]  tracking-wide uppercase text-[#F5167E] pb-2"> Step {activeIndex + 1} of {steps.length} &middot; {steps[activeIndex].label} </p>
                        {/* slice */}
                         <div className="mt-1 flex  gap-1.5">
                        {steps.map((step, i) => (
                            <div
                                key={step.label}
                                className={`h-1 flex-1 rounded-full ${
                                i <= activeIndex ? "bg-brand-secondary" : "bg-brand-light-bg"
                                }`}
                            />
                        ))}
                    </div>
                    </ol>
                </div>
            </div>
        </div>
    );
}


                            
                        