

let getLastDayOfMonth = function (year, month) { //находим последний день месяца
  let date = new Date(year, month, 0);
  return date.getDate();
}


function createCalendar(elem, year, month) {
  
  titleCalendar.textContent = `${month} месяц ${year} г.`
  let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr></table>';
  calendar.innerHTML = table;
  let tableNode = document.querySelector('table');
  
  d = new Date(year, month-1);
  day = d.getDay() - 1;
  if (day < 0) {
    day = 6;
  }
  
  let lastDayOfMonth = getLastDayOfMonth(year, month) + day;
  let nullCells = Math.ceil((lastDayOfMonth) / 7); 
  
  let td = document.createElement('td');
  let tr = document.createElement('tr');
  
  for (let i = 1; i <= nullCells * 7; i++) {
    let td = document.createElement('td');
    td.textContent = i - d.getDay() + 1;
    tableNode.append(td);
    
    if (i > day && i <= lastDayOfMonth){
      td.textContent = i - day;
    }else{
      td.textContent = ' ';
    }
    if (i % 7 == 0){
      let tr = document.createElement('tr');
      tableNode.append(tr); 
    }
  }
}

function askAndCreateCalendar(){

let userYear = prompt("Введите 4 цифры года", 2020)
let userMonth = prompt("Введите 1 цифру месяца", 1)
createCalendar(calendar, userYear, userMonth)
}