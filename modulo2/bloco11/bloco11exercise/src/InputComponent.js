import { Component } from "react";
import PropTypes from 'prop-types';

class InputComponent extends Component {
    render() {
        const { handleChange, value, name, type, texto, placeholder, maxlength, checked, required, id } = this.props;
        return (
            <label> { texto }
                <input 
                key={ name }
                id= { id }
                onChange={ handleChange }
                value={ value }
                name={ name }
                type={ type }
                placeholder={ placeholder }
                maxLength={ maxlength }
                checked={ checked }
                required={ required }
                >
                </input>
            </label>
        );
    }
}

InputComponent.propTypes = {
    key: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    maxLength: PropTypes.number.isRequired
}

export default InputComponent;