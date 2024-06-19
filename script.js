let navbar = document.querySelector(".header .navbar");
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.add("active");
};
document.querySelector("#nav-close").onclick = () => {
  navbar.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};
window.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

const btn = document.getElementById("contactBtn");
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    btn.value = "Sending...";

    const serviceID = "mr.manoj@2001";
    const templateID = "template@123";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        alert("Sent!");
      },
      (err) => {
        alert(JSON.stringify(err));
      }
    );
  });
