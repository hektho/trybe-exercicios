/*const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo!`
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    
  }

  testingScope(true);*/

  //Orgulhoso de mim mesmo de ter criado um sistema que ordena de forma crescente os valores de um array sem utilizar funções pré definidas (mesmo que não seja da melhor forma).
  //Essa função aceita números repetidos, números negativos e qualquer quantidade de valores.
  const oddsAndEvens = [-24, 78, -34, 1, -17, 9, 2, -13, 9, -41, 2, 47, 56, 12, 37];

  const ordenarValores = () => {
    let arrayNum = [];
    let numeroMenor = -10000;
    

    for (let index = 0; index <= oddsAndEvens.length; index += 1) {
      if (numeroMenor != -10000) {
        arrayNum.unshift(numeroMenor);
      }
      numeroMenor = -10000;
        for (let index2 = 0; index2 <= oddsAndEvens.length; index2 += 1) {
            if (oddsAndEvens[index2] > numeroMenor) {
                numeroMenor = oddsAndEvens[index2];
             }
             

        }
      oddsAndEvens.splice(oddsAndEvens.indexOf(numeroMenor),1, 'banana');
    
    }
  return arrayNum;
  }
  console.log(ordenarValores());


  /*let array = [1,2,3,4,5];
  array.splice(4,1); 
  console.log(array);*/

 