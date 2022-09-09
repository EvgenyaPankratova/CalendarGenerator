

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

while (true){
  
 try { //обработка ошибок
    
    let userYear = prompt("Введите 4 цифры года", 2020)

    if (userYear === null) break; 
    if(userYear == "") throw "пустое значение";
    if(isNaN(userYear)) throw "не число";
    userYear = Number(userYear);
    if(userYear < 1900) throw "слишком маленькое число года";
    if(userYear > 2090) throw "слишком большое число года";
    
    
    let userMonth = prompt("Введите число месяца", 1)
    
    if (userMonth === null) break; 
    if(userMonth == "") throw "пустое значение";
    if(isNaN(userMonth)) throw "не число";
    userMonth = Number(userMonth);
    if(userMonth < 1) throw "слишком маленькое число месяца";
    if(userMonth > 12) throw "слишком большое число месяца";
    
    
    createCalendar(calendar, userYear, userMonth) //если нет ошибок, вызываем функцию
    break;
  }
  
  catch(err) {
    alert("Вы ввели" + " " + err);
  }

}
  
}
