import React, { Component } from 'react';
import { InputValidation, ButtonSubmit } from '../Form';

const PubSub = require('pubsub.js');

export default class FormRegister extends Component {
    render() {
        PubSub.publish("error-validation-register", [this.props.errors]);
        
        return (
            <form id="form-registrar">
                <div className="modal-body mx-4">
                    <InputValidation titulo="Nome" campos={'{"name":"nome", "id":"nome-register", "className":"form-control", "value":"", "type":"text"}'} />
                    <InputValidation titulo="Login" campos={'{"name":"login", "id":"login-register", "className":"form-control", "value":"", "type":"text"}'} />
                    <InputValidation titulo="Email" campos={'{"name":"email", "id":"email-register", "className":"form-control", "value":"", "type":"email"}'} />
                    <InputValidation titulo="Password" campos={'{"name":"password", "id":"password-register", "className":"form-control", "value":"", "type":"password"}'} />
                    <InputValidation titulo="Confirmar Senha" campos={'{"name":"password_confirmation", "id":"password-confirmation", "className":"form-control", "value":"", "type":"password"}'} />
                    <div className="text-center mb-3 mt-3">
                        {/* <button onClick={this.props.registrarUsuario} type="button" className="btn blue-gradient btn-block btn-rounded z-depth-1a">Criar</button> */}
                        <ButtonSubmit id="button-register" titulo="Registrar" textoCarregamento="Registrando..." eventoClick={this.props.registrarUsuario} />
                    </div>
                </div>
            </form>
        );
    }
}