window.addEventListener("load", function () {
    document.documentElement.style.setProperty("--navbar-text", "#080a0c");
    navbar.style.setProperty("background-color", "#f7f5f350");
    navbar.style.setProperty("backdrop-filter", "blur(10px)");
    navbar.style.setProperty("box-shadow", "0 0 15px #00000050", "important");
    document.documentElement.style.setProperty("--searchbar-text", "#242612");
    document.documentElement.style.setProperty("--navbar-text", "#080a0c");
    document.documentElement.style.setProperty(
        "--navbar-social-text",
        "#757575"
    );
})

AOS.init({
    once: true, // animasyon bir kez oynasın
    duration: 600, // animasyon süresi (ms)
    easing: "ease-out",
});

//   distance: mesafe (default '20px')
//   duration: animasyon süresi (ms)
//   reset: true verilirse tekrarlanır
//   interval: birden fazla element varsa aralarında delay (ms)
const sr = ScrollReveal({
    distance: "10px",
    duration: 600,
    easing: "ease-out",
    reset: false,
});

window.addEventListener("load", () => {
    sr.reveal(".product-card", {
        origin: "bottom",
        distance: "15px",
        viewFactor: 0.3,
    });
});
