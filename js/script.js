document.documentElement.classList.add("js");

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
        const isOpen = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", String(!isOpen));
        menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
        navLinks.classList.toggle("is-open", !isOpen);
    });

    navLinks.addEventListener("click", (event) => {
        if (event.target instanceof HTMLAnchorElement) {
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation");
            navLinks.classList.remove("is-open");
        }
    });
}

document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealElements = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window && !reducedMotion) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
    }, { threshold: 0.12 });

    revealElements.forEach((element) => revealObserver.observe(element));
} else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
}

if (!reducedMotion) {
    document.querySelectorAll(".typing-text").forEach((element) => {
        const roles = (element.getAttribute("data-roles") || "").split(",").map((role) => role.trim()).filter(Boolean);
        if (!roles.length) return;

        let roleIndex = 0;
        let characterIndex = 0;
        let deleting = false;

        const typeNext = () => {
            const role = roles[roleIndex];
            characterIndex += deleting ? -1 : 1;
            element.textContent = role.slice(0, characterIndex);

            if (!deleting && characterIndex === role.length) {
                deleting = true;
                window.setTimeout(typeNext, 1350);
                return;
            }
            if (deleting && characterIndex === 0) {
                deleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }
            window.setTimeout(typeNext, deleting ? 38 : 72);
        };

        window.setTimeout(typeNext, 500);
    });
} else {
    document.querySelectorAll(".typing-text").forEach((element) => {
        const firstRole = element.getAttribute("data-roles")?.split(",")[0]?.trim();
        if (firstRole) element.textContent = firstRole;
    });
}

const contactForm = document.querySelector("[data-contact-form]");
if (contactForm instanceof HTMLFormElement) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!contactForm.reportValidity()) return;

        const formData = new FormData(contactForm);
        const name = String(formData.get("name") || "").trim();
        const email = String(formData.get("email") || "").trim();
        const message = String(formData.get("message") || "").trim();
        const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
        const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
        window.location.href = `mailto:malawi.anthonyphiri@gmail.com?subject=${subject}&body=${body}`;
    });
}
