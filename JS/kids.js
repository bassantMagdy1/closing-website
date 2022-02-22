

const products = [
    { id: "kids_0" , img: "img/pw1.jpg" , button : "kids_button_0" },
    { id: "kids_1" , img: "img/pw2.jpg" , button : "kids_button_1" },
    { id: "kids_2" , img: "img/pw4.jpg"  , button : "kids_button_2" },
    { id: "kids_3" , img: "img/pw5.jpg"  , button : "kids_button_3" },
    { id: "kids_4" , img: "img/pw6.jpg"  , button : "kids_button_4" },
    { id: "kids_5" , img: "img/pw7.jpg"  , button : "kids_button_5" },
    { id: "kids_6" , img: "img/pw8.jpg"  , button : "kids_button_6" },
    { id: "kids_7" , img: "img/pw9.jpg"  , button : "kids_button_7" },
    { id: "kids_8" , img: "img/pw10.jpg"  , button : "kids_button_8" },
    { id: "kids_9" , img: "img/pw11.jpg"  , button : "kids_button_9" },
    { id: "kids_10" , img: "img/pw12.jpg"  , button : "kids_button_10" },
    { id: "kids_11" , img: "img/pw3.jpg"  , button : "kids_button_11" },
    { id: "kids_12" , img: "img/pw3.jpg"  , button : "kids_button_12" },
    { id: "kids_13" , img: "img/pw3.jpg"  , button : "kids_button_13" },
    { id: "kids_14" , img: "img/pw3.jpg"  , button : "kids_button_14" }
]


for (let i = 0; i < products.length ; i++) {   
    let id= products[i].id;

    document.getElementById("kids_button_"+i).onclick = function(){
    localStorage.setItem("Product_"+i , id);
    document.getElementById("kids_button_"+i).style.backgroundColor = "slategrey"
    document.getElementById("kids_button_"+i).style.color = "white"
    document.getElementById("kids_button_"+i).innerText = "Added"
    }          
    
    document.getElementById("kids_button_"+i).ondblclick = function (){
    localStorage.removeItem("Product_"+i)
    document.getElementById("kids_button_"+i).style.backgroundColor = "white"
    document.getElementById("kids_button_"+i).style.color = "black"
    document.getElementById("kids_button_"+i).innerText = "Add to whishlist"
    
    }
}

