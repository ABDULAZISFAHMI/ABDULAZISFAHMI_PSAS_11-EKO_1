let cart = JSON.parse(localStorage.getItem("cart")) || [];

function login() {
    window.location.href = "home.html";
}

function addToCart(name, price) {
    cart.push({name, price});
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Barang ditambahkan ke keranjang");
}

document.addEventListener("DOMContentLoaded", () => {
    let cartDiv = document.getElementById("cart");
    if(cartDiv){
        cart.forEach(item => {
            cartDiv.innerHTML += `<p>${item.name} - Rp ${item.price}</p>`;
        });
    }
});
