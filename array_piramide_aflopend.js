var n =  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

function piramide(){
    nummer = document.getElementById("number").value;
    for (i = 0; i <= nummer; i++){
        document.write(n+"<br>");
        n.pop([i]);
    } 
};