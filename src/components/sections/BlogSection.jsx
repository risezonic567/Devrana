import blogData from "../../data/blog.json";
import BlogCard from "../BlogCard";

export default function BlogSection() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <p className="uppercase text-sm tracking-widest text-primary font-semibold">
                    Get More Update 
                </p>
                <h2 className="text-4xl font-serif font-bold text-gray-900 mt-2">
                    Latest News & Info
                </h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    Stay Connected with the latest insights, travel tips, and stories from
                    Devrana Hotel.
                </p>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {blogData.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
            </div>
        </section>
    );
}
