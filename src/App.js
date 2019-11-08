import React from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import { HashRouter } from "react-router-dom"
import Routes from "./routes.js"
import {Provider} from "react-redux"
import store from "./ducks/store"

// NO STATE!!!!  <<<----------

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div className="App">
          <Header />
          <Routes />
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
