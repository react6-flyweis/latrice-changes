import { IoArrowBack } from "react-icons/io5";

export const MemberDetailsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-40 z-30 flex items-center justify-center">
      <div className="bg-white rounded-[10px] w-full sm:max-w-lg max-w-md relative p-3 shadow-xl">
        <div className="flex items-center justify-between mb-2">
          <IoArrowBack
            onClick={onClose}
            color="#2F2F2F"
            size={25}
            className="cursor-pointer"
          />
          <h2 className="sm:text-[22px] text-[18px] font-[600] text-center text-charcoal font-rasa">
            Details
          </h2>
          <div className=""></div>
        </div>
        <div className="space-y-2 text-[15px] font-sansation text-charcoal">
          <div>
            <b>Category:</b> Hair Services
          </div>
          <div>
            <b>Service Name:</b> ABC Service
          </div>
          <div>
            <b>Proposed Price:</b> $100.00
          </div>
          <div>
            <b>Size:</b> Micro + Shoulder length
          </div>
          <div>
            <b>Service details:</b>
            <div className="border rounded p-2 mt-1 text-sm ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
          <div className="my-2 border rounded p-2">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=200&h=200"
              alt="Service"
              className="mx-auto rounded w-[120px] h-[120px] object-cover border"
            />
          </div>
          <div>
            <b>Date & Time:</b> 26 Feb 2025 at 10:00 am
          </div>
          <div>
            <b>Target:</b> Both
          </div>
          <div>
            <b>Do you want the service provider to drive to you?:</b> No
          </div>
        </div>
        <div className="flex items-center justify-end mt-4">
          <button className="bg-[#FFE6D8] text-[#FF827F] font-medium text-sm px-6 py-2 rounded-full shadow hover:bg-[#fbbcb5] transition">
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};
