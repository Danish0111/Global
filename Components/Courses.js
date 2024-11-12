"use client"
import React from 'react';
import { useEffect, useRef, useState } from 'react';
const offeredCourses = [
    { id: 1, name: 'MBA', Duration: '2 years', ApprovedBy: 'AICTE', AffiliatedTo: "Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow, Uttar Pradesh", EligibilityCriteria: "Graduation with 50% for General & OBC and 45% for SC/ST Candidates", Pattern: "Full time" },
    { id: 2, name: 'MBA Integrated', Duration: '5 years', ApprovedBy: 'AICTE', AffiliatedTo: "Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow, Uttar Pradesh", EligibilityCriteria: "10+2 with 45% for Gen. & OBC and 40% for SC/ST Candidates", Pattern: "Full time" },
    { id: 3, name: 'BBA', Duration: '3 years', ApprovedBy: 'Govt of UP', AffiliatedTo: " CCS University, Meerut", EligibilityCriteria: "10+2 with 45% for Gen. & OBC and 40% for SC/ST Candidates.", Pattern: "Full time" },
    { id: 4, name: 'MCA', Duration: '2 years', ApprovedBy: 'AICTE', AffiliatedTo: "Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow, Uttar Pradesh", EligibilityCriteria: "BCA/ Bachelor degree in Computer Science Engineering or equivalent Degree or passed B. Sc. /B. Com/ B. A. with Mathematics at 10+2 level or at graduation level with Minimum 50% marks (45% for SC/ST) in the aggregate", Pattern: "Full time" },
    { id: 5, name: 'MCA Integrated', Duration: '5 years', ApprovedBy: 'AICTE', AffiliatedTo: "Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow, Uttar Pradesh", EligibilityCriteria: "10+2 passed with 45% for General & OBC and 40% for SC/ST with compulsory subjects such as Physics & Mathematics and any of the subjects from Chemistry/ Bio-Technology / Biology / Technical Vocational subject.", Pattern: "Full time" },
    { id: 6, name: 'BCA', Duration: '3 years', ApprovedBy: 'AICTE', AffiliatedTo: "CCS University, Meerut", EligibilityCriteria: "10+2 with 45% for General & OBC and 40% for SC/ST Candidates. The candidate must have studied mathematics at 10th level for BCA admission.", Pattern: "Full time" },
    { id: 7, name: 'BCOM', Duration: '3 years', ApprovedBy: 'Govt of UP', AffiliatedTo: "CCS University, Meerut", EligibilityCriteria: "Passed 10+2 level of exam or its equivalent from any recognized Board / University and securing minimum 33% marks.", Pattern: "Full time" },
    { id: 8, name: 'BA', Duration: '3 years', ApprovedBy: 'Govt of UP', AffiliatedTo: "CCS University, Meerut", EligibilityCriteria: "Passed 10+2 level of exam or its equivalent from any recognized Board / University and securing minimum 33% marks", Pattern: "Full time" },
    { id: 9, name: 'B.Ed', Duration: '2 years', ApprovedBy: 'NCTE', AffiliatedTo: "CCS University, Meerut", EligibilityCriteria: "graduation or post graduation with 50% for Gen. & OBC and 45% for SC/ST candidates. Candidate must have appeared in UPBED entrance exam.", Pattern: "Full time" },
]
const Courses = () => {
    // const courses = [...offeredCourses];
    const [visibleCards, setVisibleCards] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute("data-index"));
                        setVisibleCards((prev) => (prev.includes(index) ? prev : [...prev, index]));
                    }
                });
            },
            {
                rootMargin: "0px 0px -100px 0px", // Adjust for scroll effect
                threshold: 0.5,
            }
        );

        document.querySelectorAll(".courseCard").forEach((card) => observer.observe(card));
        return () => observer.disconnect();
    }, []);
    return (
        <div className="courses relative z-0 py-10 w-[100%] bg-gray-50">
            <div className="container mx-auto px-5">
                <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Our Courses</h1>
                <div className="flex flex-col lg:flex-row justify-center gap-6 flex-wrap">
                    {offeredCourses.map((course, index) => (
                        <div
                            // ref={el => (courseRefs.current[index] = el)}
                            key={course.id}
                            data-index={index}
                            className={`courseCard w-[100%] lg:w-[30%] p-5 flex flex-col gap-2 border border-gray-200 rounded-lg shadow-lg
                                bg-white transition-all duration-500 ease-in-out transform
                                ${visibleCards.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} hover:scale-105 hover:cursor-pointer
                            `}
                        >
                            <div className="bg-gradient-to-r from-cyan-300 to-blue-500 text-white rounded-t-lg px-4 py-2 text-lg font-semibold text-center">
                                {course.name}
                            </div>
                            <div className="p-4 space-y-2">
                                <p className="text-gray-700 text-sm font-medium">
                                    <span className="font-semibold">Duration:</span> {course.Duration}
                                </p>
                                <p className="text-gray-700 text-sm font-medium">
                                    <span className="font-semibold">Approved By:</span> {course.ApprovedBy}
                                </p>
                                <p className="text-gray-700 text-sm font-medium">
                                    <span className="font-semibold">Affiliated To:</span> {course.AffiliatedTo}
                                </p>
                                <p className="text-gray-700 text-sm font-medium">
                                    <span className="font-semibold">Eligibility:</span> {course.EligibilityCriteria}
                                </p>
                                <p className="text-gray-700 text-sm font-medium">
                                    <span className="font-semibold">Pattern:</span> {course.Pattern}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Courses;