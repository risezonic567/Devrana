import { openRazorpay } from "../utils/razorpay";

export default function PaymentButton({ amount, customer }) {
    return (
        <button
            onClick={() => openRazorpay(amount, customer)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
            Pay ₹{amount}
        </button>
    );
}
