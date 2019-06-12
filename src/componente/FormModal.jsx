import React, {Component} from 'react';

class FormModal extends Component {
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
                            <div className="modal-header text-center">
                                <h3 className="modal-title w-100 dark-grey-text font-weight-bold my-3" id="myModalLabel"><strong>{ this.props.tituloModal }</strong></h3>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body mx-4">
                                { this.props.children }
                                <div className="text-center mb-3">
                                    <button type="button" className="btn blue-gradient btn-block btn-rounded z-depth-1a">{ this.props.tituloBotao }</button>
                                </div>
                                { redesSociais }
                            </div>
                            <div className="modal-footer mx-5 pt-3 mb-1">
                                <p className="font-small grey-text d-flex justify-content-end">Não é um membro? <a href="#" className="blue-text ml-1">
                                    Criar conta</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export class BotaoModalForm extends Component {
    render() {
        return (
            <div className="text-center">
                <button className="btn btn-default btn-rounded" data-toggle="modal" data-target={`#${this.props.idModalTarget}`}>{ this.props.tituloBotaoModalForm }</button>
            </div>
        );
    }
}

export default FormModal;