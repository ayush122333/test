var arr = [1,2,3,4,5,6,7,8,9];

arr.forEach(evenNum);


// function to print only even numbers in an array:-
function evenNum(num){
    if(num%2 == 0){
        console.log(num);
    };
};