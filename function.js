//5.Function 

function addition(a,b){
    var sum=a+b;
         return sum;
    }
    
    x=addition(3,2)
      document.write(x);  
    
      

    //IIFEs Function


(function addition(a,b){
    var sum=a+b;
    document.write(sum)
    })(2,3);
