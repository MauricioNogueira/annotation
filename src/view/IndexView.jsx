import React, {Component} from 'react';
import Jumbotron from '../componente/JumbotronBasic';
import Panel from '../componente/Painel';
import Carousel from '../componente/Carousel';

class IndexView extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Jumbotron
                        titulo="Bem vindo"
                        isExtra={true}
                        texto="Esta aplicacao eh para fins academicos e para melhorar minhas habilidades com desenvolvedor."
                        textoExtra="It uses utility classes for typography and spacing to space content out within the larger container." />
                    <div className="row">
                        <div className="col-4">
                            <Panel titulo="Panel title" texto="Some quick example text to build on the panel title and make up the bulk of the panel's content." />
                            Imagem de <a href="https://pixabay.com/pt/users/geralt-9301/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2771786">Gerd Altmann</a> por <a href="https://pixabay.com/pt/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2771786">Pixabay</a>
                        </div>
                        <div className="col-4">
                            <Panel titulo="Panel title" texto="Some quick example text to build on the panel title and make up the bulk of the panel's content." />
                            Imagem de <a href="https://pixabay.com/pt/users/geralt-9301/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3233653">Gerd Altmann</a> por <a href="https://pixabay.com/pt/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3233653">Pixabay</a>
                        </div>
                        <div className="col-4">
                            <Panel titulo="Panel title" texto="Some quick example text to build on the panel title and make up the bulk of the panel's content." />
                            Imagem de <a href="https://pixabay.com/pt/users/Erbs55-735405/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1574666">Erbs55</a> por <a href="https://pixabay.com/pt/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1574666">Pixabay</a>
                        </div>
                    </div>

                    <Carousel id="carousel-component" imagens={[
                        {url:'/carousel/bulletin-board-2771786_1280.jpg'},
                        {url:'/carousel/bulletin-board-3233653_1280.jpg'},
                        {url:'/carousel/notepad-1574666_1280.jpg'}
                    ]} />
                </div>
            </div>
        );
    }
}

export default IndexView;