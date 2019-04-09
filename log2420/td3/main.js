/*
TODO: 
-Quand on click sur un channel, le nom du groupe actif change
-Quand on click sur un channel, on voit bien qu'il est sélectionné
-Channel par défaut est général, et on voit qu'il est sélectionné
-Le reste c'est des requetes au serveur

DEBUG:
-Quand on create un groupe dynamiquement, le bouton peut pas executer sa fonction
*/

usernameVerification = true;

while (usernameVerification) {
    answer = prompt("Veuillez entrer un nom d'utilisateur:", "Nom d'utilisateur");

    if (answer != null) {
        if (answer.length > 13 || answer.length < 3) {
            alert("Veuiller entrer un nom d'utilisateur entre 3 et 13 caractères!");
        } else if (answer == "Admin") { 
            alert("Le nom Admin est prohibe")
        } else {
            user = answer;
            usernameVerification = false;
        }
    }
}

let socket = new WebSocket("ws://log2420-nginx.info.polymtl.ca/chatservice?username=" + user);

function initialization(message) {
    updateChannelsList(message);

    document.getElementById("username").innerText = user;
    document.getElementById("current-channel").innerText = getChannelNameFromId(currentChannelId);
}

$(document).ready(function () {
    sendMessage();
});


function formatDate(date) {
    switch (date.getDay()) {
        case 0:
            day = "DIM";
            break;
        case 1:
            day = "LUN";
            break;
        case 2:
            day = "MAR";
            break;
        case 3:
            day = "MER";
            break;
        case 4:
            day = "JEU";
            break;
        case 5:
            day = "VEN";
            break;
        case 6:
            day = "SAM";
            break;
    }
    dateMonth = date.getDate();
    hours = date.getHours();
    minutes = date.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }
    
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return day + " " + dateMonth + ", " + hours + ":" + minutes;
}

function joinChannel(newChannelId) {
    let date = new Date();
    let message = new Message("onJoinChannel", newChannelId, "changing channel", user, date);
    sendText(message);
    console.log("joinChannel");
}

function leaveChannel(oldChannelId) {
    let date = new Date();
    let message = new Message("onLeaveChannel", oldChannelId, "changing channel", user, date);
    sendText(message);
    console.log("leaveChannel");
}

function getChannelNameFromId(channelId) {
    for (channel in channelsList) {
        if (channelsList[channel].id === channelId) {
            return channelsList[channel].name;
        }
    }
    return;
}

function generateChannelId() {
    Math.floor(Math.random()*90000) + 10000;
    let firstPart = (Math.floor(Math.random()*90000000)+10000000).toString(36);
    let secondPart = (Math.floor(Math.random()*9000)+1000).toString(36);
    let thirdPart = (Math.floor(Math.random()*9000)+1000).toString(36);
    let fourthPart = (Math.floor(Math.random()*9000)+1000).toString(36);
    let fifthPart = (Math.floor(Math.random()*900000000000)+100000000000).toString(36);

    return firstPart + "-" + secondPart + "-" + thirdPart + "-" + fourthPart + "-" + fifthPart;
}
