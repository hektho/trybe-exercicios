//3) A função getPlanet abaixo imprime o planeta Marte de forma síncrona. Modifique getPlanet , de forma que Marte seja impresso assincronamente, depois de 4 segundos.

/*const getPlanet = () => {
    const mars = {
      name: "Mars",
      distanceFromSun: {
        value: 227900000,
        measurementUnit: "kilometers",
      },
    };
    console.log("Returned planet: ", mars);
  };
  
setTimeout(() => getPlanet(), 4000);*/

//4) Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra. O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. Crie a função sendMarsTemperature , que imprime a temperatura em Marte.

/*const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = (temperature, delay) => {
  setTimeout(() => {
    const message = `A temperatura de hoje em Marte é de ${temperature()} graus Celsius.`
    console.log(message);
  }, delay());
}

sendMarsTemperature(getMarsTemperature, messageDelay); // imprime "Mars temperature is: 20 degree Celsius", por exemplo*/

//5)

/*const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const sendMarsTemperature = (callback) => {
  setTimeout(() => {
    callback(getMarsTemperature());
  }, messageDelay());
}

sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo*/

//6)
/*const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

const sendMarsTemperature = (callback, error) => {
  
  setTimeout(() => {
    const porcentagem = Math.random() <= 0.6;
    if (porcentagem) {
      return error('Temperatura não disponível. Tente novamente mais tarde.')
    }
    return callback(getMarsTemperature())
  }, messageDelay());
}

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);*/


/*function tripleTheChances(array) {
  return array.map((item) => item * 3)
}*/


function tripleTheChances(array) {
  const chances = [];
  for (let key in array) {
    chances.push(array[key] * 3);
  }
  return chances;
}



function tripleTheChances(array) {
  const chances = [];
  array.forEach((item) => chances.push(item * 3));
  return chances;
}

console.log(tripleTheChances([1,5,8,10,15,20,35]));