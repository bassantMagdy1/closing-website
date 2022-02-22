

const createNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML= `
    <div class="nav">
        <img src="img/dark-logo.png" class="brand-logo">
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="search brand, product">
                <button class="search-btn">search</button>
            </div>
            <div class='log_img_list'>
                <a href="#" ><img src="img/user.png" alt="" id='log_img'></a>
                <ul id='log_list_items' class='d'>
                    <li><a href='login.html'>Login </a></li>
                    <li><a href='signUp.html'>Sign Up</a></li>
                    <li id="logout"><a href='#'>Log Out</a></li>
                </ul>
            </div>
                <a href="cart.html"><img src="img/cart.png" alt=""></a>
                <input type="color" id="choose_color" value="#ff0000"> 
            </div>
        </div>

    <ul class="links-container">
        <li class="link-item"><a href="Home.html" class="link">home</a></li>
        <li class="link-item"><a href="women_page.html" class="link">women</a></li>
        <li class="link-item"><a href="men_page.html" class="link">men</a></li>
        <li class="link-item"><a href="Kids.html" class="link">kids</a></li>
        <li class="link-item"><a href="Accessories.html" class="link">accessories</a></li>
    </ul>

    <div class="up" >
        <a href="#up"><i class="fas fa-arrow-circle-up"></i></a>
    </div>

    `;
}



createNav();
//logout

document.getElementById("logout").onclick= function(){
            localStorage.removeItem("Email");
            localStorage.removeItem("Password");
            localStorage.removeItem("UserName");
            alert("Thanks");
}



document.getElementById("choose_color").oninput = function () {
    var user_color = document.getElementById("choose_color").value;
    var background_color = document.getElementById("body");

    background_color.style.backgroundColor = user_color ;
    localStorage.setItem ("Color" , user_color );
}

window.onload = function (){
    document.getElementById("body").style.backgroundColor = localStorage.getItem("Color");
}

document.getElementById("log_img").onclick = function (){
    document.getElementById("log_list_items").style.display = "inline-block" ;
}

document.getElementById("log_img").ondblclick = function (){
    document.getElementById("log_list_items").style.display = "none";
}
