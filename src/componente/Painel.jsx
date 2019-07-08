import React from 'react';

const Panel = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{ props.titulo }</h5>
                <p className="card-text">{ props.texto }</p>
                {/* <a className="card-link">Card link</a>
                <a className="card-link">Another link</a> */}
            </div>
        </div>
    );
}

export default Panel;