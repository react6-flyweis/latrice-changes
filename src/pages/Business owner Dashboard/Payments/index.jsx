import React, { useState } from 'react'

import img from '../../../assets/images/dashboard/img25.png'
import img1 from '../../../assets/images/dashboard/img24.png'
import { AddCardModal } from '../../../components/Modals/Modal';
import BusinessOwnerDashboardLayout from '../../../components/DashbaordLayout/Business Owner';
import { PaymentCard, PaymenthistoryCard } from './PaymentCards';


const BusinessPayments = () => {
    const [activeTab, setActiveTab] = useState('methods');
    const [isModalOpen, setModalOpen] = useState(false);
    const [ispaymentcard, setPaymentCard] = useState(false);

    const handleshowpaymentcard = () => {
        setModalOpen(false)
        setPaymentCard(true)
    }

    return (
        <BusinessOwnerDashboardLayout title="Payments"
            headerAction={
                ispaymentcard && (
                    <button
                        className="bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-6 py-2 rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
                        onClick={() => setModalOpen(true)}
                    >
                        Add Card
                    </button>
                )
            }
        >
            <AddCardModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                handleshowpaymentcard={handleshowpaymentcard}
            />
            <div className="w-full mt-4 text-center">
                {/* Tabs */}
                <div className="flex w-full bg-[#D9D9D9] rounded-[80px] overflow-hidden mb-6 p-1 max-w-4xl h-[60px]">
                    <button
                        className={`flex-1 py-2 sm:text-[30px] text-[20px] font-[500] font-rasa rounded-[80px]  ${activeTab === 'methods' ? 'bg-white text-charcoal' : 'text-[#2F2F2F80]'
                            }`}
                        onClick={() => setActiveTab('methods')}
                    >
                        Payment methods
                    </button>
                    <button
                        className={`flex-1 py-2 sm:text-[30px] text-[20px] font-[500] font-rasa rounded-[80px]  ${activeTab === 'history' ? 'bg-white text-charcoal' : 'text-[#2F2F2F80]'
                            }`}
                        onClick={() => setActiveTab('history')}
                    >
                        Payment history
                    </button>
                </div>

                {/* Content */}
                {activeTab === 'methods' ? (

                    ispaymentcard ?
                        <div>
                            <PaymentCard />
                        </div>
                        :
                        <div className="flex flex-col items-center text-center px-4 py-6">
                            <div className="mb-4">
                                <img src={img} alt="Barber tools illustration" className="w-full max-w-xs mx-auto" />
                            </div>
                            <h6 className='font-[500] sm:text-[30px] text-[25px] text-charcoal font-rasa'>No Payment Method Added</h6>
                            <p className="text-charcoal sm:text-[18px] text-[15px] font-[500] leading-relaxed text-center max-w-lg font-rasa">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </p>
                            <div className="mt-6 flex justify-center">
                                <button className="bg-[#FFE6D8] text-[#FF827F] font-semibold text-lg px-4 py-3 sm:w-[400px] rounded-md shadow-[0px_4px_4px_0px_#00000040] hover:bg-[#fbbcb5] transition"
                                    onClick={() => setModalOpen(true)}
                                >
                                    Add Card
                                </button>
                            </div>
                        </div>

                ) : (
                    ispaymentcard ?
                        <div>
                            <PaymenthistoryCard />
                        </div>
                        :
                        <div className="flex flex-col items-center text-center px-4 py-6">
                            <div className="mb-4">
                                <img src={img1} alt="Barber tools illustration" className="w-full max-w-xs mx-auto" />
                            </div>
                            <h6 className='font-[500] sm:text-[30px] text-[25px] text-charcoal font-rasa'>Your Receipts</h6>
                            <p className="text-charcoal sm:text-[18px] text-[15px] font-[500] leading-relaxed text-center max-w-lg font-rasa">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </p>
                        </div>
                )}
            </div>

        </BusinessOwnerDashboardLayout>
    )
}

export default BusinessPayments
