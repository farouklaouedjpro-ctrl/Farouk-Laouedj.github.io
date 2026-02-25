(function () {
  "use strict";

  var data = window.PORTFOLIO_DATA || null;
  if (!data || !data.basics) {
    console.warn("PORTFOLIO_DATA manquant: vérifie data.js");
    return;
  }

  var $ = function (id) {
    return document.getElementById(id);
  };

  function setText(id, value) {
    var el = $(id);
    if (!el) return;
    el.textContent = value == null ? "" : String(value);
  }

  function setHref(id, value) {
    var el = $(id);
    if (!el) return;
    el.setAttribute("href", value || "#");
  }

  function safeUrl(url) {
    if (!url) return null;
    try {
      var u = new URL(url, window.location.href);
      if (
        u.protocol === "http:" ||
        u.protocol === "https:" ||
        u.protocol === "mailto:" ||
        u.protocol === "tel:" ||
        u.protocol === "file:"
      )
        return u.href;
      return null;
    } catch (e) {
      return null;
    }
  }

  function renderSocial() {
    var root = $("socialLinks");
    if (!root) return;
    root.innerHTML = "";
    (data.social || []).forEach(function (item) {
      var href = safeUrl(item.href);
      if (!href) return;

      var li = document.createElement("li");
      var a = document.createElement("a");
      a.className = "linkPill";
      a.href = href;
      a.target = href.startsWith("mailto:") ? "_self" : "_blank";
      if (a.target === "_blank") a.rel = "noreferrer";
      a.textContent = item.label || "Lien";
      li.appendChild(a);
      root.appendChild(li);
    });
  }

  function renderAbout() {
    var root = $("aboutContent");
    if (!root) return;
    root.innerHTML = "";

    var paras = (data.about && data.about.paragraphs) || [];
    paras.forEach(function (p) {
      var el = document.createElement("p");
      // Intent: allow simple emphasis (**text**) without needing HTML editing
      el.innerHTML = String(p)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      root.appendChild(el);
    });
  }

  function renderSkills() {
    var root = $("skillsChips");
    if (!root) return;
    root.innerHTML = "";
    (data.skills || []).forEach(function (label) {
      var span = document.createElement("span");
      span.className = "chip";
      span.textContent = String(label);
      root.appendChild(span);
    });
  }

  function renderProjects() {
    var root = $("projectsGrid");
    if (!root) return;
    root.innerHTML = "";

    (data.projects || []).forEach(function (p) {
      var card = document.createElement("article");
      card.className = "card";

      var top = document.createElement("div");
      top.className = "card__top";

      var title = document.createElement("h3");
      title.className = "card__title";
      title.textContent = p.title || "Projet";

      top.appendChild(title);

      if (p.status) {
        var badge = document.createElement("span");
        badge.className = "badge";
        badge.textContent = String(p.status);
        top.appendChild(badge);
      }

      var desc = document.createElement("p");
      desc.className = "card__desc";
      desc.textContent = p.description || "";

      var meta = document.createElement("div");
      meta.className = "card__meta";

      var stack = document.createElement("div");
      stack.className = "card__stack";
      (p.stack || []).slice(0, 6).forEach(function (t) {
        var tag = document.createElement("span");
        tag.className = "tag";
        tag.textContent = String(t);
        stack.appendChild(tag);
      });

      var links = document.createElement("div");
      links.className = "card__links";
      (p.links || []).slice(0, 2).forEach(function (l) {
        var href = safeUrl(l.href);
        if (!href) return;
        var a = document.createElement("a");
        a.className = "link";
        a.href = href;
        a.target = "_blank";
        a.rel = "noreferrer";
        a.textContent = l.label || "Lien";
        links.appendChild(a);
      });

      meta.appendChild(stack);
      meta.appendChild(links);

      card.appendChild(top);
      card.appendChild(desc);
      card.appendChild(meta);

      root.appendChild(card);
    });
  }

  function setupMobileNav() {
    var toggle = document.querySelector(".nav__toggle");
    var menu = $("navMenu");
    if (!toggle || !menu) return;

    function setOpen(open) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      menu.classList.toggle("is-open", open);
    }

    toggle.addEventListener("click", function () {
      var isOpen = toggle.getAttribute("aria-expanded") === "true";
      setOpen(!isOpen);
    });

    document.addEventListener("click", function (e) {
      if (!menu.classList.contains("is-open")) return;
      if (menu.contains(e.target) || toggle.contains(e.target)) return;
      setOpen(false);
    });

    Array.prototype.forEach.call(document.querySelectorAll("[data-nav]"), function (a) {
      a.addEventListener("click", function () {
        setOpen(false);
      });
    });
  }

  function setupCopyEmail() {
    var btn = $("copyEmailBtn");
    var status = $("copyStatus");
    if (!btn || !status) return;

    var email = (data.basics && data.basics.email) || "";
    btn.addEventListener("click", async function () {
      status.textContent = "";
      if (!email) {
        status.textContent = "Aucun email configuré dans data.js";
        return;
      }
      try {
        await navigator.clipboard.writeText(email);
        status.textContent = "Email copié.";
      } catch (e) {
        status.textContent = "Impossible de copier (permissions navigateur).";
      }
    });
  }

  function setupRevealOnScroll() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(
        function (entries, obs) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("reveal--visible");
            obs.unobserve(entry.target);
          });
        },
        {
          root: null,
          rootMargin: "0px 0px -15% 0px",
          threshold: 0.15,
        }
      );

      items.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      items.forEach(function (el) {
        el.classList.add("reveal--visible");
      });
    }
  }

  function hydrateBasics() {
    setText("brandName", data.basics.name || "Portfolio");
    setText("heroKicker", data.basics.kicker || "");
    setText("heroName", data.basics.name || "");
    setText("heroRole", data.basics.role || "");
    setText("heroLead", data.basics.lead || "");

    setText("metaLocation", data.basics.location || "");
    setText("metaSpecialty", data.basics.specialty || "");
    setText("metaAvailability", data.basics.availability || "");
    setText("metaOneLiner", data.basics.oneLiner || "");

    setText("aboutSubtitle", data.about && data.about.subtitle ? data.about.subtitle : "");

    var email = data.basics.email || "";
    setHref("ctaEmail", email ? "mailto:" + email : "#");
    setHref("contactEmailBtn", email ? "mailto:" + email : "#");

    var cvUrl = safeUrl(data.basics.cvUrl);
    if (cvUrl) setHref("ctaCv", cvUrl);
    else {
      var cta = $("ctaCv");
      if (cta) cta.style.display = "none";
    }

    setText("footerName", data.basics.name || "");
    setText("footerYear", String(new Date().getFullYear()));

    if (data.basics.name) document.title = data.basics.name + " — Portfolio";
  }

  hydrateBasics();
  renderSocial();
  renderAbout();
  renderSkills();
  renderProjects();
  setupMobileNav();
  setupCopyEmail();
  setupRevealOnScroll();
})();

