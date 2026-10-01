

export function LineUps ({event}) {


    return(
        <div className="flex justify-center items-center bg-[#F7F7FC]">

             {/* Content */}
            <div className="flex flex-col  justify-start  lg:w-[90%] w-full md:w-[80%] px-4 md-px-0 md:py-24 py-15">
                {/* Title and Date */}
                <div className="pb-5">
                     <p className="tex-[12px] text-brand-secondary font-medium ">{event.date}</p>
                    <h1 className="text-[18px] md:text-[24px] lg:text-[35px] text-brand-primary font-extrabold ">Schedule & Lineup</h1>
                </div>

                {/* Line-ups content */}
                <div>
                    
                </div>
            </div>
        </div>
    );
}