(function () {
  "use strict";

  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  if (gsap && ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  function smoothstep(e0, e1, x) {
    const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
    return t * t * (3 - 2 * t);
  }

  /* 1. Enter Observer (module 59304) */
  function initEnterObserver() {
    const docEl = document.documentElement;
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll("[data-enter]:not([data-entered])").forEach(el => el.setAttribute("data-entered", ""));
      return;
    }
    const io = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-entered", "");
          io.unobserve(entry.target);
        }
      }
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.01 });
    const observeAll = () => document.querySelectorAll("[data-enter]:not([data-entered])").forEach(el => io.observe(el));
    observeAll();
    docEl.classList.add("enter-ready");
    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });
  }

  /* 2. Global Floating Navbar (module 49409) */
  function initNavbar() {
    const nav = document.querySelector("nav.nav");
    if (!nav) return;
    const hero = document.querySelector("[data-hero]");
    const heroLight = document.querySelector("[data-hero-light]");
    const menuBtn = nav.querySelector(".nav-menu-btn");
    const panel = document.getElementById("nav-panel");
    const isHeroPage = !!hero;

    let onLight = !isHeroPage;
    let menuOpen = false;
    let tucked = false;

    function syncClasses() {
      nav.classList.toggle("on-light", onLight || menuOpen);
      if (tucked && !menuOpen) {
        nav.setAttribute("data-tucked", "true");
      } else {
        nav.removeAttribute("data-tucked");
      }
      if (menuBtn) {
        menuBtn.setAttribute("aria-label", menuOpen ? "Close menu" : "Open menu");
        menuBtn.setAttribute("aria-expanded", String(menuOpen));
      }
      if (panel) {
        panel.setAttribute("data-open", String(menuOpen));
        if (menuOpen) panel.removeAttribute("inert");
        else panel.setAttribute("inert", "");
      }
    }

    if (isHeroPage) {
      let ticking = false;
      const checkTone = () => {
        ticking = false;
        const bottom = nav.getBoundingClientRect().bottom;
        const threshold = heroLight
          ? heroLight.getBoundingClientRect().top - 8
          : hero.getBoundingClientRect().top + 0.8 * hero.offsetHeight - nav.offsetHeight / 2;
        onLight = threshold < bottom;
        syncClasses();
      };
      const onScrollTone = () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(checkTone);
        }
      };
      checkTone();
      window.addEventListener("scroll", onScrollTone, { passive: true });
      window.addEventListener("resize", onScrollTone);
    }

    const reducedMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lastY = window.scrollY;
    let tuckTicking = false;
    const checkTuck = () => {
      tuckTicking = false;
      const y = window.scrollY;
      const dy = y - lastY;
      if (Math.abs(dy) < 6) return;
      lastY = y;
      const anchor = heroLight ?? hero;
      const minTop = anchor ? anchor.getBoundingClientRect().bottom + window.scrollY : 240;
      tucked = !(reducedMq.matches || menuOpen || nav.querySelector(":focus-visible") || y < minTop) && dy > 0;
      syncClasses();
    };
    window.addEventListener("scroll", () => {
      if (!tuckTicking) {
        tuckTicking = true;
        requestAnimationFrame(checkTuck);
      }
    }, { passive: true });
    reducedMq.addEventListener("change", () => {
      if (reducedMq.matches) {
        tucked = false;
        syncClasses();
      }
    });

    nav.addEventListener("focusin", () => {
      tucked = false;
      syncClasses();
    });
    nav.addEventListener("focusout", e => {
      if (menuOpen && e.relatedTarget && !nav.contains(e.relatedTarget)) {
        menuOpen = false;
        syncClasses();
      }
    });

    if (menuBtn) {
      menuBtn.addEventListener("click", () => {
        menuOpen = !menuOpen;
        syncClasses();
      });
    }
    if (panel) {
      panel.querySelectorAll("a").forEach(a => {
        a.addEventListener("click", () => {
          menuOpen = false;
          syncClasses();
        });
      });
    }
    window.addEventListener("pointerdown", e => {
      if (menuOpen && !nav.contains(e.target)) {
        menuOpen = false;
        syncClasses();
      }
    });
    window.addEventListener("keydown", e => {
      if (menuOpen && e.key === "Escape") {
        menuOpen = false;
        syncClasses();
        menuBtn?.focus();
      }
    });
  }

  /* 3. Copy Buttons (modules 96919 & 59911) */
  const COPY_ICON_SVG = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2.5"></rect><path d="M5 15V6a2 2 0 0 1 2-2h9"></path></svg>';
  const CHECK_ICON_SVG = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>';

  async function writeClipboard(text) {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch {
      /* fallback below */
    }
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
      return true;
    } catch {
      return false;
    }
  }

  function initCopyButtons() {
    document.addEventListener("click", async e => {
      const installBtn = e.target.closest("button.install");
      if (installBtn) {
        const label = installBtn.getAttribute("aria-label") || "";
        const cmd = label.startsWith("Copy: ")
          ? label.slice(6)
          : (installBtn.querySelector("code")?.textContent || "").replace(/^\$\s*/, "");
        if (!cmd) return;
        await writeClipboard(cmd);
        installBtn.setAttribute("data-copied", "true");
        const sr = installBtn.querySelector('.sr-only[aria-live="polite"]');
        if (sr) sr.textContent = "Copied to clipboard";
        clearTimeout(installBtn.__copyTimer);
        installBtn.__copyTimer = setTimeout(() => {
          installBtn.setAttribute("data-copied", "false");
          if (sr) sr.textContent = "";
        }, 1600);
        return;
      }

      const codeBtn = e.target.closest("button.code-copy");
      if (codeBtn) {
        const box = codeBtn.closest(".code");
        const code = box?.querySelector("pre code")?.textContent || "";
        if (!code) return;
        await writeClipboard(code);
        const sr = box?.querySelector('.sr-only[aria-live="polite"]');
        codeBtn.innerHTML = CHECK_ICON_SVG + '<span aria-hidden="true">Copied</span>';
        if (sr) sr.textContent = "Copied to clipboard";
        clearTimeout(codeBtn.__copyTimer);
        codeBtn.__copyTimer = setTimeout(() => {
          codeBtn.innerHTML = COPY_ICON_SVG + '<span aria-hidden="true">Copy</span>';
          if (sr) sr.textContent = "";
        }, 1600);
      }
    });
  }

  /* 4. Hero Scroll & Showcase Tabs (modules 34762 & 55887) */
  function initHero() {
    const hero = document.querySelector(".hero");
    if (!hero) return;

    // Sleep observer
    let inView = true;
    const syncSleep = () => hero.toggleAttribute("data-asleep", !inView || document.hidden);
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(([entry]) => {
        inView = entry.isIntersecting;
        syncSleep();
      });
      io.observe(hero);
    }
    document.addEventListener("visibilitychange", syncSleep);

    // Hero scroll scrub
    const workScene = hero.querySelector(".work-scene");
    const workFrame = hero.querySelector(".work-frame");
    const workTabs = hero.querySelector(".work .tabs");
    const heroCopy = hero.querySelector(".hero-copy");
    if (gsap && ScrollTrigger && workScene && workFrame && workTabs && heroCopy) {
      const copyParts = [
        hero.querySelector(".hero-pill"),
        hero.querySelector(".hero-title"),
        hero.querySelector(".hero-copy > p"),
        hero.querySelector(".hero-actions"),
      ];
      const heroGlow = hero.querySelector(".hero-glow");
      const wideCfg = { frame: { y: 40, rotateX: 26, scale: 0.84 }, tabs: 22, drift: [-140, -96, -64, -40], glow: 4, fade: 0.2 };
      const narrowCfg = { frame: { y: 18, rotateX: 12, scale: 0.94 }, tabs: 10, drift: [-56, -40, -28, -18], glow: 6, fade: 0.45 };

      gsap.matchMedia().add({
        wide: "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        narrow: "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
      }, ctx => {
        const cfg = ctx.conditions?.wide ? wideCfg : narrowCfg;
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            start: 0,
            end: () => {
              let top = 0;
              for (let el = workScene; el; el = el.offsetParent) top += el.offsetTop;
              return Math.max(320, top - 0.2 * window.innerHeight);
            },
            scrub: 0.5,
            invalidateOnRefresh: true,
          },
        });
        tl.fromTo(workFrame, cfg.frame, { y: 0, rotateX: 0, scale: 1 }, 0)
          .fromTo(workTabs, { y: cfg.tabs }, { y: 0 }, 0)
          .fromTo(heroCopy, { opacity: 1 }, { opacity: cfg.fade, ease: "power1.in" }, 0);
        copyParts.forEach((el, idx) => {
          if (el) tl.fromTo(el, { y: 0 }, { y: cfg.drift[idx] }, 0);
        });
        if (heroGlow) {
          tl.fromTo(heroGlow, { yPercent: 0, scale: 1 }, { yPercent: cfg.glow, scale: 1.06 }, 0);
        }
      });
    }

    // Showcase Tabs
    const tablist = hero.querySelector('.work .tabs[role="tablist"]');
    const chipInner = tablist?.querySelector(".tabs-chip > span");
    const stage = document.getElementById("work-stage");
    if (!tablist || !stage) return;
    const tabs = [...tablist.querySelectorAll('[role="tab"]')];
    const shots = [...stage.querySelectorAll(".work-shot")];
    const alts = [
      "A coffee roastery page built with Taste Skill, its storefront drawn as the hero",
      "A techno night page built with Taste Skill: the night's name and date over a foggy lighthouse, with a coloured index of the sections",
      "An architecture studio page built with Taste Skill: the words Timber houses split around a photograph of a pine forest",
      "A contract review tool page built with Taste Skill: scanned contract pages with yellow and pink clause notes above the line Marks the risk, cites the page",
    ];

    let state = { active: 0, previous: null, dir: "next", turned: false };

    function updateChip() {
      const tab = tabs[state.active];
      if (!tab || !chipInner) return;
      const w = tablist.scrollWidth;
      const h = tablist.clientHeight;
      chipInner.style.width = `${w}px`;
      const right = w - tab.offsetLeft - tab.offsetWidth;
      const bottom = h - tab.offsetTop - tab.offsetHeight;
      chipInner.style.clipPath = `inset(${tab.offsetTop}px ${right}px ${bottom}px ${tab.offsetLeft}px round 10px)`;
      tablist.dataset.chip = "";
    }

    function selectTab(next) {
      if (next === state.active || next < 0 || next >= tabs.length) return;
      state = {
        active: next,
        previous: state.active,
        dir: next > state.active ? "next" : "back",
        turned: true,
      };
      tabs.forEach((tab, i) => {
        const isCurrent = i === state.active;
        tab.setAttribute("aria-selected", String(isCurrent));
        tab.tabIndex = isCurrent ? 0 : -1;
      });
      stage.setAttribute("aria-labelledby", `work-tab-${state.active}`);
      stage.setAttribute("data-dir", state.dir);
      shots.forEach((shot, i) => {
        const s = i === state.active ? "on" : i === state.previous ? "off" : "idle";
        shot.setAttribute("data-state", s);
        if (state.turned) shot.setAttribute("data-turned", "true");
        const img = shot.querySelector("img");
        if (img) {
          img.alt = i === state.active ? (alts[i] || "") : "";
          img.setAttribute("aria-hidden", String(i !== state.active));
        }
      });
      updateChip();
    }

    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => selectTab(i));
    });
    tablist.addEventListener("keydown", e => {
      const map = {
        ArrowRight: state.active + 1,
        ArrowLeft: state.active - 1,
        Home: 0,
        End: tabs.length - 1,
      };
      if (!(e.key in map)) return;
      e.preventDefault();
      const next = (map[e.key] + tabs.length) % tabs.length;
      selectTab(next);
      tabs[next]?.focus();
    });

    updateChip();
    if ("ResizeObserver" in window) {
      new ResizeObserver(updateChip).observe(tablist);
    }
  }

  /* 5. Directions Drum Controller & DrumDeal (module 74297) */
  function initDirections() {
    const el = document.getElementById("directions");
    if (!el || !gsap || !ScrollTrigger) return;

    // Deal 3 random directions on client load just like DrumDeal
    const items = [...el.querySelectorAll(".drum-item")];
    const dealList = el.querySelector(".drum-deal");
    if (items.length && dealList) {
      const indices = Array.from({ length: items.length }, (_, i) => i);
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }
      const hand = indices.slice(0, 3).sort((a, b) => a - b);
      const cards = [...dealList.querySelectorAll(".drum-deal-card")];
      hand.forEach((dirIdx, cardIdx) => {
        const card = cards[cardIdx];
        const item = items[dirIdx];
        if (!card || !item) return;
        const name = item.querySelector(".drum-name")?.textContent?.trim() || item.childNodes[0]?.textContent?.trim() || "";
        const meta = item.querySelector(".drum-meta")?.textContent?.trim() || "";
        const noEl = card.querySelector(".drum-deal-no");
        const nameEl = card.querySelector(".drum-deal-name");
        const metaEl = card.querySelector(".drum-deal-meta");
        if (noEl) noEl.textContent = String(dirIdx + 1);
        if (nameEl) nameEl.textContent = name;
        if (metaEl) metaEl.textContent = meta;
      });
    }

    if (window.matchMedia("(pointer: fine)").matches && !el.classList.contains("is-live")) {
      try {
        const opts = JSON.parse(el.dataset.options || "{}");
        if (opts.detent === undefined) {
          el.dataset.options = JSON.stringify({ ...opts, detent: true });
        }
      } catch {
        /* ignore */
      }
    }

    const btn = el.querySelector(".drum-button");
    btn?.addEventListener("focus", () => {
      if (!el.classList.contains("is-live")) return;
      const st = ScrollTrigger.getAll().find(s => s.trigger === el && s.vars.start === "top top" && s.vars.end === "bottom bottom");
      if (!st || st.progress >= 0.94) return;
      const target = st.end - 1;
      const lenis = window.Stage?.lenis;
      if (lenis) lenis.scrollTo(target, { immediate: true, force: true });
      else window.scrollTo({ top: target, behavior: "instant" });
    });

    gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
      const win = el.querySelector(".drum-window");
      const glow = el.querySelector(".drum-glow");
      const rules = el.querySelectorAll(".drum-rule");
      const pLeft = el.querySelector(".drum-pointer--left");
      const pRight = el.querySelector(".drum-pointer--right");
      const drum = el.querySelector(".drum");
      const view = el.querySelector(".drum-view");
      const stage = el.querySelector(".scene-stage");
      if (!win || !glow || !pLeft || !pRight || !drum || !view || !stage) return;

      const propNum = name => parseFloat(el.style.getPropertyValue(name)) || 0;

      gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: { trigger: el, start: "top 70%", end: "top 10%", scrub: true },
      })
        .fromTo(rules, { scaleX: 0 }, { scaleX: 1, duration: 1, ease: "power2.out" }, 0)
        .fromTo(win, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4 }, 0);

      let stageH = 0;
      const clipState = { v: 1 };
      const updateClip = () => {
        if (!el.classList.contains("is-live") || clipState.v >= 1) {
          if (view.style.clipPath) view.style.clipPath = "";
          return;
        }
        const y = propNum("--drum-y");
        const fs = propNum("--drum-fs");
        if (!y || !fs || !stageH) return;
        const k = 1 - (1 - clipState.v) * (1 - clipState.v);
        const top = (1 - k) * Math.max(0, y - 0.6 * fs);
        const bot = (1 - k) * Math.max(0, stageH - y - 0.6 * fs);
        view.style.clipPath = `inset(${top.toFixed(1)}px 0px ${bot.toFixed(1)}px 0px)`;
      };

      gsap.fromTo(clipState, { v: 0 }, {
        v: 1,
        ease: "none",
        onUpdate: updateClip,
        scrollTrigger: {
          trigger: el,
          start: "top 25%",
          end: "top top",
          scrub: true,
          onRefresh: () => {
            stageH = stage.clientHeight;
            updateClip();
          },
        },
      });

      let prevGlowKey = "";
      let prevPtrKey = "";
      const tick = () => {
        const turn = parseFloat(drum.style.getPropertyValue("--drum-turn")) || 0;
        const step = parseFloat(el.style.getPropertyValue("--drum-step")) || 0;
        if (!step) return;
        const r = smoothstep(0, 0.07, parseFloat(el.style.getPropertyValue("--p")) || 0);
        const idx = turn / step;
        const d = 1 - smoothstep(0.04, 0.42, Math.abs(idx - Math.round(idx)));
        const op = ((0.3 + 0.7 * r) * (0.55 + 0.45 * d)).toFixed(3);
        const sx = (0.8 + 0.2 * r) * (0.9 + 0.1 * d);
        const sy = (0.42 + 0.58 * r) * (0.72 + 0.28 * d);
        const gKey = `${op}|${sx.toFixed(3)}|${sy.toFixed(3)}`;
        if (gKey !== prevGlowKey) {
          prevGlowKey = gKey;
          glow.style.opacity = op;
          glow.style.transform = `scale(${sx.toFixed(4)}, ${sy.toFixed(4)})`;
        }
        const offset = ((1 - d) * 10).toFixed(1);
        if (offset !== prevPtrKey) {
          prevPtrKey = offset;
          pLeft.style.transform = `translate3d(-${offset}px, 0, 0)`;
          pRight.style.transform = `translate3d(${offset}px, 0, 0)`;
        }
      };

      const activeSt = ScrollTrigger.create({
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        onToggle: self => {
          if (self.isActive && el.classList.contains("is-live")) gsap.ticker.add(tick);
          else gsap.ticker.remove(tick);
        },
      });

      const onStageReady = () => {
        stageH = stage.clientHeight;
        updateClip();
        if (activeSt.isActive && el.classList.contains("is-live")) gsap.ticker.add(tick);
      };
      window.addEventListener("stage:ready", onStageReady);
      if (el.classList.contains("is-live")) onStageReady();

      const dealCards = gsap.utils.toArray(".drum-deal-card", el);
      const rots = [-5, 2, 6];
      const dealTween = dealCards.length
        ? gsap.fromTo(dealCards, {
            opacity: 0,
            y: -22,
            scale: 0.94,
            rotation: i => rots[i % 3],
          }, {
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "expo.out",
            paused: true,
          })
        : null;
      let dealOpen = false;
      el.addEventListener("drum:close", e => {
        const on = !!e.detail?.on;
        if (dealTween && on !== dealOpen) {
          dealOpen = on;
          if (on) dealTween.timeScale(1).play();
          else dealTween.timeScale(1.8).reverse();
        }
      });
      if (dealTween && el.classList.contains("is-live") && propNum("--p") >= 0.912) {
        dealOpen = true;
        dealTween.progress(1);
      }
    });
  }

  /* 6. Core Capabilities Features Stack (module 22163) */
  function initFeatures() {
    const section = document.getElementById("how-it-works");
    if (!section || !gsap || !ScrollTrigger) return;

    const stories = {
      pictures: q => {
        const [qText] = q(".fs-q-text");
        const len = qText?.textContent?.length ?? 20;
        const stepEase = `steps(${len})`;
        const caret = q(".fs-caret");
        return gsap.timeline({ paused: true, defaults: { ease: "expo.out" } })
          .fromTo(qText, { clipPath: "inset(0% 100% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.75, ease: stepEase }, 0)
          .fromTo(caret, { x: 0, opacity: 1 }, { x: () => qText?.offsetWidth ?? 0, duration: 0.75, ease: stepEase }, 0)
          .to(caret, { opacity: 0, duration: 0.05, ease: "none" }, 0.92)
          .to(caret, { opacity: 1, duration: 0.05, ease: "none" }, 1.12)
          .to(caret, { opacity: 0, duration: 0.2, ease: "none" }, 1.4)
          .fromTo(q(".fs-progress"), { scaleX: 0, opacity: 1 }, { scaleX: 1, duration: 0.5, ease: "power2.inOut" }, 0.82)
          .to(q(".fs-progress"), { opacity: 0, duration: 0.3, ease: "none" }, 1.3)
          .fromTo(q(".fs-row"), { y: -16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75, stagger: 0.17 }, 1.22)
          .fromTo(q(".fs-thumb"), { clipPath: "inset(0% 0% 100% 0% round 7px)" }, { clipPath: "inset(0% 0% 0% 0% round 7px)", duration: 0.85, stagger: 0.17 }, 1.27)
          .fromTo(q(".fs-thumb img"), { scale: 1.35 }, { scale: 1, duration: 1.2, stagger: 0.17 }, 1.27)
          .fromTo(q(".fs-chip"), { scale: 1.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.42, ease: "power4.out", stagger: 0.17 }, 1.66)
          .fromTo(q(".fs-ring"), { scale: 0.95, opacity: 0.85 }, { scale: 1.35, opacity: 0, duration: 0.6, ease: "power2.out", stagger: 0.17 }, 1.78)
          .fromTo(q(".fs-foot > *"), { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 2.4);
      },
      inspect: q => {
        const scan = q(".fi-scan");
        return gsap.timeline({ paused: true, defaults: { ease: "expo.out" } })
          .fromTo(q(".fi-widths code"), { opacity: 0.35 }, { opacity: 1, duration: 0.3, stagger: 0.24, ease: "power1.out" }, 0)
          .fromTo(scan, { yPercent: -100, opacity: 1 }, { yPercent: 0, duration: 1, ease: "power1.inOut" }, 0)
          .to(scan, { opacity: 0, duration: 0.25, ease: "none" }, 1)
          .fromTo(q(".fi-row"), { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.18 }, 0.12)
          .fromTo(q(".fi-was"), { scale: 1.7, opacity: 0, rotateX: 0 }, { scale: 1, opacity: 1, duration: 0.42, ease: "power4.out", stagger: 0.18, transformPerspective: 300 }, 0.24)
          .fromTo(q(".fi-foot > *"), { y: 8, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 1.05)
          .fromTo(q(".fi-round .fi-a"), { yPercent: 0, opacity: 1 }, { yPercent: -100, opacity: 0, duration: 0.5, ease: "power3.inOut" }, 2.05)
          .fromTo(q(".fi-round .fi-b"), { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }, 2.05)
          .to(scan, { opacity: 1, duration: 0.01, ease: "none" }, 2.15)
          .fromTo(scan, { yPercent: -100 }, { yPercent: 0, duration: 1, ease: "power1.inOut", immediateRender: false }, 2.15)
          .to(scan, { opacity: 0, duration: 0.25, ease: "none" }, 3.15)
          .fromTo(q(".fi-strike"), { scaleX: 0 }, { scaleX: 1, duration: 0.45, ease: "power2.out", stagger: 0.18 }, 2.3)
          .fromTo(q(".fi-id"), { opacity: 1 }, { opacity: 0.6, duration: 0.45, ease: "power1.out", stagger: 0.18 }, 2.3)
          .to(q(".fi-was"), { rotateX: -90, opacity: 0, duration: 0.16, ease: "power2.in", stagger: 0.18 }, 2.32)
          .fromTo(q(".fi-fixed"), { rotateX: 90, opacity: 0 }, { rotateX: 0, opacity: 1, duration: 0.34, ease: "power3.out", stagger: 0.18, transformPerspective: 300 }, 2.48)
          .fromTo(q(".fi-res .fi-a"), { yPercent: 0, opacity: 1 }, { yPercent: -100, opacity: 0, duration: 0.5, ease: "power3.inOut" }, 3.25)
          .fromTo(q(".fi-res .fi-b"), { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }, 3.25);
      },
      app: q => gsap.timeline({ paused: true, defaults: { ease: "expo.out" } })
        .fromTo(q(".roll-strip"), { y: 0, yPercent: 0 }, { y: 0, yPercent: (_, el) => -(5 * (10 + Number(el.dataset.d))), duration: 1.7, stagger: 0.05 }, 0)
        .fromTo(q(".fa-kpi em"), { y: 6, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 }, 1)
        .fromTo(q(".fa-col i"), { scaleY: 0 }, { scaleY: 1, duration: 1.1, stagger: 0.05 }, 0.3)
        .fromTo(q(".fa-avg"), { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: "power3.inOut" }, 1.15)
        .fromTo(q(".fa-avg > span"), { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power1.out" }, 1.85)
        .fromTo(q(".fa-hot"), { opacity: 0 }, { opacity: 1, duration: 0.35, ease: "power1.out" }, 1.55)
        .fromTo(q(".fa-tip"), { y: 8, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 1.7),
    };

    gsap.matchMedia().add({
      motion: "(prefers-reduced-motion: no-preference)",
      phone: "(max-width: 767px)",
      fine: "(hover: hover) and (pointer: fine)",
    }, ctx => {
      const { motion, phone, fine } = ctx.conditions ?? {};
      if (!motion) return;
      gsap.utils.toArray(".feature", section).forEach(card => {
        const q = gsap.utils.selector(card);
        const art = card.querySelector(".feature-art");
        gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: { trigger: card, start: "top bottom", end: phone ? "top 62%" : "top 52%", scrub: true },
        })
          .fromTo(art, { clipPath: phone ? "inset(4% 6% 4% 6% round 16px)" : "inset(14% 16% 14% 16% round 16px)" }, { clipPath: "inset(0% 0% 0% 0% round 22px)" }, 0)
          .fromTo(q(".fx-bg"), { scale: 1.3 }, { scale: 1 }, 0);

        const par = phone ? 8 : 20;
        const stCfg = { trigger: card, start: "top bottom", end: "bottom top", scrub: true };
        gsap.fromTo(q(".feat-float"), { y: par }, { y: -par, ease: "none", force3D: false, snap: { y: 1 }, scrollTrigger: stCfg });
        gsap.fromTo(q(".fx-rings"), { y: -0.6 * par }, { y: 0.6 * par, ease: "none", scrollTrigger: stCfg });

        const enterTl = gsap.timeline({ paused: true, defaults: { ease: "expo.out" } })
          .fromTo(q(".fx-glow"), { opacity: 0, scale: 0.55 }, { opacity: 1, scale: 1, duration: 1.8 }, 0)
          .fromTo(q(".fx-t, .fx-b"), { scaleX: 0 }, { scaleX: 1, duration: 1.3, stagger: 0.1 }, 0)
          .fromTo(q(".fx-l, .fx-r"), { scaleY: 0 }, { scaleY: 1, duration: 1.3, stagger: 0.1 }, 0.1)
          .fromTo(q(".fx-ring"), { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, duration: 1.5, stagger: 0.14 }, 0.06)
          .fromTo(q(".fx-mark"), { opacity: 0, scale: 0.2 }, { opacity: 1, scale: 1, duration: 0.6, stagger: 0.06 }, 0.6)
          .fromTo(q(".frag"), { y: 56, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 }, 0.08)
          .from(q(".fx-sheet"), { y: 0, scale: 1, opacity: 0, duration: 1.3, stagger: 0.08 }, 0.4);

        const storyTl = stories[card.dataset.story ?? ""]?.(q);
        let storyDone = false;
        if (storyTl) {
          enterTl.add(() => storyTl.play(), 0.55);
          storyTl.eventCallback("onComplete", () => { storyDone = true; });
        }
        ScrollTrigger.create({
          trigger: card,
          start: phone ? "top 90%" : "top 85%",
          once: true,
          onEnter: () => enterTl.play(),
        });

        if (fine && storyTl) {
          const replayNodes = q("[data-replay]");
          let busy = false;
          card.addEventListener("pointerenter", e => {
            if (e.pointerType !== "mouse" || !storyDone || busy || storyTl.isActive()) return;
            busy = true;
            gsap.to(replayNodes, {
              opacity: 0,
              duration: 0.18,
              ease: "power1.in",
              onComplete: () => {
                storyTl.restart();
                gsap.to(replayNodes, { opacity: 1, duration: 0.26, ease: "power1.out" });
                busy = false;
              },
            });
          });
        }
      });
    });
  }

  /* 7. Before and After Step Buttons & Screen Scale (module 37612) */
  function initBeforeAfter() {
    const section = document.querySelector('.scene.showcase[data-scene="before-after"]');
    if (!section) return;
    const steps = [...section.querySelectorAll(".ba-step")];
    const screen = section.querySelector(".ba-screen");

    function syncStepButtons() {
      const live = section.classList.contains("is-live");
      steps.forEach((step, idx) => {
        const existingBtn = step.querySelector(":scope > button");
        const existingTitle = step.querySelector(":scope > .ba-title");
        if (live && existingTitle && !existingBtn) {
          const btn = document.createElement("button");
          btn.type = "button";
          if (step.hasAttribute("data-on")) btn.setAttribute("aria-current", "step");
          existingTitle.replaceWith(btn);
          btn.appendChild(existingTitle);
          btn.addEventListener("click", () => {
            const marks = section.dataset.marks?.split(",").map(Number);
            if (!marks || !section.classList.contains("is-live")) return;
            const span = section.offsetHeight - window.innerHeight;
            const target = section.getBoundingClientRect().top + window.scrollY + marks[idx] * span;
            const lenis = window.Stage?.lenis;
            if (lenis) lenis.scrollTo(target, { duration: 1.2 });
            else window.scrollTo({ top: target, behavior: "smooth" });
          });
        } else if (!live && existingBtn) {
          const title = existingBtn.querySelector(".ba-title");
          if (title) existingBtn.replaceWith(title);
        }
      });
    }

    syncStepButtons();
    new MutationObserver(syncStepButtons).observe(section, { attributes: true, attributeFilter: ["class"] });

    if (screen && (!window.CSS || !CSS.supports("zoom", "calc(100cqw / 880px)"))) {
      const updateScale = () => {
        const w = parseFloat(getComputedStyle(screen).getPropertyValue("--nf-w")) || 880;
        screen.style.setProperty("--s", String(screen.clientWidth / w));
      };
      updateScale();
      if ("ResizeObserver" in window) new ResizeObserver(updateScale).observe(screen);
    }
  }

  /* 8. Install Section 3-Tab Switcher (module 5842) */
  function initInstallTabs() {
    const section = document.getElementById("install");
    if (!section) return;
    const tablist = section.querySelector('.tabs[role="tablist"]');
    const panel = document.getElementById("install-panel");
    if (!tablist || !panel) return;
    const tabs = [...tablist.querySelectorAll('[role="tab"]')];

    const COPY_ICONS_HTML = '<span class="install-copy" aria-hidden="true"><svg class="is-copy" viewBox="0 0 16 16" fill="none"><rect x="5.5" y="5.5" width="8" height="8" rx="2" stroke="currentColor" stroke-width="1.4"></rect><path d="M3.5 10.5h-.2A1.3 1.3 0 0 1 2 9.2V3.3C2 2.6 2.6 2 3.3 2h5.9c.7 0 1.3.6 1.3 1.3v.2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"></path></svg><svg class="is-check" viewBox="0 0 16 16" fill="none"><path d="m3.5 8.5 3 3 6-7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg></span><span class="sr-only" aria-live="polite"></span>';

    function renderCmdButton(cmd) {
      const tokens = cmd.split(" ").map((tok, i) => `${i > 0 ? " " : ""}<span${tok.length <= 30 ? ' class="tok"' : ""}>${tok}</span>`).join("");
      return `<button type="button" data-copied="false" aria-label="Copy: ${cmd}" class="install block "><code><span class="p">$</span>${tokens}</code>${COPY_ICONS_HTML}</button>`;
    }

    const configs = [
      {
        id: "cli",
        lines: ["npx skills add Leonxlnx/taste-skill"],
        note: 'Installs <code>design-taste-frontend</code> with the skills CLI, for any agent that reads SKILL.md files. Run it again to update.',
      },
      {
        id: "claude",
        lines: ["/plugin marketplace add Leonxlnx/taste-skill", "/plugin install taste-skill@taste-skill"],
        note: 'Installs the Claude Code plugin; run both inside Claude Code. The skill is namespaced under <code>taste-skill:</code>, and <code>/plugin update</code> upgrades it later.',
      },
      {
        id: "codex",
        lines: ["codex plugin marketplace add Leonxlnx/taste-skill", "codex plugin add taste-skill@taste-skill"],
        note: 'Installs the Codex plugin. Start a new Codex session afterwards so the skill is loaded.',
      },
    ];

    let active = 0;
    function selectTab(next) {
      if (next === active || next < 0 || next >= configs.length) return;
      active = next;
      const cfg = configs[active];
      tabs.forEach((t, i) => {
        const on = i === active;
        t.setAttribute("aria-selected", String(on));
        t.tabIndex = on ? 0 : -1;
      });
      panel.setAttribute("aria-labelledby", `install-tab-${cfg.id}`);
      panel.innerHTML = `<div class="tab-swap"><div class="install-panel">${cfg.lines.map(renderCmdButton).join("")}</div><p class="install-note">${cfg.note}</p></div>`;
    }

    tabs.forEach((tab, i) => tab.addEventListener("click", () => selectTab(i)));
    tablist.addEventListener("keydown", e => {
      const map = {
        ArrowRight: active + 1,
        ArrowLeft: active - 1,
        Home: 0,
        End: configs.length - 1,
      };
      if (!(e.key in map)) return;
      e.preventDefault();
      const next = (map[e.key] + configs.length) % configs.length;
      selectTab(next);
      tabs[next]?.focus();
    });
  }

  /* 9. TasteCode Desktop App Demo (module 97953) */
  function initTasteCode() {
    const stage = document.querySelector(".tcw-stage");
    if (!stage || !gsap || !ScrollTrigger) return;
    const lift = stage.querySelector(".tcw-lift");
    const tcw = stage.querySelector(".tcw");
    const glow = stage.querySelector(".tcw-glow");
    if (!lift || !tcw || !glow) return;

    const ICONS = {
      play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M7 4v16l13-8z"></path></svg>',
      pause: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="6" y="5" width="4" height="14" rx="1"></rect><rect x="14" y="5" width="4" height="14" rx="1"></rect></svg>',
      replay: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M19.95 11a8 8 0 1 0-.5 4m.5 5v-5h-5"></path></svg>',
    };
    const MODES = {
      armed: { label: "Play the TasteCode demo", icon: ICONS.play },
      running: { label: "Pause the TasteCode demo", icon: ICONS.pause },
      paused: { label: "Play the TasteCode demo", icon: ICONS.play },
      done: { label: "Replay the TasteCode demo", icon: ICONS.replay },
    };

    function resetTcw(root) {
      root.querySelectorAll("[data-step]").forEach(el => el.setAttribute("data-s", "wait"));
      root.querySelector(".tcw-panel")?.setAttribute("data-tab", "diff");
      root.removeAttribute("data-run");
      root.removeAttribute("data-paused");
    }

    let controlBtn = lift.querySelector(".tcw-control");
    let onControlClick = () => {};

    function updateControl(mode) {
      if (mode === "rest" || mode === "armed") {
        if (controlBtn) controlBtn.remove();
        controlBtn = null;
        return;
      }
      const cfg = MODES[mode];
      if (!cfg) return;
      if (!controlBtn) {
        controlBtn = document.createElement("button");
        controlBtn.type = "button";
        controlBtn.className = "tcw-control";
        controlBtn.addEventListener("click", () => onControlClick());
        lift.appendChild(controlBtn);
      }
      controlBtn.setAttribute("data-mode", mode);
      controlBtn.setAttribute("aria-label", cfg.label);
      controlBtn.setAttribute("title", cfg.label);
      controlBtn.innerHTML = cfg.icon;
    }

    gsap.matchMedia().add({
      motion: "(prefers-reduced-motion: no-preference)",
      wide: "(min-width: 768px)",
    }, ctx => {
      const { motion, wide } = ctx.conditions ?? {};
      if (!motion) return;

      gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: { trigger: stage, start: "top bottom", end: wide ? "top 40%" : "top 58%", scrub: true },
      })
        .fromTo(lift, wide ? { yPercent: 24, rotationX: 28, scale: 0.88, transformOrigin: "50% 100%" } : { y: 72 }, { yPercent: 0, y: 0, rotationX: 0, scale: 1 }, 0)
        .fromTo(glow, { autoAlpha: 0.5, scaleX: 0.72, scaleY: 0.5, transformOrigin: "50% 100%" }, { autoAlpha: 1, scaleX: 1, scaleY: 1 }, 0);

      resetTcw(tcw);
      const qAll = sel => [...tcw.querySelectorAll(sel)];
      const steps = qAll("[data-step]");
      const files = qAll("[data-file]");
      const pageCol = tcw.querySelector(".tcw-page-col");
      const view = tcw.querySelector(".tcw-view");
      const flare = stage.querySelector(".tcw-flare");

      const tl = gsap.timeline({ paused: true, defaults: { ease: "expo.out", duration: 0.6 } });
      const slideIn = (target, at, stagger = 0) => tl.fromTo(target, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, stagger }, at);
      const fadeIn = (target, at, stagger = 0) => tl.fromTo(target, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5, ease: "power2.out", stagger }, at);
      const popIn = (target, at, stagger = 0) => tl.fromTo(target, { autoAlpha: 0, scale: 0.5 }, { autoAlpha: 1, scale: 1, duration: 0.5, stagger }, at);
      const setStep = (idx, s, at) => tl.call(() => steps[idx]?.setAttribute("data-s", s), undefined, at);
      const stepMeta = idx => steps[idx]?.querySelector(".tcw-meta");

      tl.call(() => tcw.setAttribute("data-run", "running"), undefined, 0);
      slideIn(tcw.querySelector('[data-say="start"]'), 0.15);
      [[0.7, 1.55], [1.65, 2.35], [2.45, 3.15], [3.25, 4.4], [4.5, 5.4], [5.5, 7.75]].forEach(([t0, t1], idx) => {
        slideIn(steps[idx], t0);
        setStep(idx, "run", t0);
        setStep(idx, "done", t1);
      });
      popIn(qAll(".tcw-sw i"), 1, 0.07);
      fadeIn(stepMeta(1), 1.95);
      popIn(qAll(".tcw-thumbs span"), 2.7, 0.09);
      fadeIn(stepMeta(3), 3.5);
      fadeIn(stepMeta(4), 4.75);
      fadeIn(stepMeta(5), 6.9);
      tl.fromTo(tcw.querySelector(".tcw-diff-empty"), { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.2, ease: "none" }, 0.3);
      [0.35, 1.6, 2.4, 3.2, 3.4, 3.55].forEach((at, idx) => slideIn(files[idx], at));
      fadeIn(tcw.querySelector(".tcw-code"), 3.4);
      slideIn(qAll(".tcw-code > span"), 3.5, 0.1);
      tl.call(() => tcw.querySelector(".tcw-panel")?.setAttribute("data-tab", "browser"), undefined, 4.55);
      tl.fromTo(tcw.querySelector(".tcw-tab-ind"), { x: 88 }, { x: 0, duration: 0.5, ease: "power3.inOut" }, 4.55);
      tl.fromTo(tcw.querySelector(".tcw-pane-diff"), { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.25, ease: "power1.out" }, 4.6);
      tl.fromTo(tcw.querySelector(".tcw-pane-browser"), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3, ease: "power1.out" }, 4.65);
      tl.fromTo(tcw.querySelector(".tcw-page"), { clipPath: "inset(0% 0% 100% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1, ease: "expo.inOut" }, 4.8);
      tl.fromTo(pageCol, { scale: 1.08, transformOrigin: "50% 0%" }, { scale: 1, duration: 1.4 }, 4.8);
      tl.fromTo(flare, { autoAlpha: 0, scale: 0.85 }, { autoAlpha: 1, scale: 1, duration: 0.7, ease: "power2.out" }, 4.75);
      tl.to(flare, { autoAlpha: 0, duration: 1.8, ease: "power2.inOut" }, 5.5);

      const scrollDown = gsap.fromTo(pageCol, { y: 0 }, { y: () => -Math.max(0, pageCol.offsetHeight - view.clientHeight), duration: 2, ease: "power2.inOut", immediateRender: false });
      const scrollUp = gsap.to(pageCol, { y: 0, duration: 1.1, ease: "power3.inOut" });
      tl.add(scrollDown, 5.75).add(scrollUp, 7.75);
      popIn(qAll(".tcw-chip"), 6.2, 0.8);
      slideIn(tcw.querySelector('[data-say="end"]'), 7.9);
      tl.call(() => tcw.setAttribute("data-run", "done"), undefined, 7.9);
      tl.to({}, { duration: 0.6 }, 8);

      let mode = "armed";
      const setMode = next => {
        mode = next;
        updateControl(next);
      };
      tl.eventCallback("onComplete", () => setMode("done"));

      const startPlay = () => {
        tcw.removeAttribute("data-paused");
        tl.play(0);
        setMode("running");
      };
      const fadeTargets = [tcw.querySelector(".tcw-log"), tcw.querySelector(".tcw-panes")];
      const replayPlay = () => {
        setMode("running");
        gsap.to(fadeTargets, {
          autoAlpha: 0,
          duration: 0.22,
          ease: "power1.in",
          onComplete: () => {
            resetTcw(tcw);
            scrollDown.invalidate();
            scrollUp.invalidate();
            tl.pause(0);
            gsap.set(fadeTargets, { autoAlpha: 1 });
            tl.play(0);
          },
        });
      };

      onControlClick = () => {
        if (mode === "running") {
          tl.pause();
          tcw.setAttribute("data-paused", "");
          setMode("paused");
        } else if (mode === "paused") {
          tcw.removeAttribute("data-paused");
          tl.play();
          setMode("running");
        } else if (mode === "done") {
          replayPlay();
        } else {
          startPlay();
        }
      };

      ScrollTrigger.create({
        trigger: stage,
        start: wide ? "top 50%" : "top 52%",
        end: "bottom top",
        onToggle: self => {
          if (self.isActive && mode === "armed") startPlay();
        },
      });

      lift.addEventListener("pointerenter", e => {
        if (e.pointerType === "mouse" && mode === "done") replayPlay();
      });
    });
  }

  /* 10. Footer Sunrise & Nav Dark Handoff (module 66410) */
  function initFootSunrise() {
    const sunrise = document.querySelector(".foot-sunrise");
    if (!sunrise || !gsap || !ScrollTrigger) return;
    const glow = sunrise.querySelector(".fs-glow");
    const chars = sunrise.querySelectorAll(".fs-word > span");

    gsap.matchMedia().add({
      motion: "(prefers-reduced-motion: no-preference)",
      phone: "(max-width: 767px)",
    }, ctx => {
      if (!ctx.conditions?.motion) return;
      const phone = !!ctx.conditions.phone;
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: { trigger: sunrise, start: "clamp(top bottom)", end: "max", scrub: phone ? 0.35 : 0.6, invalidateOnRefresh: true },
      });
      tl.fromTo(glow, { yPercent: 14, scaleX: 0.72, scaleY: 0.42, opacity: 0.55 }, { yPercent: 0, scaleX: 1, scaleY: 1, opacity: 1, duration: 1, ease: "power2.out" }, 0);
      gsap.set(chars, { yPercent: 104 });
      tl.to(chars, { yPercent: 0, duration: 0.5, ease: "power3.out", stagger: { each: phone ? 0.035 : 0.045, from: "center" } }, 0.12);
      ScrollTrigger.create({
        trigger: sunrise,
        start: "top bottom",
        end: "bottom top",
        onToggle: self => sunrise.toggleAttribute("data-awake", self.isActive),
      });
    });

    const footer = sunrise.closest("footer");
    const nav = document.querySelector(".nav");
    const lf = document.querySelector('[data-scene="light-flood"]');
    if (footer && nav) {
      const navMid = () => nav.offsetTop + nav.offsetHeight / 2;
      const syncDark = self => nav.classList.toggle("is-dark", self.progress > 0);
      ScrollTrigger.create({
        trigger: lf ?? footer,
        start: () => lf
          ? (lf.classList.contains("is-live")
              ? `top+=${0.65 * (lf.offsetHeight - window.innerHeight)} top`
              : `bottom-=${0.16 * lf.offsetHeight} ${navMid()}px`)
          : `top+=${parseFloat(getComputedStyle(footer).getPropertyValue("--dusk")) || 0} ${navMid()}px`,
        end: "max",
        invalidateOnRefresh: true,
        onUpdate: syncDark,
        onRefresh: syncDark,
      });
    }
  }

  /* 11. On This Page TOC (module 58538) */
  function initToc() {
    const toc = document.querySelector("nav.toc");
    if (!toc) return;
    const links = [...toc.querySelectorAll('a[href^="#"]')];
    const targets = links.map(a => document.getElementById(a.getAttribute("href").slice(1))).filter(Boolean);
    if (!targets.length) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      let activeId = targets[0].id;
      for (const el of targets) {
        if (el.getBoundingClientRect().top <= 140) activeId = el.id;
        else break;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2 &&
          targets[targets.length - 1].getBoundingClientRect().top < window.innerHeight) {
        activeId = targets[targets.length - 1].id;
      }
      links.forEach(a => {
        if (a.getAttribute("href") === `#${activeId}`) a.setAttribute("aria-current", "location");
        else a.removeAttribute("aria-current");
      });
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
  }

  /* 12. Boot Stage & Scenes (module 16649) */
  async function bootStage() {
    const Stage = window.Stage;
    if (!Stage) return;
    if (document.querySelector(".scene[data-scene]")) {
      Stage.smooth();
      Stage.init();
      await Stage.ready();
      window.dispatchEvent(new Event("stage:ready"));
      const hash = decodeURIComponent(location.hash.slice(1));
      const target = hash ? document.getElementById(hash) : null;
      if (target) {
        if (Stage.lenis) Stage.lenis.scrollTo(target, { immediate: true, force: true });
        else target.scrollIntoView();
      }
    }
  }

  initEnterObserver();
  initNavbar();
  initCopyButtons();
  initHero();
  initDirections();
  initFeatures();
  initBeforeAfter();
  initInstallTabs();
  initTasteCode();
  initFootSunrise();
  initToc();
  bootStage();
})();
