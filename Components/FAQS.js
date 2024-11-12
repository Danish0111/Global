"use client";
import React, { useState } from 'react';
import 'flowbite';

const FAQS = () => {
    const [open, setOpen] = useState(null);
    const FAQs = [
        { id: 0, question: "Who is the founder of global educational institutes?", answer: "Late Prof (Dr.) Niranjan Singh is the founder of Global Educational Institutes (GEI) which have two institutions under its umbrella namely, The Global Institute of Information Technology (GIIT) and the Global Institute of Education (GIE). Global Educational Institute is a twenty-year odd institution providing quality education at reasonable cost and preparing students for accepting bigger corporate and industry responsibilities. The Mission, Vision and the Legacy of the founder is now being carried under the able leadership and guidance of the current Chairperson Dr. Vinod Singh." },
        { id: 1, question: "What is the mission of GEI?", answer: "The mission of Global Educational Institute is to provide quality education and foster a supportive environment for students to succeed." },
        { id: 2, question: "What programs are offered?", answer: "GEI offers various undergraduate and postgraduate programs across different fields." },
        { id: 3, question: "How can I apply?", answer: "You can apply through the official GEI website or visit the admissions office for more information." },
        { id: 4, question: "What are the admission requirements?", answer: "Admission requirements vary by program, so please check the specific details on our website." },
        { id: 5, question: "Is financial aid available?", answer: "Yes, GEI offers various scholarships and financial aid options for eligible students." },
        { id: 6, question: "Where is GEI located?", answer: "Global Educational Institute is located in Greater Noida, India." },
    ];

    const toggleAccordion = (id) => {
        setOpen(open === id ? null : id);
    };

    return (
        <div className="faqs h-[100%] px-4 py-10 bg-gray-100">
            <h1 className='text-4xl font-bold mb-8 px-4 sm:px-12 text-center'>Frequently Asked Questions</h1>
            <div className="faqs-container max-w-3xl mx-auto">
                {FAQs.map((faq) => (
                    <div key={faq.id} className="mb-4 bg-white rounded-lg shadow-md">
                        <h2 id={`accordion-collapse-heading-${faq.id}`}>
                            <button
                                type="button"
                                className={`flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-b-0 rounded-t-lg hover:bg-gray-100 ${open === faq.id ? 'bg-gray-200' : ''}`}
                                onClick={() => toggleAccordion(faq.id)}
                            >
                                <span className="text-left">{faq.question}</span>
                                <svg className={`w-4 h-4 transform ${open === faq.id ? 'rotate-180' : ''}`} viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeWidth="2" d="M9 5 5 1 1 5" />
                                </svg>
                            </button>
                        </h2>
                        {open === faq.id && (
                            <div className="p-5 border border-t-0 border-gray-200 rounded-b-lg">
                                <p className="mb-2 text-sm font-semibold">{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQS;
