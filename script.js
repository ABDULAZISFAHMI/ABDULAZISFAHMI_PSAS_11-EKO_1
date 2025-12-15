let cart = JSON.parse(localStorage.getItem("cart")) || [];

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let alamat = document.getElementById("alamat").value;
    let whatsapp = document.getElementById("whatsapp").value;
    let error = document.getElementById("error");

    // VALIDASI
    if(username === "" || password === "" || alamat === "" || whatsapp === ""){
        error.innerText = "Semua data wajib diisi!";
        return;
    }

    // SIMPAN DATA USER
    let user = {
        username: username,
        alamat: alamat,
        whatsapp: whatsapp
    };

    localStorage.setItem("user", JSON.stringify(user));

    // PINDAH KE HOME
    window.location.href = "home.html";
}

function addToCart(name, price) {
    cart.push({name, price});
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Barang ditambahkan ke keranjang");
}

// TAMPILKAN KERANJANG
document.addEventListener("DOMContentLoaded", () => {
    let cartDiv = document.getElementById("cart");
    if(cartDiv){
        cartDiv.innerHTML = "";
        cart.forEach((item, index) => {
            cartDiv.innerHTML += `<p>${index+1}. ${item.name} - Rp ${item.price}</p>`;
        });
    }
});
