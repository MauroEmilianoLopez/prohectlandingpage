const defaultLang = localStorage.getItem("language") || "es";

const inputsLang = document.querySelectorAll("input[name='lang']");

inputsLang.forEach((lang) =>
  lang.addEventListener("change", (e) => {
    const { value } = e.target; // Captura el valor del input que selecionamos
    localStorage.setItem("language", value);
    renderTranslate(value);
  })
);

const renderTranslate = (lang) => {
  const file = `./translate/${lang}.json`;
  document.querySelector(`input[name='lang'][value="${lang}"]`).checked = true;
  fetch(file)
    .then((res) => res.json())
    .then((data) => {
      for (const { selector, content } of data) {
        document.querySelector(selector).innerText = content;
      }
    });
};

renderTranslate(defaultLang);
