function abc(num) {
    var arr=[];
    for(var i=0; i<num; i++){
        arr.push(i)
    }
    return arr;
}

dojo= abc(5);
console.log(dojo);