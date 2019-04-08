import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { MuiThemeProvider } from '@material-ui/core';
import JoboonjaApp from './services/redux';
import ProfileRoute from './scenes/Profile';
import theme from './assets/theme/MUITheme';
import 'react-toastify/dist/ReactToastify.css';
import Toast from './components/Toast';
import Home from './scenes/Home';

const store = createStore(JoboonjaApp, applyMiddleware(thunk));

function App() {
  return (
    <Router>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <div>
            <Toast />
            <Route path="/profile" component={ProfileRoute} />
            <Route path="/" exact component={Home} />
          </div>
        </MuiThemeProvider>
      </Provider>
    </Router>
  );
}

export default App;
