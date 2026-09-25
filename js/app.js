// Lógica del menú principal
(function() {
  // Tema
  const body = document.body;
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle.querySelector('.material-icons');

  function applyTheme(theme) {
    body.classList.toggle('light', theme === 'light');
    themeIcon.textContent = theme === 'light' ? 'light_mode' : 'dark_mode';
  }

  applyTheme(Storage.getTheme());

  themeToggle.addEventListener('click', () => {
    const next = body.classList.contains('light') ? 'dark' : 'light';
    Storage.setTheme(next);
    applyTheme(next);
  });

  // Puntajes
  function refreshScores() {
    const games = ['personaje', 'libro-emoji', 'memoria', 'ahorcado', 'timeline', 'codigo-secreto'];
    games.forEach(g => {
      const el = document.getElementById('score-' + g);
      if (el) el.textContent = Storage.getScore(g) + ' pts';
    });
    document.getElementById('totalScore').textContent = Storage.getTotal();
    document.getElementById('completedGames').textContent =
      Storage.getCompletedCount() + '/6';
  }

  refreshScores();

  // Reset
  document.getElementById('resetAll').addEventListener('click', () => {
    if (confirm('¿Seguro que quieres borrar TODO el progreso? Esta acción no se puede deshacer.')) {
      Storage.resetAll();
      refreshScores();
      alert('Progreso eliminado.');
    }
  });

  // Refrescar cuando vuelve a la pestaña
  window.addEventListener('focus', refreshScores);
})();