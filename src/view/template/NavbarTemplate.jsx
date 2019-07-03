import React, {Component} from 'react';
import {Navbar, NavLinkLeft, NavLinkRigth, NavLink, DropDownLink, DropLink} from '../../componente/Navbar';
import FormModal, {BotaoModalForm} from '../../componente/FormModal/BoxFormModal';

export default class NavbarTemplate extends Component {
    render() {
        return (
            <span>
                <Navbar id="navbar" titulo="Navbar">
                    <NavLinkLeft>
                        <NavLink path="/teste" titulo="Home" />
                        <DropDownLink id="dropdown-link" titulo="submenu">
                            <DropLink to="/teste2" titulo="Teste 2" />
                            <DropLink to="/teste3" titulo="Teste 3" />
                            <DropLink to="/teste4" titulo="Teste 4" />
                        </DropDownLink>
                        {/* <NavLink path="/login" titulo="Login" /> */}
                    </NavLinkLeft>
                    <NavLinkRigth>
                        <BotaoModalForm redondo="1rem" corPrincipal="success" corTexto="#fff" tamanhoBotao="btn-sm" idModalTarget="form-modal" tituloBotaoModalForm="Efetuar login" />
                    </NavLinkRigth>
                </Navbar>
                <FormModal idModal="form-modal" tituloModal="Login" tituloBotao="Entrar">
                    
                </FormModal>
            </span>
        );
    }
}