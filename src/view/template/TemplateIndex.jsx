import React, {Component} from 'react';

class TemplateIndex extends Component {
    render() {
        return(
            <div>
                { this.props.children }
            </div>
        )
    }
}

export default TemplateIndex;