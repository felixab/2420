/*
TODO: 
-Quand on click sur un channel, le nom du groupe actif change
-Quand on click sur un channel, on voit bien qu'il est sélectionné
-Channel par défaut est général, et on voit qu'il est sélectionné
-Le reste c'est des requetes au serveur

DEBUG:
-Quand on create un groupe dynamiquement, le bouton peut pas executer sa fonction
*/

// var socket = new WebSocket("ws://localhost:3000");

/*Topic = {
    publish: callbacks.fire,
    subscribe: callbacks.add,
    unsubscribe: callbacks.remove
}*/
/*
function togglePlusMinus() {
    document.getElementById("channel-icon").classList.toggle("color-plus");
    document.getElementById("channel-icon").classList.toggle("fa-plus");
    document.getElementById("channel-icon").classList.toggle("color-minus");
    document.getElementById("channel-icon").classList.toggle("fa-minus");
}

function newGroup() {
    var groupName = prompt("Veuillez entrer un nom de groupe:", "Nom de groupe");

    groupNumber = document.getElementsByClassName("group").length;
    console.log(groupNumber);
    divClass = "group light";

    if (groupNumber % 2)
        divClass = "group dark";

    var divName = document.createElement("div");
    divName.innerText = groupName;

    var icon = document.createElement("i");
    icon.innerHTML = '<i class="fas fa-plus color-plus" id="channel-icon" onclick="togglePlusMinus()"></i>';
    
    var divGroup = document.createElement("div");
    divGroup.className = divClass;

    divGroup.appendChild(icon);
    divGroup.appendChild(divName);

    document.getElementById("group-list").appendChild(divGroup);

    /*
jQuery("<div></div>", {
    id: groupNumber,
    class: divClass,
}).appendTo("#group-list");

jQuery("<i></i>", {
    class: "fas fa-plus color-plus channel-icon",
}).appendTo("#" + groupNumber);

jQuery("<div></div>", {
    id: "group-name",
    text: groupName,
}).appendTo("#" + groupNumber);

jQuery("<div></div>").appendTo("#" + groupNumber);*/

}
/*
function sendMessage() {
    $("#send-button").click(function () {
        inputMessage = $("#text-input").val();
        sentNumber = $(".sent-message").length;
        var date = new Date();
        var message = new Message("onMessage", "Général", "TEST", "Simon", date);
        //console.log(message);
        //Topic.publish(message);
        sendText(message);

        jQuery("<div></div>", {
            id: sentNumber,
            class: "sent-message",
        }).appendTo("#chat-area");

        jQuery("<div></div>").appendTo("#" + sentNumber);

        jQuery("<div></div>", {
            id: "sent-inner-text",
            text: inputMessage,
        }).appendTo("#" + sentNumber);

        jQuery("<div></div>", {
            id: "sent-date",
            text: date,
        }).appendTo("#" + sentNumber);

        $("#text-input").val("");
    });

    $("#text-input").keypress(function (e) {
        if (e.which == 13) {
            $('#send-button').click();
        }
    });

    scrollTop = $("#chat-area").get(0).scrollHeight;
}
*/