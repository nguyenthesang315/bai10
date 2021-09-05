import "./App.scss";
import AppInfor from "./components/AppInfor";
import AppList from "./components/AppList";
// import { togglePopup } from "./redux/actions/popupAction";
// import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";
import { useEffect } from "react";
// // import { useState } from "react";
import { BrowserRouter as Router,Switch, Route, Link, NavLink } from "react-router-dom";
import AppListUser from "./components/Left/AppListUser";
import Right from "./components/Right/Right";
// import { getAllUser } from "./redux/actions/userAction";

function App() {
  
  return (
        <div className="App">
        <div className="App__cover">
          <div className="App__cover-left">
            <AppListUser/> 
          </div>  
          <div className="App__cover-center">
            <div className="App__cover-center-List">
              <AppList/>
            </div>
            <div className="App__cover-center-Infor">
              <AppInfor/>
            </div>
          </div>
          <div className="App__cover-right">
            <Right/>
          </div>
          
        </div>
    </div>
    
  );
}

export default App;
