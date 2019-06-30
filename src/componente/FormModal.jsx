import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';

class FormModal extends Component {

    registrarUsuario (event) {
        event.preventDefault();

        let dadosForm = $('#form-registrar').serializeArray();
        
        $.ajax({
            url: 'http://annotation_api.test/api/v2/registrar',
            type: 'post',
            dataType: 'json',
            data: dadosForm,

            success : function (response) {
                console.log(response);
            },

            error : function (error) {
                console.log(error);
            }
        });
    }

    render() {
        let redesSociais = null;

        if (this.props.loginRedesSociais) {
            redesSociais = (
                <div>
                    <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> ou Entrar com:</p>

                    <div className="row my-3 d-flex justify-content-center">
                        <button type="button" className="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i className="fab fa-facebook-f text-center"></i></button>
                        <button type="button" className="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i className="fab fa-twitter"></i></button>
                        <button type="button" className="btn btn-white btn-rounded z-depth-1a"><i className="fab fa-google-plus-g"></i></button>
                    </div>
                </div>
            );
        }

        return (
            <div>
                <div className="modal fade" id={this.props.idModal} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className={`modal-dialog`} role="document">
                        <div className="modal-content form-elegant">    
                            <ul style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} className="nav" role="tablist">
                                <li className="nav-item">
                                    <a className="btn btn-primary active" data-toggle="tab" href="#panel7" role="tab"><i className="fas fa-user mr-1"></i>
                                    Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn btn-primary" data-toggle="tab" href="#panel8" role="tab"><i className="fas fa-user-plus mr-1"></i>
                                    Register</a>
                                </li>
                                <button style={{ position: 'absolute', right: '1rem', top: '1rem' }} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane fade in show active" id="panel7" role="tabpanel">
                                    <div className="modal-header text-center">
                                        <h3 className="modal-title w-100 dark-grey-text font-weight-bold my-3" id="myModalLabel"><strong>Login</strong></h3>
                                    </div>
                                    <div className="modal-body mx-4">
                                        <div>
                                            <label htmlFor="login">Login</label>
                                            <input id="login" className="form-control" type="text" name="login" />
                                        </div>
                                        <div>
                                            <label htmlFor="senha">Senha</label>
                                            <input id="senha" className="form-control" type="password" name="password" />
                                        </div>
                                        <div className="text-center mb-3 mt-3">
                                            <button style={{ color: 'white' }} type="button" className="btn blue-gradient btn-block btn-rounded z-depth-1a">Entrar</button>
                                        </div>
                                        { redesSociais }
                                    </div>
                                    <div className="modal-footer mx-5 pt-3 mb-1">
                                        <p className="font-small grey-text d-flex justify-content-end">Não é um membro? <Link className="blue-text ml-1" to="/teste1">
                                            Criar conta</Link></p>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="panel8" role="tabpanel">
                                    <div className="modal-header text-center">
                                        <h3 className="modal-title w-100 dark-grey-text font-weight-bold my-3" id="myModalLabel"><strong>Registrar</strong></h3>
                                    </div>
                                    <form id="form-registrar">
                                        <div className="modal-body mx-4">
                                            <div>
                                                <label htmlFor="nome-register">Nome</label>
                                                <input id="nome-register" className="form-control" type="text" name="nome_register" />
                                            </div>
                                            <div>
                                                <label htmlFor="login-register">Login</label>
                                                <input id="login-register" className="form-control" type="text" name="login_register" />
                                            </div>
                                            <div>
                                                <label htmlFor="email-register">Email</label>
                                                <input id="email-register" className="form-control" type="email" name="email_register" />
                                            </div>
                                            <div>
                                                <label htmlFor="password-register">Password</label>
                                                <input id="password-register" className="form-control" type="password" name="password_register" />
                                            </div>
                                            <div>
                                                <label htmlFor="password-register">Confirmar senha</label>
                                                <input id="password-confirmation" className="form-control" type="password" name="password_confirmation" />
                                            </div>
                                            <div className="text-center mb-3 mt-3">
                                                <button onClick={this.registrarUsuario} type="button" className="btn blue-gradient btn-block btn-rounded z-depth-1a">Criar</button>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="modal-footer mx-5 pt-3 mb-1">
                                        <p className="font-small grey-text d-flex justify-content-end">Não é um membro? <Link className="blue-text ml-1" to="/teste1">
                                            Criar conta</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

/**
 * Botão para abrir modal
 * Obs: Você pode usar um botão comum para abrir o FormModal
 * 
 * Props:
 * - tituloBotao: Para colocar o texto no botão
 * - idModalTarget: Id do modal alvo
 * - tamanhoBotao: Pode adicionar btn-sm (para botão pequeno), btn-lg (para botão grande).
 *      Obs: Caso não adicione esta props, o botão irá ter o tamanho padrão
 * - corPrincipal: Pode adicionar primary, danger, success, warning, info
 * - corTexto: Cor em hexadecimal
 * - redondo: Adicionar valor e tipo de medida para aplicar este atributo. Ex: 4rem, 4px ...etc
 */
export class BotaoModalForm extends Component {
    render() {
        return (
            <div className="text-center">
                <button style={{color: this.props.corTexto, borderRadius: this.props.redondo}} className={`btn btn-${this.props.corPrincipal} ${this.props.tamanhoBotao}`} data-toggle="modal" data-target={`#${this.props.idModalTarget}`}>{ this.props.tituloBotaoModalForm }</button>
            </div>
        );
    }
}

export default FormModal;