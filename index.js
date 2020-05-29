var randomno1=(Math.round((Math.random()*6)+1));
var randoming= "dice"+randomno1+".png";
var randomingsrc="images/"+randoming;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomingsrc);

var randomno2=(Math.round((Math.random()*6)+1));
var randoming2="dice"+randomno2+".png";
var randomingsrc2="images/"+randoming2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomingsrc2);

if(randomno1>randomno2)
{
    document.querySelector("h1").innerHTML="player 1 wins";
}
else if(randomno1<randomno2) {
    document.querySelector("h1").innerHTML="player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="draw";
}
