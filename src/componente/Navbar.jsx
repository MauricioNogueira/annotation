import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark primary-color">
                <Link className="navbar-brand" to="/" >{this.props.titulo}</Link>
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

export class NavLink extends Component {
    render() {
        return (
            <li className="nav-item">
                <Link to={this.props.path} className="nav-link">{ this.props.titulo }</Link>
            </li>
        );
    }
}

export class DropDownLink extends Component {
    render() {
        return (
            <li className="nav-item dropdown">
                <a href="#1" className="nav-link dropdown-toggle" id={this.props.id} data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">{ this.props.titulo }</a>
                <div className="dropdown-menu dropdown-primary" aria-labelledby={this.props.id}>
                    { this.props.children }
                </div>
            </li>
        );
    }
}

export class DropLink extends Component {
    render() {
        return (
            <Link className="dropdown-item" to={this.props.to}>{ this.props.titulo }</Link>
        );
    }
}