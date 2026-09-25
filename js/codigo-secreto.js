(function() {
  const ENIGMAS = [
    {
      pregunta: 'Soy el versículo más famoso del amor de Dios al mundo.',
      pista: 'Dice: "Porque de tal manera amó Dios al mundo..."',
      opciones: [
        { book: 'Juan', chapter: 3, verse: 16 },
        { book: 'Salmos', chapter: 23, verse: 1 },
        { book: 'Romanos', chapter: 8, verse: 28 },
        { book: 'Génesis', chapter: 1, verse: 1 }
      ],
      correcta: 0
    },
    {
      pregunta: 'Soy el Salmo del Buen Pastor, donde nada me faltará.',
      pista: 'Empieza: "Jehová es mi pastor..."',
      opciones: [
        { book: 'Salmos', chapter: 91, verse: 1 },
        { book: 'Salmos', chapter: 23, verse: 1 },
        { book: 'Isaías', chapter: 40, verse: 31 },
        { book: 'Juan', chapter: 10, verse: 11 }
      ],
      correcta: 1
    },
    {
      pregunta: 'Soy el versículo que dice que todo lo puedo en Cristo.',
      pista: 'Pablo lo escribió a los Filipenses.',
      opciones: [
        { book: 'Filipenses', chapter: 4, verse: 13 },
        { book: 'Romanos', chapter: 8, verse: 28 },
        { book: 'Efesios', chapter: 2, verse: 8 },
        { book: 'Hebreos', chapter: 11, verse: 1 }
      ],
      correcta: 0
    }
  ];

  let current = 0, score = 0;
  const els = {
    question: document.getElementById('question'),
    hint: document.getElementById('hint'),
    options: document.getElementById('options'),
    feedback: document.getElementById('feedback'),
    nextBtn: document.getElementById('nextBtn'),
    enigmaNum: document.getElementById('enigmaNum'),
    score: document.getElementById('score'),
    codeLock: document.getElementById('codeLock')
  };

  function fmt(ref) {
    return `${ref.book} ${ref.chapter}: ${ref.verse}`;
  }

  function render() {
    const e = ENIGMAS[current];
    els.enigmaNum.textContent = current + 1;
    els.question.textContent = e.pregunta;
    els.hint.textContent = '💡 ' + e.pista;
    els.feedback.className = 'feedback';
    els.feedback.textContent = '';
    els.nextBtn.style.display = 'none';
    els.codeLock.style.display = 'none';
    els.options.innerHTML = '';

    e.opciones.forEach((op, idx) => {
      const b = document.createElement('button');
      b.className = 'option-btn';
      b.textContent = fmt(op);
      b.addEventListener('click', () => answer(b, idx, e));
      els.options.appendChild(b);
    });
  }

  function answer(btn, idx, e) {
    const all = els.options.querySelectorAll('.option-btn');
    all.forEach(b => b.disabled = true);

    if (idx === e.correcta) {
      btn.classList.add('correct', 'pop');
      score += 150;
      els.score.textContent = score;
      els.feedback.className = 'feedback ok show';
      els.feedback.textContent = '🔓 ¡Código desbloqueado! +150 puntos';

      // Mostrar el candado con las partes
      els.codeLock.style.display = 'flex';
      const ref = e.opciones[e.correcta];
      els.codeLock.innerHTML = `
        <div class="code-slot filled">📖 ${ref.book}</div>
        <div class="code-slot filled"># ${ref.chapter}</div>
        <div class="code-slot filled">: ${ref.verse}</div>`;
      els.nextBtn.style.display = 'inline-flex';
    } else {
      btn.classList.add('wrong', 'shake');
      all.forEach(b => { if (b.textContent === fmt(e.opciones[e.correcta])) b.classList.add('correct'); });
      els.feedback.className = 'feedback bad show';
      els.feedback.textContent = `❌ La referencia correcta era: ${fmt(e.opciones[e.correcta])}`;
      els.nextBtn.style.display = 'inline-flex';
    }
  }

  els.nextBtn.addEventListener('click', () => {
    current++;
    if (current >= ENIGMAS.length) finish();
    else render();
  });

  function finish() {
    Storage.addScore('codigo-secreto', score, true);
    els.question.textContent = '🎉 ¡Has descifrado todos los códigos!';
    els.hint.style.display = 'none';
    els.options.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:16px;">
        <p style="font-size:1.4rem;margin-bottom:12px;">Puntos finales: <strong>${score}</strong></p>
        <a href="../index.html" class="btn primary">Menú</a>
        <button class="btn" id="again">Jugar de nuevo</button>
      </div>`;
    els.codeLock.style.display = 'none';
    els.feedback.className = 'feedback';
    els.nextBtn.style.display = 'none';
    document.getElementById('again').addEventListener('click', reset);
  }

  function reset() {
    current = 0; score = 0; els.score.textContent = 0;
    els.hint.style.display = 'block';
    render();
  }

  document.getElementById('resetBtn').addEventListener('click', () => {
    if (confirm('¿Reiniciar el juego?')) reset();
  });

  render();
})();