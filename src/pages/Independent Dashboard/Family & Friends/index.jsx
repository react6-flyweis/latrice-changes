import React from 'react'
import { useState } from "react";
import { AddaMember } from "../../../components/Modals/Modal";
import img from '../../../assets/images/dashboard/img4.png'
import FamilyCards from './FamilyCards';
import IndependentDashboardLayout from '../../../components/DashbaordLayout/Independent Dashbaord';

const IndependentFamilyandFriends = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isfamilycard, setFamilyCard] = useState(false);

    const handleshowfamilycard = () => {
        setModalOpen(false)
        setFamilyCard(true)
    }

    return (
        <IndependentDashboardLayout title="Family & Friends"
            headerAction={
                isfamilycard && (
                    <button
                        className="bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-6 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
                        onClick={() => setModalOpen(true)}
                    >
                        Add Members
                    </button>
                )
            }
        >
            <AddaMember
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                handleshowfamilycard={handleshowfamilycard}
            />

            {isfamilycard ?
                <div className="flex mt-2">
                    <FamilyCards setModalOpen={setModalOpen}/>
                </div>
                :
                <div className="flex flex-col items-center text-center px-4 py-6">
                    <div className="mb-4">
                        <img src={img} alt="Barber tools illustration" className="w-full max-w-xs mx-auto" />
                    </div>
                    <h6 className='font-[500] text-[40px] text-charcoal font-rasa'>Add Your Family & Friends</h6>
                    <p className="text-charcoal sm:text-[20px] text-[15px] font-[500] leading-relaxed max-w-md font-rasa">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                    <div className="mt-6 flex justify-center">
                        <button className="bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-4 py-3 sm:w-[400px] rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
                            onClick={() => setModalOpen(true)}
                        >
                            Add Members
                        </button>
                    </div>
                </div>
            }
        </IndependentDashboardLayout>
    )
}

export default IndependentFamilyandFriends