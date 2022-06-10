import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: 1000,
    },
  },
});

root.render(
  <QueryClientProvider client={client}>
    <BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);
