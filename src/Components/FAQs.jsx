import React, { useState } from "react";

// icons
import { FaChevronDown } from "react-icons/fa6";

const FAQs = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(null);

  const accordionData = [
    {
      title: "What are your office hours?",
      description:
        "Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.",
    },
    {
      title: "How can I schedule an appointment?",
      description:
        "Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.",
    },
    {
      title: "Do you accept insurance?",
      description:
        "Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.",
    },
    {
      title: "What should I bring to my appointment?",
      description:
        "Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.",
    },
    {
      title: "Do you offer telemedicine appointments?",
      description:
        "Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.",
    },
  ];

  const handleClick = (index) =>
    setIsAccordionOpen((prevIndex) => (prevIndex === index ? null : index));

  return (
    <div className="pb-20">
      <div className="space-y-4 mb-10">
        <button className="border-[2px] border-[#020043] py-1 px-6 lg:py-2 lg:px-8 rounded-full text-xl bg-[#fffff5a3] text-[#020043]">
          Faq
        </button>
        <h2 className="text-2xl md:text-4xl font-bold  leading-[1.3] text-[#020043]">
          Frequntly Asked Question
        </h2>
      </div>
      <div className="flex flex-col w-full">
        {accordionData.map((accordion, index) => (
          <article key={index} className=" rounded">
            <div
              className={`flex  cursor-pointer  ${
                isAccordionOpen === index
                  ? "border-b-[#dcdcdc] rounded-t-md border-b"
                  : "rounded-md"
              } bg-[#fffff5] py-7 px-5 items-center justify-between w-full`}
              onClick={() => handleClick(index)}
            >
              <h2 className="text-[#444444] font-semibold text-1.2rem">
                {accordion.title}
              </h2>
              <FaChevronDown
                className={`text-1.2rem text-[#424242] transition-all duration-300 ${
                  isAccordionOpen === index ? "rotate-180 !text-[#555555]" : ""
                }`}
              />
            </div>
            <div
              className={` ${
                isAccordionOpen === index
                  ? "grid-rows-1 opacity-100  mb-4 bg-white py-7 px-5"
                  : "grid-rows-0 opacity-0  mb-4"
              }`}
            >
              {isAccordionOpen === index && (
                <p className="text-[#636363]  text-0.9rem py-0 px-0 overflow-hidden">
                  {accordion.description}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
