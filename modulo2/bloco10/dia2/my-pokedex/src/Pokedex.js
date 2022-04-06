import React, { Component } from 'react';
import Pokemon from './pokemon';
import Data from './data';
import './pokemon.css';

class Pokedex extends Component {
    render() {
        return (
            <div className='container-pikomon'>
                {Data.map(item => <Pokemon key= {item.id} poke={item}/>)}
            </div>
        );
    }
}

export default Pokedex;