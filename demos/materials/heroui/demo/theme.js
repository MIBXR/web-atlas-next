(() => {
  const key = "atlas-workbench-theme";
  const system = matchMedia("(prefers-color-scheme: dark)");

  function applyTheme() {
    const preference = localStorage.getItem(key) || "system";
    const dark = preference === "dark" || (preference === "system" && system.matches);
    document.documentElement.classList.toggle("dark", dark);
  }

  applyTheme();
  system.addEventListener("change", applyTheme);
  window.addEventListener("storage", event => {
    if (event.key === key) applyTheme();
  });
})();
