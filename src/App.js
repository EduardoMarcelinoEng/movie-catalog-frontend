import React from 'react';
import './App.css';
import Routes from './Pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import { Provider } from 'react-redux';
import store from './store';
import { NotificationContainer } from 'react-notifications';

function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <NotificationContainer />
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
