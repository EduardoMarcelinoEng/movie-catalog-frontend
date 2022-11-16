import React from 'react';
import './App.css';
import Routes from './Pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
