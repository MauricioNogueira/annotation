import React, {Component} from 'react';

export class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark primary-color">
                <a className="navbar-brand" href="#">{this.props.titulo}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target={`#${this.props.id}`}
                    aria-controls={this.props.id} aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id={this.props.id}>
                    { this.props.children }
                </div>
            </nav>
        );
    }
}

export class NavLinkLeft extends Component {
    render() {
        return (
            <ul className="navbar-nav mr-auto">
                { this.props.children }
            </ul>
        );
    }
}

export class NavLinkRigth extends Component {
    render() {
        return (
            <ul className="navbar-nav ml-auto">
                { this.props.children }
            </ul>
        );
    }
}