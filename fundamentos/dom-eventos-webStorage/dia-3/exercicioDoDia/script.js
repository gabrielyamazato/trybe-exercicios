const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  
  const daysOfTheWeek = () => {
    const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const daysList = document.getElementById('days');

    for (let i = 0; i < decemberDaysList.length; i += 1) {
        const day = decemberDaysList[i];
        const dayListItem2 = document.createElement('li');
        dayListItem2.classList.add("day");
            if (day == 24) {
                dayListItem2.classList.add("day", "holiday");
            } else if (day == 25) {
                dayListItem2.classList.add("day", "holiday", "friday");
            } else if (day == 31) {
                dayListItem2.classList.add("day", "holiday");
            } else if (day == 4) {
                dayListItem2.classList.add("day", "friday");
            } else if (day == 11) {
                dayListItem2.classList.add("day", "friday");
            } else if (day == 18) {
                dayListItem2.classList.add("day", "friday");
            }                    
        dayListItem2.innerHTML = day;
        
        daysList.appendChild(dayListItem2);
    }
}
daysOfTheWeek();

    const buttonCreate = (buttonName) => {
        let buttonContainer = document.querySelector('.buttons-container');
        let buttonNew = document.createElement('button');
        let buttonId = 'btn-holiday';

        buttonNew.innerHTML = buttonName;
        buttonNew.id = buttonId;

        buttonContainer.appendChild(buttonNew);
    }
buttonCreate('Feriados');

const displayHolidays = () => {
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'white';
  
      getHolidayButton.addEventListener('click', () => {
      for (let index = 0; index < getHolidays.length; index += 1) {
        if (getHolidays[index].style.backgroundColor === setNewColor) {
          getHolidays[index].style.backgroundColor = backgroundColor;
        } else {
          getHolidays[index].style.backgroundColor = setNewColor;
        }
      }
    });
  }
  displayHolidays();

// const showHolidays = () => {
//     let holidayButton = document.querySelector('#btn-holiday');
//     let holidays1 = document.querySelectorAll('.holiday');
//     let backgroundColor = 'rgb(238,238,238)';
//     let newColor = 'white';

//     holidayButton.addEventListener('click', () => {
//         for (let i = 0; i < holidays1.lenght; i += 1) {
//             if (holidays1[i].style.backgroundColor === newColor) {
//                 holidays1[i].style.backgroundColor = backgroundColor;
//             } else {
//                 holidays1[i].style.backgroundColor = newColor;
//             }
//         }
//     });
// }
// showHolidays();

const buttonCreateFriday = (buttonNameFriday) => {
    let fridayContainer = document.querySelector('.buttons-container');
    let buttonFriday = document.createElement('button');
    let fridayId = 'btn-friday';

    buttonFriday.innerHTML = buttonNameFriday;
    buttonFriday.id = fridayId;

    fridayContainer.appendChild(buttonNew);
}
buttonCreate('Sexta-Feira');