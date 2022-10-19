function outputTime(){
    var outTime = new Date();
    var hrs = outTime.getHours();
    var mins = outTime.getMinutes();
    var salute = document.getElementById("greeting");
    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");
    

    if(hrs >= 0 && hrs <= 11){
        salute.innerHTML = "GOOD MORNING, IT'S CURRENTLY";
    }
    else if(hrs >= 12 && hrs <= 15){
        salute.innerHTML = "GOOD AFTERNOON, IT'S CURRENTLY";
    }
    else if(hrs >= 16 && hrs <= 19){
        salute.innerHTML = "GOOD EVENING, IT'S CURRENTLY";
    }
    else {
        salute.innerHTML = "GOOD EVENING, IT'S CURRENTLY";
    }
    
    let tMode = (hrs >= 0 && hrs <= 19)? img1.style.visibility = "visible":
    img2.style.visibility = "visible"; 
    let bg = (hrs >= 19)?document.body.style.backgroundImage = "url(./images/night.webp)":
    document.body.style.backgroundImage = "url(./images/sunrise.jpg)";
   

    if(hrs < 10){
        hrs="0"+hrs;
    }
    if(mins<10){
        mins="0"+mins;
    }

    document.getElementById("hours").innerHTML = hrs; 
    document.getElementById("minutes").innerHTML = mins; 
    
}
setInterval(outputTime, 10);