import React, { Component } from 'react';
import '../style-component/loading.css';
import PubSub from '../pubsub';

export class Loading extends Component { 
    constructor() {
        super();
        this.state = {
            isLoading: false
        }
    }

    componentDidMount() {
        PubSub.subscribe('loading', (value) => {
            this.setState({isLoading: value});
        });
    }

    render() {
        let visible = null;

        if (this.state.isLoading) {
            visible = 'block';
        } else {
            visible = 'none';
        }

        return (
            <div className="style-loading justify-content-cente" style={{display: visible}}>
                <div className="spinner-border spinner-blue-only icon-loading">
                    <span className="sr-only">Carregando...</span>
                </div>
            </div>
        );
    }
}