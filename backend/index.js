require("dotenv").config();
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const authRoute = require("./Routes/AuthRoute");

const PORT = process.env.PORT || 3002;
const uri = process.env.ATLASDB_URL;

const app = express();

const corsOptions = {
  origin: [
    "https://zerodha-frontend-uex2.onrender.com",
    "https://zerodha-dashboard-jkmq.onrender.com",
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

app.use("/", authRoute);

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("DB Error:", err);
  });

async function main() {
  await mongoose.connect(uri);
}

/* app.get("/addholdings", async (req, res) => {
  try {
    const tempHoldings = [
      {
        name: "BHARTIARTL",
        qty: 2,
        avg: 538.05,
        price: 541.15,
        net: "+0.58%",
        day: "+2.99%",
      },
      {
        name: "HDFCBANK",
        qty: 2,
        avg: 1383.4,
        price: 1522.35,
        net: "+10.04%",
        day: "+0.11%",
      },
      {
        name: "HINDUNILVR",
        qty: 1,
        avg: 2335.85,
        price: 2417.4,
        net: "+3.49%",
        day: "+0.21%",
      },
      {
        name: "INFY",
        qty: 1,
        avg: 1350.5,
        price: 1555.45,
        net: "+15.18%",
        day: "-1.60%",
        isLoss: true,
      },
      {
        name: "ITC",
        qty: 5,
        avg: 202.0,
        price: 207.9,
        net: "+2.92%",
        day: "+0.80%",
      },
      {
        name: "KPITTECH",
        qty: 5,
        avg: 250.3,
        price: 266.45,
        net: "+6.45%",
        day: "+3.54%",
      },
      {
        name: "M&M",
        qty: 2,
        avg: 809.9,
        price: 779.8,
        net: "-3.72%",
        day: "-0.01%",
        isLoss: true,
      },
      {
        name: "RELIANCE",
        qty: 1,
        avg: 2193.7,
        price: 2112.4,
        net: "-3.71%",
        day: "+1.44%",
      },
      {
        name: "SBIN",
        qty: 4,
        avg: 324.35,
        price: 430.2,
        net: "+32.63%",
        day: "-0.34%",
        isLoss: true,
      },
      {
        name: "SGBMAY29",
        qty: 2,
        avg: 4727.0,
        price: 4719.0,
        net: "-0.17%",
        day: "+0.15%",
      },
      {
        name: "TATAPOWER",
        qty: 5,
        avg: 104.2,
        price: 124.15,
        net: "+19.15%",
        day: "-0.24%",
        isLoss: true,
      },
      {
        name: "TCS",
        qty: 1,
        avg: 3041.7,
        price: 3194.8,
        net: "+5.03%",
        day: "-0.25%",
        isLoss: true,
      },
      {
        name: "WIPRO",
        qty: 4,
        avg: 489.3,
        price: 577.75,
        net: "+18.08%",
        day: "+0.32%",
      },
    ];

    await HoldingsModel.deleteMany({});
    await HoldingsModel.insertMany(tempHoldings);

    res.json({
      message: "Holdings inserted successfully",
      count: tempHoldings.length,
    });
  } catch (error) {
    console.log("Add holdings error:", error);
    res.status(500).json({ error: "Failed to insert holdings" });
  }
}); */

/* app.get("/addpositions", async (req, res) => {
  try {
    const tempPositions = [
      {
        product: "CNC",
        name: "EVEREADY",
        qty: 2,
        avg: 316.27,
        price: 312.35,
        net: "+0.58%",
        day: "-1.24%",
        isLoss: true,
      },
      {
        product: "CNC",
        name: "JUBLFOOD",
        qty: 1,
        avg: 3124.75,
        price: 3082.65,
        net: "+10.04%",
        day: "-1.35%",
        isLoss: true,
      },
    ];

    await PositionsModel.deleteMany({});
    await PositionsModel.insertMany(tempPositions);

    res.json({
      message: "Positions inserted successfully",
      count: tempPositions.length,
    });
  } catch (err) {
    console.log("Add positions error:", err);
    res.status(500).json({ error: "Failed to insert positions" });
  }
}); */

app.get("/api/holdings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch holdings" });
  }
});

app.get("/api/positions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch positions" });
  }
});

app.post("/api/orders", async (req, res) => {
  const { name, qty, price, mode } = req.body;

  if (!name || !qty || !price || !mode) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  if (qty <= 0 || price <= 0) {
    return res.status(400).json({ error: "Qty and Price must be positive" });
  }

  try {
    const newOrder = await OrdersModel.create({ name, qty, price, mode });
    res.status(201).json({ message: "Order Saved!", order: newOrder });
  } catch (error) {
    res.status(500).json({ error: "Failed to save order" });
  }
});

app.get("/api/orders", async (req, res) => {
  try {
    const orders = await OrdersModel.find({}).sort({ created: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ err: "Failed to fetch orders" });
  }
});

app.get("/clearorders", async (req, res) => {
  await OrdersModel.deleteMany({});
  res.send("Orders cleared");
});

app.listen(PORT, () => {
  console.log(`App Started on http://localhost:${PORT}`);
});
