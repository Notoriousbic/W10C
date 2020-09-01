var synth_images={
    synth_1: "images/synthpic3.jpg",
    synth_2: "images/synthpic4.jpg",
    synth_3: "images/synthpic5.png", 
}

var user = {
    synth_name : Cookies.get("user_synth"),
    current_health : Cookies.get("user_currentHealth"),
    maximum:Cookies.get("user_maximum")
}

var comp = {
    synth_name : Cookies.get("comp_synth"),
    current_health : Cookies.get("computer_currentHealth"),
    maximum:Cookies.get("comp_maximum")
}
checkWinner()
var user_html = document.getElementById("user");

var user_image = document.createElement("img");
user_image.setAttribute("src",synth_images[user.synth_name]);

user_html.appendChild(user_image);

var comp_html = document.getElementById("computer");

var comp_image = document.createElement("img");
comp_image.setAttribute("src",synth_images[comp.synth_name]);

comp_html.appendChild(comp_image);

var user_score = document.createElement("h3");
var comp_score = document.createElement("h3");

user_score.innerHTML= user.current_health + "/" + user.maximum;
user_score.setAttribute("id","user_score");

user_html.appendChild(user_score);

comp_score.innerHTML= comp.current_health + "/" + comp.maximum;
comp_score.setAttribute("id","comp_score");

comp_html.appendChild(comp_score);

//range 0-10
function attack1(lower_limit,upperlimit){

    console.log(lower_limit);
    var randomdg =lower_limit + Math.round(Math.random()*(upperlimit-lower_limit));
    comp.current_health -= randomdg;
    updateCookies()
    checkWinner();
    computer_attack();
    updateCookies()
    checkWinner();
    updateHtml();

    
}



function updateCookies(){
    Cookies.set("user_currentHealth",user.current_health);
    Cookies.set("computer_currentHealth",comp.current_health);

}
function updateHtml(){

    var user_score = document.getElementById("user_score");
    user_score.innerHTML= user.current_health + "/" + user.maximum;
    var comp_score = document.getElementById("comp_score");
    comp_score.innerHTML= comp.current_health + "/" + comp.maximum;

   
}

function computer_attack(){
    var randomdg = Math.round(Math.random()*35);
    user.current_health -= randomdg;

}
function checkWinner(){
    var body_html = document.getElementsByTagName("body");
    if(user.current_health <= 0){
        body_html[0].innerHTML = " YOU ARE A LOSER!  READ YOUR MANUAL";

    }
    else  if(comp.current_health <= 0){
        body_html[0].innerHTML = " WINNER WINNER CHICKEN DINNER! ";

    }

}