const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

const whitelist = ["http://localhost:5173", "https://react-cookie.netlify.app"];
const corsOptions = {
  credentials: true,
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cookieParser());
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

app.get("/", (_, res) => {
  res.cookie("token", "value", {
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    secure: process.env.NODE_ENV === "production",
  });
  res.json({ msg: process.env.NODE_ENV });
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
