(function () {
  const WORDS = [
    {
      word: "MELQUISEDEC",
      hint: "Aparece de forma breve en Génesis, pero siglos después David y Hebreos lo convierten en una figura clave para explicar un sacerdocio distinto al levítico."
    },
    {
      word: "BEZALEEL",
      hint: "Su nombre aparece ligado a una capacidad artística que, según Éxodo, fue concedida para trabajar en los objetos sagrados del tabernáculo."
    },
    {
      word: "JERUBBAAL",
      hint: "Es el nombre asociado con un juez de Israel después de derribar un altar de Baal; aparece como otro nombre de una figura mucho más conocida."
    },
    {
      word: "AHITOFEL",
      hint: "Su consejo era tan valorado que se compara con consultar la palabra de Dios, pero terminó tomando una decisión después de ver que su estrategia no había sido aceptada."
    },
    {
      word: "MIZPA",
      hint: "Es un lugar recurrente en el Antiguo Testamento para reuniones, pactos y momentos de decisión; Samuel convocó allí al pueblo en una ocasión importante."
    },
    {
      word: "PENINA",
      hint: "Su conflicto familiar se desarrolla en el contexto del culto en Silo y ayuda a entender por qué otra mujer oró con tanta intensidad por un hijo."
    },
    {
      word: "GAMALIEL",
      hint: "Un maestro fariseo intervino ante el Sanedrín cuando los apóstoles estaban siendo interrogados y aconsejó prudencia antes de intentar destruir su movimiento."
    },
    {
      word: "BERENICE",
      hint: "Aparece en Hechos durante una audiencia en Cesarea junto a autoridades romanas y el rey Agripa, mientras Pablo explica su caso."
    },
    {
      word: "ONESIMO",
      hint: "Su historia está vinculada con una carta muy breve de Pablo, donde la relación entre un amo y un antiguo esclavo se aborda desde una nueva identidad en Cristo."
    },
    {
      word: "EPAFRODITO",
      hint: "Un colaborador de Pablo enfermó gravemente mientras servía a la iglesia y recibió elogios por arriesgar su vida en el trabajo del evangelio."
    },
    {
      word: "TROAS",
      hint: "En esta ciudad Pablo tuvo una visión nocturna que orientó su siguiente etapa misionera y, años después, ocurrió allí un accidente relacionado con una reunión nocturna."
    },
    {
      word: "MELITA",
      hint: "Es la isla donde Pablo y los demás supervivientes de un naufragio pasaron el invierno después de que una serpiente lo mordiera sin producirle el daño esperado."
    },
    {
      word: "PATMOS",
      hint: "Una experiencia de exilio o confinamiento en esta isla del mar Egeo quedó vinculada a las visiones que dieron origen al último libro del Nuevo Testamento."
    },
    {
      word: "ZOROBABEL",
      hint: "Lideró parte del retorno desde el exilio y aparece junto al sumo sacerdote Josué como figura central de la reconstrucción del templo."
    },
    {
      word: "MALQUIAS",
      hint: "Su libro presenta una serie de discusiones entre Dios y el pueblo sobre culto, infidelidad y la aparente falta de recompensa por servirle."
    },
    {
      word: "SARDIS",
      hint: "Una de las siete iglesias de Apocalipsis recibe la advertencia de que su reputación parecía viva, pero la realidad espiritual era muy distinta."
    }
  ];

  const TOTAL_WORDS = 5;
  const STAGES = ["🟢", "😀", "😐", "😟", "😰", "😵", "💀"];
  const ALPHABET = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");

  let current = 0;
  let score = 0;
  let lives = 6;
  let deck = [];
  let guessed = [];
  let word = "";
  let hint = "";
  let finished = false;

  const els = {
    word: document.getElementById("word"),
    keyboard: document.getElementById("keyboard"),
    hint: document.getElementById("hint"),
    feedback: document.getElementById("feedback"),
    lives: document.getElementById("lives"),
    score: document.getElementById("score"),
    art: document.getElementById("art"),
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

  function pickWord() {
    if (finished) return;

    const item = deck[current];
    word = item.word;
    hint = item.hint;
    guessed = [];
    lives = 6;

    els.hint.textContent = "💡 " + hint;
    els.lives.textContent = lives;
    els.art.textContent = STAGES[0];
    els.feedback.className = "feedback";
    els.feedback.textContent = "";

    renderWord();
    renderKeyboard();

    if (els.section) {
      els.section.textContent = `Palabra ${current + 1} de ${deck.length}`;
    }
  }

  function renderWord() {
    els.word.innerHTML = word
      .split("")
      .map(letter => guessed.includes(letter)
        ? `<span>${letter}</span>`
        : `<span class="word-blank">&nbsp;</span>`)
      .join("");
  }

  function renderKeyboard() {
    els.keyboard.innerHTML = "";
    shuffle(ALPHABET).forEach(letter => {
      const button = document.createElement("button");
      button.className = "key";
      button.textContent = letter;
      button.addEventListener("click", () => guess(letter, button));
      els.keyboard.appendChild(button);
    });
  }

  function guess(letter, button) {
    if (finished) return;
    if (guessed.includes(letter)) return;

    guessed.push(letter);

    if (word.includes(letter)) {
      button.classList.add("correct");
      button.disabled = true;
      renderWord();
      if (word.split("").every(l => guessed.includes(l))) win();
    } else {
      button.classList.add("wrong", "shake");
      button.disabled = true;
      lives--;
      els.lives.textContent = lives;
      els.art.textContent = STAGES[6 - lives];
      if (lives <= 0) lose();
    }
  }

  function nextWord() {
    current++;
    if (current >= deck.length) {
      finish();
    } else {
      pickWord();
    }
  }

  function win() {
    score += 100 + lives * 20;
    els.score.textContent = score;
    els.feedback.className = "feedback ok show pop";
    els.feedback.innerHTML = `
      <p style="font-size:1.2rem;">🎉 ¡Correcto! La palabra era <strong>${word}</strong></p>
      <button class="btn primary" id="nextWord" style="margin-top:10px;">
        Siguiente palabra <span class="material-icons">arrow_forward</span>
      </button>`;
    document.getElementById("nextWord").addEventListener("click", nextWord);
  }

  function lose() {
    els.feedback.className = "feedback bad show shake";
    els.feedback.innerHTML = `
      <p style="font-size:1.2rem;">💀 Se acabaron las vidas. La palabra era <strong>${word}</strong></p>
      <button class="btn primary" id="nextWord" style="margin-top:10px;">
        Siguiente palabra
      </button>`;
    document.getElementById("nextWord").addEventListener("click", nextWord);
  }

  function finish() {
    finished = true;
    Storage.addScore("ahorcado", score, true);

    els.feedback.className = "feedback ok show";
    els.feedback.innerHTML = `
      <p style="font-size:1.4rem;">🏁 ¡Juego terminado! Puntos: <strong>${score}</strong></p>
      <a href="../index.html" class="btn primary" style="margin-top:10px;">Menú</a>
      <button class="btn" id="again" style="margin-top:10px;">Jugar de nuevo</button>`;

    els.word.innerHTML = "";
    els.keyboard.innerHTML = "";
    els.hint.textContent = "";
    els.art.textContent = "🏆";

    document.getElementById("again").addEventListener("click", reset);
  }

  function reset() {
    score = 0;
    current = 0;
    finished = false;
    deck = shuffle(WORDS).slice(0, TOTAL_WORDS);
    els.score.textContent = 0;
    pickWord();
  }

  document.getElementById("resetBtn").addEventListener("click", () => {
    if (confirm("¿Reiniciar el juego?")) reset();
  });

  reset();
})();