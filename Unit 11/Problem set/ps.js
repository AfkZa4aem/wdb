function printReverse(arr) {
	for (i = arr.length - 1; i >= 0; i--){
		console.log(arr[i]);
	}
}

function isUniform(arr) {
	firstItem = arr[0];
	for(i = 1; i < arr.length; i++){
		if (arr[i] !== firstItem){
			return false;
		}
	}
	return true;
}

function sumArray(arr) {
	var sum = 0;
	arr.forEach(function(itr){
		sum += itr;
	});
	return sum;
}

function max(arr) {
	var maxValue = arr[0];
	arr.forEach(function(itr){
		while(itr > maxValue){
			maxValue = itr;
		}
	});
	return maxValue;
}