import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { defaultTheme, ThemeProvider } from "@omni-channel/mfe-ui";
import { Provider } from 'react-redux'
// import store from './redux/store'
import { Home, Form } from './components';

export default ({ history }) => {
  return (
    // <Provider>
      <ThemeProvider theme={defaultTheme}>
        <Router history={history}>
          <Switch>
            <Route exact path="/eligibility/form" component={Form} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </ThemeProvider>
    // </Provider>
  );
};
