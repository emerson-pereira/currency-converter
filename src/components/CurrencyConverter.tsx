import { ReactElementProps } from "../types/react";

interface CurrencyConverterProps extends ReactElementProps {
  ratesPlaceholder: string;
}

function CurrencyConverter(props: CurrencyConverterProps) {
  return (
    <div className={props.className}>
      COMPONENTE CURRENCY CONVERTER
      <p className="text-sm text-center text-gray-500">
        {props.ratesPlaceholder}
      </p>
    </div>
  );
}

export default CurrencyConverter;
