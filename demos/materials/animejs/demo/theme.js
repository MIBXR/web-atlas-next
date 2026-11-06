(() => {
  const preference = matchMedia('(prefers-color-scheme: dark)');
  function apply() {
    const choice = localStorage.getItem('atlas-color-scheme') || 'system';
    const theme = choice === 'system' ? (preference.matches ? 'dark' : 'light') : choice;
    document.documentElement.dataset.atlasTheme = theme;
    document.documentElement.style.colorScheme = theme;
  }
  preference.addEventListener('change', apply);
  window.addEventListener('storage', event => {
    if (event.key === 'atlas-color-scheme' || event.key === null) apply();
  });
  apply();
})();
