var num = [1,2,3,4,5,6,7,8,9,10];
var tafels = [2,4,6,8];
var ids = ["twee","vier","zes","acht"];

tafels.forEach((tafel,index) => {
    num.forEach((num1) =>{
        som = "<div>" + num1 + " x " + tafel + " = " + (num1 * tafel) + "</div>";
        $("#"+ids[index]).append(som);
    });
});