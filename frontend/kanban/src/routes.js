import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
const Login = lazy(() => import('./view/login/Login'));
const Main = lazy(() => import('./view/app/Main'));
const Routes = ()=>(
    <Router>
        <Suspense fallback={<></>}>
            <Switch>
                <Route exact path="/" component={localStorage.getItem('authToken') ?  Main : Login}/>
            </Switch>
        </Suspense>
    </Router>
);
export default Routes;