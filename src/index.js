import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as Sentry from "@sentry/browser";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

Sentry.init({
  dsn: "https://f976b6e86c3a4913b872bbaee922414a@sentry.io/1904347"
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
