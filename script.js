const roles = [
    "Java Developer",
    "Spring Boot Learner",
    "Web Developer",
    "SQL Developer",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function type() {
    const current = roles[roleIndex];

    if (!deleting) {
        typing.textContent = current.substring(0, charIndex);
        charIndex++;

        if (charIndex > current.length) {
            deleting = true;
            setTimeout(type, 1500);
            return;
        }
    } else {
        typing.textContent = current.substring(0, charIndex);
        charIndex--;

        if (charIndex < 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(type, deleting ? 60 : 120);
}

type();