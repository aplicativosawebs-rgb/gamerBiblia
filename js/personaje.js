(function() {
  const QUESTIONS = [
    {
      pistas: [
        'Fui un pastor de ovejas en Belén.',
        'Vencí a un gigante con una honda y una piedra.',
        'Llegué a ser rey de Israel.'
      ],
      opciones: ['Moisés', 'David', 'Josué', 'Samuel'],
      correcta: 'David'
    },
    {
      pistas: [
        'Nací en un pesebre.',
        'Mis padres fueron María y José.',
        'Soy el Salvador del mundo.'
      ],
      opciones: ['Juan', 'Jesús', 'Pedro', 'Pablo'],
      correcta: 'Jesús'
    },
    {
      pistas: [
        'Fui llamado por Dios desde una zarza ardiente.',
        'Guié al pueblo de Israel fuera de Egipto.',
        'Recibí los Diez Mandamientos.'
      ],
      opciones: ['Abraham', 'Moisés', 'Isaac', 'Jacob'],
      correcta: 'Moisés'
    },
    {
      pistas: [
        'Era un profeta valiente.',
        'Enfrenté a los profetas de Baal en el Monte Carmelo.',
        'Fui llevado al cielo en un carro de fuego.'
      ],
      opciones: ['Elías', 'Eliseo', 'Isaías', 'Jeremías'],
      correcta: 'Elías'
    },
    {
      pistas: [
        'Fui un sabio rey de Israel.',
        'Construí el primer Templo en Jerusalén.',
        'Dios me dio sabiduría incomparable.'
      ],
      opciones: ['Salomón', 'David', 'Josías', 'Ezequías'],
      correcta: 'Salomón'
    }
  ];

  let current = 0;
  let score = 0;
  let hintsShown = 1;

  const els = {
    question: document.getElementById('question'),
    hintBox: document.getElementById('hintBox'),
    options: document.getElementById('options'),
    feedback: document.getElementById('feedback'),
    nextBtn: document.getElementById('nextBtn'),
    progress: document.getElementById('progress'),
    qNum: document.getElementById('qNum'),
    qTotal: document.getElementById('qTotal'),
    score: document.getElementById('score')
  };

  els.qTotal.textContent = QUESTIONS.length;

  function renderQuestion() {
    const q = QUESTIONS[current];
    hintsShown = 1;
    els.qNum.textContent = current + 1;
    els.progress.style.width = ((current) / QUESTIONS.length * 100) + '%';
    els.question.textContent = q.pistas[0];
    els.hintBox.textContent = '💡 ' + q.pistas[1];
    els.hintBox.style.display = 'block';
    els.feedback.className = 'feedback';
    els.feedback.textContent = '';
    els.nextBtn.style.display = 'none';

    els.options.innerHTML = '';
    q.opciones.forEach(op => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = op;
      btn.addEventListener('click', () => answer(btn, op, q));
      els.options.appendChild(btn);
    });
  }

  function answer(btn, op, q) {
    const allBtns = els.options.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.disabled = true);

    if (op === q.correcta) {
      btn.classList.add('correct', 'pop');
      const pts = hintsShown === 1 ? 100 : 60;
      score += pts;
      els.score.textContent = score;
      els.feedback.className = 'feedback ok show';
      els.feedback.textContent = `✅ ¡Correcto! +${pts} puntos`;
    } else {
      btn.classList.add('wrong', 'shake');
      allBtns.forEach(b => {
        if (b.textContent === q.correcta) b.classList.add('correct');
      });
      els.feedback.className = 'feedback bad show';
      els.feedback.textContent = `❌ Era: ${q.correcta}`;
    }

    els.nextBtn.style.display = 'inline-flex';
  }

  els.nextBtn.addEventListener('click', () => {
    current++;
    if (current >= QUESTIONS.length) {
      finishGame();
    } else {
      renderQuestion();
    }
  });

  function finishGame() {
    els.progress.style.width = '100%';
    Storage.addScore('personaje', score, true);
    els.question.textContent = '🎉 ¡Juego completado!';
    els.hintBox.style.display = 'none';
    els.options.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:20px;">
        <p style="font-size:1.4rem;margin-bottom:12px;">Puntuación final: <strong>${score}</strong> pts</p>
        <a href="../index.html" class="btn primary"><span class="material-icons">home</span>Menú principal</a>
        <button class="btn" id="playAgain" style="margin-left:8px;"><span class="material-icons">replay</span>Jugar de nuevo</button>
      </div>`;
    els.feedback.className = 'feedback';
    els.nextBtn.style.display = 'none';
    document.getElementById('playAgain').addEventListener('click', reset);
  }

  function reset() {
    current = 0; score = 0;
    els.score.textContent = 0;
    renderQuestion();
  }

  document.getElementById('resetBtn').addEventListener('click', () => {
    if (confirm('¿Reiniciar el juego? Se perderá el progreso actual.')) reset();
  });

  renderQuestion();
})();