import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import LoginView from './view/LoginView';
import IndexView from './view/IndexView';

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={IndexView} />
                    {/* <Route path="/teste" render={() => <h1>Tela Teste</h1>} /> */}
                    <RoutePublic path="/login" component={LoginView} />
                </Switch>
            </Router>
        );
    }
}


export const RoutePublic = ({component: Component, ...rest}) => {
    return (<Route {...rest} render={(props) => false ? (<Redirect to="/" />) : (<Component {...props} />)} />);
}

export default Routes;