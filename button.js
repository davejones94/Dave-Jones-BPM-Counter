function changebutton () {
    document.getElementById("demo").innerHTML = "calculating...";     //text per knopfdruck ändern
    console.log("demo");
}

let taps = 0;

function counter(){ 
    taps+= 1;
    document.getElementById("taps").innerHTML = taps;       // anzahl der Taps anzeigen
    console.log(taps)
}

let buttonttime

function timestamp(){
    buttontime = new Date().getTime()                    //Zeitanzeige in Sekunden in der Konsole
console.log(buttontime)
}

let start = null                                   //zeitlichen Startpunkt festlegen durch ersten Tap
if(!start){
start=(new Date().getTime() )
}


function bpmcalculator(){

const end = new Date().getTime()

let bpm

console.log(taps,end, start)

bpm = (taps / (end - start)*60000)                   // BPM Berechnungsfunktion

document.getElementById("bpm").innerHTML = bpm
}
