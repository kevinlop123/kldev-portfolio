(() => {
  "use strict";

  const cfg = window.KLDEV || {};
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  /* ---------- Spanish copy (English lives in the HTML) ---------- */
  const ES = {
    skip: "Saltar al contenido",
    "nav.work": "Trabajos", "nav.services": "Servicios", "nav.process": "Proceso", "nav.about": "Sobre mí",
    "nav.cta": "Empezar un proyecto", "nav.menu": "Menú",
    "hero.l1": "Sitios web y herramientas", "hero.l2": "para quienes trabajan", "hero.l3": "con sus manos.",
    "hero.lead": "Soy Kevin López, desarrollador web en Florida. Hago sitios web rápidos y claros, y software a la medida para plomeros, handymen, empresas de limpieza y otros negocios de servicios, en inglés y en español.",
    "hero.cta1": "Empezar un proyecto", "hero.cta2": "Ver los trabajos", "hero.status": "Disponible para nuevos proyectos",
    "hero.alt": "Página de inicio de leehomeservices.com: una foto de cocina detrás del titular Quality Work You Can Count On y un botón Get a Quote.",
    "hero.alt2": "El mismo sitio en un teléfono.",
    "hero.caption": "Sitio en vivo hecho para Lee Home Services",
    "work.title": "Trabajos seleccionados",
    "work.sub": "Dos proyectos, ambos hechos para un negocio de servicios real que está abierto hoy.",
    "work.lee.alt": "Página de inicio de Lee Home Services en una laptop.",
    "work.lee.kind": "Sitio web y panel de fotos",
    "tile.view": "Ver proyecto",
    "tile.lee.desc": "Un sitio rápido y un panel privado de fotos para un negocio de reparaciones del hogar en el Área de la Bahía.",
    "tile.app.desc": "Una aplicación web que lleva un trabajo de la cotización al pago, con las horas del equipo incluidas.",
    "tile.cta": "Tu proyecto puede ser el siguiente.",
    "pj.back": "Todos los proyectos", "pj.next": "Siguiente proyecto",
    "pj.m.client": "Cliente", "pj.m.role": "Mi papel", "pj.m.stack": "Tecnología", "pj.m.live": "Sitio en vivo", "pj.m.status": "Estado",
    "pl.title": "Lee Home Services | KLdev",
    "pl.desc": "Caso de estudio: un sitio rápido y pensado primero para el celular, con panel privado de fotos, hecho por KLdev para Lee Home Services, un negocio de reparaciones del hogar en el Área de la Bahía.",
    "pl.lead": "Un sitio rápido y pensado primero para el celular, para un negocio de reparaciones del hogar en el Área de la Bahía. Convierte recomendaciones de Yelp y búsquedas de Google en solicitudes de cotización, y el dueño sube fotos de sus proyectos desde el teléfono con un panel privado.",
    "pl.client": "Lee Home Services, reparaciones del hogar en el Área de la Bahía",
    "pl.role": "Diseño, desarrollo y puesta en línea",
    "pl.stack": "HTML, CSS y JavaScript sobre Cloudflare Workers, con D1 y R2",
    "pl.h1": "El objetivo",
    "pl.p1": "Lee consigue la mayor parte de su trabajo con recomendaciones y Yelp. El sitio tenía que verse confiable en un teléfono en pocos segundos y hacer que pedir una cotización fuera un solo toque.",
    "pl.h2": "Qué construí",
    "pl.f1": "Páginas de servicios de plomería, electricidad y remodelación, cada una con su galería de fotos.",
    "pl.f2": "Un caso de estudio de antes y después de la remodelación de una casa completa.",
    "pl.f3": "Un formulario de cotización que llega al correo del dueño, con una ruta de respaldo si la primera falla.",
    "pl.f4": "Reseñas de Yelp en la página, porque ahí es donde sus clientes ya confían en él.",
    "pl.f5": "Botones de llamar y mandar texto siempre a la mano, en cualquier tamaño de pantalla.",
    "pl.f6": "Datos para búsqueda local (Schema.org) y etiquetas para compartir el sitio.",
    "pl.f7": "Un panel privado donde Lee sube y ordena fotos de sus proyectos desde cualquier dispositivo, protegido con un código que llega por correo.",
    "pl.f8": "Reconstruido alrededor del logo nuevo del cliente y su paleta naranja y gris carbón.",
    "pl.h3": "Cómo funciona por dentro",
    "pl.p3": "El sitio corre en Cloudflare Workers, con los datos de las fotos en D1 y las imágenes en R2. El código vive en GitHub, y cada cambio a la rama principal se publica solo.",
    "pa.title": "App para negocios de servicios | KLdev",
    "pa.desc": "Caso de estudio: una aplicación web de KLdev que lleva un negocio de servicios de la cotización al pago, con control de horas del equipo incluido.",
    "pa.lead": "Un solo lugar para llevar un trabajo desde la cotización hasta el pago. El dueño envía cotizaciones como enlace, el cliente firma desde su teléfono, el equipo marca entrada y salida, y esas horas reales alimentan las ganancias y pérdidas.",
    "pa.client": "Producto propio; Lee Home Services es el primer cliente",
    "pa.role": "Producto, diseño y desarrollo",
    "pa.stack": "Cloudflare Workers y D1, instalable en el teléfono, con pruebas de punta a punta, de interfaz y de inicio de sesión",
    "pa.status": "En desarrollo con su primer cliente",
    "pa.h1": "El problema",
    "pa.p1": "Un negocio de reparaciones del hogar funciona con llamadas y mensajes: las cotizaciones en un lugar, la agenda en la cabeza de alguien, las horas en papel. Así cuesta ver qué trabajos realmente dejaron ganancia.",
    "pa.h2": "Cómo avanza un trabajo",
    "pa.s1": "Cotización", "pa.s1d": "Todo trabajo empieza como una cotización sin fecha. El dueño la envía como enlace y el cliente la firma desde su teléfono.",
    "pa.s2": "Agenda", "pa.s2d": "La fecha se acuerda cuando el cliente acepta, con una ventana de llegada. Solo entonces se asigna al equipo, y el cliente recibe un mensaje con quién llega y cuándo.",
    "pa.s3": "Trabajo", "pa.s3d": "El equipo solo marca entrada y salida. La ubicación se toma en ese toque y el dueño confirma que están en la zona correcta. Solo el dueño decide cuándo un trabajo terminó.",
    "pa.s4": "Cierre y pago", "pa.s4d": "Las horas alimentan las ganancias y pérdidas. Cada semana el dueño cierra el periodo y cada trabajador aprueba sus horas. Las facturas salen como enlace y se marcan pagadas con tarjeta, Zelle o cheque.",
    "pa.h3": "Qué cubre",
    "pa.f1": "Cotizaciones y facturas en PDF, con el logo y los colores de cada empresa.",
    "pa.f2": "Un espacio y usuarios separados para cada empresa.",
    "pa.f3": "Calendario y trabajos repetidos.",
    "pa.f4": "Fotos adjuntas a las cotizaciones.",
    "pa.f5": "Direcciones de clientes confirmadas en un mapa.",
    "pa.f6": "Pagos con tarjeta mediante Stripe, por ahora en modo de prueba.",
    "pa.f7": "Inglés y español, e instalable en el teléfono.",
    "work.lee.visit": "Visitar leehomeservices.com",
    "work.app.kind": "Aplicación web a la medida", "work.app.title": "App para negocios de servicios",
    "ui.quote": "Cotización", "ui.accepted": "Aceptada", "ui.l1": "Cambio de llave de cocina", "ui.l2": "Llaves de paso, 2", "ui.total": "Total",
    "ui.signed": "Firmada por el cliente desde un teléfono", "ui.today": "Hoy", "ui.hours": "Horas reales: 6.5",
    "ui.j1": "Arreglar fuga del fregadero", "ui.j2": "Instalar ventilador de techo", "ui.sched": "Agendado", "ui.sent": "Cotización enviada",
    "ui.omw": "En camino", "ui.note": "Ilustración con datos de ejemplo",
    "svc.title": "Lo que puedo construir para ti",
    "svc.sub": "Elige lo que te sirva. Tus elecciones se vuelven el borrador del proyecto, y después de una llamada inicial gratis lo convierto en una propuesta por escrito.",
    "svc.legend": "Servicios",
    "svc.i1": "Sitio web para tu negocio", "svc.i1d": "Diseñado alrededor de los trabajos que quieres conseguir, y pensado primero para el celular.",
    "svc.i2": "Rediseño de sitio web", "svc.i2d": "Conservar lo que funciona, cambiar lo que no, y pasar a un hosting más rápido.",
    "svc.i3": "Formularios de cotización y contacto", "svc.i3d": "Las solicitudes llegan a tu correo, y el cliente recibe una confirmación.",
    "svc.i4": "Portafolio de fotos con panel", "svc.i4d": "Sube y ordena fotos de tus proyectos desde el teléfono, sin necesitar un programador.",
    "svc.i5": "Búsqueda local", "svc.i5d": "Perfil de Google Business, datos estructurados y enlaces de reseñas para que tus vecinos te encuentren.",
    "svc.i6": "Aplicación web a la medida", "svc.i6d": "Cotizaciones, agenda, equipo o facturas, hechos según cómo ya funciona tu negocio.",
    "svc.i7": "Plan de mantenimiento", "svc.i7d": "Hosting, actualizaciones, cambios pequeños y respaldos después del lanzamiento.",
    "svc.brief": "Tu borrador",
    "svc.empty": "Todavía no elegiste nada. Escoge un servicio o describe el trabajo con tus palabras más abajo.",
    "svc.send": "Continuar con este borrador",
    "proc.title": "Cómo avanza un proyecto",
    "proc.s1": "Llamada inicial", "proc.s1d": "Gratis. Hablamos de tus trabajos, tus clientes y lo que hoy no funciona.",
    "proc.s2": "Propuesta por escrito", "proc.s2d": "Alcance, tiempos y precio en lenguaje claro, antes de empezar a trabajar.",
    "proc.s3": "Construcción con vista previa", "proc.s3d": "Sigues un enlace de vista previa mientras toma forma y das tus comentarios en el camino.",
    "proc.s4": "Lanzamiento y entrega", "proc.s4d": "Dominio, hosting y correo conectados, una explicación corta, y todo queda a tu nombre.",
    "about.title": "Un solo desarrollador, línea directa.",
    "about.p1": "KLdev soy yo, Kevin López. Empecé haciendo un sitio para el negocio de reparaciones de mi hermano, y eso me enseñó lo que necesitan los negocios de servicios: páginas que cargan rápido en el celular, un formulario de cotización que de verdad te llega, y herramientas que no vienen con manual.",
    "about.p2": "Trabajo en inglés y en español, y yo mismo contesto los mensajes.",
    "about.dt1": "Ubicación", "about.d1": "Florida, trabajo remoto",
    "about.dt2": "Idiomas", "about.d2": "Inglés y español",
    "about.dt3": "Ideal para", "about.d3": "Plomería, electricidad, remodelación, limpieza, jardinería y otros oficios",
    "ct.title": "Cuéntame de tu proyecto.", "ct.sub": "Con unas pocas líneas basta. Te respondo con los siguientes pasos.",
    "ct.call": "Llamar", "ct.text": "Texto",
    "ct.picked": "Servicios en tu borrador",
    "ct.name": "Tu nombre", "ct.contact": "Correo o teléfono", "ct.msg": "Sobre el proyecto",
    "ct.e.name": "Escribe tu nombre para saber a quién responder.",
    "ct.e.contact": "Escribe un correo o un teléfono para poder responderte.",
    "ct.e.msg": "Describe el trabajo en una frase, o elige un servicio arriba.",
    "ct.send": "Enviar mensaje",
    "foot.loc": "Florida, EE. UU.", "foot.tag": "Diseño web y desarrollo de aplicaciones.", "foot.top": "Volver arriba",
    "meta.title": "KLdev | Sitios web y software para negocios de servicios",
    "meta.desc": "KLdev es Kevin López, desarrollador web en Florida que hace sitios rápidos y software a la medida para plomeros, handymen, empresas de limpieza y otros negocios de servicios. Inglés y español."
  };

  /* Messages built in script (both languages) */
  const MSG = {
    en: {
      langLabel: "Cambiar a español", langBtn: "ES",
      sending: "Sending…",
      sent: "Message sent. I'll reply with next steps.",
      failed: "Couldn't send that. Text or call me instead.",
      sms: "Opening your messaging app. If nothing opens, text or call",
      mail: "Opening your email app. If nothing opens, write to",
      hi: "Hi Kevin, I'm", reach: "Reach me at", services: "I'm interested in", project: "About the project"
    },
    es: {
      langLabel: "Switch to English", langBtn: "EN",
      sending: "Enviando…",
      sent: "Mensaje enviado. Te respondo con los siguientes pasos.",
      failed: "No se pudo enviar. Mejor mándame un texto o llámame.",
      sms: "Abriendo tu app de mensajes. Si no se abre nada, envía un texto o llama al",
      mail: "Abriendo tu app de correo. Si no se abre nada, escribe a",
      hi: "Hola Kevin, soy", reach: "Mi contacto", services: "Me interesa", project: "Sobre el proyecto"
    }
  };

  let lang = "en";

  /* ---------- Language ---------- */
  const store = {
    get() { try { return localStorage.getItem("kldev-lang"); } catch { return null; } },
    set(v) { try { localStorage.setItem("kldev-lang", v); } catch { /* storage unavailable */ } }
  };

  const titleKey = $("title").dataset.i18nKey || "meta.title";
  const descEl = $('meta[name="description"]');
  const descKey = descEl.dataset.i18nKey || "meta.desc";
  const meta = { title: document.title, desc: descEl.getAttribute("content") };

  function applyLang(next) {
    lang = next;
    document.documentElement.lang = lang;

    $$("[data-i18n]").forEach((el) => {
      if (el.dataset.en === undefined) el.dataset.en = el.textContent;
      el.textContent = lang === "es" ? (ES[el.dataset.i18n] ?? el.dataset.en) : el.dataset.en;
    });

    $$("[data-i18n-attr]").forEach((el) => {
      el.dataset.i18nAttr.split(",").forEach((pair) => {
        const [attr, key] = pair.split(":");
        const stash = `data-en-${attr}`;
        if (!el.hasAttribute(stash)) el.setAttribute(stash, el.getAttribute(attr) ?? "");
        el.setAttribute(attr, lang === "es" ? (ES[key] ?? el.getAttribute(stash)) : el.getAttribute(stash));
      });
    });

    document.title = lang === "es" ? ES[titleKey] : meta.title;
    descEl.setAttribute("content", lang === "es" ? ES[descKey] : meta.desc);
    $('meta[property="og:title"]').setAttribute("content", document.title);

    const btn = $("#lang");
    btn.textContent = MSG[lang].langBtn;
    btn.setAttribute("aria-label", MSG[lang].langLabel);
    renderSelection();
  }

  /* ---------- Services estimate ---------- */
  const boxes = $$('input[name="svc"]');

  function selectedLabels() {
    return boxes.filter((b) => b.checked).map((b) => $("strong", b.closest("label")).textContent.trim());
  }

  function fillList(list, labels) {
    list.replaceChildren(...labels.map((text) => {
      const li = document.createElement("li");
      li.textContent = text;
      return li;
    }));
  }

  function renderSelection() {
    if (!$("#sheet-list")) return;
    const labels = selectedLabels();
    const has = labels.length > 0;
    $("#sheet-empty").hidden = has;
    $("#sheet-list").hidden = !has;
    $("#picked").hidden = !has;
    fillList($("#sheet-list"), labels);
    fillList($("#picked-list"), labels);
  }

  boxes.forEach((b) => b.addEventListener("change", renderSelection));

  /* ---------- Navigation ---------- */
  const nav = $("#nav");
  const menuBtn = $("#menu-btn");

  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
  }
  menuBtn.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) { setMenu(false); menuBtn.focus(); }
  });
  window.matchMedia("(min-width: 821px)").addEventListener("change", (e) => { if (e.matches) setMenu(false); });

  $("#lang").addEventListener("click", () => {
    const next = lang === "en" ? "es" : "en";
    store.set(next);
    applyLang(next);
  });

  /* ---------- Contact form (home page only) ---------- */
  const form = $("#contact-form");
  if (form) initForm(form);

  function initForm(form) {
    const status = $("#status");
    const sendBtn = $("#send");
    const fields = {
      name: { input: $("#f-name"), error: $("#e-name") },
      contact: { input: $("#f-contact"), error: $("#e-contact") },
      message: { input: $("#f-msg"), error: $("#e-msg") }
    };

    function setStatus(text, kind = "") {
      status.textContent = text;
      status.className = `form-status ${kind}`.trim();
    }

    function validate() {
      const picked = selectedLabels();
      const checks = {
        name: fields.name.input.value.trim().length > 0,
        contact: fields.contact.input.value.trim().length > 0,
        message: fields.message.input.value.trim().length > 0 || picked.length > 0
      };
      let first = null;
      Object.entries(checks).forEach(([key, ok]) => {
        const { input, error } = fields[key];
        input.setAttribute("aria-invalid", String(!ok));
        if (!ok) input.setAttribute("aria-describedby", error.id); else input.removeAttribute("aria-describedby");
        error.hidden = ok;
        if (!ok && !first) first = input;
      });
      if (first) first.focus();
      return !first;
    }

    Object.values(fields).forEach(({ input, error }) => {
      input.addEventListener("input", () => {
        if (input.getAttribute("aria-invalid") === "true" && input.value.trim()) {
          input.setAttribute("aria-invalid", "false");
          input.removeAttribute("aria-describedby");
          error.hidden = true;
        }
      });
    });

    function composeText(data) {
      const m = MSG[lang];
      const parts = [`${m.hi} ${data.name}.`];
      if (data.services.length) parts.push(`${m.services}: ${data.services.join(", ")}.`);
      if (data.message) parts.push(data.message);
      parts.push(`${m.reach}: ${data.contact}`);
      return parts.join("\n\n");
    }

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      setStatus("");
      if (form.elements.company.value) { setStatus(MSG[lang].sent, "ok"); return; }
      if (!validate()) return;

      const data = {
        name: fields.name.input.value.trim(),
        contact: fields.contact.input.value.trim(),
        message: fields.message.input.value.trim(),
        services: selectedLabels(),
        language: lang
      };
      const phone = $("#text").getAttribute("href").replace("sms:", "");
      const phoneShown = $("#text b").textContent;

      if (cfg.endpoint) {
        sendBtn.disabled = true;
        setStatus(MSG[lang].sending);
        try {
          const res = await fetch(cfg.endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify(data)
          });
          if (!res.ok) throw new Error(String(res.status));
          form.reset();
          boxes.forEach((b) => { b.checked = false; });
          renderSelection();
          setStatus(MSG[lang].sent, "ok");
        } catch {
          setStatus(`${MSG[lang].failed} ${phoneShown}`, "bad");
        } finally {
          sendBtn.disabled = false;
        }
        return;
      }

      const body = composeText(data);
      if (cfg.email) {
        setStatus(`${MSG[lang].mail} ${cfg.email}.`, "ok");
        window.location.href = `mailto:${cfg.email}?subject=${encodeURIComponent("KLdev")}&body=${encodeURIComponent(body)}`;
      } else {
        setStatus(`${MSG[lang].sms} ${phoneShown}.`, "ok");
        window.location.href = `sms:${phone}?&body=${encodeURIComponent(body)}`;
      }
    });

  }

  /* ---------- Init ---------- */
  $("#year").textContent = String(new Date().getFullYear());
  const saved = store.get();
  const preferred = saved === "es" || saved === "en" ? saved : (navigator.language || "").toLowerCase().startsWith("es") ? "es" : "en";
  if (preferred === "es") applyLang("es"); else renderSelection();
})();
