var chatStr = "";

function replaceEmojis(){
    chatStr = chatStr.replace(":)", "<img class='emoji' src='image/smile.png' />");
    chatStr = chatStr.replace(":(", "<img class='emoji' src='image/sad.png' />");
    chatStr = chatStr.replace(":')", "<img class='emoji' src='image/laugh.png' />");
    chatStr = chatStr.replace("^_^", "<img class='emoji' src='image/panda.png' />");
    chatStr = chatStr.replace("(y)", "<img class='emoji' src='image/okay.png' />"); 
    chatStr = chatStr.replace(":p", "<img class='emoji' src='image/tongue.png' />");
    chatStr = chatStr.replace(":o", "<img class='emoji' src='image/awe.png' />");
}

function censor(){
    chatStr = chatStr.replace("boogie", "******");
    chatStr = chatStr.replace("tarvis", "******");
    chatStr = chatStr.replace("alfonzo", "*******");
    chatStr = chatStr.replace("tervor", "******");
    chatStr = chatStr.replace("jason", "*****");
}


/*----p1Chat----*/
function changeChatStr(){
    chatStr = document.getElementById("p1Input").value;
    document.getElementById("p1Input").value = "";
    
    replaceEmojis()
    censor()
}

/*----p2Chat----*/
function changeChatStr2(){
    chatStr = document.getElementById("p2Input").value;
    document.getElementById("p2Input").value = "";
    
    replaceEmojis()
    censor()
}

/*----chatDisplay----*/
function createChat(chatNum){
    var ndiv = document.createElement("div");
    ndiv.innerHTML = chatStr;
    
    if(chatNum == 1){
        ndiv.style.backgroundColor = "#AFA";
    } else if (chatNum == 2){
        ndiv.style.backgroundColor = "#AAF";
    }
    
    ndiv.style.padding = "10px";
    
    
    document.getElementById("chatDisplay").appendChild(ndiv);
}

/*----Interactions----*/
document.getElementById("p1Input").addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        changeChatStr();
        createChat(1);
    }
});

document.getElementById("p2Input").addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        changeChatStr2();
        createChat(2);
    }
});