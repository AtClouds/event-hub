


export function Venue ({event}) {

    return(
        <div className="bg-[#EFE1FF] flex justify-center items-center">
            {/* Outer layer*/}
            <div className="py-15 md:px-10 px-5 grid md:grid-cols-2 grid-cols-1 gap-5 lg:w-[90%] w-full">
                {/* Map */}
                <div className="rounded-2xl overflow-hidden">
                    <iframe
                    src={`https://www.google.com/maps?q=${event.venue.latitude},${event.venue.longitude}&output=embed`}
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                
                {/* content */}
                <div>
                    {/* heading */}
                    <div className="mb-6 md:text-start text-center">
                    <p className="lg:text-[16px] text-[13px]  text-brand-secondary font-normal ">
                        Venue & location
                    </p>
                    <h1 className="lg:text-[35px] text-[25px] text-brand-primary font-extrabold ">
                        {event.venue.name}
                    </h1>

                    <h3 className="font-semibold text-[16px] text-brand-primary md:w-[50%]  mt-3">{event.venue.address}</h3>

                    <p className="text-[10px] text-black md:w-[80%] leading-tight mt-3">Need directions? Tap Get Directions to open Google Maps and navigate to the venue from your current location.</p>

                    {/* button */}
                    <div className=" transition-all duration-300 ease-out hover:-translate-y-1">
                    <button className="border-2 border-brand-secondary py-2 px-5 text-[14px] text-brand-secondary rounded-3xl  cursor-pointer mt-4 transition motion-card-button font-medium ">
                         Get Directions
                    </button>
                     </div>
                    </div>
                </div>
            </div>
        </div>
    );
}