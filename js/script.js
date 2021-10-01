let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let second = document.querySelector(".second");

console.log(days.innerHTML + " Дней");
console.log(hours.innerHTML + " Часов");
console.log(minutes.innerHTML + " Минут");
console.log(second.innerHTML + " Секунд");

function timer(){
    second.innerHTML--; 
    if(hours.innerHTML == 0 && days.innerHTML != 0){
        hours.innerHTML = 23;
        minutes.innerHTML = 59;
        days.innerHTML--;
    }
    if(second.innerHTML == 0 && minutes.innerHTML != 0)
    {
        second.innerHTML = 60;
        minutes.innerHTML--;
        if(minutes.innerHTML == 0 && hours.innerHTML != 0){
            minutes.innerHTML = 59;
            hours.innerHTML--;     
        }
       
    }
}
let timerId = setInterval(timer, 1000);



