import { Component } from "react";

class TextareaComponent extends Component {
    render() {
        const { handleChange, handleMouseOver, name, value, placeholder, maxlength } = this.props;
        return(
            <textarea
                onChange={ handleChange }
                onMouseEnter={ handleMouseOver }
                name={ name }
                value={ value }
                placeholder={ placeholder }
                maxLength={ maxlength }
            />
        )
    }
}

export default TextareaComponent;