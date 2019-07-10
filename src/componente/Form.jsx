import React, { Component } from "react";

export class Input extends Component {

    constructor(props) {
        super();

        this.state = {
            value: "",
            erro: "",
        }

        this.campos = JSON.parse(props.campos);
    }

    setValue(input) {
        this.setState({value: input.target.value});
    }

    render() {
        return (
            <div>
                <label htmlFor={this.campos.id}>{ this.props.titulo }</label>
                <input {...this.campos} onChange={this.setValue.bind(this)} value={this.state.value}/>
                <div className={"error-"+this.campos.name}>{ this.state.erro }</div>
            </div>
        );
    }
}