function get_array() {
    var arr = [];
    //your code here 
    for(var i=1; i<256; i++){
        arr.push(i);
    }
    return arr; 
}
//
function sum_even_numbers(){
    var sum = 0;
    //your code here
    var i=1;
    while(i<=1000){
        if(i%2===0){
            sum = sum+i;
        }
        i++;
    }
    return sum; 
}
//
function sum_odd_5000() {
    var sum = 0;
    //your code here 
    var i=1
    while(i<=5000){
        if(i%2===1){
            sum = sum+i;
        }
        i++;
    }
    return sum; 
}
//
function iterArr(arr) {
    //your code here 
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
//
function findMax(arr) {
    //your code here 
    var max = Math.max.apply(null, arr);
    return max;
}
//
function findAvg(arr) {
    //your code here 
    var avg;
    var sum=0;
    arr.forEach(function(elem){
        sum += elem;
    });
    avg = sum/arr.length;
    return avg; 
}
//
function oddNumbers() {
    var arr = [];
    //your code here 
    var i=1;
    while(i<=50){
        if(i%2===1){
            arr.push(i);
        }
        i++;
    }
    return arr; 
}
//
function greaterY(arr, Y) {
    //your code here 
    var count=0;
    arr.forEach(function(elem){
        if (elem>Y){
            count++;
        }
    });
    return count; 
}
//
function squareVal(arr) {
    //your code here 
    arr.forEach(function(elem,i, arr){
        arr[i] = elem*elem;
    });
    return arr; 
}
//
function noNeg(arr) {
    //your code here 
    var noneg = arr.map(function(elem){
        if (elem<0){
            elem = 0;
        }
        return elem;
    });
    return noneg; 
}
//
function maxMinAvg(arr) {
    //your code here 
    var arrnew=[];
    var sum = 0;
    arr.forEach(function(elem){
        sum += elem;
    });
    arrnew.push(Math.max.apply(null,arr));
    arrnew.push(Math.min.apply(null,arr));
    arrnew.push(sum/arr.length);
    return arrnew; 
}
//
function swap(arr) {
    //your code here 
    var arrnew = arr.slice();
    var temp = arrnew[0];
    arrnew[0] = arrnew[arrnew.length-1];
    arrnew[arrnew.length-1] = temp;
    return arrnew; 
}
//
function numToStr(arr){
	arr = arr.map(function(elem){
		if (elem<0){
			return 'Dojo';
		} else {
			return elem;
		}
	});
	return arr;
}