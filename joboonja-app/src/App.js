import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { MuiThemeProvider } from '@material-ui/core';
import JoboonjaApp from './services/redux';
import ProfileRoute from './scenes/Profile';
import theme from './services/theme/MUITheme';

const store = createStore(JoboonjaApp, applyMiddleware(thunk));

function App() {
  return (
    <Router>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <div>
            <Route path="/profile" component={ProfileRoute} />
          </div>
        </MuiThemeProvider>
      </Provider>
    </Router>
  );
}

export default App;
