(function () {
  "use strict";
  var root = document.documentElement;
  root.classList.add("js");

  // Menu mobile
  var burger = document.querySelector(".burger");
  var menu = document.getElementById("menu");
  function setMenu(open) {
    root.classList.toggle("menu-open", open);
    if (burger) {
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    }
    if (menu) menu.setAttribute("aria-hidden", String(!open));
  }
  if (burger && menu) {
    burger.addEventListener("click", function () {
      setMenu(!root.classList.contains("menu-open"));
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setMenu(false);
    });
  }

  // Revelação ao entrar na tela
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("is-in"); });
  }

  // WhatsApp flutuante aparece depois do hero
  var wa = document.querySelector(".wa-float");
  var hero = document.querySelector(".hero");
  if (wa && hero && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      wa.classList.toggle("is-visible", !entries[0].isIntersecting);
    }, { threshold: 0.15 }).observe(hero);
  } else if (wa) {
    wa.classList.add("is-visible");
  }

  // Ano no rodapé
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Evento de conversão: clique no WhatsApp (usado pelo GTM/GA4 quando instalado)
  document.addEventListener("click", function (e) {
    var a = e.target.closest('a[href*="wa.me"]');
    if (!a) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "whatsapp_click",
      page: location.pathname,
      cta: a.getAttribute("data-cta") || "whatsapp"
    });
  });
})();
