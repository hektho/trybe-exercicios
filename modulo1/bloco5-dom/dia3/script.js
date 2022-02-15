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
  
  let buttonContainer = document.querySelector('.buttons-container');

  function createButton(feriados) {
    let button = document.createElement('button');
    button.innerText = feriados;
    button.id = 'btn-holiday';
    buttonContainer.appendChild(button);
    button.addEventListener("click", mudaCor);
    function mudaCor() {
        let background = 'rgb(238,238,238)';
        let newColor = 'white'
        let holiday = document.getElementsByClassName('holiday');
        for (let i = 0; i < holiday.length; i += 1) {
            if (holiday[i].style.backgroundColor === newColor) {
                holiday[i].style.backgroundColor = background;
            } else {
                holiday[i].style.backgroundColor = newColor;
            }
        }
    }
}
createButton("Feriados");

function createSexta(sexta) {
    let buttonSexta = document.createElement('button');
    buttonSexta.id = 'btn-friday';
    buttonSexta.innerText = sexta;
    buttonContainer.appendChild(buttonSexta);
    
}

createSexta("Sexta-Feira");
let pegandoButao = document.querySelector('#btn-friday');
pegandoButao.addEventListener("click", mudaText);
function mudaText() {
    let array = [4, 11, 18, 25];
    let seixta = "Sexta!"
    let classeSexta = document.getElementsByClassName('friday');
    for (let index = 0; index < classeSexta.length; index += 1) {
        let dia = classeSexta[index];
        if (classeSexta[index].innerText != seixta) {
            classeSexta[index].innerText= seixta
        } else {
            classeSexta[index].innerText = array[index]
        }
        
    }
}



function zoom() {
    let liDay = document.getElementsByClassName('day');

    for (let index = 0; index < liDay.length; index += 1) {
        liDay[index].addEventListener('mouseover', loucura);
        function loucura(event) {
            event.target.style.fontSize = '1.5em'
            event.target.style.color = 'green'
        }
        liDay[index].addEventListener('mouseout', meuDeus);
        function meuDeus(event) {
            event.target.style.fontSize = '20px'
            event.target.style.color = '#777'
        }
    }
}
zoom();
let myTasks = document.querySelector('.my-tasks');
function createTask(atividade) {
    let span = document.createElement('span');
    span.innerText = atividade;
    myTasks.appendChild(span);
}
createTask('Cozinhar');

function legendColor(cor) {
    let div = document.createElement('div');
    div.className = 'task';
    div.style.backgroundColor = cor;
    myTasks.appendChild(div);
}
legendColor('green');

let divLegenda = document.querySelector('.task');

divLegenda.addEventListener("click", funcao);

function funcao() {
    if (divLegenda.className.length > 4) {
        divLegenda.className = 'task'
    } else if (divLegenda.className.length === 4) {
        divLegenda.className = 'task selected'
    }
}

let lis = document.getElementsByClassName('day');
function pegaLi() {
    let dive = document.querySelector('.task');
    for (let index = 0; index < lis.length; index += 1) {
        lis[index].addEventListener("click", mudaCorLi);
        function mudaCorLi(event) {
            if (dive.className.length > 4) {
               event.target.className = 'fonte';
               
            }
        }
        mudaCorLi();
        
    }
    
}
pegaLi()