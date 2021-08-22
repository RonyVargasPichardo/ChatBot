

function getBotResponse(input) {

    const intro = ["Hola sea bienvenid@ a Inversores Wodtech en que podemos ayudarle","Bienvenido como le ayudamos ?"];
    const help = [ "si laboramos de lunes a viernes de 8 am a 5 pm y los sabados hasta las 1 pm","si estamos abierto de lunes a sabado",];
    const greetings = ["estoy bien gracias, como te ayudamos?", "muy bien, como te ayudamos?", "estoy excelente, como puedo ayudarte?",];
    const hobbies = ["Si, pase por nuestro local para ayudarle, si no esta cerca de la hora de cierre","Si, venga Aqui podemos ayudarle, verifique el dia y la hora antes de pasar",];
    const thank = ["No hay problema","De nada","siempre a la orden"];
    const closing = ['Ok bye-bye','Bye-bye', "Te veo pronto",];
    const contact = ["Puede llamarnos al 829-840-3147", "comuniquese con nosotros al 829-840-3147",]

    /*<---    Quitar acentos    */
    const removeAccents = str => str.normalize("NFD").replace(/[\u0300-\u036f]/g,"");
    input = removeAccents(input).toLowerCase();



    //preguntas de bienvenida
    if (input.includes('ubicacion') || input.includes('location') ||input.includes('lugar')||input.includes('ubicados')) {
        return `Estamos ubicados en la Francisco Henriquez y Carvajal #295 Villa Consuelo, Santo Domingo`;
    }
     else if (input.includes('horario')||input.includes('hora')||input.includes('tiempo') ||input.includes('cerrado')||input.includes('cerrados')) {
        return "Laboramos de Lunes a Viernes de 8:00am a 5:00pm, los Sabados de 8:00am a 1:00pm y los Domingos estamos cerrados.";
    }
     else if (input.includes('equipos')||input.includes('equipo')||input.includes('precios')||input.includes('precio')||input.includes('inversores')) {
        return `Tenemos los siguientes equipos disp:
        Inversores de 1K 7,000$, 1.5k 8,500$, 2.5k 14,000$ y 3k 20,000$`;
    }
    else if(input.includes('quienes son ustedes')||input.includes('quienes son')||input.includes('dedican')){
        return 'Somos Inversores Wodtech, nos encargamos de la venta y repacion de Inversores!!'
    }


    if(input.includes('hola') || input.includes('saludo') || input.includes('buenos') || input.includes('buenas') ){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        return finalresult;
    }
    if(input.includes('laboran') || input.includes('abierto')||input.includes('abiertos')){
        let finalresult = help[Math.floor(Math.random() * help.length)];
        return finalresult;
    }
    if(input.includes('como estas') || input.includes('Como estas hoy')||input.includes('que tal')||input.includes('como esta')){
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        return finalresult;
    }
    if(input.includes('tiene')||input.includes('tenes')||input.includes('tienen')||input.includes('problema')||input.includes('ayuda')||input.includes('pasar')){
        let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
        return finalresult;
    }
    if(input.includes('gracias') ||input.includes('Muchas gracias')||input.includes('ok')||input.includes('bien')||input.includes('perfecto')){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        return finalresult;
    }
    if(input.includes('hablamos luego')||input.includes('adios')||input.includes('bye')||input.includes('hasta luego')){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        return finalresult;
    }
    if(input.includes('telefono')||input.includes('celular')||input.includes('numero')||input.includes('contacto')){
        let finalresult = contact[Math.floor(Math.random() * contact.length)];
        return finalresult;
    }else{
        return 'Elabore una pregunta mas concreta por favor'
    }

    
}