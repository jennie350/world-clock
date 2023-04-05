function updateTime(){

//Singapore

let singaporeDateElement = document.querySelector("#singapore-date")
let singaporeTimeElement= document.querySelector("#singapore-time")
let singaporeDateTime = moment().tz("Asia/Singapore")

singaporeDateElement.innerHTML= singaporeDateTime.format("dddd Mo MMMM YYYY");

singaporeTimeElement.innerHTML=singaporeDateTime.format("hh:mm:ss a (Z [GMT])");

//Munich

let munichDateElement = document.querySelector("#munich-date")
let munichTimeElement= document.querySelector("#munich-time")
let munichDateTime = moment().tz("Europe/Berlin")

munichDateElement.innerHTML= munichDateTime.format("dddd Mo MMMM YYYY");
munichTimeElement.innerHTML=munichDateTime.format("hh:mm:ss a  (Z [GMT])");
}

setInterval(updateTime, 1000);