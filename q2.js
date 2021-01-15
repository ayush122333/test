// to find maximum consecutive 1's in an array:- 

var arr = [0,0,1,1,0,0,0,1,0,0,1,1,1,0];

function maxCons(num) {
    var currCount = 1;
    var prevCount = 0;
    for (var i in num) {
        prevCount = num[i] === 1 ? prevCount + 1 : 0;
        if (prevCount > currCount) {
            currCount = prevCount;
        };
    };
    
    return currCount;
};

var answer = maxCons(arr);
console.log(answer);
