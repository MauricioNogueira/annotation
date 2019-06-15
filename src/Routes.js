import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect, StaticRouter} from 'react-router-dom';
import LoginView from './view/LoginView';
import IndexView from './view/IndexView';
import {Navbar, NavLinkLeft, NavLinkRigth, NavLink, DropDownLink, DropLink} from './componente/Navbar';
import FormModal, {BotaoModalForm} from './componente/FormModal';

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route pathname>
                        <Navbar id="navbar" titulo="Navbar">
                            <NavLinkLeft>
                                <NavLink path="/teste" titulo="Home" />
                                <DropDownLink id="dropdown-link" titulo="submenu">
                                    <DropLink to="/teste2" titulo="Teste 2" />
                                    <DropLink to="/teste3" titulo="Teste 3" />
                                    <DropLink to="/teste4" titulo="Teste 4" />
                                </DropDownLink>
                                <NavLink path="/login" titulo="Login" />
                            </NavLinkLeft>
                            <NavLinkRigth>
                                <BotaoModalForm redondo="1rem" corPrincipal="success" corTexto="#fff" tamanhoBotao="btn-sm" idModalTarget="form-modal" tituloBotaoModalForm="Efetuar login" />
                            </NavLinkRigth>
                        </Navbar>
                        <FormModal idModal="form-modal" tituloModal="Login" tituloBotao="Entrar" />
                        <Route exact path="/" component={IndexView} />
                    </Route>
                </Switch>
                <Switch>
                    <RoutePublic exact={true} path="/login" component={LoginView} />
                </Switch>
            </Router>
        );
    }
}


export const RoutePublic = ({component: Component, ...rest}) => {
    return (<Route {...rest} render={(props) => false ? (<Redirect to="/" />) : (<Component {...props} />)} />);
}

export default Routes;