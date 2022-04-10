import React, { Component } from 'react';
import Pokemon from './pokemon';
import Data from './data';
import './pokemon.css';

class Pokedex extends Component {

    constructor() {
        super();
        this.state = {
            index: 0,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.state.index === Data.length - 1) {
            this.setState((estadoAnterior, _props) => ({
                index: estadoAnterior.index - Data.length,
            }))
        }
        this.setState((estadoAnterior, _props) => ({
            index: estadoAnterior.index + 1,
        }))
    }

    handleElement() {
        return Data.map(item => <Pokemon key= {item.id} poke={item}/>)[this.state.index];
    }

    
    render() {
        return (
            <div className='container-main'>
                <div className='container-pikomon'>
                    {this.handleElement()}
                </div>
                <div className='div-select'> 
                    <button onClick={this.handleClick}> Próximo </button>
                </div>
            </div>
        );
    }
}

export default Pokedex;