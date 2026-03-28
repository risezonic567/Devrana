import { Instagram } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

export default function ResortVideos() {
    let vidoes = [
        {
            path: "https://www.instagram.com/reel/DVciMyZAgWa/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            img: "https://picsum.photos/seed/resort6/600/400",
        }, {
            path: "https://www.instagram.com/reel/DTM1aeEEmaO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            img: "https://picsum.photos/seed/resort6/600/400",
        }, {
            path: "https://www.instagram.com/reel/DTK78OHD8vB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            img: "https://picsum.photos/seed/resort6/600/400",
        }, {
            path: "https://www.instagram.com/reel/DQtem5_Eu0p/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            img: "https://picsum.photos/seed/resort6/600/400",
        }, {
            path: "https://www.instagram.com/reel/DQ_A6G3kkx2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            img: "https://picsum.photos/seed/resort6/600/400",
        },
        {
            path: "https://www.instagram.com/reel/DPLbCBkEms7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", img: "",
        }

    ]

    return (
        <>
            <section className="max-w-6xl mx-auto px-4 py-10">

                <div className="w-full h-[220px] sm:h-[260px] lg:h-[320px] rounded-2xl overflow-hidden shadow-lg">

                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/F1hiPaS3QwM"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                </div>

            </section>
            <section className="max-w-6xl mx-auto px-4 py-15">
                <div >

                    <NavLink className="flex items-center justify-center space-x-2 py-5 gap-3 hover:text-red-800 text-lg sm:text-xl md:text-2xl" to={'https://www.instagram.com/devrana_official/'}><Instagram size={32} className="text-red-800" /> @devrana_official</NavLink>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 py-5y">
                    {
                        vidoes.map((item, id) => (
                            <div className="relative group overflow-hidden border ">
                                <NavLink to={item.path}><img src={item.img} className="h-[180px] w-[180px]  border" /> <div className="cursor-pointer absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">

                                    {/* Instagram Icon */}
                                    <Instagram
                                        size={32}
                                        className="text-white scale-75 group-hover:scale-100 transition duration-300"
                                    />

                                </div></NavLink>
                               

                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    );
}