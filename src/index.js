import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import './normalize.css'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className="index">
        <BrowserRouter>
            <App />
        </BrowserRouter>
        <img src="https://img.freepik.com/premium-photo/canvas-backdrop-canvas-texture-pastel-paint-stains-pink-light-blue-colours-ai-generative-background_651171-1721.jpg?w=996" />
    </div>
);