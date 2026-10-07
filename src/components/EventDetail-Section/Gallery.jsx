

export function Gallery () {


    return(
        <div>
              {/* outer div */}
              <div>
                  {/* heading */}
                    <div className="mb-6 text-center">
                    <p className="lg:text-[16px] text-[13px]  text-brand-secondary font-normal ">
                        Meet the voices behind the event
                    </p>
                    <h1 className="lg:text-[35px] text-[25px] text-brand-primary font-extrabold ">
                        {event.featuredPeople.title}
                    </h1>
                    </div>

                   {/* Gallery layout  */}
                   <div></div>
              </div>
        </div>
    );
}