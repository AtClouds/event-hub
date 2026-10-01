

export function AboutUs ({event}) {

    return(
        <div className="flex justify-center items-center">
            {/* Content */}
            <div className="flex flex-col md:flex-row lg:gap-5 justify-start  lg:w-[90%] w-full md:w-[80%] px-4 md-px-0 py-12 ">
                {/* Title */}
                <div className="flex flex-col text-center lg:text-start lg:w-1/3">
                    <p className="tex-[12px] text-brand-secondary font-medium ">{event.type}</p>
                    <h1 className="text-[18px] md:text-[24px] lg:text-[35px] text-brand-primary font-extrabold md:w-[70%] leading-tight">About This Event</h1>
                </div>

                {/* about content */}
                <div className="mt-8 lg:mt-0 lg:flex-1">
                    <h4 className="text-[14px] md:text-[18px] text-brand-primary font-medium text-justify">{event.about.title}</h4>
                    <p className="text-[14px] md:text-[18px] text-[#6A6A6A] font-regular text-justify mt-2 ">{event.about.content}</p>
                </div>
            </div>
        </div>
    );
}