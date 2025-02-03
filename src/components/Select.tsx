import React from "react";
import selectIcon from "../assets/icons/dropdown-icon.svg";

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
        className={`select appearance-none font-medium pr-[1em] pl-[.5em] outline-none ${props.className}`}
        onChange={props.onChange}
      >
        {props.items.map((item, index) => (
          <option
            key={index}
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
