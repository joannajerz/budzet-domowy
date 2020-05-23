import React, {Fragment, useEffect} from 'react';
import GlobalStyles from './index.css';
import {Navigation, Wrapper, LoadingIndicator, Button} from './components';
import { ThemeProvider } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { fetchBudget } from 'data/actions/budget.actions';
import { connect} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import theme from 'utils/theme';

function App({budget, fetchBudget}) {
  useEffect(() => {
    fetchBudget(1)
  },[fetchBudget]);
  console.log(budget);
  const { i18n } = useTranslation();
  


  return (
    <Fragment>
      <GlobalStyles/>
      <Router>
        <Navigation items={[{
          content: "Homepage", to:"/"},
          {content:"Budget Page", to:"/budget"
          }
          ]}
          RightElement={(
            <div>
              <Button variant="regular" onClick={()=>i18n.changeLanguage('pl')}>pl</Button>
              <Button variant="regular" onClick={()=>i18n.changeLanguage('en')}>en</Button>
            </div>
          )}/>
        <Wrapper>
        <Switch>
          <Route exact path="/">Homepage</Route>
          <Route path="/budget">Budget page</Route>
        </Switch>
        </Wrapper>
      </Router>
    </Fragment>
  );
}
const ConnectedApp = connect(state=>{
  return{
    budget: state.budget.budget
  }
},{fetchBudget})(App)
function RootApp() {
  return (
    <ThemeProvider theme={theme}>
  <React.Suspense fallback={<LoadingIndicator/>}>
    <ConnectedApp/>
  </React.Suspense>
  </ThemeProvider>
  )
}

export default RootApp;
