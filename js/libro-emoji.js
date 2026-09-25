(function() {
  const QUESTIONS = [
    { emoji: '🌊🐋🚢', opciones: ['Jonás', 'Génesis', 'Éxodo', 'Job'], correcta: 'Jonás' },
    { emoji: '🐍🍎🌳', opciones: ['Génesis', 'Éxodo', 'Proverbios', 'Salmos'], correcta: 'Génesis' },
    { emoji: '👑🎺🏰', opciones: ['Jueces', 'Reyes', 'Crónicas', 'Josué'], correcta: 'Reyes' },
    { emoji: '🐑🎵🙏', opciones: ['Salmos', 'Cantares', 'Isaías', 'Miqueas'], correcta: 'Salmos' },
    { emoji: '🔥🐎👁️', opciones: ['Ezequiel', 'Daniel', 'Apocalipsis', 'Zacarías'], correcta: 'Apocalipsis' }
  ];

  let current = 0, score = 0;
  const els = {
    emoji: document.getElementById('emoji'),
    options: document.getElementById('options'),
    feedback: document.getElementById('feedback'),
    nextBtn: document.getElementById('nextBtn'),
    progress: document.getElementById('progress'),
    qNum: document.getElementById('qNum'),
    qTotal: document.getElementById('qTotal'),
    score: document.getElementById('score')
  };

  els.qTotal.textContent = QUESTIONS.length;

  function render() {
    const q = QUESTIONS[current];
    els.qNum.textContent = current + 1;
    els.progress.style.width = (current / QUESTIONS.length * 100) + '%';
    els.emoji.textContent = q.emoji;
    els.feedback.className = 'feedback';
    els.feedback.textContent = '';
    els.nextBtn.style.display = 'none';
    els.options.innerHTML = '';
    q.opciones.forEach(op => {
      const b = document.createElement('button');
      b.className = 'option-btn';
      b.textContent = op;
      b.addEventListener('click', () => answer(b, op, q));
      els.options.appendChild(b);
    });
  }

  function answer(btn, op, q) {
    const all = els.options.querySelectorAll('.option-btn');
    all.forEach(b => b.disabled = true);
    if (op === q.correcta) {
      btn.classList.add('correct', 'pop');
      score += 100;
      els.score.textContent = score;
      els.feedback.className = 'feedback ok show';
      els.feedback.textContent = '✅ ¡Correcto! +100';
    } else {
      btn.classList.add('wrong', 'shake');
      all.forEach(b => { if (b.textContent === q.correcta) b.classList.add('correct'); });
      els.feedback.className = 'feedback bad show';
      els.feedback.textContent = `❌ Era: ${q.correcta}`;
    }
    els.nextBtn.style.display = 'inline-flex';
  }

  els.nextBtn.addEventListener('click', () => {
    current++;
    if (current >= QUESTIONS.length) finish();
    else render();
  });

  function finish() {
    Storage.addScore('libro-emoji', score, true);
    els.progress.style.width = '100%';
    els.emoji.textContent = '🎉';
    els.feedback.className = 'feedback ok show';
    els.feedback.innerHTML = `
      <p style="font-size:1.3rem;margin-bottom:12px;">¡Completado! Puntos: <strong>${score}</strong></p>
      <a href="../index.html" class="btn primary">Menú</a>
      <button class="btn" id="again">Jugar de nuevo</button>`;
    els.nextBtn.style.display = 'none';
    els.options.innerHTML = '';
    document.getElementById('again').addEventListener('click', reset);
  }

  function reset() {
    current = 0; score = 0; els.score.textContent = 0; render();
  }

  document.getElementById('resetBtn').addEventListener('click', () => {
    if (confirm('¿Reiniciar?')) reset();
  });

  render();
})();