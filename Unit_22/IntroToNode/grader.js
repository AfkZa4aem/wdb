function average(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    sum /= arr.length;
    return sum.toFixed(0);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));

var scores2 = [40, 65, 77, 82, 82, 54, 73, 63, 95, 49];
console.log(average(scores2));