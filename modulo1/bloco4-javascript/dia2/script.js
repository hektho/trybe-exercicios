 let numbers = [5,9,3,19,70,8,100,2,35,27];

//1) Percorra o array imprimindo todos os valores nele contidos com a função console.log().

/*for (let numeros of numbers){
    console.log(numeros);
}*/
/*for(let index = 0; index < numbers.length; index+= 1){
    console.log(numbers[index]);
}*/
//2) Some todos os valores contidos no array e imprima o resultado
/*let soma = 0;

for(let index = 0; index < numbers.length; index+=1){
    soma = soma + numbers[index];
    
}
console.log(soma);*/
//3) Calcule e imprima a média aritmética dos valores contidos no array
/*let soma = 0;

for(let index = 0; index < numbers.length; index+=1){
    soma = soma + numbers[index];
    
}
console.log(soma / numbers.length);*/

//4) Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, 
//imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

/*let soma = 0;

for(let index = 0; index < numbers.length; index+=1){
    soma = soma + numbers[index];
    
}
let media = soma / numbers.length;

if (media > 20){
    console.log("Valor maior que vinte.");
} else {
    console.log("Valor menor que vinte.")
}*/
//5)Utilizando for , descubra qual o maior valor contido no array e imprima-o;
/*let checagem = 0;
for(let index = 0; index < numbers.length; index+=1){
if (numbers[index] > checagem){
    checagem = numbers[index]
}

}
console.log(checagem);*/
//6)Descubra quantos valores ímpares existem no array e imprima o resultado. 
//Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

/*let valoresImpares = 0;

for(let index = 0; index < numbers.length; index+=1){
    if(numbers[index] % 2 != 0){
        valoresImpares += 1
    } 
    
}
if(valoresImpares == 0){
 console.log("Nenhum valor encontrado")
} else {
console.log(valoresImpares);
}*/

//7)Utilizando for , descubra qual o menor valor contido no array e imprima-o.

/*let menorValor;

for(let index = 0; index < numbers.length; index+=1){
    if( numbers[index] < menorValor || menorValor === undefined || menorValor === null){
        menorValor = numbers[index];
    }
}
console.log(menorValor);*/

let numero = [];


for(let index = 0; index < numbers.length; index+=1){
    if(numbers[index] <= 25){
        numero.push(numbers[index])
    }
}
let ordenados = [];

for(let index = 0; index < numero.length; index+=1){
    if(numero[index] < ordenados[0] || ordenados.length === 0 ){
        ordenados.unshift(numero[index]);
    } else if ( numero[index] > ordenados[ordenados.length -1]){
        ordenados.push(numero[index]);
    } else {
        ordenados.push(numero[index]);
    }
}
console.log(ordenados)

