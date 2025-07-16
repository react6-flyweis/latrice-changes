import React from 'react';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BiSolidEditAlt } from "react-icons/bi";

const GiftCardsPage = () => {
    return (
        <div className='flex gap-8'>
            <div className='bg-charocal w-[60px] h-[60px] rounded-full flex items-center justify-center font-rasa font-[500] sm:text-[30px] text-[25px] text-[#FFFFFF]'>
                1
            </div>
            <div className="relative flex flex-col md:flex-row rounded-tl-[20px] rounded-bl-[20px] shadow-md overflow-hidden w-full max-w-fit">
                {/* Left side */}
                <div className="p-4 flex-1 bg-white">
                    <div className="space-y-1 text-[15px] sm:text-[20px] text-[#000] font-rasa font-[500]">
                        <div>Name: James Calzoni</div>
                        <div>Service: Gent's Standard</div>
                        <div>Validity: Never expires</div>
                        <div>Price: $40.00</div>
                        <div>Purchased date: 26/02/2025</div>
                        <div>Purchased time: 10:00 am</div>
                    </div>
                </div>

                {/* Top red dot - positioned at the top-right corner of the left side */}
                <div className="absolute right-45 -top-2 z-10">
                    <div className="w-5 h-5 bg-[#f5f5f5] rounded-full"></div>
                </div>

                {/* Bottom red dot - positioned at the bottom-right corner of the left side */}
                <div className="absolute right-45 -bottom-2 z-10">
                    <div className="w-5 h-5 bg-[#f5f5f5] rounded-full"></div>
                </div>

                {/* Right side */}
                <div className="relative text-white p-4 md:w-48 flex flex-col items-center justify-center text-center"
                    style={{
                        background: 'linear-gradient(133.17deg, #FF827F 11.59%, #123E41 41.23%, #464646 117.06%)'
                    }}
                >
                    <button className="absolute top-2 right-2 text-white hover:text-red-200 flex gap-2">
                        <BiSolidEditAlt size={20} />
                        <RiDeleteBin6Fill size={20} />
                    </button>

                    <div className="text-[#FFE6D8] rounded-full flex items-center justify-center sm:text-[35px] text-[20px] font-[600] font-rasa mb-2">
                        Latrice
                    </div>

                    <div className="text-xs opacity-80">Coupon Code:</div>
                    <div className="font-mono font-bold text-lg tracking-wider">SCCRP 5402376</div>

                    <div className="absolute -right-2 top-0 h-full w-4 flex flex-col justify-between items-center">
                        {[...Array(10)].map((_, i) => (
                            <div key={i} className="w-3 h-3 bg-[#f5f5f5] rounded-full"></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GiftCardsPage;
