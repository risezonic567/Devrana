// Save booking into localStorage
export function saveBooking(booking) {
    const existing = JSON.parse(localStorage.getItem("bookings")) || [];
    existing.push(booking);
    localStorage.setItem("bookings", JSON.stringify(existing));
}

// Fetch all bookings
export function getBookings() {
    return JSON.parse(localStorage.getItem("bookings")) || [];
}
