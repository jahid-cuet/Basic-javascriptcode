//3.Here printed multiplication table from 1 to n;
var n=parseInt(prompt("enter a number="));

var x,y;
for(x=1;x<=n;x++){
    for(y=1;y<11;y++)
document.write(x+"*"+y+"="+(x*y)+"<br>")
document.write("<br>")
}
