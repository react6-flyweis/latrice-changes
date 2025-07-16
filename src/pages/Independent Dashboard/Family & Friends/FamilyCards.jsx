import React from 'react';
import img from '../../../assets/images/dashboard/img36.jpg'
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BiSolidEditAlt } from "react-icons/bi";

const FamilyCards = ({setModalOpen}) => {
    return (
        <div className="bg-white rounded-[20px] shadow-[0px_4px_4px_0px_#00000040] ">
            {/* Top section */}
            <div className="flex items-start gap-3 p-2">
                <img
                    src={img}
                    alt="Profile"
                    className="w-[100px] rounded-[10px] object-cover"
                />
                <div className="w-[350px]">
                    <p className='flex items-center justify-between font-sansation font-[700] sm:text-[19px] text-[15px] text-charcoal '>
                        <span className="">Relation:</span>
                        Friend
                    </p>
                    <p className='flex items-center justify-between font-sansation font-[700] sm:text-[20px] text-[15px] text-charcoal '>
                        <span className="">Name:</span>
                        Jordyn Mango
                    </p>
                    <p className='flex items-center justify-between font-sansation font-[700] sm:text-[20px] text-[15px] text-charcoal '>
                        <span className="">Phone Number:</span>
                        +1 778 6931 369
                    </p>
                    <p className='flex items-center justify-between font-sansation font-[700] sm:text-[20px] text-[15px] text-charcoal '>
                        <span className="">Email Address:</span>
                        example@gmail.com
                    </p>
                    <p className='flex items-center justify-between font-sansation font-[700] sm:text-[20px] text-[15px] text-charcoal '>
                        <span className="">Birthday:</span>
                        1996/07/07
                    </p>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center mt-2">
                <button className="w-full bg-[#97E7EC] text-[#123E41] font-semibold sm:text-[20px] text-lg px-2 py-2 rounded-bl-[20px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#6cc8cf] transition flex gap-1 items-center justify-center"
                >
                    <RiDeleteBin6Fill size={20} />
                    Delete
                </button>
                <button className="w-full bg-[#FFE6D8] text-[#FF827F] font-semibold sm:text-[20px] text-lg px-2 py-2  rounded-br-[20px] shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition flex gap-1 items-center justify-center"
                    onClick={() => setModalOpen(true)}
                >
                    <BiSolidEditAlt size={20} />
                    Edit
                </button>
            </div>
        </div>
    );
};

export default FamilyCards;
