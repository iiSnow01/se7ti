const Se7ti = {
  currentLang: "fr",
  init() {
    this.currentLang = detectLanguage();
    setLanguage(this.currentLang);
    this.bindLanguageSwitcher();
    this.applyTranslations();
    this.initAnimations();
    this.renderContent();
    this.bindSearch();
  },
  bindLanguageSwitcher() {
    const select = document.querySelector("#language-select");
    if (!select) return;
    select.value = this.currentLang;
    select.addEventListener("change", (event) => {
      this.currentLang = event.target.value;
      setLanguage(this.currentLang);
      this.applyTranslations();
      this.renderContent();
    });
  },
  renderContent() {
    this.renderSymptoms();
    this.renderFirstAid();
    this.renderHotlines();
    const search = document.querySelector("#symptom-search");
    if (search) this.filterSymptoms(search.value);
  },
  applyTranslations() {
    const lang = this.currentLang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.textContent = t(key, lang);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      el.setAttribute("placeholder", t(key, lang));
    });
  },
  initAnimations() {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || typeof IntersectionObserver !== "function") return;
    const revealItems = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    document.body.classList.add("animate-reveals");
    revealItems.forEach((item) => observer.observe(item));
    document.addEventListener("focusin", (event) => {
      const section = event.target.closest(".reveal");
      if (section) {
        section.classList.add("is-visible");
        observer.unobserve(section);
      }
    });
  },
  renderSymptoms() {
    const list = document.querySelector("#symptoms-list");
    if (!list) return;
    const lang = this.currentLang;
    list.innerHTML = "";
    Se7tiData.symptoms.forEach((symptom) => {
      const card = document.createElement("article");
      card.className = "card";
      card.dataset.severity = symptom.severity;
      card.innerHTML = `
        <div class="card-header">
          <h3>${symptom.title[lang]}</h3>
          <span class="badge ${Se7tiPro.badgeClass(symptom.severity)}">${Se7tiPro.severityLabel(symptom.severity, lang)}</span>
        </div>
        <p class="muted">${symptom.desc[lang]}</p>
        <div class="card-grid">
          <div>
            <h4>${Se7tiPro.sectionTitle("causes", lang)}</h4>
            <p>${symptom.causes[lang]}</p>
          </div>
          <div>
            <h4>${Se7tiPro.sectionTitle("effets", lang)}</h4>
            <p>${symptom.effets[lang]}</p>
          </div>
          <div>
            <h4>${Se7tiPro.sectionTitle("alert", lang)}</h4>
            <p>${symptom.alertSigns[lang]}</p>
          </div>
          <div>
            <h4>${Se7tiPro.sectionTitle("home", lang)}</h4>
            <p>${symptom.homeTips[lang]}</p>
          </div>
          <div>
            <h4>${Se7tiPro.sectionTitle("avoid", lang)}</h4>
            <p>${symptom.avoid[lang]}</p>
          </div>
          <div>
            <h4>${Se7tiPro.sectionTitle("where", lang)}</h4>
            <p>${symptom.whereToGo[lang]}</p>
          </div>
          <div>
            <h4>${Se7tiPro.sectionTitle("when", lang)}</h4>
            <p>${symptom.whenToConsult[lang]}</p>
          </div>
        </div>
      `;
      list.appendChild(card);
    });
  },
  renderFirstAid() {
    const container = document.querySelector("#first-aid-list");
    if (!container) return;
    const lang = this.currentLang;
    container.innerHTML = "";
    Se7tiData.firstAid.forEach((item) => {
      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `
        <h3>${item.title[lang]}</h3>
        <p>${item.steps[lang]}</p>
        <div class="alert">${item.caution[lang]}</div>
      `;
      container.appendChild(card);
    });
  },
  renderHotlines() {
    const container = document.querySelector("#hotlines");
    if (!container) return;
    const { hotlines } = Se7tiData.config;
    const lang = this.currentLang;
    container.innerHTML = `
      <div class="hotline">
        <strong>${t("hotlineSamu", lang)}</strong>
        <p>${hotlines.samu}</p>
      </div>
      <div class="hotline">
        <strong>${t("hotlineAdvice", lang)}</strong>
        <p>${hotlines.medicalAdvice}</p>
      </div>
      <div class="hotline">
        <strong>${t("hotlineFire", lang)}</strong>
        <p>${hotlines.fire}</p>
      </div>
      <div class="hotline">
        <strong>${t("hotlinePolice", lang)}</strong>
        <p>${hotlines.police}</p>
      </div>
    `;
  },
  bindSearch() {
    const input = document.querySelector("#symptom-search");
    if (!input) return;
    input.addEventListener("input", (event) => this.filterSymptoms(event.target.value));
  },
  filterSymptoms(value) {
    const query = value.trim().toLowerCase();
    document.querySelectorAll("#symptoms-list .card").forEach((card) => {
      card.hidden = !card.textContent.toLowerCase().includes(query);
    });
  }
};

document.addEventListener("DOMContentLoaded", () => Se7ti.init());
