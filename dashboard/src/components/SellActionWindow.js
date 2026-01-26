import React, { useContext, useState } from "react";
import api from "../api/axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const { closeSellWindow } = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState("");

  const handleSellClick = async () => {
    try {
      const qty = Number(stockQuantity);
      const price = Number(stockPrice);

      if (qty <= 0 || price <= 0) {
        return;
      }

      await api.post("/api/orders", {
        name: uid,
        qty,
        price,
        mode: "SELL",
      });

      closeSellWindow();
    } catch (error) {
      console.log("Sell Order Error:", error);
    }
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              min="0"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button
            type="button"
            className="btn btn-blue"
            onClick={handleSellClick}
          >
            Sell
          </button>

          <button
            type="button"
            className="btn btn-grey"
            onClick={closeSellWindow}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
