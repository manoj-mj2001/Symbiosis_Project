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

function submit(event) {
  event.preventDefault();
  btn.value = "Sending...";

  var formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    subject: document.getElementById("subject").value,
  };

  const serviceID = "mr.manoj@2001";
  const templateID = "template@123";

  emailjs.send(serviceID, templateID, formData).then(() => {
    Swal.fire({
      title: "sent!",
      text: "Thanks for contacting us! We'll get back to you soon :)",
      icon: "success",
    })
      .then((responseAlert) => {
        if (responseAlert.isConfirmed) {
          document.getElementById("contactForm").submit();
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  });
}
