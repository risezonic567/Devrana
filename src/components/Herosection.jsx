import React from "react";
import homevideo from "../video/Homebanner.mp4"
import { NavLink } from "react-router-dom";
export default function Herosection() {
    const styles = {
        hero: {
            position: "relative",
            width: "100%",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#000",
        },
        video: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
        },
        overlay: {
            position: "relative",
            zIndex: 2,
            color: "#fff",
            textAlign: "center",
            padding: "1rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "90%",
            width: "800px",
            margin: "0 auto",
            pointerEvents: "none", // allow video controls if needed; button will re-enable pointer
        },
        title: {
            fontSize: "clamp(1.5rem, 3.5vw, 3rem)",
            margin: 0,
            fontWeight: 700,
            textShadow: "0 6px 20px rgba(0,0,0,0.6)",
        },
        subtitle: {
            margin: 0,
            fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
            fontWeight: 400,
            textShadow: "0 6px 18px rgba(0,0,0,0.5)",
        },
        button: {
            pointerEvents: "auto",
            // background: "linear-gradient(90deg,#ff7a18,#af002d 70%)",
            color: "#fff",
            border: "none",
            padding: "0.85rem 1.35rem",
            fontSize: "1rem",
            borderRadius: "8px",
            cursor: "pointer",
            boxShadow: "0 8px 30px rgba(175,0,45,0.25)",
            transition: "transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease",
        },
    };

    const handleBookNow = () => {
        // Replace /booking with your actual booking route or logic
        window.location.href = "/booking";
    };

    const [videoReady, setVideoReady] = React.useState(false);
    const videoRef = React.useRef(null);

    return (
        <section className="sm:mt-32 mt-[74px]  lg:h-[600px]  xl:h-[600px]  h-screen" style={styles.hero} aria-label="Hero video section">
            <video
                ref={videoRef}
                style={{
                    ...styles.video,
                    opacity: videoReady ? 1 : 0,
                    transition: "opacity 400ms ease",
                    backgroundColor: "#000"
                }}
                poster="https://i.postimg.cc/pLJ3F1tw/Screenshot-2025-10-30-144658.png" // use a small poster image
                preload="metadata" // don't download entire file immediately
                muted
                playsInline
                autoPlay
                loop
                onCanPlayThrough={() => setVideoReady(true)}
            >
                <source src="https://www.devrana.in/assets/Homebanner-af9b8916.mp4" type="video/mp4" />
                {/* Optionally provide a WebM fallback for non-Safari browsers */}
                {/* <source src="https://www.devrana.in/assets/Homebanner.webm" type="video/webm" /> */}
                Your browser does not support the video tag.
            </video>

            <div style={styles.overlay} className="font-serif">
                <h1 style={styles.title}> Devrana: Traditional heritage village resort </h1>
                <NavLink to="/rooms-cottage">
                    <button
                        className="bg-primary"
                        style={styles.button}
                        onClick={handleBookNow}
                        aria-label="Book now"
                    >
                        Book Now
                    </button>
                </NavLink>
            </div>
        </section>
    );
}
