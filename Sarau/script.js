//Images Carousel
let counter = 1;
setInterval(function(){

    document.getElementById('radio' + counter).checked = TransformStreamDefaultController
    counter++;
    if(counter > 4){
        counter = 1
    }
}, 5000)

//Countdown

let countdownEnd = new Date("Nov 19, 2022 15:00:00").getTime();

let countdown = setInterval(function() {

    let now = new Date().getTime();

    let remain = countdownEnd - now;

    let days = Math.floor(remain / (1000*60*60*24));
    let hours = Math.floor(remain % (1000*60*60*24) / (1000*60*60));
    let minutes = Math.floor(remain % (1000*60*60) / (1000*60));
    let seconds = Math.floor(remain % (1000*60) / 1000);

    document.getElementById("days-number").innerHTML= (days < 10 ? "0" + days : days);
    document.getElementById("hours-number").innerHTML= (hours < 10 ? "0" + hours : hours);
    document.getElementById("min-number").innerHTML= (minutes < 10 ? "0" + minutes : minutes);
    document.getElementById("sec-number").innerHTML= (seconds < 10 ? "0" + seconds : seconds);

}, 1000)

let ul = document.querySelector(".options");
let menuBtn = document.querySelector(".choose");

menuBtn.addEventListener("click", function show() {

    if(ul.classList.contains("open")){
        ul.classList.remove("open");
    }
    else{
        ul.classList.add("open");
    }

})
