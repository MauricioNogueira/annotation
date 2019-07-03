import React, { Component } from 'react';

export default class FormLogin extends Component {

    efetuarLogin(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form>
                <div>
                    <label htmlFor="login">Login</label>
                    <input id="login" className="form-control" type="text" name="login" />
                </div>
                <div>
                    <label htmlFor="senha">Senha</label>
                    <input id="senha" className="form-control" type="password" name="password" />
                </div>
                <div className="text-center mb-3 mt-3">
                    <button onClick={this.efetuarLogin.bind(this)} style={{ color: 'white' }} type="button" className="btn blue-gradient btn-block btn-rounded z-depth-1a">Entrar</button>
                </div>
            </form>
        );
    }
}