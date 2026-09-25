(function () {
  // ------------
  const ENIGMAS = [
    {
      // TRAMPA: Juan 3:16 es la respuesta que todos gritan. La correcta es otra.
      pregunta: 'Un hombre importante llega de noche a hacer preguntas incómodas. En esa misma conversación se menciona un objeto que se levanta en el desierto y que después da nombre a un famoso versículo. ¿A qué referencia pertenece ese versículo?',
      pista: 'Ojo: el personaje no es Nicodemo, y el que habla no es Jesús.',
      opciones: [
        { book: 'Juan', chapter: 3, verse: 14 },
        { book: 'Juan', chapter: 3, verse: 16 },
        { book: 'Números', chapter: 21, verse: 9 },
        { book: 'Éxodo', chapter: 4, verse: 2 }
      ],
      correctaIdx: 0,
      versiculoTexto: '"Y como Moisés levantó la serpiente en el desierto, así es necesario que el Hijo del Hombre sea levantado."'
    },
    {
      // TRAMPA: Éxodo 3:14 ("YO SOY") es lo que todos citan. La correcta es un pasaje posterior.
      pregunta: 'En un momento de crisis total, un líder le pide a Dios algo que nadie había pedido antes: ver su gloria. La respuesta divina no es un espectáculo, sino una declaración sobre el nombre. ¿Dónde ocurre?',
      pista: 'No es la zarza ardiente. El pueblo ya había hecho un becerro de oro y la situación era tensa.',
      opciones: [
        { book: 'Éxodo', chapter: 3, verse: 14 },
        { book: 'Éxodo', chapter: 33, verse: 19 },
        { book: 'Éxodo', chapter: 34, verse: 6 },
        { book: 'Deuteronomio', chapter: 34, verse: 10 }
      ],
      correctaIdx: 1,
      versiculoTexto: '"Yo haré pasar todo mi bien delante de tu rostro, y proclamaré el nombre de Jehová delante de ti..."'
    },
    {
      // TRAMPA: Salmos 23 es lo obvio cuando se habla de pastor. Correcta: Ezequiel 34.
      pregunta: 'Un profeta exiliado en Babilonia denuncia a los líderes de su pueblo con una imagen pastoral muy fuerte: ellos se comen la leche, se visten con la lana, pero no cuidan a las ovejas enfermas. ¿En qué referencia está?',
      pista: 'El profeta también tuvo la visión del valle de los huesos secos.',
      opciones: [
        { book: 'Salmos', chapter: 23, verse: 1 },
        { book: 'Juan', chapter: 10, verse: 11 },
        { book: 'Ezequiel', chapter: 34, verse: 4 },
        { book: 'Isaías', chapter: 40, verse: 11 }
      ],
      correctaIdx: 2,
      versiculoTexto: '"No fortalecisteis las débiles, ni curasteis la enferma, ni vendasteis la perniquebrada, ni volvisteis al redil la descarriada, ni buscasteis la perdida, sino que os habéis enseñoreado de ellas con dureza y con violencia."'
    },
    {
      // TRAMPA: 1 Samuel 16:7 ("Dios mira el corazón") es la que todos citan. Correcta: el versículo 6, la reacción de Samuel.
      pregunta: 'Cuando Samuel ve al primer candidato a rey, piensa para sí mismo que ese es el ungido de Dios. El texto narra esa reacción interna antes de que Dios lo corrija. ¿En qué referencia está ese momento?',
      pista: 'No es el versículo famoso sobre mirar el corazón. Es el anterior, el de la impresión de Samuel.',
      opciones: [
        { book: '1 Samuel', chapter: 16, verse: 6 },
        { book: '1 Samuel', chapter: 16, verse: 7 },
        { book: '1 Samuel', chapter: 10, verse: 24 },
        { book: '1 Samuel', chapter: 17, verse: 45 }
      ],
      correctaIdx: 0,
      versiculoTexto: '"Y aconteció que cuando ellos vinieron, él vio a Eliab, y dijo: De cierto delante de Jehová está su ungido."'
    },
    {
      // TRAMPA: Salmos 51 (el salmo de arrepentimiento de David) es lo obvio. Correcta: la confrontación misma en 2 Samuel.
      pregunta: 'Un profeta le cuenta a un rey la historia de un hombre rico que le quita a un pobre su única oveja. El rey se indigna y dicta sentencia... sin darse cuenta de que el profeta hablaba de él. ¿Dónde está ese momento exacto?',
      pista: 'Está en el mismo capítulo donde el profeta suelta la frase "Tú eres aquel hombre".',
      opciones: [
        { book: '2 Samuel', chapter: 11, verse: 27 },
        { book: '2 Samuel', chapter: 12, verse: 7 },
        { book: 'Salmos', chapter: 51, verse: 4 },
        { book: '1 Reyes', chapter: 21, verse: 19 }
      ],
      correctaIdx: 1,
      versiculoTexto: '"Entonces dijo Natán a David: Tú eres aquel hombre."'
    },
    {
      // TRAMPA: 1 Reyes 18 (fuego del Carmelo) es lo que todos recuerdan de Elías. Correcta: el capítulo siguiente, en Horeb.
      pregunta: 'Un profeta huye al desierto, quiere morirse, es alimentado por un ángel y camina 40 días hasta una montaña donde Dios le habla. Pero Dios no se manifiesta en lo espectacular. ¿En qué referencia está esa escena?',
      pista: 'El profeta acaba de tener su momento más famoso: fuego del cielo en un monte con 450 profetas rivales.',
      opciones: [
        { book: '1 Reyes', chapter: 18, verse: 38 },
        { book: '1 Reyes', chapter: 19, verse: 12 },
        { book: 'Éxodo', chapter: 19, verse: 18 },
        { book: 'Éxodo', chapter: 3, verse: 2 }
      ],
      correctaIdx: 1,
      versiculoTexto: '"Y tras el terremoto, un fuego; pero Jehová no estaba en el fuego. Y tras el fuego, una voz apacible y delicada."'
    },
    {
      // TRAMPA: Isaías 41:10 ("No temas") es la respuesta automática. Correcta: 2 Crónicas 20, Josafat.
      pregunta: 'Un rey se entera de que tres ejércitos enemigos vienen contra él. En lugar de buscar refuerzos militares, convoca un ayuno nacional y pone a los cantores al frente del ejército. ¿En qué referencia se narra?',
      pista: 'El rey es descendiente de David, pero no es Ezequías ni Josías.',
      opciones: [
        { book: '2 Crónicas', chapter: 20, verse: 20 },
        { book: '2 Crónicas', chapter: 7, verse: 14 },
        { book: 'Isaías', chapter: 37, verse: 33 },
        { book: '2 Reyes', chapter: 19, verse: 35 }
      ],
      correctaIdx: 0,
      versiculoTexto: '"... Creed en Jehová vuestro Dios, y estaréis seguros; creed a sus profetas, y seréis prosperados."'
    },
    {
      // TRAMPA: Salmos 119:105 es lo obvio con "lámpara". Correcta: Proverbios 6:23.
      pregunta: 'Un sabio compara la instrucción de los padres con un objeto que ilumina en la oscuridad, y añade que la reprensión es el camino a la vida. ¿En qué referencia está?',
      pista: 'No es el salmo más largo de la Biblia, aunque el tema sea parecido.',
      opciones: [
        { book: 'Salmos', chapter: 119, verse: 105 },
        { book: 'Proverbios', chapter: 6, verse: 23 },
        { book: 'Proverbios', chapter: 4, verse: 18 },
        { book: 'Isaías', chapter: 30, verse: 21 }
      ],
      correctaIdx: 1,
      versiculoTexto: '"Porque el mandamiento es lámpara, y la enseñanza es luz, y camino de vida las reprensiones que te instruyen."'
    },
    {
      // TRAMPA: Isaías 53 es lo obvio cuando se menciona "Siervo sufriente". Correcta: Zacarías 12:10.
      pregunta: 'Un profeta posterior al exilio anuncia que el pueblo mirará a aquel a quien traspasaron y hará lamentación como por un hijo único. ¿En qué referencia está?',
      pista: 'No es Isaías 53, aunque el tema sea similar. Este profeta también habla de un rey que entra montado en un asno.',
      opciones: [
        { book: 'Isaías', chapter: 53, verse: 5 },
        { book: 'Zacarías', chapter: 12, verse: 10 },
        { book: 'Jeremías', chapter: 31, verse: 31 },
        { book: 'Malaquías', chapter: 3, verse: 1 }
      ],
      correctaIdx: 1,
      versiculoTexto: '"Y mirarán a mí, a quien traspasaron, y llorarán como se llora por hijo unigénito, afligiéndose por él como quien se aflige por el primogénito."'
    },
    {
      // TRAMPA: Daniel 6:22 (Daniel en el foso) es lo que todos recuerdan. Correcta: Daniel 3:25 (el cuarto en el horno).
      pregunta: 'Un rey pagano mira dentro del fuego y hace un cálculo que no le cuadra: metió a tres hombres, pero ve cuatro. ¿En qué referencia está su propia declaración?',
      pista: 'No es el foso de los leones. Es un castigo por no adorar una estatua de oro.',
      opciones: [
        { book: 'Daniel', chapter: 6, verse: 22 },
        { book: 'Daniel', chapter: 3, verse: 25 },
        { book: 'Ezequiel', chapter: 1, verse: 26 },
        { book: 'Isaías', chapter: 6, verse: 1 }
      ],
      correctaIdx: 1,
      versiculoTexto: '"He aquí yo veo cuatro varones sueltos, que se pasean en medio del fuego sin sufrir ningún daño; y el aspecto del cuarto es semejante a hijo de los dioses."'
    },
    {
      // TRAMPA: Amós 5:24 ("corra el juicio como las aguas") es lo obvio. Correcta: Miqueas 6:8.
      pregunta: 'Un profeta imagina un juicio legal entre Dios y su pueblo. El pueblo pregunta qué ofrenda puede presentar, y Dios responde que lo que quiere no es sacrificio sino tres actitudes concretas. ¿En qué referencia está?',
      pista: 'Este profeta contemporáneo de Isaías es conocido por anunciar que el Mesías nacería en Belén.',
      opciones: [
        { book: 'Amós', chapter: 5, verse: 24 },
        { book: 'Oseas', chapter: 6, verse: 6 },
        { book: 'Miqueas', chapter: 6, verse: 8 },
        { book: 'Zacarías', chapter: 7, verse: 9 }
      ],
      correctaIdx: 2,
      versiculoTexto: '"Oh hombre, él te ha declarado lo que es bueno, y qué pide Jehová de ti: solamente hacer justicia, y amar misericordia, y humillarte ante tu Dios."'
    },
    {
      // TRAMPA: Romanos 1:17 / Hebreos 10:38 son las citas del NT. Correcta: la fuente original en Habacuc.
      pregunta: 'Un profeta se queja porque Dios parece tardar en actuar. Dios responde con una frase que después Pablo usará tres veces en el Nuevo Testamento para explicar la justificación. ¿Cuál es la fuente original?',
      pista: 'No está en Romanos ni en Hebreos. Es un profeta menor que también escribió un cántico sobre la higuera que no florece.',
      opciones: [
        { book: 'Romanos', chapter: 1, verse: 17 },
        { book: 'Hebreos', chapter: 10, verse: 38 },
        { book: 'Habacuc', chapter: 2, verse: 4 },
        { book: 'Gálatas', chapter: 3, verse: 11 }
      ],
      correctaIdx: 2,
      versiculoTexto: '"He aquí se enorgullece aquel cuya alma no es recta, mas el justo por su fe vivirá."'
    },
    {
      // TRAMPA: Lucas 12:31 (paralelo) es lo obvio. Correcta: Mateo 6:33 (versión del Sermón del Monte).
      pregunta: 'En un mismo sermón, Jesús habla de la ansiedad por la comida, la bebida y la ropa, y luego da una instrucción con una sola prioridad. Mateo y Lucas registran la escena con matices distintos. ¿En qué referencia mateana está?',
      pista: 'Es el sermón que empieza con las bienaventuranzas y contiene el Padre Nuestro.',
      opciones: [
        { book: 'Mateo', chapter: 5, verse: 6 },
        { book: 'Mateo', chapter: 6, verse: 33 },
        { book: 'Lucas', chapter: 12, verse: 31 },
        { book: 'Marcos', chapter: 10, verse: 29 }
      ],
      correctaIdx: 1,
      versiculoTexto: '"Mas buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas."'
    },
    {
      // TRAMPA: Romanos 12:2 (transformación de la mente) es lo obvio. Correcta: Efesios 4:23.
      pregunta: 'Pablo les dice a los creyentes que se renueven en el espíritu de su mente y se despojen del viejo hombre. ¿En qué carta está esa instrucción?',
      pista: 'No es Romanos. Es una carta escrita desde la prisión a una iglesia de Asia Menor donde Pablo habla de poner toda la armadura.',
      opciones: [
        { book: 'Romanos', chapter: 12, verse: 2 },
        { book: 'Efesios', chapter: 4, verse: 23 },
        { book: 'Colosenses', chapter: 3, verse: 10 },
        { book: 'Filipenses', chapter: 4, verse: 8 }
      ],
      correctaIdx: 1,
      versiculoTexto: '"Y renovaos en el espíritu de vuestra mente."'
    },
    {
      // TRAMPA: Lucas 24:32 (famoso "arder el corazón") es lo obvio. Correcta: la misma escena, versículo 45.
      pregunta: 'Después de la resurrección, dos discípulos caminan a Emaús con Jesús sin reconocerlo. En el relato de Lucas, un versículo describe cómo Jesús les abrió el entendimiento para comprender las Escrituras. ¿En qué referencia está ese momento concreto?',
      pista: 'No es el versículo donde los discípulos dicen que su corazón ardía. Es el otro, el que explica qué hizo Jesús con sus mentes.',
      opciones: [
        { book: 'Lucas', chapter: 24, verse: 32 },
        { book: 'Lucas', chapter: 24, verse: 45 },
        { book: 'Juan', chapter: 20, verse: 20 },
        { book: 'Hechos', chapter: 2, verse: 42 }
      ],
      correctaIdx: 1,
      versiculoTexto: '"Entonces les abrió el entendimiento, para que comprendiesen las Escrituras."'
    }
  ];
// -----------
  const TOTAL_ENIGMAS = 5;
  let current = 0;
  let score = 0;
  let deck = [];
  let finished = false;

  const els = {
    question: document.getElementById('question'),
    hint: document.getElementById('hint'),
    options: document.getElementById('options'),
    feedback: document.getElementById('feedback'),
    nextBtn: document.getElementById('nextBtn'),
    enigmaNum: document.getElementById('enigmaNum'),
    score: document.getElementById('score'),
    progress: document.getElementById('progress'),
    section: document.getElementById('section')
  };

  function shuffle(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  const fmt = ref => `${ref.book} ${ref.chapter}:${ref.verse}`;

  function render() {
    if (finished) return;

    const e = deck[current];

    els.enigmaNum.textContent = current + 1;
    els.progress.style.width = (current / deck.length * 100) + '%';
    els.question.textContent = e.pregunta;
    els.hint.textContent = '💡 ' + e.pista;
    els.feedback.className = 'feedback';
    els.feedback.textContent = '';
    els.nextBtn.style.display = 'none';
    els.options.innerHTML = '';

    if (els.section) {
      els.section.textContent = `Enigma ${current + 1} de ${deck.length}`;
    }

    shuffle(e.opciones).forEach(op => {
      const b = document.createElement('button');
      b.className = 'option-btn';
      b.innerHTML = `<span class="material-icons" style="font-size:1.1rem;vertical-align:middle;margin-right:6px;">menu_book</span>${fmt(op)}`;
      b.addEventListener('click', () => answer(b, op, e));
      els.options.appendChild(b);
    });
  }

  function answer(btn, selected, e) {
    if (finished) return;

    const all = els.options.querySelectorAll('.option-btn');
    all.forEach(b => b.disabled = true);

    const correcta = e.opciones[e.correctaIdx];

    if (selected === correcta) {
      btn.classList.add('correct', 'pop');
      score += 100;
      els.score.textContent = score;
      els.feedback.className = 'feedback ok show';
      els.feedback.innerHTML = `
        <p style="margin-bottom:8px;">🔓 <strong>¡Código descifrado!</strong> +100 puntos</p>
        <div style="background:rgba(0,0,0,0.2);padding:12px;border-radius:10px;font-style:italic;font-weight:400;">
          ${e.versiculoTexto}<br>
          <span style="color:var(--accent);font-weight:600;">— ${fmt(correcta)}</span>
        </div>`;
    } else {
      btn.classList.add('wrong', 'shake');
      all.forEach(b => {
        if (b.textContent.includes(fmt(correcta))) b.classList.add('correct');
      });
      els.feedback.className = 'feedback bad show';
      els.feedback.innerHTML = `
        <p>❌ La referencia correcta era <strong>${fmt(correcta)}</strong></p>
        <div style="background:rgba(0,0,0,0.2);padding:12px;border-radius:10px;font-style:italic;font-weight:400;margin-top:8px;">
          ${e.versiculoTexto}
        </div>`;
    }

    els.nextBtn.style.display = 'inline-flex';
  }

  els.nextBtn.addEventListener('click', () => {
    current++;
    if (current >= deck.length) {
      finish();
    } else {
      render();
    }
  });

  function finish() {
    finished = true;
    els.progress.style.width = '100%';
    Storage.addScore('codigo-secreto', score, true);
    els.question.textContent = '🎉 ¡Has descifrado todos los códigos secretos!';
    els.hint.style.display = 'none';
    els.options.innerHTML = '';
    els.feedback.className = 'feedback ok show';
    els.feedback.innerHTML = `
      <p style="font-size:1.4rem;margin-bottom:14px;">Puntos finales: <strong>${score}</strong> / ${deck.length * 100}</p>
      <a href="../index.html" class="btn primary">Menú</a>
      <button class="btn" id="again" style="margin-left:8px;">Jugar de nuevo</button>`;
    els.nextBtn.style.display = 'none';
    document.getElementById('again').addEventListener('click', reset);
  }

  function reset() {
    score = 0;
    current = 0;
    finished = false;
    deck = shuffle(ENIGMAS).slice(0, TOTAL_ENIGMAS);
    els.score.textContent = 0;
    els.hint.style.display = 'block';
    render();
  }

  document.getElementById('resetBtn').addEventListener('click', () => {
    if (confirm('¿Reiniciar el juego?')) reset();
  });

  reset();
})();