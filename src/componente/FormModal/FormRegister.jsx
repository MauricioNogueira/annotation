import React, { Component } from 'react';
import { Input } from '../Form';

const PubSub = require('pubsub.js');

export default class FormRegister extends Component {
    render() {
        // let erros = [];
        // console.log(this.props.errors);
        PubSub.publish("error-validation-register", [this.props.errors]);

        // Object.entries(this.props.errors).map(value => {
        //     erros[value[0]] = value[1][0];
            
        //     return value;
        // });
        
        return (
            <form id="form-registrar">
                <div className="modal-body mx-4">
                    <Input titulo="Nome" campos={'{"name":"nome", "id":"nome-register", "className":"form-control", "value":"", "type":"text"}'} />
                    <Input titulo="Login" campos={'{"name":"login", "id":"login-register", "className":"form-control", "value":"", "type":"text"}'} />
                    <Input titulo="Password" campos={'{"name":"password", "id":"password-register", "className":"form-control", "value":"", "type":"password"}'} />
                    <Input titulo="Confirmar Senha" campos={'{"name":"password_confirmation", "id":"password-confirmation", "className":"form-control", "value":"", "type":"password"}'} />
                    <div className="text-center mb-3 mt-3">
                        <button onClick={this.props.registrarUsuario} type="button" className="btn blue-gradient btn-block btn-rounded z-depth-1a">Criar</button>
                    </div>
                </div>
            </form>
        );
    }
}