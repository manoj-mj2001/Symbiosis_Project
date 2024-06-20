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

    const customerserviceID = "mr.manoj@2001";
    const customertemplateID = "customertemplate@123";

    emailjs.sendForm(customerserviceID, customertemplateID, this).then(
      () => {
        alert("Sent!");
      },
      (err) => {
        alert(JSON.stringify(err));
      }
    );

    const ownerserviceID = "mr.manoj@2001";
    const ownertemplateID = "ownertemplate@123 ";

    emailjs.sendForm(ownerserviceID, ownertemplateID, this).then(
      () => {
        console.log("Sent!");
      },
      (err) => {
        console.log(JSON.stringify(err));
      }
    );
  });
