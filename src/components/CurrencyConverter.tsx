import { useMemo, useState } from "react";
import { ReactElementProps } from "../types/react";
import {
  convertCentsToCurrencyUnit,
  formatCurrency,
  removeNonNumerics,
} from "../utils";

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
      <input
        type="text"
        placeholder="0.00"
        className="input text-gray-500 w-full py-2 px-4 bg-sky-50 rounded"
        value={formatted}
        onChange={handleAmountChange}
      />
      <p className="text-sm text-center text-gray-500 mt-5">
        {props.ratesPlaceholder}
      </p>
    </div>
  );
}

export default CurrencyConverter;
