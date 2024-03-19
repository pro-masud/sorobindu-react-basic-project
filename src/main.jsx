import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { CounterProvider } from './providers/counterProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
    <CounterProvider>
        <App/>
    </CounterProvider>
);
