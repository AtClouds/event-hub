import { BlogCard } from "../Landing-page-UI/BlogCard";
import { blogData } from "../landing-data/blogData";

export function Blogs () {

    return(
        <div className="mt-5 mb-8 flex flex-col justify-center items-center">
            <div className="w-full md:w-[80%] lg:w-[80%] md:px-0 px-4">
                 {/*heading and tagline*/}
            <div className="flex flex-col justify-center items-center text-center">
                    <h1 className="xl:text-[45px] lg:text-[40px] md:text-[30px] text-brand-primary font-medium ">Blog</h1>
                    <p className="xl:w-[30%] lg:w-[40%] md:w-[70%] text-[14px] text-black px-4"> Do you want to host a successful events, read our blog post, and apply the tools stated.</p>
            </div>

            {/* Blog Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5 ">
                {
                    blogData.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))
                }
            </div>
            </div>
           
        </div>
    );
}