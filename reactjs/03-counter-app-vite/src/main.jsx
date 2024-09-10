import React from "react";
import ReactDOM from 'react-dom/client';//herramienta para renderizar
import { App } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";
import { CounterApp } from "./CounterApp";

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp title="Hola Soy Luis" /> */}
        <CounterApp value={10}></CounterApp>
    </React.StrictMode>
);