import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ProfileRoute } from './scenes/Profile';

function App() {
  return (
    <Router>
      <div>
        <Route path="/profile" component={ProfileRoute} />
      </div>
    </Router>
  );
}

export default App;
