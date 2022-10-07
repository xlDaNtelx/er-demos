import ReactDOM from "react-dom/client";
import { App } from "./components/App";

import "./assets/style/main.css";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOM.createRoot(container);

// During an update, there is no need to pass the container again
root.render(<App />);
