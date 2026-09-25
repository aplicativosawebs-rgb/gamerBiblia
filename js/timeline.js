(function() {
  const ROUNDS = [
    {
      start: '📖 Creación (Génesis 1)',
      end: '✝️ Resurrección de Jesús',
      eventos: [
        { id: 'a', label: '🌈 El Diluvio y el Arca de Noé' },
        { id: 'b', label: '🏔️ Moisés recibe los 10 Mandamientos' },
        { id: 'c', label: '👑 David es ungido rey de Israel' },
        { id: 'd', label: '🔥 Elías en el Monte Carmelo' },
        { id: 'e', label: '👶 Nacimiento de Jesús en Belén' }
      ],
      correct: ['a','b','c','d','e']
    },
    {
      start: '👶 Nacimiento de Jesús',
      end: '📜 Escritura del Apocalipsis',
      eventos: [
        { id: 'a', label: '🕊️ Bautismo de Jesús en el Jordán' },
        { id: 'b', label: '✝️ Crucifixión de Jesús' },
        { id: 'c', label: '🔥 Pentecostés y venida del Espíritu Santo' },
        { id: 'd', label: '🚶 Conversión de Saulo (Pablo)' },
        { id: 'e', label: '⛵ Viajes misioneros de Pablo' }
      ],
      correct: ['a','b','c','d','e']
    },
    {
      start: '🏛️ Salida de Egipto',
      end: '🏰 Construcción del Templo de Salomón',
      eventos: [
        { id: 'a', label: '📜 Entrega de la Ley en Sinaí' },
        { id: 'b', label: '🏜️ 40 años en el desierto' },
        { id: 'c', label: '🌊 Paso del río Jordán' },
        { id: 'd', label: '⚔️ Conquista de Jericó por Josué' },
        { id: 'e', label: '👑 Reinado del rey David' }
      ],
      correct: ['a','b','c','d','e']
    }
  ];

  let round = 0, score = 0, currentOrder = [];

  const els = {
    list: document.getElementById('list'),
    checkBtn: document.getElementById('checkBtn'),
    feedback: document.getElementById('feedback'),
    round: document.getElementById('round'),
    score: document.getElementById('score')
  };

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function renderRound() {
    const r = ROUNDS[round];
    els.round.textContent = round + 1;
    els.feedback.className = 'feedback';
    els.feedback.textContent = '';

    const eventosDesordenados = shuffle(r.eventos);
    currentOrder = eventosDesordenados.map(e => e.id);

    els.list.innerHTML = '';

    // Inicio fijo
    els.list.appendChild(makeItem({ label: r.start }, 'start', -1));
    eventosDesordenados.forEach((ev, i) => {
      els.list.appendChild(makeItem(ev, 'event', i));
    });
    // Final fijo
    els.list.appendChild(makeItem({ label: r.end }, 'end', -2));

    enableDrag();
  }

  function makeItem(ev, type, idx) {
    const div = document.createElement('div');
    div.className = 'timeline-item' + (type !== 'event' ? ' fixed' : '');
    div.dataset.id = ev.id || '';
    div.dataset.type = type;
    if (type !== 'event') div.innerHTML = `<span class="material-icons handle">push_pin</span><span class="label">${ev.label}</span>`;
    else div.innerHTML = `<span class="material-icons handle">drag_indicator</span><span class="label">${ev.label}</span>`;
    return div;
  }

  let dragEl = null;

  function enableDrag() {
    const items = els.list.querySelectorAll('.timeline-item:not(.fixed)');
    items.forEach(item => {
      item.setAttribute('draggable', 'true');
      item.addEventListener('dragstart', e => {
        dragEl = item;
        item.classList.add('dragging');
      });
      item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
        dragEl = null;
      });
      item.addEventListener('dragover', e => e.preventDefault());
      item.addEventListener('drop', e => {
        e.preventDefault();
        if (!dragEl || dragEl === item) return;
        const parent = els.list;
        const itemsArr = [...parent.querySelectorAll('.timeline-item:not(.fixed)')];
        const dragIdx = itemsArr.indexOf(dragEl);
        const dropIdx = itemsArr.indexOf(item);
        if (dragIdx < dropIdx) item.after(dragEl);
        else item.before(dragEl);
      });
    });
    // Touch fallback: arriba/abajo
    items.forEach(item => {
      const up = document.createElement('button');
      const down = document.createElement('button');
      // Simplificado: se usa drag en desktop, y flechas en móvil
      item.addEventListener('click', () => {
        // Mover hacia arriba al hacer click con shift
        if (event && event.shiftKey) {
          const prev = item.previousElementSibling;
          if (prev && !prev.classList.contains('fixed')) prev.before(item);
        }
      });
    });
  }

  els.checkBtn.addEventListener('click', () => {
    const r = ROUNDS[round];
    const actualOrder = [...els.list.querySelectorAll('.timeline-item:not(.fixed)')]
      .map(el => el.dataset.id);

    const correct = actualOrder.every((id, i) => id === r.correct[i]);

    if (correct) {
      score += 150;
      els.score.textContent = score;
      els.feedback.className = 'feedback ok show pop';
      els.feedback.textContent = '✅ ¡Orden correcto! +150 puntos';
      els.checkBtn.disabled = true;
      setTimeout(() => {
        round++;
        if (round >= ROUNDS.length) finish();
        else {
          els.checkBtn.disabled = false;
          renderRound();
        }
      }, 1400);
    } else {
      els.feedback.className = 'feedback bad show shake';
      els.feedback.textContent = '❌ El orden no es correcto. ¡Sigue intentando!';
      els.list.classList.add('shake');
      setTimeout(() => els.list.classList.remove('shake'), 500);
    }
  });

  function finish() {
    Storage.addScore('timeline', score, true);
    els.feedback.className = 'feedback ok show';
    els.feedback.innerHTML = `
      <p style="font-size:1.3rem;">🏁 ¡Completado! Puntos: <strong>${score}</strong></p>
      <a href="../index.html" class="btn primary" style="margin-top:10px;">Menú</a>
      <button class="btn" id="again" style="margin-top:10px;">Jugar de nuevo</button>`;
    els.list.innerHTML = '';
    els.checkBtn.style.display = 'none';
    document.getElementById('again').addEventListener('click', reset);
  }

  function reset() {
    round = 0; score = 0;
    els.score.textContent = 0;
    els.checkBtn.disabled = false;
    els.checkBtn.style.display = 'inline-flex';
    renderRound();
  }

  document.getElementById('resetBtn').addEventListener('click', () => {
    if (confirm('¿Reiniciar el juego?')) reset();
  });

  renderRound();
})();