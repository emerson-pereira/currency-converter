import { useMemo } from "react";
import useRates from "../hooks/useRates";
import { ReactElementProps } from "../types/react";
import {
  convertCentsToCurrencyUnit,
  convertCurrencyByRate,
  formatCurrency,
} from "../utils";
import { Rate } from "../types";

interface ResultsProps extends ReactElementProps {
  cents: number;
  currency: string;
}

type ListItem = { amount: string; currency: string };

function ConvertedList(props: ResultsProps) {
  const rates: Rate[] = useRates(props.currency);
  const listItems = useMemo<ListItem[]>(() => {
    return rates.map((rate: Rate) => {
      const convertedCents: number = convertCurrencyByRate(
        props.cents,
        rate.rate,
      );
      const converted: number = convertCentsToCurrencyUnit(convertedCents);
      const amount: string = formatCurrency(converted);

      return { amount, currency: rate.currencyTo };
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
