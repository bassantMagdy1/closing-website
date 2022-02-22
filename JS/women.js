

const products = [
    { id: "women_0" , img: "img/pw1.jpg" , button : "women_button_0" },
    { id: "women_1" , img: "img/pw2.jpg" , button : "women_button_1" },
    { id: "women_2" , img: "img/pw4.jpg"  , button : "women_button_2" },
    { id: "women_3" , img: "img/pw5.jpg"  , button : "women_button_3" },
    { id: "women_4" , img: "img/pw6.jpg"  , button : "women_button_4" },
    { id: "women_5" , img: "img/pw7.jpg"  , button : "women_button_5" },
    { id: "women_6" , img: "img/pw8.jpg"  , button : "women_button_6" },
    { id: "women_7" , img: "img/pw9.jpg"  , button : "women_button_7" },
    { id: "women_8" , img: "img/pw10.jpg"  , button : "women_button_8" },
    { id: "women_9" , img: "img/pw11.jpg"  , button : "women_button_9" },
    { id: "women_10" , img: "img/pw12.jpg"  , button : "women_button_10" },
    { id: "women_11" , img: "img/pw3.jpg"  , button : "women_button_11" },
]


for (let i = 0; i < products.length ; i++) {   
    let id= products[i].id;

    document.getElementById("women_button_"+i).onclick = function(){
    localStorage.setItem("Product_"+i , id);
    document.getElementById("women_button_"+i).style.backgroundColor = "slategrey"
    document.getElementById("women_button_"+i).style.color = "white"
    document.getElementById("women_button_"+i).innerText = "Added"
    }          
    
    document.getElementById("women_button_"+i).ondblclick = function (){
    localStorage.removeItem("Product_"+i)
    document.getElementById("women_button_"+i).style.backgroundColor = "white"
    document.getElementById("women_button_"+i).style.color = "black"
    document.getElementById("women_button_"+i).innerText = "Add to whishlist"
    
    }
}

