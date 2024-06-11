import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementsById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

require("dotenv/config");
const app = require("./components/App");

const PORT = process.env.PORT || 3306;
app.listen(PORT, () => {
  console.log(`API:${PORT}`);
});
