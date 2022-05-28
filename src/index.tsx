import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./store/theme-context";

import App from "./app";
import "./styles/index.module.scss";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </BrowserRouter>
);
