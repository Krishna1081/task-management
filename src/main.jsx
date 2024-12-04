import ReactDOM from "react-dom/client";
import App from "./App";
import configStore from "./store/configStore";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={configStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
