let myName = prompt("İsminizi giriniz: ");

document.querySelector("#myName").innerHTML = myName.charAt(0).toUpperCase() + myName.slice(1);

function clock() {
    const today = new Date();
    let day = today.getDay();
    let dayNames = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let date = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " " + dayNames[day];

    document.querySelector("#myClock").innerHTML = date;
}
setInterval(clock, 1000);
clock(); 
