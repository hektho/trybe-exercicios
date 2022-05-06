const randomNumber = () => Math.floor(Math.random() * 101);

const toUpperCase = (string) => string.toUpperCase();

const firstLetter = (string) => string.substr(0,1);

const concatStrings = (val, val2) => val.concat(val2);

module.exports = { randomNumber, toUpperCase, firstLetter, concatStrings }