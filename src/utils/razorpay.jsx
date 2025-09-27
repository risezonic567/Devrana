// export const openRazorpay = (amount, customer) => {
//     const options = {
//         key: "rzp_test_EkjufYBy2zEkGi", // Replace with your Razorpay Key
//         // key: "rzp_test_123456789", // Replace with your Razorpay Key
//         amount: amount * 100, // amount in paise
//         currency: "INR",
//         name: "Devrana Hotel",
//         description: "Room Booking Payment",
//         handler: function (response) {
//             alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
//             window.location.href = "/payment-success";
//         },
//         prefill: {
//             name: customer?.name || "Guest User",
//             email: customer?.email || "guest@example.com",
//             contact: customer?.phone || "9999999999",
//         },
//         theme: {
//             color: "#1E3A8A",
//         },
//     };



//     const rzp = new window.Razorpay(options);
//     rzp.open();
// };
import { saveBooking } from "./storage";
export function openRazorpay(amount, formData, room, onSuccess) {
    const options = {
        key: "rzp_test_1234567890", // replace with your Razorpay test key
        amount: amount * 100,
        currency: "INR",
        name: "Devrana Hotel",
        description: "Room Booking Payment",
        image: "https://i.postimg.cc/X7r2sfB2/DR-LOGO.png",
        handler: function (response) {
            const newBooking = {
                bookingId: `BKG${Date.now()}`,
                customer: formData,
                room: room.name,
                checkIn: formData.checkIn,
                checkOut: formData.checkOut,
                guests: formData.guests,
                amount: amount,
                paymentStatus: "Success",
                razorpayId: response.razorpay_payment_id,
            };

            console.log("Booking saved:", newBooking);
            // ✅ Save in mock DB (localStorage)
            saveBooking(newBooking);
            onSuccess(newBooking); // callback to redirect
        },
        prefill: {
            name: formData.name,
            email: formData.email,
            contact: formData.phone,
        },
        theme: { color: "#A12C28" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
}

