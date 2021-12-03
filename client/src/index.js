import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SearchEngine from './Components/SearchEngine/SearchEngine';
import Dashboard from './Components/Administration/Dashboard/Dashboard';
import Navbar from './Components/Navbar/Navbar';
import AjouterInfos from './Components/AjouterInfos/ajouterInfos';

ReactDOM.render(
  <React.StrictMode>
          

     <Router>
       <Navbar />
        <Switch>
          

        <Route exact path="/add">
            <AjouterInfos />
          </Route>

          <Route exact path="/search">
            <SearchEngine />
          </Route>

          <Route exact path="/admin">
            <Dashboard />
          </Route>

          <Route exact path="/">
            <App />
          </Route>

        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
