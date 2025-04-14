//funcion ej12
function mayorMujerNombre (arrayPersonas) {
    var mayorMujer = 0;
    
        for (let i = 0; i < arrayPersonas.length; i++) {
            if (arrayPersonas[i]["sexo"] == "Mujer") {
                if (mayorMujer == 0 || arrayPersonas[i]["edad"] > mayorMujer["edad"]) 
                    mayorMujer = arrayPersonas[i]
                }
        }
    
    if (mayorMujer == 0) return ""
    else return mayorMujer["nombre"]
    
    }
    
    
    function edadMujeres (arrayPersonas) {
        edadTotal = 0;
        for (let i = 0; i < arrayPersonas.length; i++) {
            if (arrayPersonas[i]["sexo"] == "Mujer") edadTotal += parseInt(arrayPersonas[i]["edad"])
        }
    
        return edadTotal;
    }
    
    function promedioEdad (arrayPersonas) {
        edadTotal = 0;
    
        for (let i = 0; i < arrayPersonas.length; i++) edadTotal += parseInt(arrayPersonas[i]["edad"])
    
        return edadTotal / arrayPersonas.length
    
    }
    
    function menorHombreNombre (arrayPersonas) {
        var menorHombre = 0;
    
        for (let i = 0; i < arrayPersonas.length; i++) {
            if (arrayPersonas[i]["sexo"] == "Hombre") {
                if (menorHombre == 0 || arrayPersonas[i]["edad"] < menorHombre["edad"]) 
                    menorHombre = arrayPersonas[i]
                }
        }
    
    if (menorHombre == 0) return ""
    else return menorHombre["nombre"]
    
    }
    
    function promedioEdadMujeres (arrayPersonas) {
        edadTotal = 0
        mujeresTotales = 0
    
        for (let i = 0; i < arrayPersonas.length; i++) {
            if (arrayPersonas[i]["sexo"] == "Mujer") {
                edadTotal += parseInt(arrayPersonas[i]["edad"])
                mujeresTotales += 1;
            }
            
        }
    
        if (mujeresTotales > 0) return edadTotal / mujeresTotales
        else return 0
        
    }


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
console.log(mayorMujerNombre(arrayPersonas))
console.log(menorHombreNombre(arrayPersonas))
console.log(promedioEdad(arrayPersonas))
console.log(promedioEdadMujeres(arrayPersonas))