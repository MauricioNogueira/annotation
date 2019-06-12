import React, {Component} from 'react';
import FormModal, {BotaoModalForm} from '../componente/FormModal';

class LoginView extends Component {
    render() {
        return(
            <div>
                <FormModal idModal="form-modal" tituloModal="Login" tituloBotao="Entrar" />
                <BotaoModalForm idModalTarget="form-modal" tituloBotaoModalForm="Efetuar login" />
            </div>
        )
    }
}

export default LoginView;