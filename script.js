const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.innerHTML = navMenu.classList.contains('active') ? '✖' : '&#9776;';
});
const navLinks = document.querySelectorAll('.nav-menu li a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.innerHTML = '&#9776;'; // back to hamburger icon
  });
});



(function () {
    emailjs.init("8x6R1eQ5fdqGmjPAV");
  })();

  const form = document.getElementById("contact-form");
  const toast = document.getElementById("toast-popup");
  const button = form.querySelector("button");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    button.disabled = true;
    const originalText = button.textContent;
    button.textContent = "Sending...";

    emailjs.sendForm("service_4apbh5q", "template_o40re1b", form)
      .then(() => {
        showToast("Message sent!");
        form.reset();
      })
      .catch((err) => {
        console.error(err);
        showToast("Failed to send. Try again.", true);
      })
      .finally(() => {
        button.disabled = false;
        button.textContent = originalText;
      });
  });

  function showToast(message, isError = false) {
    toast.textContent = message;
    toast.className = `toast ${isError ? "error" : "success"}`;
    toast.style.display = "block";

    setTimeout(() => {
      toast.style.opacity = "1";
    }, 10); // allow transition

    setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => {
        toast.style.display = "none";
        toast.className = "";
      }, 300); // wait for fade-out to finish
    }, 3000);
  }