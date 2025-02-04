import { useEffect, useRef, useState } from "react";
import { ReactElementProps } from "../types/react";
import selectIcon from "../assets/icons/dropdown-icon.svg";
import "./Dropown.css";

type DropdownProps = ReactElementProps & {
  options: string[];
  default: string;
  onChange: (option: string) => void;
};

function Dropdown(props: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeOption, setActiveItem] = useState<string>(props.default);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelect(option: string) {
    setActiveItem(option);
    props.onChange(option);
    setIsOpen(false);
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center w-26 bg-white px-4 py-2 rounded-full shadow hover:bg-gray-100 transition-all duration-300 ease-in-out drop-shadow"
      >
        <img
          className="h-4 mr-[0.5em]"
          src={`./currencies/${activeOption}.png`}
          alt={`${activeOption} currency icon`}
        />
        <span className="pr-[1em] font-medium">{activeOption}</span>
        <div className="absolute right-[1em] top-1/2 -translate-y-1/2">
          <img
            className="h-2 w-2"
            src={selectIcon}
            alt={`${selectIcon} currency icon`}
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-26 max-h-40 overflow-y-auto scroll-smooth bg-white shadow-lg rounded-lg drop-shadow no-scrollbar">
          <ul className="py-2">
            {props.options.map((option, key) => (
              <li
                key={key}
                className={`flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer ${option === activeOption ? "bg-sky-300" : ""}`}
                onClick={() => handleSelect(option)}
              >
                <img
                  className="h-4 mr-[0.5em]"
                  src={`./currencies/${option}.png`}
                  alt={`${option} currency icon`}
                />
                <span>{option}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
