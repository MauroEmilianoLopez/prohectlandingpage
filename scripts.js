// Control del idioma
let isSpanish = true;

// Verificar el idioma almacenado
if (localStorage.getItem("language") === "en") {
  isSpanish = false;
  changeLanguageToEnglish();
} else {
  changeLanguageToSpanish();
}

// Cambiar idioma al presionar el botón
document
  .getElementById("language-toggle-btn")
  .addEventListener("click", function () {
    if (isSpanish) {
      changeLanguageToEnglish();
      localStorage.setItem("language", "en");
    } else {
      changeLanguageToSpanish();
      localStorage.setItem("language", "es");
    }

    // Alternar idioma
    isSpanish = !isSpanish;
  });

function changeLanguageToEnglish() {
  document.querySelector("#title").textContent = "Hello, I'm Mauro!";
  document.querySelector("#intro").textContent =
    "Junior Developer | Web Enthusiast";
  document.querySelector("#about-title").textContent = "Who am I?";
  document.querySelector("#about-description").textContent =
    "I'm a passionate web developer who loves creating innovative solutions. I enjoy learning new technologies and solving problems through programming.";
  document.querySelector("#skills-title").textContent = "Skills";
  document.querySelector("#skills-list").innerHTML = `
    <li>HTML, CSS, JavaScript</li>
    <li>Version control with Git</li>
    <li>Basic front-end and back-end development</li>
    <li>Knowledge of frameworks like React.js and Node.js</li>
    <li>Understanding of SQL and NoSQL databases</li>
    <li>Working with RESTful APIs</li>
    <li>Software testing and debugging</li>
  `;
  document.querySelector("#contact-title").textContent = "Contact Me";
  document.querySelector("#contact-description").textContent =
    "I'm available to collaborate on exciting projects. You can contact me through the following channels:";
  document.querySelector("#contact-phone").textContent =
    "Call my mobile: +5492664195054";
  document.querySelector("#contact-email").textContent =
    "Send an email: mauroemiliano2@gmail.com";
  document.querySelector("#contact-linkedin").textContent =
    "My LinkedIn profile";
  document.querySelector("#contact-github").textContent = "My GitHub profile";
  document.querySelector("footer p").textContent =
    "© 2024 Mauro | All rights reserved";
  document.querySelector("#language-toggle-btn").textContent =
    "Switch to Spanish";
}

function changeLanguageToSpanish() {
  document.querySelector("#title").textContent = "¡Hola, soy Mauro!";
  document.querySelector("#intro").textContent =
    "Programador Junior | Apasionado por la web";
  document.querySelector("#about-title").textContent = "¿Quién soy?";
  document.querySelector("#about-description").textContent =
    "Soy un programador web apasionado por la creación de soluciones innovadoras. Me encanta aprender nuevas tecnologías y resolver problemas a través de la programación.";
  document.querySelector("#skills-title").textContent = "Habilidades";
  document.querySelector("#skills-list").innerHTML = `
    <li>HTML, CSS, JavaScript</li>
    <li>Control de versiones con Git</li>
    <li>Desarrollo front-end y back-end básico</li>
    <li>Conocimiento en frameworks como React.js y Node.js</li>
    <li>Comprensión de bases de datos SQL y NoSQL</li>
    <li>Trabajo con APIs RESTful</li>
    <li>Pruebas de software y depuración</li>
  `;
  document.querySelector("#contact-title").textContent = "Contáctame";
  document.querySelector("#contact-description").textContent =
    "Estoy disponible para colaborar en proyectos emocionantes. Puedes contactarme a través de los siguientes medios:";
  document.querySelector("#contact-phone").textContent =
    "Llamar a mi celular: +5492664195054";
  document.querySelector("#contact-email").textContent =
    "Enviar un email: mauroemiliano2@gmail.com";
  document.querySelector("#contact-linkedin").textContent =
    "Mi perfil de LinkedIn";
  document.querySelector("#contact-github").textContent = "Mi perfil de GitHub";
  document.querySelector("footer p").textContent =
    "© 2024 Mauro | Todos los derechos reservados";
  document.querySelector("#language-toggle-btn").textContent =
    "Cambiar a Inglés";
}
