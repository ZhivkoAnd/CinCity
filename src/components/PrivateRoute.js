import React,{useContext} from 'react';
import {Route, Redirect} from 'react-router-dom'
import {AuthContext} from './AuthContext'


// What component should we render if the user is authenticated,
// Private route is a wrapper over the basic Route
const PrivateRoute = ({component:RouteComponent, ...rest}) => {
    const {currentUser} = useContext(AuthContext);
    return (
        <Route 
        {...rest}
        render={routeProps =>
            // if user exists, we render our route component(the main page)
        !!currentUser ? (
            <RouteComponent {...routeProps} />
        ) : (
            // If the user doesn't exist, redirect us to the login page
            <Redirect to={'./login'} />
        )
        }
        />
    );
};

export default PrivateRoute;