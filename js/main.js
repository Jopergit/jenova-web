const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navPanel = document.querySelector("[data-nav-panel]");
const quoteForm = document.querySelector("#quoteForm");
const formNote = document.querySelector("#formNote");
const year = document.querySelector("#year");

// Numero de contacto para llamadas. WhatsApp queda pendiente hasta tener un equipo con WhatsApp activo.
const CONTACT_PHONE = "+56972426256";

// Cambia este email si quieres usarlo en futuros enlaces mailto.
const CONTACT_EMAIL = "contacto.jenova@gmail.com";

const closeNav = () => {
  document.body.classList.remove("nav-open");
  navPanel?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
};

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

navToggle?.addEventListener("click", () => {
  const isOpen = navPanel.classList.toggle("is-open");
  document.body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navPanel?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNav);
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

if (year) {
  year.textContent = new Date().getFullYear();
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

quoteForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(quoteForm);
  const nombre = formData.get("nombre")?.toString().trim();
  const empresa = formData.get("empresa")?.toString().trim();
  const telefono = formData.get("telefono")?.toString().trim();
  const servicio = formData.get("servicio")?.toString().trim();
  const medidas = formData.get("medidas")?.toString().trim();
  const mensaje = formData.get("mensaje")?.toString().trim();

  if (!nombre || !telefono || !servicio) {
    formNote.textContent = "Completa nombre, telefono y tipo de servicio para enviar la solicitud.";
    return;
  }

  const lines = [
    "Hola JENOVA, quiero solicitar una cotizacion.",
    "",
    `Nombre: ${nombre}`,
    empresa ? `Empresa: ${empresa}` : "",
    `Telefono: ${telefono}`,
    `Servicio: ${servicio}`,
    medidas ? `Medidas aproximadas: ${medidas}` : "",
    mensaje ? `Mensaje: ${mensaje}` : "",
  ].filter(Boolean);

  const subject = encodeURIComponent("Solicitud de cotizacion JENOVA");
  const body = encodeURIComponent(lines.join("\n"));
  const mailUrl = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  formNote.textContent = "Abriendo tu correo con la solicitud preparada. Tambien puedes llamar al +56 9 7242 6256.";
  window.location.href = mailUrl;
});

document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
  link.setAttribute("href", `mailto:${CONTACT_EMAIL}`);
});
