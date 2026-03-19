// Utilidades
const qs = (sel, el = document) => el.querySelector(sel);
const qsa = (sel, el = document) => [...el.querySelectorAll(sel)];

const STORAGE_KEY = "nf_bookings_v1";
const THEME_KEY = "nf_theme_v1";

function loadBookings() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []; }
  catch { return []; }
}

function saveBookings(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function formatPhoneBR(value) {
  // formata algo como 11999999999 -> (11) 99999-9999 (simplificado)
  const digits = (value || "").replace(/\D/g, "").slice(0, 11);
  const ddd = digits.slice(0, 2);
  const part1 = digits.length > 10 ? digits.slice(2, 7) : digits.slice(2, 6);
  const part2 = digits.length > 10 ? digits.slice(7, 11) : digits.slice(6, 10);

  if (!digits) return "";
  if (digits.length <= 2) return `(${ddd}`;
  if (digits.length <= 6) return `(${ddd}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${ddd}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${ddd}) ${part1}-${part2}`;
}

function setMinDateToday() {
  const input = qs("#date");
  if (!input) return;
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  input.min = `${yyyy}-${mm}-${dd}`;
}

function toastInCard(message, type = "info") {
  // simples: injeta um alert bootstrap dentro da seção agendar
  const host = qs("#agendar .container");
  if (!host) return;

  const wrap = document.createElement("div");
  wrap.className = "container position-fixed bottom-0 start-50 translate-middle-x pb-3";
  wrap.style.zIndex = 2000;

  const alert = document.createElement("div");
  alert.className = `alert alert-${type} shadow-lg border-0 rounded-4 mb-0`;
  alert.innerHTML = message;

  wrap.appendChild(alert);
  document.body.appendChild(wrap);

  setTimeout(() => wrap.remove(), 3200);
}

function renderBookings() {
  const list = qs("#savedBookings");
  const badge = qs("#countSaved");
  if (!list || !badge) return;

  const items = loadBookings();
  badge.textContent = String(items.length);
  list.innerHTML = "";

  if (items.length === 0) {
    const empty = document.createElement("div");
    empty.className = "card card-dark";
    empty.innerHTML = `
      <div class="card-body text-secondary">
        <i class="bi bi-calendar-x me-1"></i>
        Nenhum agendamento salvo ainda. Preencha o formulário ao lado.
      </div>
    `;
    list.appendChild(empty);
    return;
  }

  items
    .slice()
    .reverse()
    .forEach((b, idxFromEnd) => {
      const idx = items.length - 1 - idxFromEnd;

      const card = document.createElement("div");
      card.className = "card card-dark";
      card.innerHTML = `
        <div class="card-body">
          <div class="d-flex align-items-start justify-content-between gap-2">
            <div>
              <div class="fw-bold mb-1">${escapeHtml(b.service)} <span class="text-secondary">•</span> <span class="text-warning">${escapeHtml(b.time)}</span></div>
              <div class="text-secondary small mb-2">${escapeHtml(b.date)} • ${escapeHtml(b.barber)}</div>
              <div class="small">
                <span class="text-secondary">Cliente:</span> ${escapeHtml(b.name)}
                <span class="text-secondary">• Whats:</span> ${escapeHtml(b.whatsapp)}
              </div>
              ${b.notes ? `<div class="text-secondary small mt-2"><i class="bi bi-chat-left-text me-1"></i>${escapeHtml(b.notes)}</div>` : ""}
            </div>

            <button class="btn btn-sm btn-outline-light rounded-pill btnRemove" data-index="${idx}" type="button" title="Remover">
              <i class="bi bi-trash3"></i>
            </button>
          </div>
        </div>
      `;
      list.appendChild(card);
    });

  qsa(".btnRemove").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = Number(btn.dataset.index);
      const items = loadBookings();
      items.splice(index, 1);
      saveBookings(items);
      renderBookings();
      toastInCard("Agendamento removido.", "secondary");
    });
  });
}

