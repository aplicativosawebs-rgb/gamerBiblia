(function() {
const QUESTION_BANK = [
  {
    text: 'Adán fue creado el primer día de la creación.',
    answer: false,
    explanation: 'Falso. Adán fue creado el sexto día, junto con los animales terrestres (Génesis 1:26-31).'
  },
  {
    text: 'Noé estuvo dentro del arca únicamente durante 40 días y 40 noches.',
    answer: false,
    explanation: 'Falso. Los 40 días corresponden a la lluvia; Noé y su familia estuvieron en el arca algo más de un año en total (Génesis 7 y 8).'
  },
  {
    text: 'Moisés recibió los Diez Mandamientos grabados en el monte Sinaí.',
    answer: true,
    explanation: 'Verdadero. Dios entregó a Moisés las tablas de piedra en el monte Sinaí (Éxodo 19 y 20).'
  },
  {
    text: 'El libro de Jonás menciona explícitamente que el profeta fue tragado por una ballena.',
    answer: false,
    explanation: 'Falso. El texto bíblico especifica que fue un "gran pez" (Jonás 1:17), sin categorizarlo como ballena.'
  },
  {
    text: 'Sansón perdió su fuerza inmediatamente después de que le raparon la cabeza.',
    answer: true,
    explanation: 'Verdadero. Al violar su voto nazareo al cortársele el cabello, la presencia y fuerza de Dios se apartaron de él (Jueces 16:19-20).'
  },
  {
    text: 'David derribó a Goliat utilizando una espada forjada por el profeta Samuel.',
    answer: false,
    explanation: 'Falso. David lo derribó usando una honda y una piedra; posteriormente usó la misma espada de Goliat para decapitarlo (1 Samuel 17:50-51).'
  },
  {
    text: 'Salomón fue el padre de Roboam.',
    answer: true,
    explanation: 'Verdadero. Roboam heredó el trono tras la muerte de su padre Salomón (1 Reyes 11:43).'
  },
  {
    text: 'Elías ascendió al cielo impulsado por un torbellino.',
    answer: true,
    explanation: 'Verdadero. Un carro de fuego apareció para separarlo de Eliseo, y Elías subió en el torbellino (2 Reyes 2:11).'
  },
  {
    text: 'Jesús nació en la ciudad de Nazaret.',
    answer: false,
    explanation: 'Falso. Jesús nació en Belén de Judea (Mateo 2:1), aunque se crió en Nazaret.'
  },
  {
    text: 'Según la tradición eclesial, el apóstol Pedro fue crucificado de cabeza en Roma.',
    answer: true,
    explanation: 'Verdadero. Aunque no consta en la Biblia, la tradición histórica cristiana primitiva afirma que pidió ser crucificado de cabeza por no considerarse digno de morir igual que Jesús.'
  },
  {
    text: 'María Magdalena fue la primera persona en ver a Jesús resucitado.',
    answer: true,
    explanation: 'Verdadero. Según Marcos 16:9 y Juan 20:14-16, Jesús se apareció primero a María Magdalena.'
  },
  {
    text: 'Jacob tuvo 12 hijos que dieron origen a las tribus de Israel.',
    answer: true,
    explanation: 'Verdadero. Los 12 hijos de Jacob fueron los patriarcas de las tribus israelitas (Génesis 35:22-26).'
  },
  {
    text: 'Dalila traicionó a Sansón revelando el secreto de su fuerza a los filisteos.',
    answer: false,
    explanation: 'Falso. Dalila no sabía el secreto; presionó a Sansón hasta que él mismo se lo confeso, y ella luego vendió esa información (Jueces 16:18).'
  },
  {
    text: 'Caín fue el primogénito de Adán y Eva.',
    answer: true,
    explanation: 'Verdadero. Caín fue el primer hijo concebido por Adán y Eva, seguido de Abel (Génesis 4:1-2).'
  },
  {
    text: 'Lot era tío de Abraham.',
    answer: false,
    explanation: 'Falso. Lot era sobrino de Abraham, hijo de su hermano Harán (Génesis 11:27).'
  },
  {
    text: 'Moisés entró a la Tierra Prometida junto con el pueblo de Israel antes de morir.',
    answer: false,
    explanation: 'Falso. Moisés contempló la tierra desde el monte Nebo, pero no se le permitió entrar; Josué lideró la entrada (Deuteronomio 34:1-5).'
  },
  {
    text: 'Matusalén es registrado en la Biblia como el hombre más longevo, viviendo 969 años.',
    answer: true,
    explanation: 'Verdadero. Según Génesis 5:27, Matusalén vivió 969 años antes de morir.'
  },
  {
    text: 'El rey Saúl fue el primer rey coronado sobre Israel.',
    answer: true,
    explanation: 'Verdadero. Saúl fue ungido por el profeta Samuel como el primer monarca de Israel (1 Samuel 10:1).'
  },
  {
    text: 'Jesús tenía exactamente 12 discípulos en total durante todo su ministerio terrenal.',
    answer: false,
    explanation: 'Falso. Tuvo muchos seguidores y discípulos (como los 70 enviados en Lucas 10); dentro de ellos escogió a 12 para ser apóstoles (Lucas 6:13).'
  },
  {
    text: 'El Apocalipsis fue escrito por el apóstol Pablo mientras estaba encarcelado.',
    answer: false,
    explanation: 'Falso. Fue escrito por el apóstol Juan mientras estaba exiliado en la isla de Patmos (Apocalipsis 1:9).'
  },
  {
    text: 'Sara concibió y dio a luz a Isaac cuando tenía alrededor de 90 años.',
    answer: true,
    explanation: 'Verdadero. La Biblia registra que Sara tenía 90 años y Abraham 100 cuando nació Isaac (Génesis 17:17 y 21:5).'
  },
  {
    text: 'Judas Iscariote entregó a Jesús a cambio de 30 monedas de oro.',
    answer: false,
    explanation: 'Falso. El acuerdo pactado con los principales sacerdotes fue por 30 piezas de plata (Mateo 26:15).'
  },
  {
    text: 'El rey Salomón fue famoso por mandar a edificar el primer Templo de Jerusalén.',
    answer: true,
    explanation: 'Verdadero. Aunque su padre David reunió los materiales, fue Salomón quien construyó el Templo (1 Reyes 6).'
  },
  {
    text: 'Gedeón derrotó al ejército madianita reuniendo un batallón masivo de 32,000 soldados.',
    answer: false,
    explanation: 'Falso. Dios redujo el ejército de Gedeón a tan solo 300 hombres para que la victoria fuera atribuida al poder divino (Jueces 7:7).'
  },
  {
    text: 'Pablo de Tarso originalmente perseguía a la iglesia cristiana antes de su conversión.',
    answer: true,
    explanation: 'Verdadero. Conocido entonces como Saulo, buscaba y encarcelaba a los seguidores de Jesús antes de su experiencia camino a Damasco (Hechos 9:1-2).'
  },
  {
    text: 'El muro de Jericó cayó tras la oración en silencio del pueblo durante siete días.',
    answer: false,
    explanation: 'Falso. El último día, tras dar siete vueltas, los sacerdotes tocaron las trompetas y el pueblo lanzó un gran grito de guerra, desplomando el muro (Josué 6:20).'
  },
  {
    text: 'Lázaro llevaba cuatro días de muerto cuando Jesús lo resucitó en Betania.',
    answer: true,
    explanation: 'Verdadero. Marta advirtió que ya había mal olor porque llevaba cuatro días en el sepulcro (Juan 11:39).'
  },
  {
    text: 'El fruto prohibido consumido en el Jardín del Edén se menciona explícitamente como una manzana.',
    answer: false,
    explanation: 'Falso. La Biblia solo lo describe como "el fruto del árbol del conocimiento del bien y del mal" (Génesis 2:16-17); no especifica qué fruta era.'
  },
  {
    text: 'Daniel fue arrojado al foso de los leones por negarse a dejar de orar a Dios.',
    answer: true,
    explanation: 'Verdadero. Mantuvo su costumbre de orar tres veces al día desafiando un edicto real firmado por el rey Darío (Daniel 6:10-16).'
  },
  {
    text: 'Juan el Bautista era primo segundo o pariente cercano de Jesús.',
    answer: true,
    explanation: 'Verdadero. Sus madres, María e Isabel, eran parientes (Lucas 1:36).'
  },
  {
    text: 'Esther era una reina persa de origen judío que arriesgó su vida para salvar a su pueblo.',
    answer: true,
    explanation: 'Verdadero. Se presentó ante el rey Asuero sin ser llamada para interceder contra el decreto de Amán (Ester 4:16).'
  },
  {
    text: 'Jesús nació en un establo porque no había lugar para ellos en la mesón.',
    answer: true,
    explanation: 'Verdadero. María lo envolvió en pañales y lo acostó en un pesebre debido a la falta de alojamiento (Lucas 2:7).'
  },
  {
    text: 'El profeta Jonás se alegró de inmediato cuando la ciudad de Nínive se arrepintió.',
    answer: false,
    explanation: 'Falso. Jonás se disgustó y se enojó enormemente porque deseaba ver el juicio sobre la ciudad (Jonás 4:1).'
  },
  {
    text: 'Jesús convirtió agua en vino como su primer milagro registrado en el Evangelio de Juan.',
    answer: true,
    explanation: 'Verdadero. Ocurrió durante las bodas de Caná de Galilea (Juan 2:11).'
  },
  {
    text: 'El rey David escribió la totalidad de los 150 capítulos del libro de los Salmos.',
    answer: false,
    explanation: 'Falso. David escribió una gran parte, pero otros salmos fueron redactados por Asaf, los hijos de Coré, Salomón, Moisés e autores anónimos.'
  },
  {
    text: 'Moisés entró a la Tierra Prometida junto con el pueblo de Israel antes de morir.',
    answer: false,
    explanation: 'Falso. Moisés contempló la tierra desde el monte Nebo, pero no se le permitió entrar; Josué lideró la entrada (Deuteronomio 34:1-5).'
  },
  {
    text: 'Matusalén es registrado en la Biblia como el hombre más longevo, viviendo 969 años.',
    answer: true,
    explanation: 'Verdadero. Según Génesis 5:27, Matusalén vivió 969 años antes de morir.'
  },
  {
    text: 'El rey Saúl fue el primer rey coronado sobre Israel.',
    answer: true,
    explanation: 'Verdadero. Saúl fue ungido por el profeta Samuel como el primer monarca de Israel (1 Samuel 10:1).'
  },
  {
    text: 'Jesús tenía exactamente 12 discípulos en total durante todo su ministerio terrenal.',
    answer: false,
    explanation: 'Falso. Tuvo muchos seguidores y discípulos (como los 70 enviados en Lucas 10); dentro de ellos escogió a 12 para ser apóstoles (Lucas 6:13).'
  },
  {
    text: 'El Apocalipsis fue escrito por el apóstol Pablo mientras estaba encarcelado.',
    answer: false,
    explanation: 'Falso. Fue escrito por el apóstol Juan mientras estaba exiliado en la isla de Patmos (Apocalipsis 1:9).'
  },
  {
    text: 'Sara concibió y dio a luz a Isaac cuando tenía alrededor de 90 años.',
    answer: true,
    explanation: 'Verdadero. La Biblia registra que Sara tenía 90 años y Abraham 100 cuando nació Isaac (Génesis 17:17 y 21:5).'
  },
  {
    text: 'Judas Iscariote entregó a Jesús a cambio de 30 monedas de oro.',
    answer: false,
    explanation: 'Falso. El acuerdo pactado con los principales sacerdotes fue por 30 piezas de plata (Mateo 26:15).'
  },
  {
    text: 'El rey Salomón fue famoso por mandar a edificar el primer Templo de Jerusalén.',
    answer: true,
    explanation: 'Verdadero. Aunque su padre David reunió los materiales, fue Salomón quien construyó el Templo (1 Reyes 6).'
  },
  {
    text: 'Gedeón derrotó al ejército madianita reuniendo un batallón masivo de 32,000 soldados.',
    answer: false,
    explanation: 'Falso. Dios redujo el ejército de Gedeón a tan solo 300 hombres para que la victoria fuera atribuida al poder divino (Jueces 7:7).'
  },
  {
    text: 'Pablo de Tarso originalmente perseguía a la iglesia cristiana antes de su conversión.',
    answer: true,
    explanation: 'Verdadero. Conocido entonces como Saulo, buscaba y encarcelaba a los seguidores de Jesús antes de su experiencia camino a Damasco (Hechos 9:1-2).'
  },
  {
    text: 'El muro de Jericó cayó tras la oración en silencio del pueblo durante siete días.',
    answer: false,
    explanation: 'Falso. El último día, tras dar siete vueltas, los sacerdotes tocaron las trompetas y el pueblo lanzó un gran grito de guerra, desplomando el muro (Josué 6:20).'
  },
  {
    text: 'Lázaro llevaba cuatro días de muerto cuando Jesús lo resucitó en Betania.',
    answer: true,
    explanation: 'Verdadero. Marta advirtió que ya había mal olor porque llevaba cuatro días en el sepulcro (Juan 11:39).'
  },
  {
    text: 'El fruto prohibido consumido en el Jardín del Edén se menciona explícitamente como una manzana.',
    answer: false,
    explanation: 'Falso. La Biblia solo lo describe como "el fruto del árbol del conocimiento del bien y del mal" (Génesis 2:16-17); no especifica qué fruta era.'
  },
  {
    text: 'Daniel fue arrojado al foso de los leones por negarse a dejar de orar a Dios.',
    answer: true,
    explanation: 'Verdadero. Mantuvo su costumbre de orar tres veces al día desafiando un edicto real firmado por el rey Darío (Daniel 6:10-16).'
  },
  {
    text: 'Juan el Bautista era primo segundo o pariente cercano de Jesús.',
    answer: true,
    explanation: 'Verdadero. Sus madres, María e Isabel, eran parientes (Lucas 1:36).'
  },
  {
    text: 'Esther era una reina persa de origen judío que arriesgó su vida para salvar a su pueblo.',
    answer: true,
    explanation: 'Verdadero. Se presentó ante el rey Asuero sin ser llamada para interceder contra el decreto de Amán (Ester 4:16).'
  },
  {
    text: 'Jesús nació en un establo porque no había lugar para ellos en la mesón.',
    answer: true,
    explanation: 'Verdadero. María lo envolvió en pañales y lo acostó en un pesebre debido a la falta de alojamiento (Lucas 2:7).'
  },
  {
    text: 'El profeta Jonás se alegró de inmediato cuando la ciudad de Nínive se arrepintió.',
    answer: false,
    explanation: 'Falso. Jonás se disgustó y se enojó enormemente porque deseaba ver el juicio sobre la ciudad (Jonás 4:1).'
  },
  {
    text: 'Jesús convirtió agua en vino como su primer milagro registrado en el Evangelio de Juan.',
    answer: true,
    explanation: 'Verdadero. Ocurrió durante las bodas de Caná de Galilea (Juan 2:11).'
  },
  {
    text: 'El rey David escribió la totalidad de los 150 capítulos del libro de los Salmos.',
    answer: false,
    explanation: 'Falso. David escribió una gran parte, pero otros salmos fueron redactados por Asaf, los hijos de Coré, Salomón, Moisés e autores anónimos.'
  }
];

  let QUESTIONS = [];
  let currentQuestion = 0;
  let score = 0;
  let correct = 0;
  let answered = false;

  function selectRandomQuestions(count = 5) {
    const shuffled = [...QUESTION_BANK].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  const els = {
    question: document.getElementById('question'),
    verdaderoBtn: document.getElementById('verdaderoBtn'),
    falsoBtn: document.getElementById('falsoBtn'),
    nextBtn: document.getElementById('nextBtn'),
    feedback: document.getElementById('feedback'),
    progress: document.getElementById('progress'),
    qNum: document.getElementById('qNum'),
    score: document.getElementById('score'),
    correct: document.getElementById('correct'),
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
    els.verdaderoBtn.disabled = false;
    els.falsoBtn.disabled = false;
    els.verdaderoBtn.classList.remove('selected');
    els.falsoBtn.classList.remove('selected');
    els.nextBtn.style.display = 'none';
    answered = false;
    updateProgress();
  }

  function checkAnswer(userAnswer) {
    if (answered) return;
    answered = true;

    const q = QUESTIONS[currentQuestion];
    const isCorrect = userAnswer === q.answer;

    if (isCorrect) {
      correct++;
      score += 100; // 100 puntos por acierto
      els.feedback.className = 'feedback ok show';
      els.feedback.innerHTML = `
        <p style="font-size:1.1rem; color:#10b981;">✅ ¡Correcto!</p>
        <p style="color:var(--text-muted); margin:8px 0;">${q.explanation}</p>
        <p style="font-size:1.2rem; color:#059669; font-weight:bold;">+100 pts</p>
      `;
      if (userAnswer) {
        els.verdaderoBtn.classList.add('selected');
      } else {
        els.falsoBtn.classList.add('selected');
      }
    } else {
      els.feedback.className = 'feedback error show';
      const correctText = q.answer ? 'VERDADERO' : 'FALSO';
      els.feedback.innerHTML = `
        <p style="font-size:1.1rem; color:#ef4444;">❌ Incorrecto</p>
        <p style="color:var(--text-muted); margin:8px 0;">${q.explanation}</p>
        <p style="color:#dc2626;">La respuesta correcta era: <strong>${correctText}</strong></p>
      `;
      if (!userAnswer) {
        els.verdaderoBtn.classList.add('selected');
      } else {
        els.falsoBtn.classList.add('selected');
      }
    }

    els.verdaderoBtn.disabled = true;
    els.falsoBtn.disabled = true;
    els.correct.textContent = correct;
    els.score.textContent = score;

    if (currentQuestion < QUESTIONS.length - 1) {
      els.nextBtn.style.display = 'inline-flex';
    } else {
      setTimeout(finish, 2000);
    }
  }

  function finish() {
    const percentage = Math.round((correct / QUESTIONS.length) * 100);
    let message = '';
    let emoji = '';

    if (percentage === 100) {
      message = '¡Eres un experto en la Biblia!';
      emoji = '🌟';
    } else if (percentage >= 80) {
      message = '¡Excelente conocimiento bíblico!';
      emoji = '🎯';
    } else if (percentage >= 60) {
      message = '¡Muy bien, sigue aprendiendo!';
      emoji = '💪';
    } else if (percentage >= 40) {
      message = 'Buen intento, practica más.';
      emoji = '📖';
    } else {
      message = 'Sigue estudiando la Biblia.';
      emoji = '🙏';
    }

    els.feedback.className = 'feedback ok show win-pulse';
    els.feedback.innerHTML = `
      <p style="font-size:1.5rem; margin-bottom:16px;">${emoji} ${message}</p>
      <p style="font-size:1.1rem; margin-bottom:8px;">Respuestas correctas: <strong>${correct}/${QUESTIONS.length}</strong></p>
      <p style="font-size:1.2rem; color:#10b981; font-weight:bold; margin-bottom:16px;">Puntos totales: <strong>${score}</strong></p>
      <a href="../index.html" class="btn primary">Menú</a>`;
    
    Storage.addScore('verdadero-falso', score, true);
  }

  els.verdaderoBtn.addEventListener('click', () => {
    if (!answered) {
      els.verdaderoBtn.classList.add('selected');
      checkAnswer(true);
    }
  });

  els.falsoBtn.addEventListener('click', () => {
    if (!answered) {
      els.falsoBtn.classList.add('selected');
      checkAnswer(false);
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
      correct = 0;
      answered = false;
      els.correct.textContent = 0;
      els.score.textContent = 0;
      showQuestion();
    }
  });

  // Iniciar con 5 preguntas aleatorias
  QUESTIONS = selectRandomQuestions(5);
  showQuestion();
})();