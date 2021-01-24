function activeCart() {
    let shopCart = document.getElementById("shop-cart");
    shopCart.classList.toggle("is-active");
    let dropdownMenu = document.getElementsByClassName("dropdown-menu");
    dropdownMenu[0].classList.toggle("show");
}

var count = 0;
var length = document.getElementsByClassName("item").length;
document.getElementById("item-number").innerHTML = length;
var next = document.getElementById("arrow-down");
var prev = document.getElementById("arrow-up");
next.onclick = function() {
    var shown = document.getElementById("slider").offsetHeight / 138;
    if(count < (length - shown)) {
    count++;
    document.getElementById("dropdown-items").style.top = count * -135 + "px";
    }
}
prev.onclick = function() {
    if(count > 0) {
    count--;
    document.getElementById("dropdown-items").style.top = count * -135 + "px";
    }
}
