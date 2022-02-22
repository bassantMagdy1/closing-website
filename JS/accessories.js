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
    { id: "access_0" , img: "img/w1.webp" , button : "btn_access_0" },
    { id: "access_1" , img: "img/m2.jpg" , button : "btn_access_1" },
    { id: "access_2" , img: "img/m_3.jpeg"  , button : "btn_access_2" },
    { id: "access_3" , img: "img/m4.jpg"  , button : "btn_access_3" },
    { id: "access_4" , img: "img/m5.jpg"  , button : "btn_access_4" },
    { id: "access_5" , img: "img/m6.png"  , button : "btn_access_5" },
    { id: "access_6" , img: "img/all_men.jpg"  , button : "btn_access_6" },
    { id: "access_7" , img: "img/m1.jpeg"  , button : "btn_access_7" },
    { id: "access_8" , img: "img/m5.jpg"  , button : "btn_access_8" },
    { id: "access_9" , img: "img/m2.jpg"  , button : "btn_access_9" },
    { id: "access_10" , img: "img/m_3.jpeg"  , button : "btn_access_10" },
    { id: "access_11" , img: "img/w1.webp"  , button : "btn_access_11" },
    { id: "access_12" , img: "img/w2.webp"  , button : "btn_access_12" },
    { id: "access_13" , img: "img/w3.jpg"  , button : "btn_access_13" },
    { id: "access_14" , img: "img/w4.jpg"  , button : "btn_access_14" },
    { id: "access_15" , img: "img/w5.jpg"  , button : "btn_access_15" },
    { id: "access_16" , img: "img/w6.jpg"  , button : "btn_access_16" },
]


for (let i = 0; i < products.length ; i++) {   
    let id= products[i].id;

    document.getElementById("btn_access_"+i).onclick = function(){
    localStorage.setItem("access_"+i , id);
    document.getElementById("btn_access_"+i).style.backgroundColor = "slategrey"
    document.getElementById("btn_access_"+i).style.color = "white"
    document.getElementById("btn_access_"+i).innerText = "Added"
    }          
    
    document.getElementById("btn_access_"+i).ondblclick = function (){
    localStorage.removeItem("access_"+i)
    document.getElementById("btn_access_"+i).style.backgroundColor = "white"
    document.getElementById("btn_access_"+i).style.color = "black"
    document.getElementById("btn_access_"+i).innerText = "Add to whishlist"
    
    }
}


