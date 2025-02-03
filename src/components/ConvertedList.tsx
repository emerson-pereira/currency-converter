import { useMemo } from "react";
import useRates from "../hooks/useRates";
import { ReactElementProps } from "../types/react";
import { UpholdRate } from "../types/uphold";
import {
  convertCentsToCurrencyUnit,
  convertCurrencyByRate,
  formatCurrency,
} from "../utils";

interface ResultsProps extends ReactElementProps {
  cents: number;
  currency: string;
}

type ListItem = { currency: string; amount: string };

function ConvertedList(props: ResultsProps) {
  const rates = useRates(props.currency);
  const listItems = useMemo<ListItem[]>(() => {
    return rates.map((rate: UpholdRate) => {
      const convertedCents: number = convertCurrencyByRate(
        props.cents,
        rate.ask,
      );
      const converted: number = convertCentsToCurrencyUnit(convertedCents);
      const formatted: string = formatCurrency(converted);

      return {
        currency: rate.currency,
        amount: formatted,
      };
    });
  }, [rates, props.cents]);

  return (
    <div className="flex flex-col text-gray-800 font-medium pt-4 pl-2 pr-10">
      {listItems.map((item: ListItem) => (
        <div className="flex justify-between p-1" key={item.currency}>
          <div>{item.amount}</div>
          <div>{item.currency}</div>
        </div>
      ))}
    </div>
  );
}

export default ConvertedList;
