import React, { useState } from 'react'

import { Link } from 'react-router-dom';
import ClientDashboardLayout from '../../../components/DashbaordLayout/Client Dashbaord';

const faqData = [
    {
        question: "Lorem Ipsum is simply dummy text?",
        answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        question: "Lorem Ipsum is simply dummy text?",
        answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        question: "Lorem Ipsum is simply dummy text?",
        answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        question: "Lorem Ipsum is simply dummy text?",
        answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        question: "Lorem Ipsum is simply dummy text?",
        answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        question: "Lorem Ipsum is simply dummy text?",
        answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        question: "Lorem Ipsum is simply dummy text?",
        answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
    <div className="border-b border-gray-300 py-6">
        <div
            className="flex justify-between items-center cursor-pointer"
            onClick={onClick}
        >
            <h3 className="font-[700] sm:text-[18px] text-[15px] text-[#123E41] font-Poppins">{question}</h3>
            <span className="text-xl text-[#123E41]">{isOpen ? "−" : "+"}</span>
        </div>
        {isOpen && (
            <p className="mt-2 font-[400] sm:text-[15px] text-[12px] text-charcoal font-Poppins leading-relaxed">{answer}</p>
        )}
    </div>
);

const AccordionColumn = ({ startIndex }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full md:w-1/2 px-4">
            {faqData.map((item, idx) => (
                <AccordionItem
                    key={idx + startIndex}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === idx}
                    onClick={() => handleToggle(idx)}
                />
            ))}
        </div>
    );
};


const FAQs = () => {
    const routeMapping = {
        'About Us': "/dashboard/know-more/about-us",
        'Privacy Policy': "/dashboard/know-more/privacy-policy",
        "Terms Of Service": "/dashboard/know-more/terms-of-service",
        'Contact Us': "/dashboard/know-more/contact-us",
        'Cookies': "/dashboard/know-more/cookies",
        'FAQs': "/dashboard/know-more/faqs",
    };





    return (
        <ClientDashboardLayout title="FAQs"
        >

            <div className="w-full mt-4">
                {/* Tabs */}
                <div className="flex flex-wrap w-full bg-[#D9D9D9] rounded-[80px] overflow-hidden mb-6 p-1 justify-center sm:justify-between gap-2 sm:gap-0 sm:h-[60px]">
                    {['About Us', 'Privacy Policy', 'Terms Of Service', 'Contact Us', 'Cookies', 'FAQs'].map((item, index) => (
                        <Link key={index} to={routeMapping[item]}>
                            <button
                                className={`py-1 px-5 sm:px-7 text-[16px] sm:text-[20px] lg:text-[30px] font-medium font-rasa rounded-[80px] transition-all duration-200 ${item === 'FAQs' ? 'bg-white text-charcoal' : 'text-[#2F2F2F80]'
                                    }`}
                            >
                                {item}
                            </button>
                        </Link>
                    ))}
                </div>


                {/* Content */}
                <div className="w-full flex flex-col md:flex-row">
                    <AccordionColumn startIndex={0} />
                    <AccordionColumn startIndex={faqData.length} />
                </div>

            </div>

        </ClientDashboardLayout >
    )
}

export default FAQs