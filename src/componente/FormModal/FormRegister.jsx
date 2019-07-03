import React, { Component } from 'react';

export default class FormRegister extends Component {
    render() {
        return (
            <form id="form-registrar">
                <div className="modal-body mx-4">
                    <div>
                        <label htmlFor="nome-register">Nome</label>
                        <input id="nome-register" className="form-control" type="text" name="nome" />
                    </div>
                    <div>
                        <label htmlFor="login-register">Login</label>
                        <input id="login-register" className="form-control" type="text" name="login" />
                    </div>
                    <div>
                        <label htmlFor="email-register">Email</label>
                        <input id="email-register" className="form-control" type="email" name="email" />
                    </div>
                    <div>
                        <label htmlFor="password-register">Password</label>
                        <input id="password-register" className="form-control" type="password" name="password" />
                    </div>
                    <div>
                        <label htmlFor="password-register">Confirmar senha</label>
                        <input id="password-confirmation" className="form-control" type="password" name="password_confirmation" />
                    </div>
                    <div className="text-center mb-3 mt-3">
                        <button onClick={this.props.registrarUsuario} type="button" className="btn blue-gradient btn-block btn-rounded z-depth-1a">Criar</button>
                    </div>
                </div>
            </form>
        );
    }
}