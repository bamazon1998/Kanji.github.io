const d = document;
const minutesElement = d.querySelector('.minutes');
const secondsElement = d.querySelector('.seconds');
const button = d.querySelector('.refresh'); 
const button2= d.querySelector('.empezar');
let countdown;

const countDownClock = (number = 100, format = 'seconds') => {
    convertFormat(format);
    function convertFormat(format) {
      switch(format) {
        case 'seconds':
          return timer(number);
        case 'minutes':
          return timer(number * 60);
          case 'hours':           
      }
    }
}

const timer=(seconds)=>{
    const now = Date.now();
    const then = now + seconds * 1000;
    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);
      if(secondsLeft <= 0) {
        clearInterval(countdown);
        return;
      };
      displayTimeLeft(secondsLeft);
    },1000);
}

const displayTimeLeft =(seconds)=> {
    minutesElement.textContent = Math.floor((seconds % 86400) % 3600 / 60);
    secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
}

button2.addEventListener('click',()=>{
    countDownClock(45,'minutes');
});

button.addEventListener('click',()=>{
      clearInterval(countdown);
      minutesElement.textContent = 24;
      secondsElement.textContent = 59;
});