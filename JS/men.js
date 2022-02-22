const products = [
    { id: "men_0" , img: "img/pw1.jpg" , button : "men_button_0" },
    { id: "men_1" , img: "img/pw2.jpg" , button : "men_button_1" },
    { id: "men_2" , img: "img/pw4.jpg"  , button : "men_button_2" },
    { id: "men_3" , img: "img/pw5.jpg"  , button : "men_button_3" },
    { id: "men_4" , img: "img/pw6.jpg"  , button : "men_button_4" },
    { id: "men_5" , img: "img/pw7.jpg"  , button : "men_button_5" },
    { id: "men_6" , img: "img/pw8.jpg"  , button : "men_button_6" },
    { id: "men_7" , img: "img/pw9.jpg"  , button : "men_button_7" },
    { id: "men_8" , img: "img/pw10.jpg"  , button : "men_button_8" },
    { id: "men_9" , img: "img/pw11.jpg"  , button : "men_button_9" },
    { id: "men_10" , img: "img/pw12.jpg"  , button : "men_button_10" },
    { id: "men_11" , img: "img/pw3.jpg"  , button : "men_button_11" },
]


for (let i = 0; i < products.length ; i++) {   
    const id = products[i].id;
    const items = document.getElementById(`men_button_${i}`);
        
    items.onclick = function (){
        localStorage.setItem(`Product_${i}`, document.getElementById(`men_${i}`).id)
        items.style.backgroundColor = "slategrey"
        items.style.color = "white"
        items.innerText = "Added"
    }          
    
    items.ondblclick = function  (){
        localStorage.removeItem(`Product_${i}`)
        items.style.backgroundColor = "white"
        items.style.color = "black"
        items.innerText = "Add to whishlist"
    }    
}


