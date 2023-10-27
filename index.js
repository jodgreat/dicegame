var randomNumber = Math.floor(Math.random()*6+1);
var randomNumber2 = Math.floor(Math.random()*6+1);

var images1 = "images/dice"+randomNumber+".png";
var images2 = "images/dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src",images1);
document.querySelector(".img2").setAttribute("src",images2);

if(images1>images2)
{
    document.querySelector("h1").innerHTML="Player 1 wins"
}

else if (images1<images2)
{
    document.querySelector("h1").innerHTML="Player 2 wins"
}

else{
    document.querySelector("h1").innerHTML="Draw"
}