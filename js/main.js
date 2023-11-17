//Declarando Variáveis
var btnContact = document.querySelector(".gsa-btn-contact");
var toggleModal = document.querySelectorAll(".gsa-toggle-modal");
var toggleMenu = document.querySelectorAll(".gsa-toggle-menu");
var menuMobile = document.querySelector(".gsa-menu-mob");
var btnMenuMobIcon = document.querySelector(".gsa-btn-menu-mob ion-icon");

//Page Preloader
window.addEventListener("load", function () {
    var pagePreloder = document.querySelector(".gsa-preloader");
    pagePreloder.classList.add("gsa-fade-out");

    setTimeout(function () {
        pagePreloder.style.display = "none";
    }, 2000);
});

//Abrindo e Fechando Informações de Contato
btnContact.addEventListener("click", function () {
    var boxContact = document.querySelector(".gsa-contact-info");
    boxContact.classList.toggle("gsa-is-open");
    this.classList.toggle("gsa-change-icon");
});

//Abrindo e Fechando o Menu Mobile
for (var m = 0; m < toggleMenu.length; m++) {
    toggleMenu[m].addEventListener("click", function () {
        var overlay = document.querySelector(".gsa-menu-overlay");
        overlay.classList.toggle("gsa-is-open");
        menuMobile.classList.toggle("gsa-menu-is-closed");
        menuMobile.classList.toggle("gsa-menu-is-open");

        var icon = btnMenuMobIcon.getAttribute("name");

        if (icon === "menu") {
            btnMenuMobIcon.setAttribute("name", "close");
        } else {
            btnMenuMobIcon.setAttribute("name", "menu");
        }
    });
}

//Abrindo e Fechando o Modal de Orcamento
for (var i = 0; i < toggleModal.length; i++) {
    toggleModal[i].addEventListener("click", function () {
        var modalOrcamento = document.querySelector("#gsa-modal-orcamento");
        var overlay = document.querySelector(".gsa-overlay");
        overlay.classList.toggle("gsa-is-open");
        modalOrcamento.classList.toggle("gsa-is-open");
        modalOrcamento.classList.toggle("gsa-slide-top-in");
    });
}

// Animando Elementos da Topbar
var triggerTopbar = document.querySelector(".gsa-trigger-topbar");
var topbar = document.querySelector(".gsa-topbar");
var logo = document.querySelector(".gsa-logo");
var waypoint = new Waypoint({
    element: triggerTopbar,
    handler: function () {
        topbar.classList.toggle("gsa-topbar-bg");
        logo.classList.toggle("gsa-logo-shorten");
        logo.classList.toggle("gsa-logo-big");
    },
    offset: "50px",
});
