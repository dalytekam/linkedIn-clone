import React from "react";

import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widget from "./widget";

function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <Feed />
      <Widget />
    </div>
  );
}

export default App;
