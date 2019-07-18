import React, { Component } from "react";
import $ from 'jquery';
const PubSub = require('pubsub.js');

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
            console.log(data[this.campos.name]);
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