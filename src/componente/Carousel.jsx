import React from 'react';

const Carousel = (props) => {
    let host = "http://" + window.location.host + "/imagens";

    return (
        <div style={{ height: '100%' }} id={ props.id } className="carousel slide carousel-fade mt-4 mb-4" data-ride="carousel">
            <ol className="carousel-indicators">
                {
                    props.imagens.map((imagem, index) => {
                        let active = "";

                        if (index === 0) {
                            active = "active";
                        }

                        return (
                            <li key={ index } data-target={ "#"+props.id } data-slide-to={ index } className={active}></li>
                        )
                    })
                }
            </ol>
            <div style={{ height: '100%' }} className="carousel-inner" role="listbox">
                {
                    props.imagens.map((imagem, index) => {
                        let active = "";

                        if (index === 0) {
                            active = "active";
                        }

                        return (
                            <div key={ index } className={"carousel-item "+active}>
                                <img style={{ height: '30rem' }} className="d-block w-100" src={ host + imagem.url } alt={index} />
                            </div>
                        )
                    })
                }
            </div>
            <a className="carousel-control-prev" href={"#"+props.id} role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Voltar</span>
            </a>
            <a className="carousel-control-next" href={"#"+props.id} role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Proximo</span>
            </a>
        </div>
    );
}

export default Carousel;