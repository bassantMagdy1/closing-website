const productContainers =[...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item,i) => {
    let containerDimentions = item.getBoundingClientRect();
    let containerWidth = containerDimentions.width;
    
    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
    
    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})





const products = [
    { id: "product_0" , img: "img/card1.png" , button : "product_button_0" },
    { id: "product_1" , img: "img/card2.png" , button : "product_button_1" },
    { id: "product_2" , img: "img/card3.png"  , button : "product_button_2" },
    { id: "product_3" , img: "img/card4.png"  , button : "product_button_3" },
    { id: "product_4" , img: "img/card5.png"  , button : "product_button_4" },
    { id: "product_5" , img: "img/card6.png"  , button : "product_button_5" },
    { id: "product_6" , img: "img/card7.png"  , button : "product_button_6" },
    { id: "product_7" , img: "img/card8.png"  , button : "product_button_7" },
    { id: "product_8" , img: "img/card9.png"  , button : "product_button_8" },
    { id: "product_9" , img: "img/card10.png"  , button : "product_button_9" },
    { id: "product_10" , img: "img/card11.png"  , button : "product_button_10" },
    { id: "product_11" , img: "img/card12.png"  , button : "product_button_11" },
    { id: "product_12" , img: "img/card11.png"  , button : "product_button_12" },
    { id: "product_13" , img: "img/card10.png"  , button : "product_button_13" },
    { id: "product_14" , img: "img/card9.png"  , button : "product_button_14" },
]


for (let i = 0; i < products.length ; i++) {   
    let id= products[i].id;

    document.getElementById("product_button_"+i).onclick = function(){
    localStorage.setItem("product_"+i , id);
    document.getElementById("product_button_"+i).style.backgroundColor = "slategrey"
    document.getElementById("product_button_"+i).style.color = "white"
    document.getElementById("product_button_"+i).innerText = "Added"
    console.log(products.length )
    }          
    
    document.getElementById("product_button_"+i).ondblclick = function (){
    localStorage.removeItem("product_"+i)
    document.getElementById("product_button_"+i).style.backgroundColor = "white"
    document.getElementById("product_button_"+i).style.color = "black"
    document.getElementById("product_button_"+i).innerText = "Add to whishlist"
    
    }
}









