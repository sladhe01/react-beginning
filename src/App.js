import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState(0);
  const onChange = (event) => {
    setDollar(event.target.value);
  };
  return (
    <div>
      <h1>The coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <input type="number" onChange={onChange} placeholder="$"></input>
          <select>
            {coins.map((coin) => {
              return (
                <option key={coin.id}>
                  {coin.name}:{dollar / coin.quotes.USD.price}({coin.symbol})
                </option>
              );
            })}
          </select>
        </div>
      )}
    </div>
  );
}

export default App;
