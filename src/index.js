function updateTime(){

//Singapore

let singaporeDateElement = document.querySelector("#singapore-date")
if(singaporeDateElement){
let singaporeTimeElement= document.querySelector("#singapore-time")
let singaporeDateTime = moment().tz("Asia/Singapore")

singaporeDateElement.innerHTML= singaporeDateTime.format("dddd Mo MMMM YYYY");
singaporeTimeElement.innerHTML=singaporeDateTime.format("hh:mm:ss a (Z [GMT])");
}

//Munich

let munichDateElement = document.querySelector("#munich-date")
if(munichDateElement){
let munichTimeElement= document.querySelector("#munich-time")
let munichDateTime = moment().tz("Europe/Berlin")

munichDateElement.innerHTML= munichDateTime.format("dddd Mo MMMM YYYY");
munichTimeElement.innerHTML=munichDateTime.format("hh:mm:ss a  (Z [GMT])");
}
}

//Selected city

function displaySelectCity(event) {
let selectedTimezone = event.target.value;
let cityName = selectedTimezone.split("/")[1];
let selectedCityDate = moment().tz(selectedTimezone).format("dddd Mo MMMM YYYY");
let selectedCityTime = moment().tz(selectedTimezone).format("hh:mm:ss a  (Z [GMT])");
let cityElement = document.querySelector("#city");

cityElement.innerHTML= `
<div class="row">
<div class="col-12">
    <h2>${cityName}</h2>
    </div>
    <div class="time-date">
    <div class="row">
        <div class="col-3">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Clock_simple.svg/768px-Clock_simple.svg.png" alt="Clock"/>
</div>
<div class="col-9">
    <ul>
        <li>${selectedCityDate}</li>
        <li>${selectedCityTime}</li>
    </ul>
    </div>
    </div>
    `
}

let citySelectElement = document.querySelector("#cities");
citySelectElement.addEventListener("change", displaySelectCity)

// Interval timer
setInterval(updateTime, 1000);