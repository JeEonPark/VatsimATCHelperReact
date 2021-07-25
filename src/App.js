import { Button } from "@material-ui/core";
import React from "react";
import "./App.css";
import Sidebar from './Components/Sidebar'
import { Del1 } from "./Components/ATCComponents/Del1";
import { Gnd1 } from "./Components/ATCComponents/Gnd1";
import { BrowserRouter, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="MainDiv">
      <BrowserRouter>
          <Route path="/delevery_1" component={Del1} />
          <Route path="/ground_1" component={Gnd1} />
        </BrowserRouter>
      </div>
    </div>
  );
}
