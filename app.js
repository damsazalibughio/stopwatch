var milliSeconds = 0;
var seconds = 0;
var minutes= 0;
var interval = 0;
var lapNumber=0;

var minutesRes = document.getElementById('minutes');
var secondsRes = document.getElementById('seconds');
var milliSecondsRes = document.getElementById('milli-seconds');

var startBtn = document.getElementById('start');
var stopBtn = document.getElementById('stop');
var lapBtn = document.getElementById('lap');
var lapDisplay = document.getElementById('lap-display');


function stopWatch(){ 
    
    milliSeconds++;
    if(milliSeconds < 100){
        milliSecondsRes.textContent = milliSeconds > 9 ? milliSeconds : '0'+milliSeconds;

    }else if(milliSeconds >=100){
        milliSecondsRes.textContent = '00';
    }
   
    if(milliSeconds > 100){
               
        seconds++;
        secondsRes.textContent = seconds>9 ? seconds : '0'+seconds;
        milliSeconds =0;
    }
    else if(seconds >= 60){     
        secondsRes.textContent = '00';
        minutes++;
        
        minutesRes.textContent =  minutes>9 ? minutes : '0'+minutes;
        seconds =0;
        
    }  
       
}

function start(){        
    startBtn.style.display = "none";
    stopBtn.style.display = "block";      
    interval = setInterval(stopWatch, 10);        
         
    lapBtn.style.color ="white";   
    lapBtn.disabled =false; 
     
}

function lap(){  
     
    if(interval > 0){           
       
        console.log('lapn',lapNumber)
        lapNumber++;  
        lapDisplay.innerHTML += `${lapNumber>9 ? lapNumber : '0'+ lapNumber}# --  
                                ${minutes>9 ? minutes : '0'+minutes} : 
                                ${seconds>9 ? seconds : '0'+seconds} : 
                                ${milliSeconds > 9 ? milliSeconds : '0'+milliSeconds}`
                                + '<br>';                                          

        }
    else{
        lapNumber=0;
        lapDisplay.innerHTML ='';
        clearInterval(interval);        
    }
   
}  

function pause(){   
    startBtn.style.display = "block";
    stopBtn.style.display = "none";
    lapBtn.disabled =true;
    lapBtn.style.color ="grey";
    clearInterval(interval);   
}

function reset(){
    minutes = 0;
    seconds = 0;
    milliSeconds =0;

    minutesRes.textContent =  minutes>9 ? minutes : '0'+minutes;
    secondsRes.textContent = seconds>9 ? seconds : '0'+seconds;
    milliSecondsRes.textContent =  milliSeconds > 9 ? milliSeconds : '0'+milliSeconds;

    startBtn.style.display = "block";
    stopBtn.style.display = "none";
    lapBtn.disabled =true;
    lapBtn.style.color ="grey";

    lapDisplay.innerHTML ='';
    lapNumber=0;
    clearInterval(interval);
    
}


  
  
