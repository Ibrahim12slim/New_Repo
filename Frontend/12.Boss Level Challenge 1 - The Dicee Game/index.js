var randomNumber1 = Math.random();
randomNumber1*=5;
randomNumber1=Math.floor(randomNumber1)+1;

var randomImageNumber1 = "./images/dice"+randomNumber1+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageNumber1);

var randomNumber2 = Math.random();
randomNumber2*=5;
randomNumber2=Math.floor(randomNumber2)+1;

var randomImageNumber2 = "./images/dice"+randomNumber2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageNumber2);


if(randomImageNumber1 > randomImageNumber2){
    document.querySelector("h1").innerHTML="Player1 wins!";
}
else if(randomImageNumber1 < randomImageNumber2){
    document.querySelector("h1").innerHTML="Player2 wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw :(";

}