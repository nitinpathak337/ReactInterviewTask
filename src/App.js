import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis } from "recharts";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./App.css";

const App = () => {
  const [data, setData] = useState([
    { id: "a", value: 5 },
    { id: "b", value: 3 },
    { id: "c", value: 0 },
  ]);

  const onDecrement = (id) => {
    setData((previousData) =>
      previousData.map((each) => {
        if (each.id === id) {
          return { ...each, value: each.value - 1 };
        }
        return each;
      })
    );
  };

  const onIncrement = (id) => {
    setData((previousData) =>
      previousData.map((each) => {
        if (each.id === id) {
          return { ...each, value: each.value + 1 };
        }
        return each;
      })
    );
  };

  const checkPrime = (value) => {
    for (let i = 2; i < value; i++) {
      if (value % i === 0) {
        return <p className="value-para not-prime">{value}</p>;
      }
    }
    return <p className="value-para">{value}</p>;
  };

  return (
    <div className="bg">
      <h1 className="heading">Chart App</h1>

      <ul className="list-container">
        {data.map((eachItem) => (
          <li key={eachItem.id} className="list-item">
            <p className="id-para">{eachItem.id}</p>
            {eachItem.value === 0 ? (
              <p className="zero-value">Zero</p>
            ) : (
              checkPrime(eachItem.value)
            )}

            <div>
              <button
                className="inc-dec-button"
                type="button"
                onClick={() => onDecrement(eachItem.id)}
              >
                -
              </button>
              <button
                type="button"
                className="inc-dec-button"
                onClick={() => onIncrement(eachItem.id)}
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>

      <Popup
        modal
        trigger={
          <button type="button" className="show-chart-button">
            Show Chart
          </button>
        }
      >
        {(close) => (
          <div className="popup-content">
            <button
              type="button"
              className="close-button"
              onClick={() => close()}
            >
              x
            </button>
            <BarChart data={data} height={350} width={500}>
              <XAxis dataKey="id" />
              <YAxis />
              <Bar dataKey="value" fill="#1f77b4" />
            </BarChart>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default App;
