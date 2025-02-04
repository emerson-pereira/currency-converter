import { useMemo } from "react";
import { ReactElementProps } from "../types/react";
import {
  convertCentsToCurrencyUnit,
  formatCurrency,
  removeNonNumerics,
} from "../utils";
import useCurrencies from "../hooks/useCurrencies";
import ConvertedList from "./ConvertedList";
import useDebounce from "../hooks/useDebounce";
import useLocalStorage from "../hooks/useLocalStorage";
import Dropdown from "./Dropdown";

const DEFAULT_CURRENCY = "USD";

type CurrencyConverterProps = ReactElementProps & {
  ratesPlaceholder: string;
};

function CurrencyConverter(props: CurrencyConverterProps) {
  const [cents, setCents] = useLocalStorage("cents", 0);
  const centsDebounced: number = useDebounce(cents as number, 1000);
  const amountFormatted: string = useMemo<string>(() => {
    const amount: number = convertCentsToCurrencyUnit(cents);
    return formatCurrency(amount);
  }, [cents]);

  const [currency, setCurrency] = useLocalStorage("currency", DEFAULT_CURRENCY);
  const currencies: string[] = useCurrencies();

  const dropdownOptions = useMemo<string[]>(() => {
    return currencies.map((currency: string) => currency);
  }, [currencies]);

  function handleAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    const cents: number = Number(removeNonNumerics(e.target.value));
    setCents(cents);
  }

  return (
    <div className={`w-full ${props.className}`}>
      <div className="relative">
        <input
          type="text"
          placeholder="0.00"
          className="input w-full rounded h-16 font-medium text-2xl bg-sky-50 text-gray-800 py-3 px-4"
          value={amountFormatted}
          onChange={handleAmountChange}
        />
        <div className="absolute h-full right-0 top-1/2 -translate-y-1/2 flex flex-col justify-center mr-2">
          <Dropdown
            options={dropdownOptions}
            default={currency}
            onChange={(option) => setCurrency(option)}
          />
        </div>
      </div>

      {centsDebounced === 0 ? (
        <p className="text-sm text-center text-gray-500 mt-5 transition-all duration-300 ease-in-out">
          {props.ratesPlaceholder}
        </p>
      ) : (
        <ConvertedList
          className="transition-all duration-300 ease-in-out"
          cents={centsDebounced}
          currency={currency}
        />
      )}
    </div>
  );
}

export default CurrencyConverter;
