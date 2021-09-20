import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import {ThemeProvider} from '@material-ui/core';
import { AuthPage } from './pages/AuthPage';
import { RegisterFormPage } from './pages/RegisterFormPage';
import { UploadFilePage } from './pages/UploadFilePage';
import { UsersListPage } from './pages/UsersListPage';

export const Routes: FC = () => {

  return (
    <Switch>
      <Route path='/UsersList' component={UsersListPage} />
      <Route path='/auth' component={AuthPage} />
      <Route path='/register' component={RegisterFormPage} />
      <Route path='/uploadFile' component={UploadFilePage} />
      <Redirect to='/auth' />
    </Switch>
  )
}
