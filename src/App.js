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
      <Provider store={store}>
    <HashRouter>
        <div className="App">
          <Header />
          <Routes />
        </div>
    </HashRouter>
      </Provider>
  );
}

export default App;
