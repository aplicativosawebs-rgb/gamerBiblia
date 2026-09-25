const QUESTIONS = [
  {
    pistas: [
      "En su juventud fue llevado a una posición de servicio dentro de la corte, aunque su origen no estaba ligado a la nobleza.",
      "Enfrentó varias pruebas relacionadas con la fidelidad a Dios mientras vivía dentro de una cultura extranjera y altamente politizada.",
      "Una de sus experiencias más conocidas comenzó cuando rechazó una práctica alimentaria impuesta y terminó recibiendo sabiduría para interpretar sueños."
    ],
    opciones: ["Daniel", "José", "Esdras", "Mardoqueo"],
    correcta: "Daniel"
  },
  {
    pistas: [
      "Su llamado estuvo acompañado por una experiencia en la que Dios lo confrontó mientras realizaba una tarea cotidiana.",
      "Durante años condujo a un pueblo en el que las quejas, la desobediencia y la necesidad de intercesión fueron constantes.",
      "En una etapa crítica recibió la Ley en un contexto de pacto, y más adelante su propio error le impidió entrar en la tierra prometida."
    ],
    opciones: ["Moisés", "Josué", "Samuel", "Eli"],
    correcta: "Moisés"
  },
  {
    pistas: [
      "Antes de ocupar el trono tuvo que aprender a vivir bajo la persecución de una autoridad que sabía que perdería el reino.",
      "En más de una ocasión rechazó la oportunidad de eliminar a quien lo perseguía, apelando a un principio sobre la autoridad establecida por Dios.",
      "Su reinado terminó marcado por un episodio en el que decidió realizar un censo y luego reconoció públicamente su pecado."
    ],
    opciones: ["David", "Saúl", "Salomón", "Ezequías"],
    correcta: "David"
  },
  {
    pistas: [
      "Su historia está relacionada con un nacimiento muy esperado y con una experiencia de revelación ocurrida durante su servicio en el santuario.",
      "Posteriormente tuvo que comunicar un juicio a una familia sacerdotal que hasta entonces había ejercido una posición de autoridad.",
      "Fue quien ungió primero a un rey que después sería rechazado y, más tarde, al joven que acabaría ocupando su lugar."
    ],
    opciones: ["Samuel", "Natán", "Elías", "Esdras"],
    correcta: "Samuel"
  },
  {
    pistas: [
      "Su ascenso al liderazgo ocurrió después de una etapa en la que estaba escondido mientras Israel sufría una fuerte presión militar.",
      "Pidió señales concretas para confirmar la misión que había recibido y luego redujo deliberadamente su ejército.",
      "Después de la victoria, una de sus decisiones religiosas se convirtió en un problema para generaciones posteriores."
    ],
    opciones: ["Gedeón", "Sansón", "Barac", "Jefté"],
    correcta: "Gedeón"
  },
  {
    pistas: [
      "Ejerció liderazgo en una época en la que la autoridad política y la vida espiritual de Israel estaban estrechamente conectadas.",
      "No dirigió personalmente la campaña militar decisiva, pero su presencia fue esencial para que un comandante aceptara entrar en batalla.",
      "Una mujer de otra tribu terminó protagonizando el desenlace de la batalla que su profecía había anunciado."
    ],
    opciones: ["Débora", "Hulda", "Ana", "Abigail"],
    correcta: "Débora"
  },
  {
    pistas: [
      "Su ministerio estuvo marcado por una confrontación directa con una política religiosa promovida desde el palacio.",
      "En una escena pública hizo que una multitud presenciara un desafío relacionado con el altar y con la identidad del Dios verdadero.",
      "Después de su etapa de mayor exposición, atravesó un periodo de temor y aislamiento antes de recibir una nueva orientación."
    ],
    opciones: ["Elías", "Eliseo", "Amós", "Miqueas"],
    correcta: "Elías"
  },
  {
    pistas: [
      "Recibió una porción especial del legado espiritual de su maestro, pero tuvo que demostrar que permanecería fiel después de su partida.",
      "Uno de sus milagros ocurrió cuando una deuda amenazaba el futuro de una familia y el recurso disponible parecía insuficiente.",
      "También confrontó a un comandante extranjero cuya sanidad dependía de obedecer una instrucción que él consideraba demasiado sencilla."
    ],
    opciones: ["Eliseo", "Isaías", "Jeremías", "Zacarías"],
    correcta: "Eliseo"
  },
  {
    pistas: [
      "Su reinado quedó asociado a una reforma religiosa profunda después de encontrarse un documento que había sido descuidado durante años.",
      "Consultó a una profetisa para confirmar las consecuencias espirituales de aquello que se había descubierto.",
      "Durante su gobierno se celebró una Pascua destacada por una dimensión de restauración que no se había visto desde mucho tiempo atrás."
    ],
    opciones: ["Josías", "Ezequías", "Asa", "Josafat"],
    correcta: "Josías"
  },
  {
    pistas: [
      "Su historia comienza con una crisis nacional que no podía resolverse únicamente mediante recursos económicos o militares.",
      "Antes de actuar inspeccionó la situación personalmente y después organizó el trabajo por familias y sectores.",
      "Además de reconstruir estructuras, tuvo que enfrentar oposición externa y problemas internos relacionados con abusos económicos."
    ],
    opciones: ["Nehemías", "Zorobabel", "Esdras", "Jeremías"],
    correcta: "Nehemías"
  },
  {
    pistas: [
      "Su papel fue el de un maestro de la Ley que regresó a Jerusalén con autorización oficial de un imperio extranjero.",
      "Su influencia no se limitó a explicar normas: también confrontó prácticas familiares que comprometían la identidad del pueblo.",
      "En una jornada pública de lectura, la comunidad escuchó la Ley y respondió con llanto antes de recibir una exhortación a celebrar."
    ],
    opciones: ["Esdras", "Nehemías", "Hageo", "Malaquías"],
    correcta: "Esdras"
  },
  {
    pistas: [
      "Su nombre de origen no es el nombre por el que llegó a ser conocida públicamente.",
      "Llegó a una posición de influencia en un ambiente cortesano sin revelar inicialmente su procedencia.",
      "Una amenaza contra su pueblo la obligó a decidir entre guardar silencio o presentarse ante una autoridad cuya audiencia podía poner su propia vida en riesgo."
    ],
    opciones: ["Ester", "Rut", "Abigail", "Hulda"],
    correcta: "Ester"
  },
  {
    pistas: [
      "Su historia comienza cuando quedó viuda y eligió acompañar a una mujer de otra nación en lugar de regresar a la estabilidad de su propio pueblo.",
      "Su incorporación a una nueva comunidad comenzó con un trabajo humilde que la puso en contacto con un pariente del esposo fallecido.",
      "Una norma familiar sobre rescate y parentesco terminó convirtiendo su historia en parte del linaje del rey David."
    ],
    opciones: ["Rut", "Tamar", "Ester", "Rahab"],
    correcta: "Rut"
  },
  {
    pistas: [
      "Su conocimiento del funcionamiento de una corte extranjera se volvió determinante cuando recibió información relacionada con una amenaza contra su pueblo.",
      "Aunque no era el principal protagonista político al comienzo del relato, su negativa a realizar un acto de honra impuesto desencadenó una crisis.",
      "Terminó relacionado con una celebración que quedó incorporada a la memoria del pueblo como una conmemoración anual."
    ],
    opciones: ["Mardoqueo", "Nehemías", "Daniel", "Zorobabel"],
    correcta: "Mardoqueo"
  },
  {
    pistas: [
      "Su vida estuvo ligada a una promesa que parecía incompatible con las circunstancias familiares que la rodeaban.",
      "En una escena decisiva fue llevado a un lugar de sacrificio sin conocer inicialmente cómo terminaría la prueba.",
      "Más adelante aparece ligado a decisiones matrimoniales y familiares que preservan la continuidad de la promesa recibida por su padre."
    ],
    opciones: ["Isaac", "Jacob", "Ismael", "José"],
    correcta: "Isaac"
  },
  {
    pistas: [
      "Su historia incluye un cambio de identidad que ocurre después de una noche marcada por una lucha y una bendición.",
      "Tuvo que abandonar temporalmente su hogar después de una rivalidad familiar que involucró una bendición y un engaño.",
      "Sus doce hijos se convirtieron en el punto de partida de una organización tribal que definió la identidad de Israel."
    ],
    opciones: ["Jacob", "Esaú", "José", "Isaac"],
    correcta: "Jacob"
  },
  {
    pistas: [
      "Fue vendido por sus propios hermanos y pasó por varias posiciones sociales antes de entrar en una estructura de poder extranjera.",
      "Su capacidad para interpretar sueños no era presentada como un talento aislado, sino como algo que atribuía directamente a Dios.",
      "Terminó utilizando su autoridad para conservar la vida de su propia familia durante una crisis alimentaria."
    ],
    opciones: ["José", "Daniel", "Moisés", "Booz"],
    correcta: "José"
  },
  {
    pistas: [
      "Su reinado se hizo famoso por la sabiduría, pero varios relatos muestran que esa misma etapa estuvo acompañada de decisiones económicas y políticas costosas.",
      "Construyó una obra central para el culto de Israel y recibió una visión nocturna en la que Dios le ofreció una petición especial.",
      "Uno de sus primeros juicios conocidos consistió en resolver un conflicto entre dos mujeres mediante una propuesta que revelara la verdadera reacción de una de ellas."
    ],
    opciones: ["Salomón", "David", "Ezequías", "Roboam"],
    correcta: "Salomón"
  },
  {
    pistas: [
      "Su ministerio comenzó con hostilidad hacia los seguidores de Jesús y con autorización para perseguirlos fuera de Jerusalén.",
      "Una experiencia ocurrida durante un viaje cambió completamente la dirección de su vida y su manera de anunciar el evangelio.",
      "En sus cartas aborda asuntos como la libertad cristiana, los conflictos comunitarios, la resurrección y la relación entre fe y obras de amor."
    ],
    opciones: ["Pablo", "Pedro", "Bernabé", "Apolo"],
    correcta: "Pablo"
  },
  {
    pistas: [
      "Su liderazgo apostólico fue puesto a prueba cuando una visión le obligó a reconsiderar a quién podía recibir la comunidad cristiana.",
      "Visitó la casa de un oficial romano y allí comprendió de manera práctica una verdad que antes había expresado con dificultad.",
      "En una etapa posterior tuvo que explicar su conducta ante otros creyentes que cuestionaban haber entrado en una casa de gentiles."
    ],
    opciones: ["Pedro", "Pablo", "Felipe", "Esteban"],
    correcta: "Pedro"
  }
];

