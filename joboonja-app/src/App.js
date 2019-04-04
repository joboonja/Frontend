import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import JoboonjaApp from './services/redux';
import ProfileRoute from './scenes/Profile';

const store = createStore(JoboonjaApp, applyMiddleware(thunk));

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div>
          <Route path="/profile" component={ProfileRoute} />
        </div>
      </Provider>
    </Router>
  );
}

export default App;
