

export function BlogCard({blog}) {

    const date = new Date(blog.date);
    const formatted = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    });

    return(
        <div>
                <div  className="flex flex-col gap-5 justify-center items-start w-full leading-tight">
                    <img 
                        src={blog.image} 
                        alt="blog-Image" 
                        className="w-full h-auto object-cover" 
                    />
                    {/* content */}
                    <div className=" mt-2">
                        <h1 className="text-[24px] text-brand-primary font-bold">{blog.title}</h1>
                        <p className="text-[14px] text-black mt-2">{blog.excerpt}</p>
                    </div>
                     {/* content */}

                     <div className="">
                        <p className="text-[#A5A5A5] text-[10px] text-start">{formatted} - <span>{blog.writer}</span></p>
                     </div>
                </div>          
        </div>
    );
}