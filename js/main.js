const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}


(function (d) {
    "use strict";
    const typeText = [
        "Click the links below to contact me!",
        "Hover over my name to see something cool!",
        "Check out my Instagram to see cool stuff!",
        "This website is still under construction!",
    ];
    const myElement = d.getElementById("type");

    var timeLoop;
    var pos = 0;
    var increment = 1;
    var counter = 0;

    async function textLoop() {
        myElement.innerHTML = typeText[counter].split("").slice(0, pos).join("");
        pos += increment;
        if (pos === typeText[counter].length+1) {
            await new Promise(r => setTimeout(r, 2000));
            increment = -increment;
        }
        if (pos === 0) {
            increment = 1;
            counter++;
            if (counter === typeText.length) {
                counter = 0;
            }
        }
        timeLoop = setTimeout(textLoop, 50);
    }
    textLoop();
})(document);
