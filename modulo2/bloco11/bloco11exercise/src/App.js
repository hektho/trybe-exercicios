import estados from './estados';
import { Component } from 'react';
import './App.css';
import InputComponent from './InputComponent';
import TextareaComponent from './TextareaComponent';
import DivComponent from './DivComponent';

class App extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      inputText: '',
      inputEmail:'',
      inputAdress:'',
      inputCPF:'',
      inputCity:'',
      selectElement:'Acre',
      homeType:'',
      resumoCurriculo:'',
      descriptionCargo:'',
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    console.log(this)
    if (name === 'homeType') return this.setState({[name]: target.id})
    if (name === 'inputText') return this.setState({[name]: value.toUpperCase()})
    if (name === 'inputAdress') return this.setState({[name]: value.normalize("NFD").replace(/[^a-zA-Z0-9s]/g, "")})
    if (target.name === 'inputCPF') return this.setState({[name]: value.replace(/[^0-9]/g,'')})
    return this.setState({[name]: value})

  }

  handleMouseOver() {
    console.log('jorge');
  }

  handleClick() {
    <DivComponent
      name={ this.state.inputText }
      email={ this.state.inputEmail }
      adress={ this.state.inputAdress }
      cpf={ this.state.inputCPF }

    />
  }
  render() {
    console.log(this);
    return (
      <fieldset className='container-main'>
        <h1>Cadastro de currículo</h1>
        <InputComponent
        type='text'
        name='inputText'
        value={ this.state.inputText }
        handleChange={ this.handleChange }
        texto='Digite seu nome: '
        placeholder='Nome'
        maxlength={40}
        required={ true }
        />
        <InputComponent 
        type='email' 
        name='inputEmail' 
        value={ this.state.inputEmail }
        handleChange={ this.handleChange }
        texto='Digite seu E-mail: '
        placeholder='E-mail'
        maxlength={50}
        required={ true }
        />
        <InputComponent
          type='text'
          name='inputCPF'
          value={ this.state.inputCPF }
          handleChange={ this.handleChange }
          texto='Digite seu CPF: '
          maxlength={11}
          required={ true }
        />
        <InputComponent
          type='text'
          name='inputAdress'
          value={ this.state.inputAdress }
          handleChange={ this.handleChange }
          texto='Digite seu endereço: '
          maxlength={200}
          required={ true }
        />
        <InputComponent
          type='text'
          name='inputCity'
          value={ this.state.inputCity}
          handleChange={ this.handleChange }
          texto='Informe sua cidade: '
          maxlength={28}
          required={ true }
        />
        <label> Selecione seu estado:
          <select 
            value={ this.state.selectElement } 
            name='selectElement' 
            onChange={ this.handleChange }
          >
            {estados.map((item) => <option> { item } </option>)}
          </select>
        </label>
        <InputComponent
        type='radio'
        name='homeType'
        handleChange={ this.handleChange }
        value={ this.state.home }
        texto='Casa'
        id='Casa'
        />
        <InputComponent
        type='radio'
        name='homeType'
        handleChange={ this.handleChange }
        value={ this.state.apto }
        texto='Apartamento'
        id='Apartamento'
        />
        <TextareaComponent
        name='resumoCurriculo'
        handleChange={ this.handleChange }
        handleMouseOver={ this.handleMouseOver }
        value={ this.state.resumoCurriculo }
        placeholder='Preencha um resumo do seu currículo'
        maxlength={ 40 }
        required={ true }
        />
        <TextareaComponent
        name='descriptionCargo'
        handleChange={ this.handleChange }
        value={ this.state.descriptionCargo }
        placeholder='Descreva um pouco do seu cargo'
        maxlength={ 500 }
        required={ true }
        />
        <button
        onClick={ this.handleClick }
        
        > Enviar </button>
        { this.handleClick }
      </fieldset>
    );
  }
}

export default App;
