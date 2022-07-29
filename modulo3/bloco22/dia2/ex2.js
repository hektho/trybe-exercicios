const somaNum = require('./ex1');
//THEN / CATCH
/* const randomNum = () => {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const num3 = Math.floor(Math.random() * 100) + 1;

    return somaNum(num1, num2, num3)
    .then((result) => console.log(`Success: ${result}`))
    .catch((err) => console.log(`ErroR: ${err}`));
} */
// ASYNC / AWAIT com TRY / CATCH
const randomNum = async () => {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const num3 = Math.floor(Math.random() * 100) + 1;
    try {
        console.log(`Success: ${ await somaNum(num1, num2, num3)}`);
    } catch (err) {
        console.log(`Rejected: ${err}`);
    }
}

randomNum();