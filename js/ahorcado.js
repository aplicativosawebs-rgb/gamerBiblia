(function() {
  const WORDS = [
    { word: 'MOISES', hint: 'Libertó al pueblo de Israel de Egipto' },
    { word: 'DAVID', hint: 'Venció a Goliat con una honda' },
    { word: 'JERUSALEN', hint: 'Ciudad santa de Israel' },
    { word: 'EVANGELIO', hint: 'Buena noticia de salvación' },
    { word: 'PROFETAS', hint: 'Hablaban en nombre de Dios' }
  ];

  const STAGES = ['🟢','😀','😐','😟','😰','😵','💀'];

  let current = 0, score = 0, lives = 6, guessed = [], word = '', hint = '';

  const els = {
    word: document.getElementById('word'),
    keyboard: document.getElementById('keyboard'),
    hint: document.getElementById('hint'),
    feedback: document.getElementById('feedback'),
    lives: document.getElementById('lives'),
    score: document.getElementById('score'),
    art: document.getElementById('art')
  };

  const ALPHABET = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');

  function pickWord() {
    const item = WORDS[current % WORDS.length];
    word = item.word;
    hint = item.hint;
    guessed = [];
    lives = 6;
    els.hint.textContent = '💡 ' + hint;
    els.lives.textContent = lives;
    els.art.textContent = STAGES[0];
    els.feedback.className = 'feedback';
    els.feedback.textContent = '';
    renderWord();
    renderKeyboard();
  }

  function renderWord() {
    els.word.innerHTML = word.split('').map(l =>
      guessed.includes(l)
        ? `<span>${l}</span>`
        : `<span class="word-blank">&nbsp;</span>`
    ).join('');
  }

  function renderKeyboard() {
    els.keyboard.innerHTML = '';
    ALPHABET.forEach(l => {
      const b = document.createElement('button');
      b.className = 'key';
      b.textContent = l;
      b.addEventListener('click', () => guess(l, b));
      els.keyboard.appendChild(b);
    });
  }

  function guess(letter, btn) {
    if (guessed.includes(letter)) return;
    guessed.push(letter);

    if (word.includes(letter)) {
      btn.classList.add('correct');
      btn.disabled = true;
      renderWord();
      if (word.split('').every(l => guessed.includes(l))) win();
    } else {
      btn.classList.add('wrong', 'shake');
      btn.disabled = true;
      lives--;
      els.lives.textContent = lives;
      els.art.textContent = STAGES[6 - lives];
      if (lives <= 0) lose();
    }
  }

  function win() {
    score += 100 + lives * 20;
    els.score.textContent = score;
    els.feedback.className = 'feedback ok show pop';
    els.feedback.innerHTML = `
      <p style="font-size:1.2rem;">🎉 ¡Correcto! La palabra era <strong>${word}</strong></p>
      <button class="btn primary" id="nextWord" style="margin-top:10px;">Siguiente palabra <span class="material-icons">arrow_forward</span></button>`;
    document.getElementById('nextWord').addEventListener('click', () => {
      current++;
      if (current >= WORDS.length) finish();
      else pickWord();
    });
  }

  function lose() {
    els.feedback.className = 'feedback bad show shake';
    els.feedback.innerHTML = `
      <p style="font-size:1.2rem;">💀 Se acabaron las vidas. La palabra era <strong>${word}</strong></p>
      <button class="btn primary" id="nextWord" style="margin-top:10px;">Siguiente palabra</button>`;
    document.getElementById('nextWord').addEventListener('click', () => {
      current++;
      if (current >= WORDS.length) finish();
      else pickWord();
    });
  }

  function finish() {
    Storage.addScore('ahorcado', score, true);
    els.feedback.className = 'feedback ok show';
    els.feedback.innerHTML = `
      <p style="font-size:1.3rem;">🏁 ¡Juego terminado! Puntos: <strong>${score}</strong></p>
      <a href="../index.html" class="btn primary" style="margin-top:10px;">Menú</a>
      <button class="btn" id="again" style="margin-top:10px;">Jugar de nuevo</button>`;
    els.word.innerHTML = '';
    els.keyboard.innerHTML = '';
    els.hint.textContent = '';
    els.art.textContent = '🏆';
    document.getElementById('again').addEventListener('click', reset);
  }

  function reset() {
    current = 0; score = 0; els.score.textContent = 0; pickWord();
  }

  document.getElementById('resetBtn').addEventListener('click', () => {
    if (confirm('¿Reiniciar el juego?')) reset();
  });

  pickWord();
})();