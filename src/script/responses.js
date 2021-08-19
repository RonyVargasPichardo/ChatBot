function getBotResponse(input) {
    //rock paper scissors
    if (input == "roca") {
        return "papel";
    } else if (input == "papel") {
        return "tijeras";
    } else if (input == "tijeras") {
        return "roca";
    }

    // Simple responses
    if (input == "hola") {
        return "hola!";
    } else if (input == "adios") {
        return "tenga un buen dia, adios!";
    } else if(input == "") {
        return "Bienvenido, como te ayudamos?"
    } else {
        return "Intenta preguntar otra cosa por favor!";
    }
}