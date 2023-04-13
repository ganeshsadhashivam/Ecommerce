import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ProductsProvider } from "./context/ProductsContext";
import { FilterProvider } from "./context/FilterContext";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductsProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </ProductsProvider>
);
