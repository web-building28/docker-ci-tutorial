import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App.tsx'

const root: HTMLElement | null = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);