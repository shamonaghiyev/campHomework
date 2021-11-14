console.log("Tapşırıq  2");


function chekFriendNumbers(number1, number2) {
    let totalNumber1 = 0;
    let totalNumber2 = 0;

    //Ədədin Bölənləri tapılır.
    for(let i = 0; i < number1; i++){
        if (number1 % i == 0) {
            totalNumber1 += i;
        }
    }

    //Ədədin Bölənləri tapılır.
    for(let i = 0; i < number2; i++){
        if (number2 % i == 0) {
            totalNumber2 += i;
        }
    }

    //Şərti Yoxlayır.
    if (number1 == totalNumber2 && number2 == totalNumber1) {
        console.log("Friend Numbers");
    }else{
        console.log("Not Friend Numbers");
    }


}

chekFriendNumbers(284,220);
chekFriendNumbers(156,32);