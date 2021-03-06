import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Login from './components/views/Login/Login';
import Homepage from './components/views/Homepage/Homepage';
import Kitchen from './components/views/Kitchen/Kitchen';
import Tables from './components/views/Tables/Tables';
import NewBooking from './components/views/NewBooking/NewBooking';
import NewEvent from './components/views/NewEvent/NewEvent';
import TablesBooking from './components/views/TablesBooking/TablesBooking';
import TablesEvents from './components/views/TablesEvents/TablesEvents';
import Waiter from './components/views/Waiter/WaiterContainer';
import WaiterOrder from './components/views/WaiterOrder/WaiterOrder';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import {Provider} from 'react-redux';
import store from './redux/store';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2B4C6F',
    },
    secondary: {
      main: '#11cb5f',
    },
  },

});


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
                <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
                <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
                <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={WaiterOrder} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={NewBooking} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={NewEvent} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={TablesBooking} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={TablesEvents} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
