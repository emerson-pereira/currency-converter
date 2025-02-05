import { useMemo } from "react";
import useRates, { UseRates } from "../hooks/useRates";
import { ReactElementProps } from "../types/react";
import {
  convertCentsToCurrencyUnit,
  convertCurrencyByRate,
  formatCurrency,
} from "../utils";
import { Rate } from "../types";

type ConvertedListProps = ReactElementProps & {
  cents: number;
  currency: string;
};

type ConvertedListItem = {
  amount: string;
  currency: string;
};

function ConvertedList(props: ConvertedListProps) {
  const { rates, loading, error }: UseRates = useRates(props.currency);

  const listItems = useMemo<ConvertedListItem[]>(() => {
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

  if (loading || error) {
    return (
      <p className="text-sm text-center text-gray-500 mt-5 transition-all duration-300 ease-in-out">
        {loading ? "Loading..." : error}
      </p>
    );
  }

  return (
    <div
      className={`flex flex-col text-gray-800 font-medium pt-4 pl-2 pr-5 ${props.className}`}
    >
      {listItems.map((item: ConvertedListItem) => (
        <div className="flex justify-between p-1" key={item.currency}>
          <div>{item.amount}</div>
          <div className="flex items-center">
            <img
              className="h-4 mr-[0.5em]"
              src={`./currencies/${item.currency}.png`}
              alt={`${item.currency} currency icon`}
            />
            <div className=" w-12">{item.currency}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ConvertedList;
