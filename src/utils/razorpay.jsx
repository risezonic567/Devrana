export const openRazorpay = (amount, customer) => {
    const options = {
        key: "rzp_test_123456789", // Replace with your Razorpay Key
        amount: amount * 100, // amount in paise
        currency: "INR",
        name: "Devrana Hotel",
        description: "Room Booking Payment",
        handler: function (response) {
            alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
            window.location.href = "/payment-success";
        },
        prefill: {
            name: customer?.name || "Guest User",
            email: customer?.email || "guest@example.com",
            contact: customer?.phone || "9999999999",
        },
        theme: {
            color: "#1E3A8A",
        },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
};
