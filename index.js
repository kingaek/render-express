const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

const whitelist = [
  "http://localhost:5173",
  "https://6322e3af8900897ddea8d571--glistening-klepon-c03030.netlify.app",
];
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
  res.cookie("token", "value", { sameSite: "none", secure: true });
  res.json({ msg: "Hello Render, Can I setup cookies please" });
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
