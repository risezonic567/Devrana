import { motion } from "framer-motion";

export default function BlogCard({ blog }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition"
        >
            <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover"
            />
            <div className="p-6">
                <p className="text-sm text-gray-500">{new Date(blog.date).toDateString()}</p>
                <h3 className="text-xl font-semibold text-gray-900 mt-2">{blog.title}</h3>
                <p className="text-gray-600 mt-3">{blog.excerpt}</p>
                <button className="mt-4 text-primary font-medium hover:underline">
                    Read More →
                </button>
            </div>
        </motion.div>
    );
}
    