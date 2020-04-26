import React from 'react';
import GlobalStyles from './index.css';
import {Navigation} from './components';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import theme from 'utils/theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Router>
        <Navigation items={[{
          content: "Homepage", to:"/"},
          {content:"Budget Page", to:"/budget"
          }
          ]}/>
        <Switch>
          <Route exact path="/">Homepage</Route>
          <Route path="/budget">Budget page</Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
