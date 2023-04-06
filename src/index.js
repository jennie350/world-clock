function updateTime(){

//Singapore
let singaporeElement = document.querySelector("#singapore")
if (singaporeElement){
let singaporeDateElement = document.querySelector("#singapore-date")
let singaporeTimeElement= document.querySelector("#singapore-time")
let singaporeDateTime = moment().tz("Asia/Singapore")

singaporeDateElement.innerHTML= singaporeDateTime.format("dddd Do MMMM YYYY");
singaporeTimeElement.innerHTML= singaporeDateTime.format("hh:mm:ss a (Z [GMT])");
}

//Berlin
let berlinElement = document.querySelector("#berlin")
if (berlinElement) {
let berlinDateElement = document.querySelector("#berlin-date")
let berlinTimeElement= document.querySelector("#berlin-time")
let berlinDateTime = moment().tz("Europe/Berlin")

berlinDateElement.innerHTML= berlinDateTime.format("dddd Do MMMM YYYY");
berlinTimeElement.innerHTML= berlinDateTime.format("hh:mm:ss a  (Z [GMT])");
}

//Madrid
let madridElement = document.querySelector("#madrid")
if (madridElement) {
let madridDateElement = document.querySelector("#madrid-date")
let madridTimeElement= document.querySelector("#madrid-time")
let madridDateTime = moment().tz("Europe/Madrid")

madridDateElement.innerHTML= madridDateTime.format("dddd Do MMMM YYYY");
madridTimeElement.innerHTML= madridDateTime.format("hh:mm:ss a  (Z [GMT])");
}

//Brisbane
let brisbaneElement = document.querySelector("#brisbane")
if (brisbaneElement) {
let brisbaneDateElement = document.querySelector("#brisbane-date")
let brisbaneTimeElement= document.querySelector("#brisbane-time")
let brisbaneDateTime = moment().tz("Australia/Brisbane")

brisbaneDateElement.innerHTML= brisbaneDateTime.format("dddd Do MMMM YYYY");
brisbaneTimeElement.innerHTML= brisbaneDateTime.format("hh:mm:ss a  (Z [GMT])");
}

}

//Selected city

function displaySelectCity(event) {
let selectedTimezone = event.target.value;
if (selectedTimezone === "current") {
    selectedTimezone = moment.tz.guess()
}
let cityName = selectedTimezone.split("/")[1];
let selectedCityDate = moment().tz(selectedTimezone).format("dddd Do MMMM YYYY");
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
    <div class="row">
    <a href="index.html" class="all-cities-button">All cities</a>
    </div>
    `
}

let citySelectElement = document.querySelector("#cities");
citySelectElement.addEventListener("change", displaySelectCity)

// Interval timer
updateTime();
setInterval(updateTime, 1000);