
// import './App.css'
import {useState} from 'react';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';
function App() {
  
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  
  const currencyInfo = useCurrencyInfo(from);
  console.log('currencynfo', currencyInfo);
  
  const options = Object.keys(currencyInfo);

  const convert = () => {
      setConvertedAmount(amount * currencyInfo[to])
  }

  const swap = () => {
    setTo(from);
    setFrom(to);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  return (
      <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Dubai_Marina_Skyline.jpg/1200px-Dubai_Marina_Skyline.jpg')`,
        }}>
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                  e.preventDefault();
                  convert();
                  }}>
              <div className="w-full mb-1">
                  <InputBox
                      label="From"
                      selectCurrency={from}
                      amount={amount}
                      currencyOption={options}
                      onCurrencyChange={(currency) => setFrom(currency)}
                      onAmountChange={(amount) => setAmount(amount)}
                  />
              </div>
              <div className="relative w-full h-0.5">
                  <button
                      type="button"
                      className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                      onClick={swap}
                  >
                      Swap
                  </button>
              </div>
              <div className="w-full mt-1 mb-4">
                  <InputBox
                      label="To"
                      selectCurrency={to}
                      amountDisable
                      amount={convertedAmount}
                      currencyOption={options}
                      onCurrencyChange={(currency)=> setTo(currency)}
                  />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                  Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
  );
}

export default App
