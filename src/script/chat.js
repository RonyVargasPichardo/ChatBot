// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}


//obtengo la hora en la que empeza a chatear
function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

//obtengo el primer mensaje del bot 
function firstBotMessage() {
    let firstMessage = "Bienvenid@ a Inversores Wodtech, Que informaciones le gustaria saber ?";
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + 
    '</span></p>' + '<p class="botText"><span>Ubicación</span><span>Horarios</span><span>Contacto</span></p>' + 
    '<p class="botText"><span>Equipos y precios</span></p>' ;

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// recupero la respueta
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//obtengo el valor del input y proceso la respuesta
function getResponse() {
    let userText = $("#textInput").val();

    // if (userText == "") {
    //     userText = "Bienvenido!";
    // }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
// function buttonSendText(sampleText) {
//     let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

//     $("#textInput").val("");
//     $("#chatbox").append(userHtml);
//     document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
// }

function sendButton() {
    getResponse();
}

// function heartButton() {
//     buttonSendText("Heart clicked!")
// }

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});