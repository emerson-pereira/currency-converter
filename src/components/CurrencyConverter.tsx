import { useMemo, useState } from "react";
import { ReactElementProps } from "../types/react";
import {
  convertCentsToCurrencyUnit,
  formatCurrency,
  removeNonNumerics,
} from "../utils";
import Select from "./Select";
import { UpholdAsset } from "../types/uphold";
import useCurrencies from "../hooks/useCurrencies";
import { SelectItem } from "../types";
import ConvertedList from "./ConvertedList";
import useDebounce from "../hooks/useDebounce";

const DEFAULT_CURRENCY = "USD";

interface CurrencyConverterProps extends ReactElementProps {
  ratesPlaceholder: string;
}

function CurrencyConverter(props: CurrencyConverterProps) {
  const [cents, setCents] = useState<number>(0);
  const centsDebounced: number = useDebounce(cents, 1000);
  const amountFormatted: string = useMemo<string>(() => {
    const amount: number = convertCentsToCurrencyUnit(cents);
    return formatCurrency(amount);
  }, [cents]);

  const [currency, setCurrency] = useState<string>(DEFAULT_CURRENCY);
  const currencies: UpholdAsset[] = useCurrencies();

  const selectItems = useMemo<SelectItem[]>(() => {
    return currencies.map((currency: UpholdAsset) => ({
      title: currency.code,
      selected: currency.code === DEFAULT_CURRENCY,
    }));
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
          <Select
            className="rounded-full bg-white text-md text-gray-800 uppercase"
            items={selectItems}
            onChange={(e) => setCurrency((e.target as HTMLSelectElement).value)}
          />
        </div>
      </div>

      {centsDebounced === 0 ? (
        <p className="text-sm text-center text-gray-500 mt-5">
          {props.ratesPlaceholder}
        </p>
      ) : (
        <ConvertedList cents={centsDebounced} currency={currency} />
      )}
    </div>
  );
}

export default CurrencyConverter;
