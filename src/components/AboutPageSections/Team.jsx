import { motion } from "framer-motion";

const team = [
    {
        id: 1,
        title: "Rohit A",
        post: "Jr Chef",
        img: "https://i.postimg.cc/85dDxWfG/410-by-410-image-9.jpg",
    },
    {
        id: 2,
        title: "Simran K",
        post: "Manager",
        img: "https://i.postimg.cc/HLyT4FpV/410-by-410-jpg-image-7.jpg",
    },
    {
        id: 3,
        title: "Amit S",
     
        post: "Sr Chef",
        img: "https://i.postimg.cc/ZRz4fjRj/410-by-410-jpg-image-6.jpg",
    },
];

export default function Team() {
    return (
        <section className="py-10">
            {/* Section Heading */}
            <div className="text-center mb-12">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="uppercase text-sm tracking-widest text-Secondary"
                >
                    Dedicated Team

                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-3xl md:text-6xl  font-serif text-gray-800 mb-4 max-w-3xl mx-auto"
                >
                    We Have A Professional
                    Hotel Staff
                </motion.h2>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl  py-7 items-center mx-auto">


                {team.map((member) => (
                    <motion.div
                        key={member.id}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition"
                    >
                        <img
                            src={member.img}
                            alt={member.title}
                            className="w-full  object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-lg font-semibold">{member.title}</h3>
                            <p className="text-gray-600 mt-2">{member.post}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
