import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { App } from "./src/App";

const root = createRoot(document.getElementById('app'))
root.render(
        <App />
)
