const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");
const navigationLinks = document.querySelectorAll(".navigation a");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");
});

navigationLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href");

        if (targetId.startsWith("#")) {
            e.preventDefault();
            const targetSection = document.getElementById(targetId.substring(1));

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - navbar.offsetHeight,
                    behavior: "smooth",
                });
            }
        }

        navbar.classList.remove("change");
    });
});
