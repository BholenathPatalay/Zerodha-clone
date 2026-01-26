import React, { useState, useContext, useEffect, useCallback } from "react";
import GeneralContext from "./GeneralContext";
import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
  Search,
  FilterList,
} from "@mui/icons-material";
import { watchlist } from "../data/data";
import { DoughnutChart } from "./DoughnutChart";

const WatchList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showChart, setShowChart] = useState(true);
  const [isListView, setIsListView] = useState(false);
  const [filteredStocks, setFilteredStocks] = useState(watchlist);

  const data = {
    labels: watchlist.map((stock) => stock.name),
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Filter stocks based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredStocks(watchlist);
    } else {
      const filtered = watchlist.filter((stock) =>
        stock.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setFilteredStocks(filtered);
    }
  }, [searchQuery]);

  const toggleChartView = useCallback(() => {
    setShowChart((prev) => !prev);
  }, []);

  const toggleListView = useCallback(() => {
    setIsListView((prev) => !prev);
  }, []);

  // Debounced search handler
  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  return (
    <div className="watchlist-container">
      {/* Mobile Header Controls */}
      <div className="watchlist-mobile-header">
        <h3 className="watchlist-title">Watchlist</h3>
        <div className="mobile-controls">
          <Tooltip title="Toggle Chart" placement="top">
            <button
              className={`mobile-control-btn ${showChart ? "active" : ""}`}
              onClick={toggleChartView}
              aria-label={showChart ? "Hide chart" : "Show chart"}
            >
              <BarChartOutlined />
            </button>
          </Tooltip>
          <Tooltip title="Toggle View" placement="top">
            <button
              className={`mobile-control-btn ${isListView ? "active" : ""}`}
              onClick={toggleListView}
              aria-label={isListView ? "Grid view" : "List view"}
            >
              <FilterList />
            </button>
          </Tooltip>
        </div>
      </div>

      <div className="search-container">
        <div className="search-input-wrapper">
          <Search className="search-icon" />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
            className="search"
            value={searchQuery}
            onChange={handleSearchChange}
            aria-label="Search stocks"
          />
        </div>
        <span className="counts" aria-live="polite">
          {filteredStocks.length} / {watchlist.length}
        </span>
      </div>

      {/* Chart Toggle for Mobile */}
      {showChart && (
        <div className="chart-container-mobile">
          <DoughnutChart data={data} />
        </div>
      )}

      {/* Watchlist Items */}
      <ul className={`list ${isListView ? "list-view" : ""}`}>
        {filteredStocks.length > 0 ? (
          filteredStocks.map((stock) => (
            <WatchListItem
              key={stock.name}
              stock={stock}
              isListView={isListView}
            />
          ))
        ) : (
          <li className="no-results" aria-live="polite">
            <p>No stocks found for "{searchQuery}"</p>
          </li>
        )}
      </ul>

      {/* Desktop Chart */}
      <div className="chart-container-desktop">
        <DoughnutChart data={data} />
      </div>
    </div>
  );
};

export default WatchList;

const WatchListItem = React.memo(({ stock, isListView }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setShowWatchlistActions(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setShowWatchlistActions(false);
  }, []);

  const handleTouchStart = useCallback(() => {
    setIsTouched((prev) => !prev);
  }, []);

  // Format price to show 2 decimal places consistently
  const formatPrice = (price) => {
    const numPrice = typeof price === "string" ? parseFloat(price) : price;
    return numPrice.toFixed(2);
  };

  // Check if percent is negative or positive
  const getPercentValue = (percentString) => {
    if (!percentString) return 0;
    return parseFloat(percentString.replace("%", ""));
  };

  const percentValue = getPercentValue(stock.percent);
  const isDown = percentValue < 0;

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleTouchStart}
      className={`watchlist-item ${isTouched ? "active" : ""} ${
        isListView ? "list-view-item" : ""
      }`}
      aria-label={`${stock.name} stock details`}
    >
      <div className="item">
        <div className="stock-info">
          <p className="stock-name">{stock.name}</p>
          {/* Mobile view - price and percent */}
          <div className="stock-details-mobile">
            <span className={`percent ${isDown ? "down" : "up"}`}>
              {stock.percent}
            </span>
            <span className="price-mobile">{formatPrice(stock.price)}</span>
          </div>
        </div>

        {/* Desktop view - percent and price */}
        <div className="itemInfo">
          <span className={`percent ${isDown ? "down" : "up"}`}>
            {stock.percent}
          </span>
          {isDown ? (
            <KeyboardArrowDown className="down" aria-label="Price down" />
          ) : (
            <KeyboardArrowUp className="up" aria-label="Price up" />
          )}
          <span className="price">{formatPrice(stock.price)}</span>
        </div>
      </div>

      {/* Desktop Actions - Only show on hover */}
      {(showWatchlistActions || isTouched) && (
        <WatchListActions
          uid={stock.name}
          isMobile={isTouched && window.innerWidth <= 768}
        />
      )}
    </li>
  );
});

WatchListItem.displayName = "WatchListItem";

const WatchListActions = React.memo(({ uid, isMobile }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = useCallback(() => {
    generalContext.openBuyWindow(uid);
  }, [generalContext, uid]);

  const handleSellClick = useCallback(() => {
    generalContext.openSellWindow(uid);
  }, [generalContext, uid]);

  return (
    <span className={`actions ${isMobile ? "mobile-actions" : ""}`}>
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button
            className="buy"
            onClick={handleBuyClick}
            aria-label={`Buy ${uid}`}
          >
            Buy
          </button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button
            className="sell"
            onClick={handleSellClick}
            aria-label={`Sell ${uid}`}
          >
            Sell
          </button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action" aria-label={`Analytics for ${uid}`}>
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action" aria-label={`More options for ${uid}`}>
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
});

WatchListActions.displayName = "WatchListActions";
