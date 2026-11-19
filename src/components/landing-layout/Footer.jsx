import logo from "../../assets/logo.png"
import { FaFacebook, FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6"



export function Footer() {
console.log("THIS COMPONENT UPDATED");

    return(
        <div className="bg-brand-primary flex justify-center items-center flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 border-b border-white/20 pb-5 mt-5  md:w-[80%] w-full px-5">
                {/* Event-hub - social links */}
                <div className="flex flex-col justify-start items-start  mt-5">
                    {/* logo */}
                     <a href="">
                        <img src={logo} alt="Event Hub logo" />
                     </a>
                     <p className="text-[12px] text-white leading-tight mt-4 md:w-[60%] md:text-left text-center">Eventhub is a global self-service ticketing platform for live experiences that allows anyone to create, share, find and attend events that fuel their passions and enrich their lives.</p>
                     {/* Social links */}
                     <div className="flex justify-center items-center gap-5 mt-4">
                        <a href=""><FaFacebook className="w-5 h-5 text-white cursor-pointer  motion-card-button" /></a>
                        <a href=""><FaInstagram className="w-5 h-5 text-white cursor-pointer  motion-card-button" /></a>
                        <a href=""><FaXTwitter className="w-5 h-5 text-white cursor-pointer  motion-card-button" /></a>
                        <a href=""><FaLinkedin className="w-5 h-5 text-white cursor-pointer  motion-card-button" /></a>
                     </div>
                </div>

                {/* Event plan */}
                <div className="flex flex-col justify-start items-Start  mt-8">
                    <h1 className="text-[14px] text-white font-bold">plan Events</h1>
                    {/* links */}
                     <div className="flex flex-col gap-1 mt-4  items-start">
                        <a href="" className="motion-card-button text-[12px] text-white">Create and Set Up</a>
                        <a href="" className="motion-card-button text-[12px] text-white">Sell Tickets</a>
                        <a href="" className="motion-card-button text-[12px] text-white">Online RSVP</a>
                        <a href="" className="motion-card-button text-[12px] text-white">Online Events</a>
                     </div>
                </div>

                {/* Event-hub */}
                <div className="flex flex-col justify-start items-start  mt-8">
                     <h1 className="text-[14px] text-white font-bold">Eventhub</h1>
                    {/* links */}
                     <div className="flex flex-col gap-1 mt-4 items-start">
                        <a href="" className="motion-card-button text-[12px] text-white">About us</a>
                        <a href="" className="motion-card-button text-[12px] text-white">Press</a>
                        <a href="" className="motion-card-button text-[12px] text-white">Contact us</a>
                        <a href="" className="motion-card-button text-[12px] text-white">Help center</a>
                        <a href="" className="motion-card-button text-[12px] text-white">How it works</a>
                        <a href="" className="motion-card-button text-[12px] text-white">Privacy</a>
                        <a href="" className="motion-card-button text-[12px] text-white">Terms</a>
                     </div>
                </div>

                {/* News letter */}
                <div className="flex flex-col justify-start items-start  mt-8">
                    <h1 className="text-[14px] text-white font-bold">Stay in the loop</h1>
                    <p className="text-[12px] text-white leading-tight mt-4 text-start ">Join our mailing list to stay in the loop with our newest for Event and concert</p>

                    {/* News letter */}
                    <div className="flex items-center md:w-[250px] w-full h-[38px] bg-white rounded-full p-[3px] mt-4">
                        <input
                            type="email"
                            placeholder="Enter your email address..."
                            className="flex-1 min-w-0 bg-transparent outline-none border-none px-3 text-[10px] text-gray-600 placeholder:text-gray-400"
                        />

                        <button
                            className="bg-brand-secondary text-white text-[9px] font-semibold rounded-full px-4 h-[30px] leading-none whitespace-nowrap cursor-pointer"
                        >
                            Subscribe Now
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-5 pb-8 flex justify-center items-center">
                <p className="text-[12px] text-white">Copyright @ 2026 JayCraft</p>
            </div>
        </div>
    );
}