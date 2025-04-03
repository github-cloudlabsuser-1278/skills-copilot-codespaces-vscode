// function to covert Celsius
// to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
// function to covert Fahrenheit
// to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
// function to covert Celsius
// to Kelvin
function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}
//Drive code
let celsius = 25;
let fahrenheit = 77;
let kelvin = 298.15;
console.log(celsius + " Celsius is " + celsiusToFahrenheit(celsius) + " Fahrenheit");
console.log(fahrenheit + " Fahrenheit is " + fahrenheitToCelsius(fahrenheit) + " Celsius");
console.log(celsius + " Celsius is " + celsiusToKelvin(celsius) + " Kelvin");