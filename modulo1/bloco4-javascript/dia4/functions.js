/*let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
let text = fruits.join(' ');
console.log(text)
console.log(fruits)

console.log(fruits.reverse())*/

//1)

/*function verificaPalindrome(palavra){
    let verifica = [];
    let arrayDaPalavra = palavra.split("")
    
    for(let index = 0; index < palavra.length; index += 1){
            verifica.unshift(arrayDaPalavra[index])
    }
    if(verifica.join('') == palavra){
        return true
    } else {
        return false
    }
    
}
console.log(verificaPalindrome('radar'))*/

//2) Criar uma função que retorne o índice de maior valor dentro de um array de números.

/*function indiceMaior(numeros) {
let maiorNum = 0;
 for(let key in numeros){
     if(numeros[key] > maiorNum){
         maiorNum = numeros[key]
     }
 }
let arrayNum = [];
arrayNum.push(maiorNum);

 for(let index = 0; index < 1; index+=1) {
    for(let index2 = 0; index2 < numeros.length; index2 += 1) {
        if(arrayNum[index] === numeros[index2]) {
            return 'O índice de maior valor é ' + index2;
        }
        
    }
 }
}

console.log(indiceMaior([1, 32, 48, 12, 69, 78]))*/

// 3) Criar uma função que retorne o índice de menor valor.

/*function indiceMenor(numeros) {
    let menorNum = null;
 for(let key in numeros){
     if(numeros[key] < menorNum || menorNum === null){
         menorNum = numeros[key]
     }
 }
let arrayNum = [];
arrayNum.push(menorNum);

 for(let index = 0; index < 1; index+=1) {
    for(let index2 = 0; index2 < numeros.length; index2 += 1) {
        if(arrayNum[index] === numeros[index2]) {
            return 'O índice de menor valor é ' + index2;
        }
        
    }
 }
}
console.log(indiceMenor([10, 8, 15, -2, 5]))*/
// 4) Crie uma função que identifique a maior palavra dentro de um array.


/*function maiorNome(names) {
    let maiorN = '';
    for (let index = 0; index < names.length; index += 1) {
        if (names[index].length > maiorN.length) {
            maiorN = names[index]
        }
    }
    return maiorN;
}

console.log(maiorNome(['Fernanda', 'Paulo André', 'José', 'Rihanna', 'Alberto']));*/

//5) Crie uma função que receba um array de ineiros e retorne o inteiro que mais se repete

/*function repeteNum(numeros) {
    let maiorNumRepet = 0;
    let numRepet = 0;
    let indiceMaiorNum = 0;
    for (let index = 0; index < numeros.length; index += 1) {
        if (numRepet > maiorNumRepet) {
            maiorNumRepet = numRepet;
            indiceMaiorNum = numeros[index - 1];
        }
        numRepet = 0;
        for (let index2 = 0; index2 < numeros.length; index2 += 1) {
            if (numeros[index] === numeros[index2]) {
                numRepet += 1;
            }
            
        }
    }
    return indiceMaiorNum;
}
console.log(repeteNum([1, 4, 8, 5, 5, 4, 9, 2]))*/

// 6) Crie uma função que receba um número natural N e retorne o somatório de todos os números de 1 até N

/*function somaTudo(N) {
    let soma = 0;
    for (let index = 0; index <= N; index += 1) {
        soma += index;
    }
    return soma;
}

console.log(somaTudo(10));*/

