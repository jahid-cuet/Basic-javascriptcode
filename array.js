6.//print the sum of an array(number array) in which array taking from user


var num=new Array();
for (var i=0; i<5;i++){
    num[i]=parseInt(prompt("enter number="));
}
 var sum=0;
 for (var j=0; j<5;j++){
    sum=sum+num[j];
    
}
document.write(sum);

7.//print maximum number from an array by using function

function maximum(x){
    max=x[0];
    for (var i=0; i<x.length;i++){
        if(max<x[i]){
            max=x[i]
        }
    }
    return max;
}

var x=[1,2,4,5,7,2]
m=maximum(x)
document.write(m);