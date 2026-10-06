import { ScheduleSection } from "../EventDetails-UI/Schedule";

export function LineUps ({event}) {


    return(
        <div className="flex justify-center items-center bg-[#F7F7FC]">
            <div className="py-15 md:px-10 px-5 flex flex-col  lg:w-[90%] w-full">
            {/* date and title */}
            <div className="mb-6">
                <p className="lg:text-[16px] text-[13px]  text-brand-secondary font-normal ">{event.date}</p>
                <h1 className="lg:text-[35px] text-[25px] text-brand-primary font-extrabold ">Schedule & Lineup</h1>
            </div>
            
            {/* Events line ups */}
            <div>
                 <ScheduleSection schedule={event.schedule} />
            </div>
            </div>
        </div>
    );
}