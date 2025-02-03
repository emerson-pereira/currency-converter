import { useMemo, useState } from "react";
import { ReactElementProps } from "../types/react";
import {
  convertCentsToCurrencyUnit,
  formatCurrency,
  removeNonNumerics,
} from "../utils";
import Select from "./Select";

interface CurrencyConverterProps extends ReactElementProps {
  ratesPlaceholder: string;
}

function CurrencyConverter(props: CurrencyConverterProps) {
  const [cents, setCents] = useState(0);

  const formatted: string = useMemo(() => {
    const currencyUnit: number = convertCentsToCurrencyUnit(cents);
    return formatCurrency(currencyUnit);
  }, [cents]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cents: number = Number(removeNonNumerics(e.target.value));
    setCents(cents);
  };

  return (
    <div className={`w-full ${props.className}`}>
      <div className="relative">
        <input
          type="text"
          placeholder="0.00"
          className="input w-full rounded bg-sky-50 text-gray-500 py-3 px-4"
          value={formatted}
          onChange={handleAmountChange}
        />
        <div className="absolute h-full right-0 top-1/2 -translate-y-1/2 flex flex-col justify-center mr-2">
          <Select
            className="rounded-full bg-white text-md text-gray-800 uppercase"
            items={[{ title: "USD" }, { title: "EUR" }]}
          />
        </div>
      </div>

      <p className="text-sm text-center text-gray-500 mt-5">
        {props.ratesPlaceholder}
      </p>
    </div>
  );
}

export default CurrencyConverter;
