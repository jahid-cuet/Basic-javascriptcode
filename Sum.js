//1.Sum of two numbers;

var num1=parseInt(prompt("enter your name="),10);
var num2=parseInt(prompt("enter your name="),10);
var num3=num1+num2;


document.write(num1+"+"+num2 +"=" +num3 )

//2.the program that print Sum from numbers x(1) to n(20) that divisible by 3 and 5 (uaing While loop):
var n=parseInt(prompt("enter number"),10);
var x=1;
sum=0;
while(x<n){
    if(x%3==0 && x%5==0){
sum=sum+x;
}
x++;
}
document.write(sum);

    
    