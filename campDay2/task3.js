function findPerfectNumber(number)
{
let temp = 0;
   for(let i=1; i<=number/2; i++)
     {
         if(number%i === 0)
          {
            temp += i;
          }
     }
   
     if(temp === number && temp !== 0)
        {
       console.log("It is a perfect number. : " + number);
        } 
    
 } 

 let n = 1000;
 console.log("Perfect numbers up to this number : " + n)
 for(let i = 1; i < n; i++){
     findPerfectNumber(i);
 }