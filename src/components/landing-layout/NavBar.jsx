import logo from '../../assets/logo.png'
import { Menu, X } from "lucide-react";
import { useState } from "react";




export function Navbar () {

    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className='p-5'>
            {/*Top nav bar Desktop*/}
            <nav className="hidden lg:flex w-full items-center justify-between">
                {/*Logo*/}
                <div>
                    <a href="">
                        <img src={logo} alt="Event Hub logo" />
                    </a>
                </div>

                {/*nav links*/}
                <div className='flex items-center justify-between space-x-8'>
                        <a href="" className='text-white xl:text-[24px] lg:text-[18px] font-regular'>Schedule</a>
                        <a href="" className='text-white xl:text-[24px] lg:text-[18px] font-regular'>Events</a>
                        <a href="" className='text-white xl:text-[24px] lg:text-[18px] font-regular'>Contact</a>

                        {/*nav button*/}
                        <div>
                            <button className='text-white xl:text-[24px] lg:text-[18px] font-regular border-2 border-white py-1.5 px-4.5 rounded-3xl'>
                                Login
                            </button>
                        </div>
                </div>

            </nav>


            {/*Top nav bar Mobile*/}     
            <nav className='flex lg:hidden w-full  items-center justify-between py-4 md:px-5 p-4'>

                {!isOpen && (
                <div className='flex justify-between items-center w-full '>
                  {/*Logo*/} 
                  <div>
                    <a href="">
                        <img src={logo} className='w-30' alt="Event Hub logo" />
                    </a>

                  </div>
                    
                {/*menu icon*/}
                <div>
                    <button className='border border-white rounded-full md:p-4 p-2' onClick={() => setIsOpen(!isOpen)} >
                    <Menu className=" w-6 h-6 text-nav-text cursor-pointer text-white" />
                </button>
                </div>

                </div>
                
            )}

            {isOpen && (
                <div className={`flex flex-col gap-4 transition-transform duration-800 ease-in-out ${ isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                    <button  onClick={() => setIsOpen(false)}>
                        <X className=" w-6 h-6 text-nav-text cursor-pointer text-white" />
                    </button>

                     <div className='flex flex-col '>
                    <a href="" className='text-white xl:text-[24px] lg:text-[18px] font-regular  transition-colors duration-200 hover:text-amber-400'>Schedule</a>
                    <a href="" className='text-white xl:text-[24px] lg:text-[18px] font-regular  transition-colors duration-200 hover:text-amber-400'>Events</a>
                    <a href="" className='text-white xl:text-[24px] lg:text-[18px] font-regular  transition-colors duration-200 hover:text-amber-400'>Contact</a>
                     </div>
                </div>
            )}
            
             </nav>

            
        </div>
    );
}