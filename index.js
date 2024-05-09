function convertirTemperatura(){
    let celsius= prompt("Ingrese la temperatura en grados Celsius: ");
//verificar que el numero ingresado sea un numero
while(isNaN(celsius)){
    alert("Por favor, ingrese un valor numérico. ");
    celsius= prompt("Ingrese el valor numérico");
}

//Convierto el número
let farenheit = (parseFloat(celsius)*9/5+ 32);
let kelvin= (parseFloat(celsius)+273.15);

//Imprimo los resultados aqui
console.log("Los grados " + celsius+ " ingresados en Celsius equivalen a: ")
console.log(farenheit+ " grados Farenheit");
console.log(kelvin+ " grados Kelvin");
}

console.log(convertirTemperatura());
