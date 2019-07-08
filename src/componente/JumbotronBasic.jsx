import React from 'react';

const Jumbotron = (props) => {
    console.log(props);
    let extra = null;

    if (props.isExtra) {
        extra = (
            <span>
                <hr className="my-4" />
                <p>{ props.textoExtra }</p>
                {/* <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a> */}
            </span>
        );
    }

    return (
        <div className="jumbotron mt-4">
            <h2 className="display-4">{ props.titulo }</h2>
            <p className="lead">{ props.texto }</p>
            { extra }
        </div>
    );
}

export default Jumbotron;