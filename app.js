let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let millsec = document.querySelector("#millsec");
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");
let starting_count
let start_button_count=1

        function start_count() {
          milliseconds++;
          if (milliseconds > 100) {
            seconds++;
            milliseconds = 0;
          }
          millsec.innerHTML = milliseconds;
          sec.innerHTML = seconds;
        }
     
  


  

start.addEventListener("click", () => {
  // ()

  
  if (start_button_count===1) {
      starting_count = setInterval(start_count, 10);

  }
start_button_count++


  
});
stop.addEventListener("click", () => {
   start_button_count = 1;
clearInterval(starting_count);
console.log('Stop-timer');
});
