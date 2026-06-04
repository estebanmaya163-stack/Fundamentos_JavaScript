let nombre, edad, direccion, movil, email;
nombre = prompt("Ingrese su nombre:"); //se piden datos al usuario
edad = prompt("Ingrese su edad:");
direccion = prompt("Ingrese su dirección:");
movil = prompt("Ingrese su número de móvil:");
email = prompt("Ingrese su correo electrónico:");

console.log("Tus datos personales son:", nombre, edad, direccion, movil, email); //se muestran los datos ingresados
console.log("Tu nombre es:", nombre);
console.log("Tu edad es:", edad);
console.log("Tu dirección es:", direccion);
console.log("Tu número de móvil es:", movil);
console.log("Tu correo electrónico es:", email);

document.writeln("Tus nombre es:", nombre, "<br>"); //se muestran los datos ingresados en el documento
document.writeln("Tu edad es:", edad, "<br>");
document.writeln("Tu dirección es:", direccion, "<br>");
document.writeln("Tu móvil es:", movil, "<br>");
document.writeln("Tu email es:", email, "<br>");