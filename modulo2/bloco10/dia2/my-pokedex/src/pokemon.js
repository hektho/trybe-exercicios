import React, { Component } from 'react';
import './pokemon.css'
import PropTypes from 'prop-types';

class PokemonComponent extends Component {
    render() {
        const { poke } = this.props;
        return (
                <section className='section-pokemon'> 
                    <div className='container-p'>
                        <p>{`Name: ${poke.name}`}</p>
                        <p>{`Type: ${poke.type}`}</p>
                        <p>{`Average weight: ${poke.averageWeight.value}${poke.averageWeight.measurementUnit}`}</p>
                    </div>
                    <div className='container-img'>
                        <p>{`ID: ${poke.id}`}</p>
                        <img src={poke.image} alt={`Imagem do pokemon ${poke.name}.`} className='pokemon-image'/>
                    </div>
                    
                </section>
        );
    }
}

PokemonComponent.propTypes = {
    poke: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        averageWeight: PropTypes.shape({
            value: PropTypes.number,
            measurementUnit: PropTypes.string,
        }),
        image: PropTypes.string,
    }).isRequired,
};

export default PokemonComponent;