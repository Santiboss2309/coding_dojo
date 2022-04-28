var x=[1,3,5,7];

function abc(){
    var x=[0,1,2,3];
    for(var i=0; i<x.length; i++){
        x[i]=x[i]+2;
    }
    return x;
}

x=abc();
console.log(x);