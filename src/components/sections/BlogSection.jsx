
import { blogPosts } from "../../data/blogData";
import BlogCard from "../BlogCard";
export default function BlogSection() {
    const latestPosts = blogPosts.slice(0, 4);
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 text-center">
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
                {/* Display the top 4 posts in a grid */}
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {latestPosts.length > 0 ? (
                        latestPosts.map(post => <BlogCard key={post.slug} post={post} />)
                    ) : (
                        <p className="col-span-full text-center">No articles found.</p>
                    )}
                </div>
            </div>
        </section>
    );
}
