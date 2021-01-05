import React from 'react';
import {
    SearchUser,
    GistsList,
    GistDetails
} from "./pages";

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

function App() {
  return (
      <Router>
          <div>
              <Route exact path="/" component={SearchUser} />
              <Route exact path="/users/:user" component={GistsList} />
              <Route exact path="/users/:userId/gists/:gistId" component={GistDetails} />
          </div>
      </Router>
  );
}

export default App;
