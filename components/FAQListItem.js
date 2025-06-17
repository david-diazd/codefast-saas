"use client";

import { useState } from "react";

const FAQListItem =({qa}) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <li key={qa.question}>
            {/* 1. Question (clickable) */}
        <button className="py-5 font-semibold border-b w-full text-left flex items-center justify-between" onClick={() => {setIsOpen(!isOpen)}}>
            <p>
                {qa.question}
            </p>
            {isOpen ? "-" : "+"}
        </button>
            {/* 2. Answer  */}
        <div className={`${isOpen ? "block" : "hidden"} mt-3 mb-6 opacity-90`}>{qa.answer}</div>
        </li>
    );
    };

export default FAQListItem;