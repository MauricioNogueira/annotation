import React, { Component } from "react";
import $ from 'jquery';
import PubSub from '../pubsub';

export class Input extends Component {
    constructor(props) {
        super();

        this.campos = JSON.parse(props.campos);

        this.state = {
            value: this.campos.value,
            error: ""
        }
    }

    componentDidMount() {
        this.recebeError();
    }

    recebeError() {
        PubSub.subscribe("error-validation-register", function (data) {
            if (data[this.campos.name] !== undefined) {
                $("#"+this.campos.id).addClass("is-invalid");
                this.setError(data[this.campos.name]);
            }
        }.bind(this));
    }

    setValue(input) {
        this.setState({value: input.target.value});
        $("#"+this.campos.id).removeClass("is-invalid");
        $("#"+this.campos.id).addClass("is-valid");
    }

    removeError() {
        this.setState({error: ""});
        $("#"+this.campos.id).removeClass("is-invalid");
    }

    setError(valor) {
        if (valor) {
            this.setState({error: valor});
        }
    }

    render() {
        return (
            <div>
                <label htmlFor={this.campos.id}>{ this.props.titulo }</label>
                <input required onFocus={this.removeError.bind(this)} {...this.campos} onChange={this.setValue.bind(this)} value={this.state.value}/>
                <div style={{color: 'red'}} id={"error-"+this.campos.name}>{ this.state.error }</div>
            </div>
        );
    }
}

export class ButtonSubmit extends Component {
    constructor(props) {
        super();
        this.state = {
            textoAtual: props.titulo,
        }
    }

    componentDidMount() {
        PubSub.subscribe("loading", (value) => {
            if (value) {
                this.setState({textoAtual: this.props.textoCarregamento});
                $("#"+this.props.id).attr("disabled", true);
                $("#"+this.props.id+'-span').addClass("spinner-border");
            } else {
                this.setState({textoAtual: this.props.titulo});
                $("#"+this.props.id).removeAttr("disabled");
                $("#"+this.props.id+'-span').removeClass("spinner-border");
            }
        });
    }

    render() {
        return (
            <button id={this.props.id} onClick={this.props.eventoClick} className="btn blue-gradient btn-block btn-rounded z-depth-1a" type="button">
                <span id={this.props.id+'-span'} className="spinner-border-sm" aria-hidden="true"></span>
            {this.state.textoAtual}
            </button>
        );
    }
}