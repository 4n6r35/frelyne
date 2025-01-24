import { useState } from "react";

interface DropdownOptionsInterface {
    id: number,
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

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    // const toggleDropdown = () => {
    //     setIsOpen(!isOpen);
    // };

    const handleOptionClick = (option: string) => {
        console.log(option)
    };

    return (
        <section
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <button
                // onClick={toggleDropdown}
                className="text-lg font-bold cursor-pointer focus:outline-none">
                {title}
            </button>

            <section
                className={`absolute mt-2 w-44 divide-y divide-gray-200 rounded-md shadow-lg  ring-opacity-5 transition-all duration-300 ease-in-out transform 
                        ${isOpen
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-2 invisible"
                    }`}>
                <section className="py-1">
                    {options.map((op) => (
                        <a
                            key={op.id}
                            href={op.redirect}
                            onClick={(e) => {
                                e.preventDefault();
                                handleOptionClick(op.id.toString())
                            }}
                            className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200">
                            {op.option}
                        </a>
                    ))}
                </section>
            </section>
        </section>
    );
};
