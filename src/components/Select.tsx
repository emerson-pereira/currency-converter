import React from "react";
import selectIcon from "../assets/icons/select-icon.svg";

type SelectOption = {
  title: string;
  selected?: boolean;
  disabled?: boolean;
};

interface SelectProps extends React.HTMLProps<HTMLSelectElement> {
  items: SelectOption[];
}

function Select(props: SelectProps) {
  return (
    <div className="relative">
      <select
        className={`select appearance-none pr-[1em] pl-[.5em] outline-none ${props.className}`}
      >
        {props.items.map((item, index) => (
          <option
            key={index}
            className="-full"
            value={item.title}
            selected={item.selected}
            disabled={item.disabled}
          >
            {item.title}
          </option>
        ))}
      </select>

      <div className="absolute right-[0.5em] top-1/2 -translate-y-1/2">
        <img className="h-2 w-2" src={selectIcon} alt="" />
      </div>
    </div>
  );
}

export default Select;
