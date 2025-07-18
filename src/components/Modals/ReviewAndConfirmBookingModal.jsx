import { IoArrowBack } from "react-icons/io5";

export const ReviewAndConfirmBookingModal = ({
  isOpen,
  onClose,
  bookingDetails,
  onMakePayment,
}) => {
  if (!isOpen) return null;

  // Example bookingDetails structure, fallback to demo data if not provided
  const details = bookingDetails || {
    category: "Hair Services",
    serviceName: "Gent's Standard",
    date: "February, Wednesday 26 2025",
    time: "10.30 AM",
    cost: 40,
    extras: [
      { name: "Undo hair", price: 45, duration: "+1hr" },
      { name: "Wash hair", price: 20, duration: "+20mins" },
    ],
    specialEvent: { enabled: true, price: 8 },
    freeParking: false,
    note: "N/A",
    providerDrive: false,
    tip: { percent: 10, amount: 4 },
    bookingFee: 4,
    total: 125,
  };

  return (
    <div className="fixed inset-0 bg-opacity-40 z-40 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-lg max-w-md relative p-3 shadow-xl">
        <div className="flex items-center justify-between mb-2">
          <IoArrowBack
            onClick={onClose}
            color="#2F2F2F"
            size={25}
            className="cursor-pointer"
          />
          <h2 className="sm:text-[30px] text-[20px] font-[600] text-center text-charcoal font-rasa">
            Review and confirm
          </h2>
          <div className=""></div>
        </div>
        <div className="space-y-2 text-[15px] font-sansation text-charcoal">
          <div>
            <b>Category:</b> {details.category}
          </div>
          <div>
            <b>Service Name:</b> {details.serviceName}
          </div>
          <div>
            <b>Date:</b> {details.date}
          </div>
          <div>
            <b>Time:</b> {details.time}
          </div>
          <div>
            <b>Cost:</b> ${details.cost.toFixed(2)}
          </div>
          <div>
            <b>Extras:</b>{" "}
            {details.extras && details.extras.length > 0
              ? details.extras
                  .map((e) => `${e.name} ($${e.price}, ${e.duration})`)
                  .join(", ")
              : "None"}
          </div>
          <div>
            <b>Special Event:</b>{" "}
            {details.specialEvent && details.specialEvent.enabled
              ? `Yes ($${details.specialEvent.price})`
              : "No"}
          </div>
          <div>
            <b>Free parking spot:</b> {details.freeParking ? "Yes" : "No"}
          </div>
          <div>
            <b>Note:</b> {details.note}
          </div>
          <div>
            <b>Provider drive to you?:</b>{" "}
            {details.providerDrive ? "Yes" : "No"}
          </div>
          <div>
            <b>Tip:</b>{" "}
            {details.tip
              ? `${details.tip.percent}% ($${details.tip.amount})`
              : "N/A"}
          </div>
          <div>
            <b>Booking Fee:</b> $
            {details.bookingFee ? details.bookingFee.toFixed(2) : "0.00"}
          </div>
          <div className="font-bold mt-2">Total: ${details.total}</div>
        </div>
        <div className="flex items-center justify-end mt-4">
          <button
            className="bg-[#FFE6D8] text-[#FF827F] font-medium text-sm px-6 py-2 rounded-full shadow hover:bg-[#fbbcb5] transition w-full"
            onClick={onMakePayment}
          >
            Make Payment
          </button>
        </div>
      </div>
    </div>
  );
};
