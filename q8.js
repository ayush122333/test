var obj = {
 "id" : 4, "name" : "abc",
 "id" : 10, "name" : "ab2",
 "id" : 5, "name" : "abc",
 "id" : 6, "name" : "abc",
};

console.log(obj);

var array=[];
for (var i in obj){
    if (obj.hasOwnProperty(i)){
        obj[i].id=i;
        array.push(obj[i]);
    }
}
var sort="id";
array.sort(function(a,b){
    return a[sort] - b[sort];
});

console.log(obj);