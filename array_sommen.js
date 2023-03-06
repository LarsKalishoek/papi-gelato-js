var n = [1,2,3,4,5,6,7,8,9,10];
var m = [2,4,6,8,10,12,14,16,18,20];


function plus(){
    n.forEach((num1, index) => {
        const num2 = m[index];
        console.log("num1:" + num1 + "  num2:" + num2)
        var klaar = ("<div>"+ num1 + "+" + num2 + "=" + (num1 + num2) + "</div>")
        $("#plus").append(klaar);
    });
}
plus();

function min(){
    n.forEach((num1, index) => {
        const num2 = m[index];
        console.log("num1:" + num1 + "  num2:" + num2)
        var klaar = ("<div>"+ num2 + "-" + num1 + "=" + (num2 - num1) + "</div>")
        $("#min").append(klaar);
    });
}
min()

function keer(){
    n.forEach((num1, index) => {
        const num2 = m[index];
        console.log("num1:" + num1 + "  num2:" + num2)
        var klaar = ("<div>"+ num1 + "x" + num2 + "=" + (num1 * num2) + "</div>")
        $("#keer").append(klaar);
    });
}
keer()

function delen(){
    n.forEach((num1, index) => {
        const num2 = m[index];
        console.log("num1:" + num1 + "  num2:" + num2)
        var klaar = ("<div>"+ num2 + ":" + num1 + "=" + (num2 / num1) + "</div>")
        $("#delen").append(klaar);
    });
}
delen()
