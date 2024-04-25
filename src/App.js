import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap.min';
import './assets/css/style.css';
import "./assets/css/summary.css";
import "./assets/css/elif.css";
import "./assets/css/whatif.css";
import "./assets/css/social.css";
import "./assets/css/news.css";
import "./assets/css/action.css";


import { createRoot } from 'react-dom/client';
import React from 'react';
import ClimateLens from './climateLens';

function App() {
    return(<ClimateLens/>)
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);