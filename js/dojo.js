function looping(x,y){
    for(var i=0; i<x; i++){
        for(var j=0; j<y; j++){
            console.log(i*j);
        }
    }
    return x*y;
}

z=looping(2,3);
console.log(z);