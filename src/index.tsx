import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import theme from "./modules/core/config/theme";
import {configureI18n} from "./modules/core/config/i18n";

configureI18n();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

document.body.style.backgroundColor = theme.colors.background;

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
