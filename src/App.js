import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import Home from './components/Home';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
};

export default App;

