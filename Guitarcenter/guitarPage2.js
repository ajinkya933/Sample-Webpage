/**
 * Created by Ajinkya Bobade on 26-05-2017.
 */

var arr=["guitar_img1.jpg","guitar_img2.jpg","guitar_img3.jpg","guitar_img4.jpg","guitar_img5.jpg","guitar_img6.jpg","guitar_img7.jpg"];

current = localStorage["key"];
var price1=localStorage.getItem("value1");
var ship1=localStorage.getItem("value2");
var stock1=localStorage.getItem("value3");

window.onload= function () {
    var curr=localStorage.getItem("value");
    document.getElementById("page2Image").src=arr[curr];
    document.getElementById("page2Price").innerHTML=price1;
    document.getElementById("page2Shipping").innerHTML=ship1;
    document.getElementById("page2Stock").innerHTML=stock1;
    // console.log(price1);
    // console.log(ship1);
    // console.log(stock1);
}




function reviewFunction(){
    document.getElementById("box2").style.display="block";
    document.getElementById("fname").innerHTML= document.getElementById("FirstNameX").value;
    document.getElementById("lname").innerHTML=document.getElementById("LastNameX").value
    document.getElementById("email").innerHTML=document.getElementById("emailX").value
    document.getElementById("ContactNumber").innerHTML=document.getElementById("ContactNumberX").value
}

function navigatePage3(){
    location.href='guitarPage3.html';
}

