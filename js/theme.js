(function(){
  // Apply saved theme early on script load
  try {
    var saved = localStorage.getItem('theme') || 'auto';
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = saved === 'dark' || (saved === 'auto' && prefersDark);
    if (isDark) document.documentElement.classList.add('theme-dark');
  } catch (e) {}

  function setTheme(mode) {
    try {
      if (mode === 'dark') {
        document.documentElement.classList.add('theme-dark');
      } else {
        document.documentElement.classList.remove('theme-dark');
      }
      localStorage.setItem('theme', mode);
    } catch (e) {}
  }

  function toggleTheme() {
    var isDark = document.documentElement.classList.contains('theme-dark');
    setTheme(isDark ? 'light' : 'dark');
    updateToggleUI();
  }

  function updateToggleUI(){
    var btns = document.querySelectorAll('#themeToggle');
    btns.forEach(function(btn){
      var icon = btn.querySelector('.fa');
      var label = btn.querySelector('.label');
      var isDark = document.documentElement.classList.contains('theme-dark');
      if (icon) {
        icon.classList.remove('fa-moon-o','fa-sun-o');
        icon.classList.add(isDark ? 'fa-sun-o' : 'fa-moon-o');
      }
      if (label) label.textContent = isDark ? 'Light' : 'Dark';
      btn.setAttribute('aria-pressed', String(isDark));
      btn.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    var btns = document.querySelectorAll('#themeToggle');
    btns.forEach(function(btn){ btn.addEventListener('click', toggleTheme); });
    updateToggleUI();
  });
})();
