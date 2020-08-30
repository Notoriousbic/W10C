var maxHitpoints = 88;
var synthPick = Cookies.get('synthCookie');
var specialMove = Cookies.get('special');
var usrBattleHP =Cookies.get('usrCurrentHP');

if (synthPick == "MiniMoog") {
    box1.innerHTML = "<img src ='images/synthpic5.png'>";

}

if (synthPick == "DX7") {
    box1.innerHTML = "<img src ='images/synthpic2.jpeg'>";

}

if (synthPick == "Juno8") {
    box1.innerHTML = "<img src ='images/synthpic4.jpg'>";

}

if (synthPick == "Virus") {
    box1.innerHTML = "<img src ='images/synthpic3.jpg'>";
}
// function deleteCookie(){
//     Cookies.remove('synthCookie')
//     window.open("index.html");
// }

innerBox1.innerHTML = ("Your chosen synth is...the " + (synthPick) +"<br>"+"<br>"+"<br>"+"Keys Remaining = " + (maxHitpoints));

function userAttack1(){
    var hitPoints= ((usrBattleHP) - 10);
    console.log(hitPoints);
    return hitPoints;
  
}






