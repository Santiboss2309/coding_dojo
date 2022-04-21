//¿Qué indicará console.log cuando se llame a esta función? 1

function myBirthYearFunc(){
    console.log("Nací en " + 1980);
}
//console.log indica que yo naci en 1980 

//--------------------------------------------------------------------------------------------

//¿qué indicará console.log? 2

function myBirthYearFunc(EntradaAñoNacimiento){
    console.log("Nací en " + EntradaAñoNacimiento);
}
//console.log significa el año de nacimiento "EntradaAñoNacimiento" que es variable de 1980

//-------------------------------------------------------------------------------------------

//Intentémoslo otra vez. Si var num1 = 10 y var num2 = 20, ¿qué indicaría console.log? 3

function add(num1, num2){
    console.log("¡Sumando números!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    console.log(sum);
}   
// console log indicara que num1 = a 1o y
//num2 = a 20 que en total nos da como resultado 30