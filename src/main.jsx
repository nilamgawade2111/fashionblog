import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const RootComponent = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default RootComponent;

ReactDOM.createRoot(document.getElementById('root')).render(
  <RootComponent />
);