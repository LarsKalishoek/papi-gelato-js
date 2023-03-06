const week_dagen = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];
var namen
var len
function number_func(){
    namen = [];
    len = document.getElementById("number").value;
    console.log(document.getElementById("number").value)
};

function name_func(){
    console.log(len)
    namen.push(document.getElementById("names").value);
    document.getElementById("names").value = "";
    if (namen.length==len){
        document.getElementById("result").innerHTML = namen.join(", ");
        document.getElementById("result_reverse").innerHTML = namen.reverse().join(", ");
    };
};

// console.log(names_array)
console.log(week_dagen.join(' '))
const week_dagen_reverse = week_dagen.reverse()
document.getElementById("alle_dagen").innerHTML = week_dagen;
document.getElementById("werkdagen").innerHTML = week_dagen.slice(0, 5);
document.getElementById("weekenddagen").innerHTML = week_dagen.slice(5,7);
document.getElementById("dagen_omgekeerd").innerHTML = week_dagen_reverse;
document.getElementById("werk_omgekeerd").innerHTML = week_dagen_reverse.slice(2,7);
document.getElementById("weekenddagen_omgekeerd").innerHTML = week_dagen_reverse.slice(0,2);
