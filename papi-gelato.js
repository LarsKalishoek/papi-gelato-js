
const week_dagen = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];
console.log(week_dagen.join(' '))
const week_dagen_reverse = week_dagen.reverse()
// console.log(week_dagen[0]);
document.getElementById("alle_dagen").innerHTML = week_dagen;
document.getElementById("werkdagen").innerHTML = week_dagen.slice(0, 5);
document.getElementById("weekenddagen").innerHTML = week_dagen.slice(5,7);
document.getElementById("dagen_omgekeerd").innerHTML = week_dagen_reverse;
document.getElementById("werk_omgekeerd").innerHTML = week_dagen_reverse.slice(2,7);
document.getElementById("weekenddagen_omgekeerd").innerHTML = week_dagen_reverse.slice(0,2);

