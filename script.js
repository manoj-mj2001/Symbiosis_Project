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
        Swal.fire({
          title: "Sent!",
          text: "Thanks for contacting us! :)",
          icon: "success",
          confirmButtonText: "Ok!",
          confirmButtonColor: "#22bb33",
        });
        document.getElementById("contactForm").reset();
      },
      () => {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong! :(",
          icon: "error",
          confirmButtonText: "Ok!",
          confirmButtonColor: "#bb2124",
        });
        document.getElementById("contactForm").reset();
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
