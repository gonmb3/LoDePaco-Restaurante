import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";


import AOS from 'aos';
import 'aos/dist/aos.css'; 
// ..
AOS.init({
  duration: 1600,
  delay: 200,
});


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <App/>
  </React.StrictMode>
);
