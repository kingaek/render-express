const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());

const PORT = process.env.PORT || 3000;

app.get("/", (_, res) => {
  res.cookie("token", "value");
  res.json({ msg: "Hello Render, Can I setup cookies please" });
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