(function () {
 const TOTAL_QUESTIONS = 5;
  let current = 0;
  let score = 0;
  let hintsShown = 1;
  let deck = [];
  let finished = false;

  const els = {
    question: document.getElementById('question'),
    hintBox: document.getElementById('hintBox'),
    options: document.getElementById('options'),
    feedback: document.getElementById('feedback'),
    nextBtn: document.getElementById('nextBtn'),
    progress: document.getElementById('progress'),
    qNum: document.getElementById('qNum'),
    qTotal: document.getElementById('qTotal'),
    score: document.getElementById('score'),
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

  function renderQuestion() {
    if (finished) return;

    const q = deck[current];
    hintsShown = 1;

    els.qNum.textContent = current + 1;
    els.qTotal.textContent = deck.length;
    els.progress.style.width = (current / deck.length * 100) + '%';
    els.question.textContent = q.pistas[0];
    els.hintBox.textContent = '💡 ' + q.pistas[1];
    els.hintBox.style.display = 'block';
    els.feedback.className = 'feedback';
    els.feedback.textContent = '';
    els.nextBtn.style.display = 'none';

    if (els.section) {
      els.section.textContent = `Pregunta ${current + 1} de ${deck.length}`;
    }

    els.options.innerHTML = '';
    shuffle(q.opciones).forEach(op => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = op;
      btn.addEventListener('click', () => answer(btn, op, q));
      els.options.appendChild(btn);
    });
  }

  function answer(btn, op, q) {
    if (finished) return;

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
    if (current >= deck.length) {
      finishGame();
    } else {
      renderQuestion();
    }
  });

  function finishGame() {
    finished = true;
    els.progress.style.width = '100%';
    Storage.addScore('personaje', score, true);

    els.question.textContent = '🎉 ¡Juego completado!';
    els.hintBox.style.display = 'none';
    els.options.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:20px;">
        <p style="font-size:1.4rem;margin-bottom:12px;">Puntuación final: <strong>${score}</strong> pts</p>
        <a href="../index.html" class="btn primary">
          <span class="material-icons">home</span>Menú principal
        </a>
        <button class="btn" id="playAgain" style="margin-left:8px;">
          <span class="material-icons">replay</span>Jugar de nuevo
        </button>
      </div>`;

    els.feedback.className = 'feedback';
    els.nextBtn.style.display = 'none';

    document.getElementById('playAgain').addEventListener('click', reset);
  }

  function reset() {
    score = 0;
    current = 0;
    finished = false;
    deck = shuffle(QUESTIONS).slice(0, TOTAL_QUESTIONS);
    els.score.textContent = 0;
    renderQuestion();
  }

  document.getElementById('resetBtn').addEventListener('click', () => {
    if (confirm('¿Reiniciar el juego? Se perderá el progreso actual.')) {
      reset();
    }
  });

  reset();
})();