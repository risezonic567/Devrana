import React from "react";
import homevideo from "../video/Home Page.mp4"
export default function Herosection() {
    const styles = {
        hero: {
            position: "relative",
            width: "100%",
            height: "100vh",
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

    return (
        <section className="mt-32" style={styles.hero} aria-label="Hero video section">
            <video
                style={styles.video}
                src={homevideo} // replace with your video path
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
            />
            <div style={styles.overlay} className="font-serif">
                <h1 style={styles.title}>Welcome to Devrana Hotel</h1>
                <p style={styles.subtitle}>Comfort. Luxury. Unforgettable stays.</p>
                <button className="bg-primary"
                    style={styles.button}
                    onClick={handleBookNow}
                    aria-label="Book now"
                >
                    Book Now
                </button>
            </div>
        </section>
    );
}
