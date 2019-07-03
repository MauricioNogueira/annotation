import React, {Component} from 'react';
import Jumbotron from '../componente/JumbotronBasic';

class IndexView extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h1>Tela Index</h1>
                    <Jumbotron
                        titulo="Bem vindo"
                        isExtra={true}
                        texto="Esta aplicacao eh para fins academicos e para melhorar minhas habilidades com desenvolvedor."
                        textoExtra="It uses utility classes for typography and spacing to space content out within the larger container." />
                </div>
            </div>
        );
    }
}

export default IndexView;