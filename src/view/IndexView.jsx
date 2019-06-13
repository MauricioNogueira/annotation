import React, {Component} from 'react';
import {Navbar} from '../componente/Navbar';
import FormModal, {BotaoModalForm} from '../componente/FormModal';

class IndexView extends Component {
    render() {
        return (
            <div>
                <Navbar botaoModal={<BotaoModalForm idModalTarget="form-modal" tituloBotaoModalForm="Efetuar login" />} />
                <FormModal idModal="form-modal" tituloModal="Login" tituloBotao="Entrar" />
            </div>
        );
    }
}

export default IndexView;