import {Route,Redirect} from 'react-router-dom';
import React from 'react';

//authenticação
import { isAuthenticated } from '../../auth';

export const PrivateRoute = ({ component: Component, ...rest }) => (

    <Route {...rest} render={props =>
      isAuthenticated() ? (<Component {...props} />) : (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
    }
    />

  );