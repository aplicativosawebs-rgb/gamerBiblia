(function () {
  const ROUNDS = [
  {
    "start": "📖 Creación",
    "end": "🌊 Diluvio",
    "events": [
      {
        "id": "a",
        "label": "Adán y Eva abandonan el huerto después de transgredir el mandato recibido."
      },
      {
        "id": "b",
        "label": "Caín mata a Abel después de que Dios no mira con agrado su ofrenda."
      },
      {
        "id": "c",
        "label": "Enoc es mencionado como alguien que caminó con Dios en una genealogía anterior al juicio."
      },
      {
        "id": "d",
        "label": "Noé recibe instrucciones detalladas para construir un arca en medio de una generación corrompida."
      },
      {
        "id": "e",
        "label": "Noé entra en el arca con su familia antes de que comience el juicio mediante las aguas."
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ]
  },
  {
    "start": "🌊 Diluvio",
    "end": "🏗️ Torre de Babel",
    "events": [
      {
        "id": "a",
        "label": "Las aguas disminuyen y el arca queda sobre los montes de Ararat."
      },
      {
        "id": "b",
        "label": "Dios establece una señal del pacto con Noé mediante un arco puesto en las nubes."
      },
      {
        "id": "c",
        "label": "Noé planta una viña y un episodio relacionado con su embriaguez afecta la relación entre sus hijos."
      },
      {
        "id": "d",
        "label": "Los descendientes de Noé se extienden según sus familias y lenguas en la tierra."
      },
      {
        "id": "e",
        "label": "Los habitantes de una llanura de Sinar intentan construir una ciudad y una torre para hacerse un nombre."
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ]
  },
  {
    "start": "🏗️ Torre de Babel",
    "end": "👴 José en Egipto",
    "events": [
      {
        "id": "a",
        "label": "Abram recibe el llamado de salir de su tierra y avanzar hacia una tierra que Dios le mostraría."
      },
      {
        "id": "b",
        "label": "Dios establece con Abraham un pacto acompañado por promesas sobre descendencia y tierra."
      },
      {
        "id": "c",
        "label": "Isaac nace cuando la promesa sobre una descendencia parecía humanamente imposible para Abraham y Sara."
      },
      {
        "id": "d",
        "label": "Jacob obtiene la bendición paterna destinada a Esaú y posteriormente huye de su casa."
      },
      {
        "id": "e",
        "label": "José es vendido por sus hermanos y termina en Egipto, donde comienza una nueva etapa de su historia."
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ]
  },
  {
    "start": "👴 José en Egipto",
    "end": "🌊 Cruce del mar Rojo",
    "events": [
      {
        "id": "a",
        "label": "Los hermanos de José llegan a Egipto durante una hambruna y no lo reconocen."
      },
      {
        "id": "b",
        "label": "José se da a conocer a sus hermanos y reconoce que Dios había usado los acontecimientos para preservar vidas."
      },
      {
        "id": "c",
        "label": "Moisés nace en una época en que el faraón ordena eliminar a los niños hebreos varones."
      },
      {
        "id": "d",
        "label": "Moisés encuentra a Dios en una zarza ardiente y recibe la misión de regresar a Egipto."
      },
      {
        "id": "e",
        "label": "Después de la Pascua, Israel sale de Egipto y queda atrapado aparentemente entre el ejército de Faraón y el mar."
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ]
  },
  {
    "start": "🌊 Cruce del mar Rojo",
    "end": "🏞️ Entrada en Canaán",
    "events": [
      {
        "id": "a",
        "label": "Israel llega al Sinaí y recibe instrucciones que establecen las bases del pacto."
      },
      {
        "id": "b",
        "label": "El pueblo construye el tabernáculo siguiendo las instrucciones recibidas durante la permanencia en el desierto."
      },
      {
        "id": "c",
        "label": "Doce espías exploran Canaán y la comunidad se niega a entrar después de escuchar un informe dominado por el temor."
      },
      {
        "id": "d",
        "label": "Tras años en el desierto, Moisés muere después de contemplar la tierra desde el monte Nebo."
      },
      {
        "id": "e",
        "label": "Josué conduce al pueblo a través del Jordán y establece un nuevo comienzo en la tierra prometida."
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ]
  },
  {
    "start": "🏞️ Entrada en Canaán",
    "end": "👑 Primer rey de Israel",
    "events": [
      {
        "id": "a",
        "label": "Israel cruza el Jordán y establece un campamento desde el cual comienza la conquista."
      },
      {
        "id": "b",
        "label": "Jericó cae después de varios días en los que el pueblo sigue instrucciones que incluyen rodear la ciudad."
      },
      {
        "id": "c",
        "label": "Josué reúne a Israel en Siquem y renueva públicamente el compromiso con el pacto."
      },
      {
        "id": "d",
        "label": "Después de la muerte de Josué se establece un ciclo repetido de apostasía, opresión, clamor y liberación."
      },
      {
        "id": "e",
        "label": "El pueblo pide tener un rey como las demás naciones y Samuel recibe instrucciones para atender la petición."
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ]
  },
  {
    "start": "👑 Saúl rey",
    "end": "🏛️ Templo de Salomón",
    "events": [
      {
        "id": "a",
        "label": "Saúl conserva parte de lo que debía destruir después de la campaña contra Amalec y Samuel le anuncia el rechazo de su reinado."
      },
      {
        "id": "b",
        "label": "David es ungido en casa de Isaí mientras Saúl todavía ocupa el trono."
      },
      {
        "id": "c",
        "label": "David enfrenta a Goliat y luego su popularidad provoca una persecución cada vez mayor por parte de Saúl."
      },
      {
        "id": "d",
        "label": "Tras la muerte de Saúl, David es reconocido como rey y termina consolidando Jerusalén como centro de su reino."
      },
      {
        "id": "e",
        "label": "Salomón sucede a David y lleva adelante la construcción y dedicación del templo en Jerusalén."
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ]
  },
  {
    "start": "🏛️ Reino dividido",
    "end": "🔥 Caída de Samaria",
    "events": [
      {
        "id": "a",
        "label": "Roboam rechaza el consejo de los ancianos y aumenta la carga que pesa sobre el pueblo."
      },
      {
        "id": "b",
        "label": "Jeroboam establece centros de culto en Bet-el y Dan para evitar que su población viaje a Jerusalén."
      },
      {
        "id": "c",
        "label": "Elías confronta públicamente a los profetas de Baal en el monte Carmelo."
      },
      {
        "id": "d",
        "label": "Eliseo sucede a Elías y comienza un ministerio caracterizado por varias señales y confrontaciones."
      },
      {
        "id": "e",
        "label": "El reino del norte cae ante Asiria y Samaria deja de existir como centro político de Israel."
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ]
  },
  {
    "start": "🔥 Caída de Samaria",
    "end": "🏚️ Caída de Jerusalén",
    "events": [
      {
        "id": "a",
        "label": "Ezequías impulsa una reforma y destruye objetos de culto que se habían convertido en foco de veneración."
      },
      {
        "id": "b",
        "label": "Isaías anuncia señales relacionadas con una amenaza militar contra Jerusalén durante el reinado de Ezequías."
      },
      {
        "id": "c",
        "label": "Josías escucha la lectura del libro de la Ley encontrado en el templo y promueve una amplia reforma."
      },
      {
        "id": "d",
        "label": "Jeremías advierte repetidamente que la confianza religiosa no protegerá a Jerusalén de las consecuencias de su injusticia e idolatría."
      },
      {
        "id": "e",
        "label": "Babilonia conquista Jerusalén, destruye el templo y lleva parte de la población al exilio."
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ]
  },
  {
    "start": "🏚️ Caída de Jerusalén",
    "end": "🧱 Murallas restauradas",
    "events": [
      {
        "id": "a",
        "label": "Daniel y otros jóvenes son llevados a Babilonia y reciben formación dentro de la administración imperial."
      },
      {
        "id": "b",
        "label": "Ciro permite el regreso de un grupo de judíos y autoriza la reconstrucción del templo."
      },
      {
        "id": "c",
        "label": "Hageo y Zacarías animan al pueblo cuando la reconstrucción del templo necesita nuevo impulso."
      },
      {
        "id": "d",
        "label": "Esdras llega a Jerusalén con autorización persa y se dedica a estudiar, practicar y enseñar la Ley."
      },
      {
        "id": "e",
        "label": "Nehemías organiza la reconstrucción de las murallas y la comunidad celebra después con lectura pública de la Ley."
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ]
  },
  {
    "start": "🧱 Murallas restauradas",
    "end": "👶 Nacimiento de Jesús",
    "events": [
      {
        "id": "a",
        "label": "Malaquías confronta la negligencia religiosa y la infidelidad del pueblo en el periodo posterior al exilio."
      },
      {
        "id": "b",
        "label": "Se desarrolla un largo periodo sin profetas canónicos registrados en la Biblia hebrea."
      },
      {
        "id": "c",
        "label": "Un ángel anuncia a Zacarías que tendrá un hijo destinado a preparar el camino del Señor."
      },
      {
        "id": "d",
        "label": "El ángel Gabriel anuncia a María que concebirá y dará a luz al Hijo que ocupará el trono de David."
      },
      {
        "id": "e",
        "label": "Jesús nace en Belén durante el gobierno de Herodes."
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ]
  },
  {
    "start": "👶 Nacimiento de Jesús",
    "end": "✝️ Resurrección",
    "events": [
      {
        "id": "a",
        "label": "Jesús es bautizado por Juan y comienza públicamente su ministerio después de pasar por la tentación en el desierto."
      },
      {
        "id": "b",
        "label": "Jesús elige a sus discípulos y desarrolla un ministerio de enseñanza, señales y confrontación con diversos grupos."
      },
      {
        "id": "c",
        "label": "Pedro confiesa que Jesús es el Cristo y poco después presencia la transfiguración."
      },
      {
        "id": "d",
        "label": "Jesús entra en Jerusalén, celebra la Pascua con sus discípulos y es arrestado durante la noche."
      },
      {
        "id": "e",
        "label": "Jesús es crucificado, sepultado y al tercer día sus discípulos encuentran el sepulcro vacío."
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ]
  },
  {
    "start": "✝️ Resurrección",
    "end": "⛓️ Pablo en Roma",
    "events": [
      {
        "id": "a",
        "label": "Jesús se presenta vivo a sus discípulos y les encarga ser sus testigos hasta los confines de la tierra."
      },
      {
        "id": "b",
        "label": "El Espíritu Santo desciende en Pentecostés y la predicación pública de los discípulos produce una respuesta multitudinaria."
      },
      {
        "id": "c",
        "label": "Esteban es ejecutado y la persecución dispersa a varios creyentes fuera de Jerusalén."
      },
      {
        "id": "d",
        "label": "Pedro visita a Cornelio y comprende de manera práctica que Dios también recibe a los gentiles."
      },
      {
        "id": "e",
        "label": "Pablo llega a Roma bajo custodia y continúa anunciando el reino de Dios a pesar de su situación."
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ]
  },
  {
    "start": "⛓️ Pablo en Roma",
    "end": "📜 Apocalipsis",
    "events": [
      {
        "id": "a",
        "label": "Las iglesias cristianas se expanden y reciben cartas que corrigen doctrina, conducta y problemas comunitarios."
      },
      {
        "id": "b",
        "label": "Se desarrollan conflictos y concilios relacionados con la incorporación de creyentes gentiles a la iglesia."
      },
      {
        "id": "c",
        "label": "Pablo continúa enseñando que en Cristo la identidad del pueblo de Dios no depende de pertenecer étnicamente a Israel."
      },
      {
        "id": "d",
        "label": "La tradición cristiana posterior sitúa a Juan en Asia Menor, donde varias iglesias reciben exhortaciones y llamados a perseverar."
      },
      {
        "id": "e",
        "label": "Juan recibe en Patmos las visiones dirigidas a siete iglesias que forman el comienzo del Apocalipsis."
      }
    ],
    "correct": [
      "a",
      "b",
      "c",
      "d",
      "e"
    ]
  }
];

  const TOTAL_ROUNDS = 5; // Solo 5 rondas al azar
  let round = 0;
  let score = 0;
  let dragEl = null;
  let deck = [];
  let finished = false;

  const els = {
    list: document.getElementById("list"),
    checkBtn: document.getElementById("checkBtn"),
    feedback: document.getElementById("feedback"),
    round: document.getElementById("round"),
    score: document.getElementById("score"),
    section: document.getElementById("section")
  };

  function shuffle(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function makeItem(label, id, fixed = false) {
    const div = document.createElement("div");
    div.className = "timeline-item" + (fixed ? " fixed" : "");
    div.dataset.id = id || "";
    div.dataset.type = fixed ? "fixed" : "event";
    div.innerHTML = fixed
      ? `<span class="material-icons handle">push_pin</span><span class="label">${label}</span>`
      : `<span class="material-icons handle">drag_indicator</span><span class="label">${label}</span>`;
    return div;
  }

  function enableDrag() {
    const items = els.list.querySelectorAll(".timeline-item:not(.fixed)");
    items.forEach(item => {
      item.setAttribute("draggable", "true");
      item.addEventListener("dragstart", () => {
        dragEl = item;
        item.classList.add("dragging");
      });
      item.addEventListener("dragend", () => {
        item.classList.remove("dragging");
        dragEl = null;
      });
      item.addEventListener("dragover", e => e.preventDefault());
      item.addEventListener("drop", e => {
        e.preventDefault();
        if (!dragEl || dragEl === item) return;
        const itemsArr = [...els.list.querySelectorAll(".timeline-item:not(.fixed)")];
        const dragIdx = itemsArr.indexOf(dragEl);
        const dropIdx = itemsArr.indexOf(item);
        if (dragIdx < dropIdx) item.after(dragEl);
        else item.before(dragEl);
      });
    });
  }

  function renderRound() {
    if (finished) return;

    const currentRound = deck[round];

    els.round.textContent = round + 1;
    els.feedback.className = "feedback";
    els.feedback.textContent = "";
    els.checkBtn.disabled = false;
    els.checkBtn.style.display = "inline-flex";
    els.list.innerHTML = "";

    els.list.appendChild(makeItem(currentRound.start, "start", true));
    shuffle(currentRound.events).forEach(event => {
      els.list.appendChild(makeItem(event.label, event.id));
    });
    els.list.appendChild(makeItem(currentRound.end, "end", true));

    enableDrag();
  }

  els.checkBtn.addEventListener("click", () => {
    if (finished) return;

    const currentRound = deck[round];
    const actualOrder = [...els.list.querySelectorAll(".timeline-item:not(.fixed)")]
      .map(item => item.dataset.id);

    const correct = actualOrder.every((id, i) => id === currentRound.correct[i]);

    if (correct) {
      score += 150;
      els.score.textContent = score;
      els.feedback.className = "feedback ok show pop";
      els.feedback.textContent = "✅ ¡Orden correcto! +150 puntos";
      els.checkBtn.disabled = true;

      setTimeout(() => {
        round++;
        if (round >= deck.length) {
          finish();
        } else {
          renderRound();
        }
      }, 900);
    } else {
      els.feedback.className = "feedback bad show shake";
      els.feedback.textContent = "❌ Hay acontecimientos fuera de orden. Vuelve a intentarlo.";
      els.list.classList.add("shake");
      setTimeout(() => els.list.classList.remove("shake"), 500);
    }
  });

  function finish() {
    finished = true;
    Storage.addScore("timeline", score, true);

    els.feedback.className = "feedback ok show";
    els.feedback.innerHTML = `
      <p style="font-size:1.4rem;margin-bottom:14px;">
        🏁 ¡Línea de tiempo completada! Puntos: <strong>${score}</strong> / ${deck.length * 150}
      </p>
      <a href="../index.html" class="btn primary">Menú</a>
      <button class="btn" id="again" style="margin-left:8px;">Jugar de nuevo</button>`;

    els.list.innerHTML = "";
    els.checkBtn.style.display = "none";

    document.getElementById("again").addEventListener("click", reset);
  }

  function reset() {
    score = 0;
    round = 0;
    finished = false;
    deck = shuffle(ROUNDS).slice(0, TOTAL_ROUNDS);
    els.score.textContent = 0;
    els.checkBtn.disabled = false;
    els.checkBtn.style.display = "inline-flex";
    renderRound();
  }

  document.getElementById("resetBtn").addEventListener("click", () => {
    if (confirm("¿Reiniciar la línea de tiempo?")) reset();
  });

  reset();
})();
