import "./App.css";
import CurrencyConverter from "./components/CurrencyConverter";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout className="max-w-96">
        <div className="flex flex-col items-center gap-5 mt-10">
          <h1 className="text-xl font-bold">Currency Converter</h1>
          <p className="text-gray-500 text-center">
            Receive competitive and transparent pricing with no hidden spreads.
            See how we compare.
          </p>
          <CurrencyConverter
            className="my-5"
            ratesPlaceholder="Enter an amount to check the rates."
          />
        </div>
      </Layout>
    </>
  );
}

export default App;
