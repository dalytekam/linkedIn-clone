import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widget from "./widget";
import { selectUser } from "./features/userSlice";
function App() {
  const user = useSelector(selectUser);
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
