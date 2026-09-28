import { brandData } from "../landing-data/brandData"

export function Brands() {

    const row1 = brandData.slice(0, 5);
    const row2 = brandData.slice(5);


    return(
        <div>
            <div>
                {/*heading and tagline*/}
                <div className="flex flex-col justify-center items-center text-center">
                    <h1 className="xl:text-[40px] lg:text-[35px] md:text-[25px] text-brand-primary font-medium ">Join these brands</h1>
                    <p className="xl:w-[28%] lg:w-[40%] md:w-[70%] text-[14px] text-black px-4">We've had the pleasure of working with industry-defining brands. 
                        These are just some of them.</p>
                </div>
            
               {/* logo marquee row 1 — scrolls one direction */}
                <div className="overflow-hidden w-full mt-8 [mask-image:linear-gradient(to_right,transparent_0%,black_30%,black_80%,transparent_100%)]">
                    <div className="flex items-center gap-6 md:gap-10 lg:gap-15 w-max animate-marquee">
                        {[...row1, ...row1, ...row1].map((brand, i) => (
                            <img
                                key={i}
                                src={brand.image}
                                alt={brand.name}
                                className="w-auto h-8 lg:h-10 shrink-0 opacity-70 hover:opacity-100 hover:scale-115 transition-all duration-300"
                            />
                        ))}
                    </div>
                </div>
               

                {/* logo marquee row 2  — scrolls opposite direction */}
                <div className="overflow-hidden w-full mt-8 mb-8 [mask-image:linear-gradient(to_right,transparent_0%,black_30%,black_80%,transparent_100%)]">
                     <div className="flex items-center gap-6 md:gap-10 lg:gap-15 w-max animate-marquee-reverse">
                    {[...row2, ...row2, ...row2].map((brand, i) => (
                        <img 
                            key={i} 
                            src={brand.image} 
                            alt={brand.name} 
                            className="w-auto h-8 lg:h-10 shrink-0 opacity-70 hover:opacity-100 hover:scale-115 transition-all duration-300" />
                    ))}
                    </div>
                </div>
               
            
               
            </div>
        </div>
    );}