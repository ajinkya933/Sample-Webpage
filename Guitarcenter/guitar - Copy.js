/**
 * Created by Ajinkya Bobade on 25-05-2017.
 */
var arr=["guitar_img1.jpg","guitar_img2.jpg","guitar_img3.jpg","guitar_img4.jpg","guitar_img5.jpg","guitar_img6.jpg","guitar_img7.jpg"];

var Guitar_Names=["Gibson SG-2016","EpiPhone SG G310","SuperSonic L15","RickRacks 99","Acoustic AquaStar","UnMatched S6","FG700S"];
var current=0;
var p,q,r;

function myFuncNext(){

    if(current==7) {
        current=0;
    }
    document.getElementById("guitarName").innerHTML=Guitar_Names[current];
    document.getElementById("myImage").src=arr[current];
    var xmlhttp=new XMLHttpRequest();//create ajax object
    xmlhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            var myObj=JSON.parse(this.responseText);
            document.getElementById("productInfo").innerHTML=myObj.allProducts[current].product_description;
            document.getElementById("shippingInfo").innerHTML=myObj.allProducts[current].shipping_details;
            document.getElementById("reviewInfo").innerHTML=myObj.allProducts[current].customer_reviews;
            document.getElementById("guitarPrice").innerHTML=myObj.allProducts[current].price;
            q=myObj.allProducts[current+1].shipping_details;
            p=myObj.allProducts[current+1].price;
            r=myObj.allProducts[current+1 ].no_of_items;
        }
    }

    xmlhttp.open("GET","data2.txt",true);
    xmlhttp.send();
    localStorage.setItem("value", current);
    localStorage.setItem("value1",p);
    localStorage.setItem("value2",q);
    localStorage.setItem("value3",r);
    current++;
}

function myFuncPrev(){
    if(current==0){
        current=7;
    }

    document.getElementById("guitarName").innerHTML=Guitar_Names[current];
    document.getElementById("myImage").src=arr[current-1];
    var xmlhttp=new XMLHttpRequest();//create ajax object
    xmlhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            var myObj=JSON.parse(this.responseText);
            document.getElementById("productInfo").innerHTML=myObj.allProducts[current].product_description;
            document.getElementById("shippingInfo").innerHTML=myObj.allProducts[current].shipping_details;
            document.getElementById("reviewInfo").innerHTML=myObj.allProducts[current].customer_reviews;
            document.getElementById("guitarPrice").innerHTML=myObj.allProducts[current].price;
            q=myObj.allProducts[current+1].shipping_details;
            p=myObj.allProducts[current+1].price;
            r=myObj.allProducts[current+1].no_of_items;

        }
    }

    xmlhttp.open("GET","data2.txt",true);
    xmlhttp.send();
    localStorage.setItem("value", current);
    localStorage.setItem("value1",p);
    localStorage.setItem("value2",q);
    localStorage.setItem("value3",r);
    current--;
}

function navigateToPage2(){
    if(current)
         location.href='guitarPage2.html';
}




