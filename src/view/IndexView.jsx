import React, {Component} from 'react';
import {Navbar, NavLinkLeft, NavLinkRigth} from '../componente/Navbar';
import FormModal, {BotaoModalForm} from '../componente/FormModal';

class IndexView extends Component {
    render() {
        return (
            <div>
                <Navbar id="navbar" titulo="Navbar">
                    <NavLinkLeft>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </NavLinkLeft>
                    <NavLinkRigth>
                        <BotaoModalForm redondo="1rem" corPrincipal="success" corTexto="#fff" tamanhoBotao="btn-sm" idModalTarget="form-modal" tituloBotaoModalForm="Efetuar login" />
                    </NavLinkRigth>
                </Navbar>
                <FormModal idModal="form-modal" tituloModal="Login" tituloBotao="Entrar" />
            </div>
        );
    }
}

export default IndexView;