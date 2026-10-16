import logo from "../../../assets/logo-1.png"
import { FiLock } from "react-icons/fi";
import { steps } from "../../landing-data/checkoutStepper";
import { useLocation } from "react-router";
import { Link } from "react-router";



export function CheckoutNavbar () {

        const { pathname } = useLocation();

       // last piece of the URL: 
        const lastSegment = pathname.split("/").pop();

        // no step path matched" (step 1), so fall back to 0 
        const activeIndex = Math.max(
        steps.findIndex((step) => step.path === lastSegment),
        0
        );

    console.log(activeIndex)

    return(
        <div className="bg-white">
            {/* Outer div */}
            <div className="flex flex-col  py-5">
                
                {/* logo */}
                <div className="flex justify-center items-center border-b border-brand-primary/20">
                    <div className=" md:w-[90%] px-4 flex justify-between items-center pb-4">
                         <a href="">
                            <img src={logo} alt="Event Hub logo" />
                        </a>

                        <div className="flex justify-center items-center">
                            <FiLock className="size-4 text-[#707087]" />
                            <p className="text-[12px] text-[#707087] font-medium">Secure checkout</p>
                        </div>
                        </div>
                   
                </div>

                {/* Nav bar panel */}
                <div className="py-5 flex justify-center items-center">
                    <ol className="flex justify-between items-center px-4 md:w-[80%]">
                        { steps.map((step, index) => (
                            <li key={step.label} className="flex justify-center items-center gap-2" >
                                <span className="grid size-6 place-items-center text-[#707087] rounded-full bg-gray-100 text-[14px]">
                                    {index + 1}
                                </span>
                                <span className="hidden md:inline text-[#707087] text-[14px] ">{step.label}</span>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
}