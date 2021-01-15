// to find which number is repeated twice in an array:-

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10];
var prev = arr[0];
var curr;
var i;

function checkRepeatNo(num){
    for(i=1;i<num.length;i++){
        curr = num[i];
        if(prev == curr){
            return curr;
        }else{
            prev = curr;
        };
    };
};

var no = checkRepeatNo(arr);
console.log(no);