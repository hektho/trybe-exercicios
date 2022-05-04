import React, { Component } from 'react';
import Pokemon from './pokemon';
import Data from './data';
import './pokemon.css';

class Pokedex extends Component {

    constructor() {
        super();
        this.state = {
            index: 0,
            pokemons: Data,
            pokemonsFiltred: Data,
            disabled: false,
            enableAll: false,
        }

        this.handleChange = this.handleChange.bind(this);
    }
    async componentDidMount() {
        const request = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
        const data = await request.json();
        console.log(data.results[0]);
        const requestPokemon = await fetch(data.results[0].url)
        const dataPokemon = await requestPokemon.json();
        console.log(dataPokemon);
    }
    handleChange() {
        console.log(this.state.index);
        const { pokemonsFiltred } = this.state;
        if (this.state.index === pokemonsFiltred.length - 1) {
            this.setState((estadoAnterior, _props) => ({
                index: estadoAnterior.index - pokemonsFiltred.length,
            }))
        }
        this.setState((estadoAnterior, _props) => ({
            index: estadoAnterior.index + 1,
        }))
    }

    handleType = ({ target }) => {
        const { value } = target;
        const { pokemons } = this.state;
        if (value === 'Todos') {
           return this.setState({pokemonsFiltred: Data, disabled: false});
        } else {
            const pokemonsFiltred = pokemons.filter((item) => value === item.type);
            const disabled = pokemonsFiltred.length > 1 ? false : true
            return this.setState({
                pokemonsFiltred,
                index: 0,
                disabled,
            });
        }
    }
    showAll = ({ target }) => {
        const { name } = target
        this.setState((prev) => ({
            [name]: !prev.enableAll,
            index: 0,
        }))
    }
        
    render() {
        const { pokemonsFiltred, index, disabled, enableAll } = this.state;
        const pokemonType = Data.map((item) => item.type);
        const semDup = [...new Set(pokemonType)];
        return (
            <div className='container-main'>
                {enableAll ? 
                    pokemonsFiltred.map((item) => <Pokemon poke={ item }/>)    
                : (
                    <div>
                        <div className='container-pikomon'>
                            <Pokemon poke={pokemonsFiltred[index]}/>
                        </div>
                        <div className='div-select'> 
                            <button onClick={this.handleChange} disabled={disabled}> Próximo </button>
                            <h3>{`Foram encontrados: ${pokemonsFiltred.length} pokemons!`}</h3>
                        </div> 
                    </div>
                )}
                <div className="show-all">
                    <label className="label-checkbox"> Modo de exibição por fileira:
                        <input 
                            type="checkbox" 
                            onChange={this.showAll}
                            name="enableAll"
                        />
                    </label>
                    <label className="label-filtrar"> Filtrar:
                        <select
                            onChange={this.handleType} 
                            name='pokemonType'
                            value={this.state.pokemonType}
                            >
                            <option>Todos </option>
                            {semDup.map(item => <option>{item}</option>)}
                        </select>
                    </label>
                </div>
            </div>
        );
    }
}

export default Pokedex;