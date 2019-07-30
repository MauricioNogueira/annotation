import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import IndexView from './view/IndexView';
import NavbarTemplate from './view/template/NavbarTemplate';
import Footer, {FooterSub} from './componente/Footer';

import { connect } from 'react-redux';
import { stateProps } from './redux/functionConnect';

class Routes extends Component {
    constructor(states) {
        super();
        this.state = {
            isAuth: false
        }
    }

    render() {
        let template = null;

        if (this.state.isAuth) {
            template = <TemplateAdmin />;
        } else {
            template = <TemplateDefault />;
        }

        return (
            <Router>
                { template }
            </Router>
        );
    }
}

export const TemplateDefault = () => {
    return (
        <Route>
            <NavbarTemplate />
            <Switch>
                <RoutePublic exact path="/" component={IndexView} />
                <Route component={() => <h1>Pagina nao foi encontrada</h1>} />
            </Switch>
            <Footer footerSub={<FooterSub />}>
                sdgashgdg
            </Footer>
        </Route>
    );
}

export const TemplateAdmin = () => {
    return (
        <Route>
            <div>
                <h1>Template generico</h1>
            </div>
            <Switch>
                <Route path="/admin/dashboard" component={() => <h2>Tela Dashboard</h2>} />
                <Route path="/admin/settings" render={() => <h2>Tela Settings</h2>} />
                <Route component={() => <h1>Pagina nao foi encontrada</h1>} />
            </Switch>
        </Route>
    );
}


export const RoutePublic = ({component: Component, ...rest}) => {
    return (<Route {...rest} render={(props) => false ? (<Redirect to="/" />) : (<Component {...props} />)} />);
}

export const RoutePrivate = ({component: Component, ...rest}) => {
    return (<Route {...rest} render={(props) => true ? (<Redirect to="/" />) : (<Component {...props} />)} />);
}

export default connect(stateProps)(Routes);