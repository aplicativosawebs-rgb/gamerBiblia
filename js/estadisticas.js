(function() {
  const GAMES = [
    { id: 'personaje', name: '👤 Adivina el Personaje' },
    { id: 'libro-emoji', name: '📖 Adivina qué Libro es' },
    { id: 'memoria', name: '🧠 Encuentra la Pareja' },
    { id: 'ahorcado', name: '🔤 El Ahorcado' },
    { id: 'timeline', name: '⏳ Línea de Tiempo' },
    { id: 'codigo-secreto', name: '🔐 El Código Secreto' }
  ];

  function render() {
    const data = Storage.load();
    const total = Storage.getTotal();
    const completed = Storage.getCompletedCount();

    document.getElementById('totalScore').textContent = total;
    document.getElementById('completedCount').textContent = completed + '/6';
    document.getElementById('avgScore').textContent =
      completed > 0 ? Math.round(total / completed) : 0;

    const list = document.getElementById('progressList');
    list.innerHTML = '';

    GAMES.forEach(g => {
      const pts = data.scores[g.id] || 0;
      const done = data.completed[g.id];
      const row = document.createElement('div');
      row.className = 'progress-row';
      row.innerHTML = `
        <span class="name">${g.name} ${done ? '✅' : ''}</span>
        <span class="pts">${pts} pts</span>`;
      list.appendChild(row);
    });
  }

  document.getElementById('resetBtn').addEventListener('click', () => {
    if (confirm('¿Borrar TODAS las estadísticas y progreso?')) {
      Storage.resetAll();
      render();
    }
  });

  render();
})();