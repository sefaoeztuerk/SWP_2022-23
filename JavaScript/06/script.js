let random = Math.random() * 1000
let randomAsInteger = Math.round(random);
console.log(randomAsInteger)

//Wenn größer als 500
if (randomAsInteger > 500){
    console.log("Bigger than 500");
}

//Wenn größer als 800
if (randomAsInteger > 800){
    console.log("Bigger than 800");
}

//Wenn zwischen 500 und 800
if (randomAsInteger > 500){
    if (randomAsInteger < 800){
        console.log("between 500 and 800");
    }
}

//Wenn zwischen 200 und 500
if (randomAsInteger > 200){
    if (randomAsInteger < 500){
        console.log("between 200 and 500");
    }
}

//Wenn zwischen 0 und 200
if (randomAsInteger > 0){
    if (randomAsInteger < 200){
        console.log("between 0 and 200");
    }
}