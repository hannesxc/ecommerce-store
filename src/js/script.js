// Header adjustment for <768px
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".nav-menu");
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        // add hamburger icon
        toggle.innerHTML = `<i class="fa fa-bars"></i>`;
    }
    else {
        menu.classList.add("active");
        // add X icon
        toggle.innerHTML = `<i class="fa fa-times"></i>`;
    }
}
toggle.addEventListener("click", toggleMenu, false);

// Account Page, hide and show elements when, and if required.
var logForm = document.getElementById("loginForm");
var regForm = document.getElementById("registerForm");
var remLog = document.getElementById("removeLog");
var remReg = document.getElementById("removeReg");

function login() {
    remLog.style.display = "none";
    remReg.style.display = "block";
    logForm.style.display = "flex";
    regForm.style.display = "none";
}

function register() {
    remReg.style.display = "none";
    remLog.style.display = "block";
    regForm.style.display = "flex";
    logForm.style.display = "none";
}

// Preview images for the same product slider
var prodImg = document.getElementById("prodImg");
var smallImg = document.getElementsByClassName("small-img");
smallImg[0].onclick = function () {
    prodImg.src = smallImg[0].src;
}
smallImg[1].onclick = function () {
    prodImg.src = smallImg[1].src;
}
smallImg[2].onclick = function () {
    prodImg.src = smallImg[2].src;
}
smallImg[3].onclick = function () {
    prodImg.src = smallImg[3].src;
}
