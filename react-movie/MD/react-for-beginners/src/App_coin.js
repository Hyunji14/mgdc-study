import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  // make sure to give default values to useState() to prevent further errors ?
  // esp. when loading state.length like the below.
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [money, setMoney] = useState(0);
  const [purchaseCoin, setPurchasedCoins] = useState(null);
  const onChange = (e) => {
    setMoney(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    // see if a coin is selected
    if (selectedCoin) {
      const selectedCoinPrice = selectedCoin;
    }
  };
  return (
    <div>
      <h1>The Coins! ! ! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading. . .</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={money}
          type="number"
          placeholder="enter the amount of money in USD"
        ></input>
        <button type="submit">Submit</button>
      </form>
      {`${money} USD is worthy of ${money}${coins}`};
    </div>
  );
}

export default App;
