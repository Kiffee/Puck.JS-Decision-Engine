const leds = [LED1, LED2, LED3];
let Ledon = false;

function turnLightsOff() {
    digitalWrite(leds, 0);
}


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}


function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}


function turnOnLed() {
  for (var x = 0; x < 20; x++) {
    digitalWrite(leds[x % 3],1);
    sleep(100);
    turnLightsOff();
  }
  var i = getRandomIntInclusive(0,2);
  digitalWrite(leds[i],1);
  Ledon=true;
}

setWatch(function(e){  
    if (Ledon) {
      turnLightsOff();
      Ledon = false;
    }     
    else {      
        turnOnLed();
    }
  }, BTN, {repeat:true, debounce:50, edge:"rising"});

