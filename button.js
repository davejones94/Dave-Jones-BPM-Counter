function changebutton () {
    document.getElementById("demo").innerHTML = "calculating...";     //text per knopfdruck ändern
    console.log("demo");
}

let taps = -1;

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

let start = null                                  


function bpmcalculator(){

    
                                   
    if(!start){
        start=(new Date().getTime() )
        return;
    }
    const end = new Date().getTime()

    let bpm

    console.log(taps,end, start)

    bpm = Math.round((taps / (end - start)*60000))             // BPM Berechnungsfunktion

    document.getElementById("bpm").innerHTML = bpm + " BPM";
}

function resetcounter(){

    start = null  
    bpm = 0
    end= null
    taps = -1

    document.getElementById("bpm").innerHTML = bpm
    document.getElementById("taps").innerHTML = taps
}