import { useState } from "react";

interface DropdownOptionsInterface {
    option: string;
    redirect: string;
}

export const DropdownComponent = ({
    title,
    options,
}: {
    title: string;
    options: DropdownOptionsInterface[];
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className="relative inline-block text-left">
            {/* Button Section */}
            <button
                onClick={toggleDropdown}
                className="inline-flex justify-between items-center w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                {title}
                {/* <svg
          className={`w-5 h-5 ml-2 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.707a1 1 0 011.414 0L10 11.586l3.293-3.879a1 1 0 111.414 1.414l-4 4.5a1 1 0 01-1.414 0l-4-4.5a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg> */}
            </button>

            {/* Dropdown Options */}
            {isOpen && (
                <section
                    className="absolute mt-2 w-56 bg-white divide-y divide-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                >
                    <section className="py-1">
                        {options.map((op, index) => (
                            <a
                                key={index}
                                href={op.redirect}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition"
                            >
                                {op.option}
                            </a>
                        ))}
                    </section>
                </section>
            )}
        </section>
    );
};
