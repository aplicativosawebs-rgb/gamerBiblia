(function() {
  // 8 parejas = 16 cartas → grid 4x4
  const PAIRS = [
    'Génesis',
    'Éxodo',
    'Salmos',
    'Proverbios',
    'Isaías',
    'Mateo',
    'Apocalipsis',
    'Romanos'
  ];

  let cards = [], flipped = [], matched = 0, moves = 0, lock = false;

  const els = {
    grid: document.getElementById('grid'),
    moves: document.getElementById('moves'),
    pairs: document.getElementById('pairs'),
    score: document.getElementById('score'),
    feedback: document.getElementById('feedback')
  };

  // Ajustar contador de parejas en el HTML dinámicamente
  const totalPairs = PAIRS.length;

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function init() {
    // Actualizar el contador "/N" en el header de la página
    const pairsEl = els.pairs.parentElement;
    if (pairsEl) {
      pairsEl.innerHTML = `Movimientos: <strong id="moves">0</strong> · Parejas: <strong id="pairs">0</strong>/${totalPairs} · Puntos: <strong id="score">0</strong>`;
      els.moves = document.getElementById('moves');
      els.pairs = document.getElementById('pairs');
      els.score = document.getElementById('score');
    }

    cards = shuffle([...PAIRS, ...PAIRS]);
    flipped = []; matched = 0; moves = 0; lock = false;
    els.moves.textContent = 0;
    els.pairs.textContent = '0';
    els.score.textContent = 0;
    els.feedback.className = 'feedback';
    els.grid.innerHTML = '';

    cards.forEach((name, idx) => {
      const card = document.createElement('div');
      card.className = 'memory-card';
      card.dataset.name = name;
      card.dataset.idx = idx;
      card.innerHTML = `
        <div class="inner">
          <div class="face front">📖</div>
          <div class="face back">${name}</div>
        </div>`;
      card.addEventListener('click', () => flip(card));
      els.grid.appendChild(card);
    });
  }

  function flip(card) {
    if (lock) return;
    if (card.classList.contains('flipped') || card.classList.contains('matched')) return;
    card.classList.add('flipped', 'pop');
    flipped.push(card);

    if (flipped.length === 2) {
      moves++;
      els.moves.textContent = moves;
      lock = true;
      setTimeout(check, 700);
    }
  }

  function check() {
    const [a, b] = flipped;
    if (a.dataset.name === b.dataset.name) {
      a.classList.add('matched');
      b.classList.add('matched');
      matched++;
      els.pairs.textContent = matched;
      flipped = [];
      lock = false;
      if (matched === totalPairs) win();
    } else {
      a.classList.add('shake');
      b.classList.add('shake');
      setTimeout(() => {
        a.classList.remove('flipped', 'shake');
        b.classList.remove('flipped', 'shake');
        flipped = [];
        lock = false;
      }, 500);
    }
  }

  function win() {
    // Puntaje: base 500, penaliza movimientos extra (mínimo ideal = 8 parejas + margen)
    const ideal = totalPairs + 4; // 12 movimientos "perfectos"
    const penalty = Math.max(0, (moves - ideal) * 8);
    const score = Math.max(80, 500 - penalty);
    els.score.textContent = score;
    els.feedback.className = 'feedback ok show win-pulse';
    els.feedback.innerHTML = `
      <p style="font-size:1.3rem;">🎉 ¡Ganaste! Movimientos: ${moves} · Puntos: <strong>${score}</strong></p>
      <a href="../index.html" class="btn primary" style="margin-top:12px;">Menú</a>`;
    Storage.addScore('memoria', score, true);
  }

  document.getElementById('resetBtn').addEventListener('click', () => {
    if (confirm('¿Reiniciar tablero?')) init();
  });

  init();
})();