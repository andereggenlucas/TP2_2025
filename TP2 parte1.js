var num1 = 10
var num2 = 7
var num3 = 2
var mayor = num1
var palabra = "hola"
var n = 6
var int1 = 3
var int2 = 8
var array1 = [3, 6, 9, 12, 15]
var array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//ej 1
console.log(num1 + num2)

//ej 2
if (num2 > num1) {
    mayor = num2
}
if (num3 > mayor) {
    mayor = num3
}
console.log (mayor)

//ej 3
if (typeof palabra == "string") {
    console.log ("tiene letras")
}

//ej 4
if (num1 % 2 == 0) {
    console.log ("es par")
}

//ej 5
for (i = 0; i < n; i++) {
    console.log(palabra)
}

//ej 6
for (i = int1 + 1; i < int2; i++) {
    console.log(i)
}

//ej 7
for (i = int1; i < int2; i++) {
    if (i % 3 == 0) {
        console.log(i)
    }
}

// ej 8
for (i = 0; i < 100; i++) {
    if (i % 2 == 0 && i % 3 == 0) {
        console.log(i)
    }
}

//ej 9
let suma = 0;
for (let i = 0; i < array1.length; i++) {
  suma += array1[i]   
}

console.log(suma)

//ej 10
let sumaPar = 0;
for (let i = 0; i < array2.length; i++) {
    if (array2[i] % 2 == 0){
        sumaPar += array2[i]
    } 
    console.log(sumaPar)
}

//ej 12
const Persona1 = {
    nombre: "Catalina",
    sexo: "Mujer",
    edad: "22",
}

const Persona2 = {
    nombre: "Nahuel",
    sexo: "Hombre",
    edad: "25",
}

const Persona3 = {
    nombre: "Gaston",
    sexo: "Hombre",
    edad: "19",
}

const Persona4 = {
    nombre: "Macarena",
    sexo: "Mujer",
    edad: "28",
}

const Persona5 = {
    nombre: "Bianca",
    sexo: "Mujer",
    edad: "21",
}

var arrayPersonas = [Persona1, Persona2, Persona3, Persona4, Persona5]
var sumaEdad = 0
var sumaEdadM = 0
var mayorMujer = 0
var menorHombre = 0
var cantMujeres = 0

for (let i = 0; i < arrayPersonas.length; i++) {
    sumaEdad += parseInt(arrayPersonas [i]["edad"])

    if (arrayPersonas[i]["sexo"] == "Mujer") {
        cantMujeres += 1
        sumaEdadM += parseInt(arrayPersonas[i]["edad"])
        if (mayorMujer == 0) {
            mayorMujer = arrayPersonas[i]
        }
        else if (arrayPersonas[i]["edad"] > mayorMujer["edad"]) {
            mayorMujer = arrayPersonas[i]
        }
        }
        else {
            if (menorHombre == 0)
            menorHombre = arrayPersonas[i]
        else if 
            (arrayPersonas[i]["edad"] < menorHombre["edad"]) {
                menorHombre = arrayPersonas[i]
            }
        }
    }
if (mayorMujer == 0) {
    console.log("No hay mujeres en la lista")
}
else {
    console.log("La mayor mujer es:",mayorMujer["nombre"])
}
if (menorHombre == 0){
    console.log("No hay hombres en la lista")
}
else {
    console.log("El menor de los hombres es:",menorHombre["nombre"])
}
var promedio = sumaEdad / arrayPersonas.length
var promedioM = sumaEdadM / cantMujeres
console.log("El promedio de las edades es ",promedio)
console.log("El promedio de la edad de las mujeres es ",promedioM)