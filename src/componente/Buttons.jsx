import React, {Component} from 'react';

export class DropDown extends Component {
    render() {
        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id={this.props.id} data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">{ this.props.titulo }</a>
                <div className="dropdown-menu dropdown-primary" aria-labelledby={this.props.id}>
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
        );
    }
}