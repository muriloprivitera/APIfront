import React from 'react'

import {Router,Switch,Route,Redirect} from 'react-router'

import Login from '../pages/Login'
import Registro from '../pages/Registro'
import Home from '../pages/Home'
import NotFound from'./NotFound'
import PrivateRoute from './PrivateRoute'

import {history} from '../history'


const Routes = () => (
    <Router history={history}>
        <Switch>
            
            <Route component={Login} exact path="/login"/>
            <Route component={Registro} exact path="/registro"/>
            <PrivateRoute component={Home} exact path ="/"/>
            <PrivateRoute component={NotFound}/>
        </Switch>
    </Router>
)

export default Routes