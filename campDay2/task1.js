console.log("Tapşırıq  1");

function findPrime(...numbers){

    for(let j = 0; j<numbers.length; j++){

        let mark = 0;
        if (numbers[j] === 2) {
            mark = 0;
        } else if (numbers[j] > 1) {
            for (let i = 2; i < numbers[j]; i++) {
        
              if (numbers[j] % i !== 0) {
                mark = 0;
                
              } else if (numbers[j] === i * i) {
                mark++;
                break;
              } else {
                mark++;
                break;
              }
            }
        } else {
             mark++;
        }
        function printNumber(mark, num){
            if (mark == 0) {
                console.log("Prime :" + num);
            } else{
                console.log("Not is Prime :" + num);
            }
        }
        printNumber(mark, numbers[j]);
        
        
    }
    
}

findPrime(2, 5, 8, 21, 13);