import React from 'react';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BiSolidEditAlt } from "react-icons/bi";


export const GiftCardsPage = () => {
    return (
        <div className='flex gap-2'>
            <div className='bg-charocal w-[60px] h-[60px] rounded-full flex items-center justify-center font-rasa font-[500] sm:text-[30px] text-[25px] text-[#FFFFFF]'>
                1
            </div>
            <div className="relative flex flex-col md:flex-row rounded-tl-[20px] rounded-bl-[20px] shadow-md overflow-hidden w-full max-w-full">
                {/* Left side */}
                <div className="p-4 flex-1 bg-white pr-10">
                    <div className="space-y-2 text-[15px] sm:text-[20px] text-[#000] font-rasa font-[500] leading-[18px] w-[280px]">
                        <div className='flex items-center justify-between'>
                            <span>Recipient’s Name:</span>
                            <span>James Calzoni</span>
                        </div>
                        <div className='flex items-center justify-between'>
                            <span>Service:</span>
                            <span>N/A</span>
                        </div>
                        <div className='flex items-center justify-between'>
                            <span>Validity:</span>
                            <span>90 days left</span>
                        </div>
                        <div className='flex items-center justify-between'>
                            <span>Price:</span>
                            <span>$40.00</span>
                        </div>
                        <div className='flex items-center justify-between'>
                            <span>Purchased date:</span>
                            <span>26/02/2025</span>
                        </div>
                        <div className='flex items-center justify-between'>
                            <span>Purchased time:</span>
                            <span>10:00 am</span>
                        </div>
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
export const ReceivedGiftCardsPage = () => {
    return (
        <div className='flex gap-2'>
            <div className='bg-charocal w-[60px] h-[60px] rounded-full flex items-center justify-center font-rasa font-[500] sm:text-[30px] text-[25px] text-[#FFFFFF]'>
                1
            </div>
            <div className="relative flex flex-col md:flex-row rounded-tl-[20px] rounded-bl-[20px] shadow-md overflow-hidden w-full max-w-full">
                {/* Left side */}
                <div className="p-4 flex-1 bg-white pr-10">
                    <div className="space-y-2 text-[15px] sm:text-[20px] text-[#000] font-rasa font-[500] leading-[18px] w-[280px]">
                        <div className='flex items-center justify-between'>
                            <span>Sender’s Name:</span>
                            <span>James Calzoni</span>
                        </div>
                        <div className='flex items-center justify-between'>
                            <span>Service:</span>
                            <span>N/A</span>
                        </div>
                        <div className='flex items-center justify-between'>
                            <span>Validity:</span>
                            <span>90 days left</span>
                        </div>
                        <div className='flex items-center justify-between'>
                            <span>Price:</span>
                            <span>$40.00</span>
                        </div>
                        <div className='flex items-center justify-between'>
                            <span>Purchased date:</span>
                            <span>26/02/2025</span>
                        </div>
                        <div className='flex items-center justify-between'>
                            <span>Purchased time:</span>
                            <span>10:00 am</span>
                        </div>
                        <div className='border border-[#2F2F2F] rounded-[10px] p-[10px] text-[15px] sm:text-[20px] text-[#000000] font-rasa font-[500] leading-[18px]'>
                            Coupon Code: SCGP 590278
                        </div>
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