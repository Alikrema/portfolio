import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Main />
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
