/**
 * Created by Ajinkya Bobade on 26-05-2017.
 */
var Guitar_Names=["Gibson SG-2016","EpiPhone SG G310","SuperSonic L15","RickRacks 99","Acoustic AquaStar","UnMatched S6","FG700S"];

var price2=localStorage.getItem("value1");
var ship2=localStorage.getItem("value2");
var curr=localStorage.getItem("value");

window.onload= function () {
    document.getElementById("price3").innerHTML=price2;
    document.getElementById("ship3").innerHTML=ship2;
    document.getElementById("name3").innerHTML=Guitar_Names[curr];
}



function navigateHome(){
    location.href='guitarPage1.html';
}
