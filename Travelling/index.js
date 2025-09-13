 function toggleDarkMode() {
        const body = document.getElementById("body");
        const navbar = document.getElementById("navbar");
        const footer = document.getElementById("footer");
        body.classList.toggle("dark-mode");
        navbar.classList.toggle("navbar-light");
        navbar.classList.toggle("navbar-dark");

        footer.classList.toggle("bg-light");
        footer.classList.toggle("bg-black");
      }