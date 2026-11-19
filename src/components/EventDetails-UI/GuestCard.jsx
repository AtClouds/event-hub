
export function GuestCard ({guest}) {

    return(
        <div className="">
            {/* Outer div */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_15px_rgba(0,0,0,0.12)] motion-card">
                {/* banner */}
                <div className="overflow-hidden">
                    <img src={guest.image} draggable={false} alt="Guest-name" className="w-full object-cover h-[200px]" />
                </div>
                {/* content */}
                <div className="py-4 px-4">
                     <h1 className="lg:text-[18px] text-[14px] text-brand-primary font-bold">{guest.name}</h1>
                     <p className="lg:text-[14px] text-[12px]  text-[#6A6A6A] font-normal ">{guest.role}</p>
                </div>
            </div>
        </div>
    );
}