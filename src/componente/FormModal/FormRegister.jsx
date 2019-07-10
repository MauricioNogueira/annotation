import React, { Component } from 'react';
import { Input } from '../Form';

export default class FormRegister extends Component {
    removeError(input) {
        document.getElementById("error-"+input.target.name).innerHTML = "";
    }

    render() {
        Object.entries(this.props.errors).map(value => {
            // let div = document.getElementById("error-"+value[0]);
            // div.innerHTML = value[1][0];
            console.log(value);
        });
        
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