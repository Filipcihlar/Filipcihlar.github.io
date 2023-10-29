dny = ["neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota"];
mesice = ["ledna", "února", "března", "dubna", "května", "června", "července", "srpna", "září", "října", "listopadu", "prosince"]

setInterval(function(){navtime(); if(document.getElementById("batt")){battery()}}, 100);


function navtime(){
    let d = new Date();
    document.getElementById("navtime").innerHTML = d.getHours()+":"+String((d.getMinutes()+0.001)/100).slice(2, 4)+":"+String((d.getSeconds()+0.001)/100).slice(2, 4);
    if(document.getElementById("datum")){
        document.getElementById("datum").innerHTML = " "+dny[d.getDay()]+" "+d.getDate()+". "+mesice[d.getMonth()]+" "+d.getFullYear();
    }
    
}
function battery(){
    navigator.getBattery().then((battery) => {
        document.getElementById("batt").innerHTML = " "+Math.floor(battery.level*100)+" % &nbsp";
        if(battery.charging == true){
            document.getElementById("battic").innerHTML = "battery_charging_full";
        }
        else if(battery.level < 0.20){
            document.getElementById("battic").innerHTML = "battery_alert";
        }
        else{
            document.getElementById("battic").innerHTML = "battery_full";
        }
    })
}