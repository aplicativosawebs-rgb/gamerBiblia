(function() {
  const QUESTION_BANK = [
    {
      text: 'Dios creó el mundo en exactamente 6 días.',
      answer: 'amarillo',
      explanation: 'Depende del contexto. Génesis describe 6 días de creación, pero la palabra "día" puede interpretarse como un período de tiempo indefinido, no necesariamente 24 horas.'
    },
    {
      text: 'Jonás fue tragado por una ballena.',
      answer: 'amarillo',
      explanation: 'Depende del contexto. La Biblia dice "un gran pez" (Jonás 1:17), no específicamente una ballena. Las ballenas son mamíferos, no peces técnicamente, pero la traducción popular usa "ballena".'
    },
    {
      text: 'Jesús nació el 25 de diciembre.',
      answer: 'rojo',
      explanation: 'Falso. No hay evidencia bíblica de que Jesús haya nacido en diciembre. La fecha del 25 de diciembre fue establecida por la iglesia cristiana posteriormente para coincidir con festividades paganas.'
    },
    {
      text: 'Pedro fue el primer Papa de la Iglesia Católica.',
      answer: 'amarillo',
      explanation: 'Depende del contexto. Dependiendo de la tradición religiosa: la Iglesia Católica lo considera así, pero otras denominaciones cristianas no reconocen el papado como estructura bíblica.'
    },
    {
      text: 'La Biblia fue escrita en un solo idioma.',
      answer: 'rojo',
      explanation: 'Falso. La Biblia fue escrita en tres idiomas: hebreo (Antiguo Testamento), arameo (partes del Antiguo Testamento) y griego (Nuevo Testamento).'
    },
    {
      text: 'Adán y Eva comieron una manzana en el Jardín del Edén.',
      answer: 'rojo',
      explanation: 'Falso. La Biblia no especifica qué fruto fue. Solo dice "del árbol". La tradición popular asume que fue una manzana, pero no está en el texto bíblico.'
    },
    {
      text: 'Todos los apóstoles fueron martirizados.',
      answer: 'rojo',
      explanation: 'Falso. Aunque muchos apóstoles fueron martirizados, no todos lo fueron. Juan, por ejemplo, se cree que murió de muerte natural en Éfeso en una edad avanzada.'
    },
    {
      text: 'El libro de Job se trata solo de sufrimiento y dolor.',
      answer: 'rojo',
      explanation: 'Falso. Aunque Job sufre, el libro es principalmente una exploración teológica sobre por qué el justo sufre y termina con la restauración de Job y bendiciones dobles.'
    },
    {
      text: 'La Torre de Babel estaba en Mesopotamia.',
      answer: 'amarillo',
      explanation: 'Depende del contexto. La tradición la ubica en Babilonia (actual Irak), pero la Biblia no especifica exactamente dónde estaba. Se basa en interpretaciones históricas y arqueológicas.'
    },
    {
      text: 'Sansón fue invencible contra todos sus enemigos.',
      answer: 'rojo',
      explanation: 'Falso. Sansón solo era invencible mientras mantuviera su pacto con Dios (no cortarse el cabello). Fue derrotado y capturado por los filisteos cuando Dalila le cortó el cabello.'
    },
    {
      text: 'El Antiguo Testamento profetiza sobre la venida de Jesús.',
      answer: 'verde',
      explanation: 'Verdadero. Hay muchas profecías mesiánicas en el Antiguo Testamento, como Isaías 53, Miqueas 5:2, Salmo 22, que los cristianos interpretan como predicciones sobre Jesús.'
    },
    {
      text: 'Matusalén fue la persona más anciana de la Biblia.',
      answer: 'verde',
      explanation: 'Verdadero. Matusalén vivió 969 años, siendo el hombre más longevo mencionado en la Biblia, según Génesis 5:27.'
    },
    {
      text: 'David escribió todos los Salmos.',
      answer: 'rojo',
      explanation: 'Falso. Aunque David escribió muchos Salmos (aproximadamente 73), otros fueron escritos por Moisés, Asaf, los hijos de Coré y otros autores anónimos.'
    },
    {
      text: 'El evangelio de Judas es uno de los cuatro evangelios canónicos.',
      answer: 'rojo',
      explanation: 'Falso. Los cuatro evangelios canónicos son Mateo, Marcos, Lucas y Juan. El evangelio de Judas es un texto apócrifo no incluido en la Biblia oficial.'
    },
    {
      text: 'La reina Ester salvó al pueblo judío de la aniquilación.',
      answer: 'verde',
      explanation: 'Verdadero. En el libro de Ester, ella usa su posición como reina para impedir el genocidio de los judíos en Persia, siendo la heroína de la historia.'
    },
    {
      text: 'Noé predicó durante 120 años mientras construía el arca.',
      answer: 'verde',
      explanation: 'Verdadero. Génesis 6:3 menciona 120 años, y 2 Pedro 2:5 lo describe como un "predicador de justicia", implícito que predicaba durante esa construcción.'
    },
    {
      text: 'El sistema de diezmo en la Biblia incluye solo dinero.',
      answer: 'rojo',
      explanation: 'Falso. En la Biblia, el diezmo se daba principalmente en productos agrícolas, ganado y otros bienes, no en dinero. El diezmo monetario es una práctica posterior.'
    },
    {
      text: 'Moisés escribió los cinco primeros libros de la Biblia.',
      answer: 'amarillo',
      explanation: 'Depende del contexto. Tradicionalmente se le atribuye la autoría (tradición del Pentateuco), pero los eruditos modernos debaten si Moisés escribió directamente todos estos textos o si fueron compilados después.'
    },
    {
      text: 'Caín y Abel fueron los primeros hijos de Adán y Eva.',
      answer: 'verde',
      explanation: 'Verdadero. Génesis 4:1-2 establece que Caín fue el primogénito y Abel su hermano menor, siendo los primeros hijos mencionados.'
    },
    {
      text: 'El símbolo de la paloma representa al Espíritu Santo solo en la Biblia.',
      answer: 'amarillo',
      explanation: 'Depende del contexto. La paloma representa paz y pureza en muchas culturas, pero en la Biblia específicamente se asocia con el Espíritu Santo desde el bautismo de Jesús.'
    }
  ];

  let QUESTIONS = [];
  let currentQuestion = 0;
  let score = 0;
  let answered = false;

  function selectRandomQuestions(count = 5) {
    const shuffled = [...QUESTION_BANK].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  const els = {
    question: document.getElementById('question'),
    verdeBtn: document.getElementById('verdeBtn'),
    amarilloBtn: document.getElementById('amarilloBtn'),
    rojoBtn: document.getElementById('rojoBtn'),
    nextBtn: document.getElementById('nextBtn'),
    feedback: document.getElementById('feedback'),
    progress: document.getElementById('progress'),
    qNum: document.getElementById('qNum'),
    score: document.getElementById('score'),
    questionBox: document.getElementById('questionBox')
  };

  function updateProgress() {
    const percentage = ((currentQuestion + 1) / QUESTIONS.length) * 100;
    els.progress.style.width = percentage + '%';
  }

  function showQuestion() {
    const q = QUESTIONS[currentQuestion];
    els.question.textContent = q.text;
    els.qNum.textContent = currentQuestion + 1;
    document.getElementById('qTotal').textContent = QUESTIONS.length;
    els.feedback.className = 'feedback';
    els.feedback.innerHTML = '';
    els.verdeBtn.disabled = false;
    els.amarilloBtn.disabled = false;
    els.rojoBtn.disabled = false;
    els.verdeBtn.classList.remove('selected');
    els.amarilloBtn.classList.remove('selected');
    els.rojoBtn.classList.remove('selected');
    els.nextBtn.style.display = 'none';
    answered = false;
    updateProgress();
  }

  function checkAnswer(userAnswer) {
    if (answered) return;
    answered = true;

    const q = QUESTIONS[currentQuestion];
    const isCorrect = userAnswer === q.answer;

    // Emojis para cada color
    const colorEmoji = {
      'verde': '🟢',
      'amarillo': '🟡',
      'rojo': '🔴'
    };

    const colorLabel = {
      'verde': 'VERDADERO',
      'amarillo': 'DEPENDE DEL CONTEXTO',
      'rojo': 'FALSO'
    };

    const correctColor = colorEmoji[q.answer];

    if (isCorrect) {
      score += 100;
      els.feedback.className = 'feedback ok show';
      els.feedback.innerHTML = `
        <p style="font-size:1.2rem; color:#10b981;">✅ ¡Correcto!</p>
        <p style="margin:12px 0; color:var(--text-muted);">${q.explanation}</p>
        <p style="font-size:1.1rem; color:#059669; font-weight:bold;">+100 pts</p>
      `;
      if (userAnswer === 'verde') {
        els.verdeBtn.classList.add('selected');
      } else if (userAnswer === 'amarillo') {
        els.amarilloBtn.classList.add('selected');
      } else {
        els.rojoBtn.classList.add('selected');
      }
    } else {
      els.feedback.className = 'feedback error show';
      els.feedback.innerHTML = `
        <p style="font-size:1.2rem; color:#ef4444;">❌ Incorrecto</p>
        <p style="margin:12px 0; color:var(--text-muted);">${q.explanation}</p>
        <p style="color:#dc2626;">Respuesta correcta: <strong>${correctColor} ${colorLabel[q.answer]}</strong></p>
      `;
      // Resaltar respuesta correcta en verde
      if (q.answer === 'verde') {
        els.verdeBtn.classList.add('selected');
      } else if (q.answer === 'amarillo') {
        els.amarilloBtn.classList.add('selected');
      } else {
        els.rojoBtn.classList.add('selected');
      }
    }

    els.verdeBtn.disabled = true;
    els.amarilloBtn.disabled = true;
    els.rojoBtn.disabled = true;
    els.score.textContent = score;

    if (currentQuestion < QUESTIONS.length - 1) {
      els.nextBtn.style.display = 'inline-flex';
    } else {
      setTimeout(finish, 2000);
    }
  }

  function finish() {
    const maxScore = QUESTIONS.length * 100;
    const percentage = Math.round((score / maxScore) * 100);
    let message = '';
    let emoji = '';

    if (percentage === 100) {
      message = '¡Eres un Experto del Semáforo Bíblico!';
      emoji = '🚦';
    } else if (percentage >= 80) {
      message = '¡Excelente desempeño!';
      emoji = '🟢';
    } else if (percentage >= 60) {
      message = '¡Muy bien, sigue mejorando!';
      emoji = '🟡';
    } else if (percentage >= 40) {
      message = 'Buen intento, estudia más.';
      emoji = '📖';
    } else {
      message = 'Sigue aprendiendo la Biblia.';
      emoji = '🙏';
    }

    els.feedback.className = 'feedback ok show win-pulse';
    els.feedback.innerHTML = `
      <p style="font-size:1.5rem; margin-bottom:16px;">${emoji} ${message}</p>
      <p style="font-size:1.1rem; margin-bottom:8px;">Preguntas: <strong>5</strong></p>
      <p style="font-size:1.2rem; color:#10b981; font-weight:bold; margin-bottom:16px;">Puntos totales: <strong>${score}</strong></p>
      <a href="../index.html" class="btn primary">Menú</a>`;
    
    Storage.addScore('semaforo-biblico', score, true);
  }

  els.verdeBtn.addEventListener('click', () => {
    if (!answered) {
      els.verdeBtn.classList.add('selected');
      checkAnswer('verde');
    }
  });

  els.amarilloBtn.addEventListener('click', () => {
    if (!answered) {
      els.amarilloBtn.classList.add('selected');
      checkAnswer('amarillo');
    }
  });

  els.rojoBtn.addEventListener('click', () => {
    if (!answered) {
      els.rojoBtn.classList.add('selected');
      checkAnswer('rojo');
    }
  });

  els.nextBtn.addEventListener('click', () => {
    currentQuestion++;
    showQuestion();
  });

  document.getElementById('resetBtn').addEventListener('click', () => {
    if (confirm('¿Reiniciar el juego?')) {
      QUESTIONS = selectRandomQuestions(5);
      currentQuestion = 0;
      score = 0;
      answered = false;
      els.score.textContent = 0;
      showQuestion();
    }
  });

  // Iniciar con 5 preguntas aleatorias
  QUESTIONS = selectRandomQuestions(5);
  showQuestion();
})();