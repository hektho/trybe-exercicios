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

//2)

let numeros = [28, 3, 18, 5, 19, 4];
let maiorNum = 0;
 for(let key in numeros){
     if(numeros[key] > maiorNum){
         maiorNum = numeros[key]
     }
 }
let arrayNum = [];
arrayNum.push(maiorNum);
 let indice = 0;
 for(let index = 0; index < 2; index+=1){
    for(let index2 = 0; index2 < numeros.length; index2 += 1){
        if(maiorNum[index] !== numeros[index2]){
             indice = indice + 1
        }
    }
 }

 console.log(indice)