function escapeHtml(str) {
  return String(str ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function openSuccessModal(booking) {
  const modalEl = qs("#modalSuccess");
  const details = qs("#successDetails");
  if (!modalEl || !details) return;

  details.innerHTML = `
    <div class="small text-secondary">Cliente</div>
    <div class="fw-bold mb-2">${escapeHtml(booking.name)} • ${escapeHtml(booking.whatsapp)}</div>

    <div class="small text-secondary">Serviço</div>
    <div class="fw-bold mb-2">${escapeHtml(booking.service)}</div>

    <div class="small text-secondary">Data e horário</div>
    <div class="fw-bold mb-2">${escapeHtml(booking.date)} • ${escapeHtml(booking.time)}</div>

    <div class="small text-secondary">Barbeiro</div>
    <div class="fw-bold">${escapeHtml(booking.barber)}</div>

    ${booking.notes ? `<hr class="border-secondary my-3"><div class="small text-secondary">Observações</div><div>${escapeHtml(booking.notes)}</div>` : ""}
  `;

  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.show();
}

function initTheme() {
  const btn = qs("#btnTheme");
  if (!btn) return;

  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "light") document.body.classList.add("theme-light");

  btn.addEventListener("click", () => {
    document.body.classList.toggle("theme-light");
    localStorage.setItem(THEME_KEY, document.body.classList.contains("theme-light") ? "light" : "dark");
  });
}

function initCountUp() {
  const nums = qsa("[data-count]");
  if (nums.length === 0) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count);
      const isFloat = String(el.dataset.count).includes(".");
      const duration = 900;
      const start = performance.now();

      function tick(now) {
        const p = Math.min(1, (now - start) / duration);
        const value = target * p;
        el.textContent = isFloat ? value.toFixed(1) : Math.round(value).toString();
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.35 });

  nums.forEach(n => obs.observe(n));
}

function initPickServiceButtons() {
  qsa(".btnPickService").forEach(btn => {
    btn.addEventListener("click", () => {
      const service = btn.dataset.service || "";
      const price = btn.dataset.price || "";
      const sel = qs("#service");
      if (sel) sel.value = service;

      toastInCard(`Serviço selecionado: <b>${escapeHtml(service)}</b> (R$ ${escapeHtml(price)})`, "warning");

      // rola para agendamento
      const target = qs("#agendar");
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });
}

function initQuickSlots() {
  qsa(".slot").forEach(btn => {
    btn.addEventListener("click", () => {
      const slot = btn.dataset.slot || "";
      // apenas preenche o campo "time" com um horário aproximado se houver
      // ex: "Hoje • 18:20"
      const match = slot.match(/(\d{2}:\d{2})/);
      const time = match?.[1];
      if (time) {
        const timeInput = qs("#time");
        if (timeInput) timeInput.value = time;
      }
      toastInCard(`Horário pré-selecionado: <b>${escapeHtml(slot)}</b>`, "secondary");

      const target = qs("#agendar");
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });
}

function initBookingForm() {
  const form = qs("#bookingForm");
  if (!form) return;

  const whatsapp = qs("#whatsapp");
  whatsapp?.addEventListener("input", () => {
    whatsapp.value = formatPhoneBR(whatsapp.value);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();

    // validação básica bootstrap + extra
    const valid = form.checkValidity();
    if (!valid) {
      form.classList.add("was-validated");
      toastInCard("Confira os campos do formulário.", "danger");
      return;
    }

    const booking = {
      id: crypto?.randomUUID?.() ?? String(Date.now()),
      name: qs("#name")?.value.trim(),
      whatsapp: qs("#whatsapp")?.value.trim(),
      service: qs("#service")?.value,
      date: qs("#date")?.value,
      time: qs("#time")?.value,
      barber: qs("#barber")?.value,
      notes: qs("#notes")?.value.trim()
    };

    const items = loadBookings();

    // bloqueio simples de conflito: mesmo barbeiro + mesma data + mesma hora
    const conflict = items.some(x => x.barber === booking.barber && x.date === booking.date && x.time === booking.time);
    if (conflict) {
      toastInCard("Esse horário já está ocupado para esse barbeiro. Escolha outro.", "danger");
      return;
    }

    items.push(booking);
    saveBookings(items);
    renderBookings();

    form.reset();
    form.classList.remove("was-validated");

    openSuccessModal(booking);
  });

  // Limpar
  const btnClear = qs("#btnClear");
  btnClear?.addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEY);
    renderBookings();
    toastInCard("Agendamentos salvos foram apagados.", "secondary");
  });
}

function initYear() {
  const y = qs("#year");
  if (y) y.textContent = String(new Date().getFullYear());
}

function closeNavbarOnClickMobile() {
  // fecha menu no mobile ao clicar num link
  const nav = qs("#navlinks");
  if (!nav) return;

  qsa("a.nav-link", nav).forEach(a => {
    a.addEventListener("click", () => {
      const isShown = nav.classList.contains("show");
      if (isShown) bootstrap.Collapse.getOrCreateInstance(nav).hide();
    });
  });
}

// Start
document.addEventListener("DOMContentLoaded", () => {
  initYear();
  initTheme();
  initCountUp();
  initPickServiceButtons();
  initQuickSlots();
  setMinDateToday();
  initBookingForm();
  renderBookings();
  closeNavbarOnClickMobile();
});
