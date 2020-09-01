
var synths = ["DX7","MiniMoog","Juno8"];

function game(synth_name){

    Cookies.set("user_synth",synth_name);
    var comp_synth = synths[Math.floor(Math.random()*3)];
    Cookies.set("comp_synth",comp_synth);
    Cookies.set("user_currentHealth","100");
    Cookies.set("computer_currentHealth","100");
    Cookies.set("user_maximum","100");
    Cookies.set("comp_maximum","100");

    window.open("battle.html");

}