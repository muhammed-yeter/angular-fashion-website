window.addEventListener("scroll", checkTop);
var width = window.innerWidth;

var currentPath = null;

// Go Top Element Kontrol
function checkTop() {
  var y = window.scrollY;
  const navbar = document.getElementById("navbar");
  if (currentPath === "/home") {
    if (y > (window.innerHeight * 95) / 100) {
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
    } else {
      document.documentElement.style.setProperty("--navbar-text", "#f7f5f3");
      navbar.style.setProperty("background-color", "transparent");
      navbar.style.setProperty("backdrop-filter", "none");
      document.documentElement.style.setProperty("--searchbar-text", "#dbd9d7");
      document.documentElement.style.setProperty(
        "--navbar-social-text",
        "#dadada"
      );
      navbar.style.setProperty("box-shadow", "none");
    }
  }
}

function goTop() {
  window.scrollTo(0, 0);
}
// End Go Top Element Kontrol

// Animasyonlar
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

function setAnims() {
  sr.reveal(".hero-content.first", {
    origin: "top",
    distance: "10px",
    viewFactor: 0.3,
  });
  sr.reveal(".outfit-card", {
    origin: "bottom",
    distance: "10px",
    interval: 100,
    viewFactor: 0.3,
  });
  sr.reveal(".animator:nth-child(odd) .popular-model-text", {
    origin: "right",
    distance: "30px",
    viewFactor: 0.8,
  });
  sr.reveal(".animator:nth-child(even) .popular-model-text", {
    origin: "left",
    distance: "30px",
    viewFactor: 0.8,
  });
  sr.reveal(".cat-card", {
    origin: "bottom",
    distance: "50px",
    interval: 150,
    viewFactor: 0,
  });
  sr.reveal(".product-card", {
    origin: "bottom",
    distance: "15px",
    interval: 50,
    viewFactor: 0.1,
  });
  sr.reveal(".product-detail-img", {
    origin: "bottom",
    distance: "10px",
    duration: 1000,
    easing: "ease-out",
    opacity: 0,
    viewFactor: 0,
  });
  sr.reveal(".product-details", {
    origin: "bottom",
    distance: "15px",
    interval: 150,
    viewFactor: 0,
  });
  sr.reveal(".comment", {
    origin: "bottom",
    distance: "15px",
    interval: 150,
    viewFactor: 0.2,
  });
  sr.reveal(".basket-item", {
    origin: "bottom",
    distance: "15px",
    interval: 150,
    viewFactor: 0.2,
  });
  sr.reveal(".total-price", {
    origin: "bottom",
    distance: "15px",
    interval: 150,
    viewFactor: 0.2,
  });
  sr.reveal(".payment", {
    origin: "bottom",
    distance: "15px",
    delay: 200,
    viewFactor: 0.1,
  });
}

window.addEventListener("load", setAnims())
navigation.addEventListener("navigate", () => {
  setTimeout(() => {
    setAnims();
    const socialLinks = document.querySelectorAll(".navbar-social i");
    currentPath = window.location.pathname;
    if (currentPath === "/home") {
      document.documentElement.style.setProperty("--navbar-text", "#f7f5f3");
      navbar.style.setProperty("background-color", "transparent");
      navbar.style.setProperty("backdrop-filter", "none");
      socialLinks.forEach((element) => {
        element.classList.remove("dark-social");
      });
      document.documentElement.style.setProperty("--searchbar-text", "#dbd9d7");
      document.documentElement.style.setProperty(
        "--navbar-social-text",
        "#dadada"
      );
      navbar.style.setProperty("box-shadow", "none");
    } else {
      document.documentElement.style.setProperty("--navbar-text", "#080a0c");
      navbar.style.setProperty("background-color", "#f7f5f350");
      navbar.style.setProperty("backdrop-filter", "blur(10px)");
      socialLinks.forEach((element) => {
        element.classList.add("dark-social");
      });
      navbar.style.setProperty("box-shadow", "0 0 15px #00000050", "important");
      document.documentElement.style.setProperty("--searchbar-text", "#242612");
      document.documentElement.style.setProperty("--navbar-text", "#080a0c");
      document.documentElement.style.setProperty(
        "--navbar-social-text",
        "#757575"
      );
    }
  }, 150);
});
