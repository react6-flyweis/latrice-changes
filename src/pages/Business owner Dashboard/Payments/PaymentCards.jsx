import React from 'react';
import img from '../../../assets/images/dashboard/cards.png'
import img1 from '../../../assets/images/dashboard/paymenthistory.png'
import { RiDeleteBin6Fill } from "react-icons/ri";



export const PaymentCard = () => {
    return (
        <div className="bg-white border border-[#2F2F2F80] shadow-[0px_4px_4px_0px_#00000040] rounded-[20px] p-4 flex flex-col gap-4 max-w-[385px]">
            <div className="flex justify-between">
                <div className='flex flex-col items-start'>
                    <h3 className="font-[600] sm:text-[24px] text-[20px] text-[#000000] font-rasa">Visa</h3>
                    <p className="font-[700] sm:text-[25px] text-[20px] leading-[20px] text-[#000000] font-rasa tracking-widest">.... .... .... 4242</p>
                    <p className="font-[400] sm:text-[16px] text-[16px] text-[#000000] font-rasa mt-1">Expires 03/25</p>
                </div>
                <img
                    src={img}
                    alt="Visa"
                    className="w-40 h-auto rounded-[12px] object-contain"
                />
            </div>

            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <p className="font-[500] sm:text-[16px] text-[16px] text-[#000000] font-rasa">Set as default payment method</p>
                    <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-[#D9D9D9] peer-checked:bg-[#123E41] rounded-full relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                        </label>
                    </label>
                </div>
                <button className="text-[#FF0303] hover:text-red-800">
                    <RiDeleteBin6Fill size={22} />
                </button>
            </div>
        </div>
    );
};


export const PaymenthistoryCard = () => {
    return (
        <div className="bg-white border border-[#2F2F2F80] shadow-[0px_4px_4px_0px_#00000040] rounded-[20px] p-4 flex flex-col gap-4 max-w-sm">
            <div className="flex items-start gap-2">
                <div className="space-y-1 flex flex-col items-start">
                    <h6 className='font-[600] sm:text-[20px] text-[15px] text-[#000000] font-rasa'>Service: Haircut $50</h6>
                    <h6 className='font-[600] sm:text-[20px] text-[15px] text-[#000000] font-rasa'>Date: July 20, 2024</h6>
                    <h6 className='font-[600] sm:text-[20px] text-[15px] text-[#000000] font-rasa'>Total: $85</h6>
                    <h6 className='font-[600] sm:text-[20px] text-[15px] text-[#000000] font-rasa'>Payment Mode: Haircut $50</h6>
                    <h6 className='font-[600] sm:text-[20px] text-[15px] text-[#000000] font-rasa'>Salon Name: Sexy Brides</h6>
                </div>
                <img
                    src={img1}
                    alt="Receipt"
                    className="w-30 h-auto object-contain"
                />
            </div>

            <button className="bg-[#4FD12B] hover:bg-green-600 text-[#121712] font-bold font-rasa text-[18px] py-2 rounded-full">
                Download
            </button>
        </div>
    );
};


