function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  let lista = document.querySelector('#days');

  function createDays() {
      for (let index = 0; index < dezDaysList.length; index += 1) {
          //Primeiro o sistema de repetição irá criar o elemento 'li' dinamicamente e em seguida será adicionado como filho
          //da tag 'ul' com id 'days' que foi resgatado com a variável 'lista'. Será inserido aos 'lis' criados, um texto
          //que contém o índice do array atual que no caso são números. Aí as condições para ver qual dia receberá sua respectiva classe. 
          let li = document.createElement('li');
          lista.appendChild(li);
          li.innerText = dezDaysList[index];
          if (dezDaysList[index] === 25) {
              li.className = 'day holiday friday'
          } else if (dezDaysList[index] === 24 || dezDaysList[index] === 31) {
              li.className = 'day holiday';
          } else if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18) {
              li.className = 'day friday';
          } else {
              li.className = 'day'
          }
      }
  }
  createDays()