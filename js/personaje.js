const QUESTIONS = [
  {
    pistas: [
      "Su primer examen de fidelidad consistió en rechazar la comida del rey.",
      "Le cambiaron el nombre al entrar a la corte.",
      "Llegó a ser el tercer señor en el reino tras leer un mensaje al rey."
    ],
    opciones: ["Daniel", "José", "Esdras", "Mardoqueo"],
    correcta: "Daniel"
  },
  {
    pistas: [
      "Su suegro  le aconsejó delegar la carga de juzgar al pueblo.",
      "Se quitó el calzado ante una zarza.",
      "Golpeó la peña."
    ],
    opciones: ["Moisés", "Josué", "Samuel", "Eli"],
    correcta: "Moisés"
  },
  {
    pistas: [
      "Le cortó discretamente el borde del manto al rey.",
      "Puso  a prueba al rey al no matarlo cuando lo tuvo a su merced.",
      "Tuvó que huir de Jerusalén descalzo y llorando por la rebelión de su propio hijo."
    ],
    opciones: ["David", "Saúl", "Salomón", "Ezequías"],
    correcta: "David"
  },
  {
    pistas: [
      "Se crió vistiendo un efod de lino confeccionado año a año por su madre.",
      "Informó la ruina inminente de la casa del sacerdote que lo instruía.",
      "Estableció la piedra Ében-ezer tras una victoria contra los filisteos."
    ],
    opciones: ["Samuel", "Natán", "Elías", "Esdras"],
    correcta: "Samuel"
  },
  {
    pistas: [
      "Destruyó el altar de Baal de su padre durante la noche.",
      "Puso un vellón de lana en la era para pedir una señal.",
      "Fabrico un efod de oro que terminó siendo tropiezo para su casa."
    ],
    opciones: ["Gedeón", "Sansón", "Barac", "Jefté"],
    correcta: "Gedeón"
  },
  {
    pistas: [
      "Juzgaba a Israel sentada debajo de una palmera entre Ramá y Betel.",
      "Se negó a ir a la batalla a menos que un comandante fuera con ella.",
      "Profetizó que el rey de Siria caería en manos de una mujer."
    ],
    opciones: ["Débora", "Hulda", "Ana", "Abigail"],
    correcta: "Débora"
  },
  {
    pistas: [
      "Fue alimentado por cuervos junto al arroyo de Querit.",
      "Mandó derramar  agua sobre un sacrificio.",
      "Corrió delante del carro del rey hasta la entrada de Jezreel."
    ],
    opciones: ["Elías", "Eliseo", "Amós", "Miqueas"],
    correcta: "Elías"
  },
  {
    pistas: [
      "Hizo flotar el hierro de un hacha caída al agua.",
      "Multiplicó el aceite de una viuda al pedirle vasijas prestadas a sus vecinos.",
      "Envió a su criado  con su báculo para restablecer a un niño."
    ],
    opciones: ["Eliseo", "Isaías", "Jeremías", "Zacarías"],
    correcta: "Eliseo"
  },
  {
    pistas: [
      "Comenzó su reinado a los ocho años tras el asesinato de su padre.",
      "Rompió sus vestidos cuando un escriba le leyó el libro hallado en el templo.",
      "Inquirió a la profetisa Hulda para consultar las palabras del libro descubierto."
    ],
    opciones: ["Josías", "Ezequías", "Asa", "Josafat"],
    correcta: "Josías"
  },
  {
    pistas: [
      "Ejercía el cargo de copero.",
      "Oró en secreto antes de responder la pregunta del soberano.",
      "Reparó las puertas del muro."
    ],
    opciones: ["Nehemías", "Zorobabel", "Esdras", "Jeremías"],
    correcta: "Nehemías"
  },
  {
    pistas: [
      "Preparó su corazón para inquirir, cumplir y enseñar la ley de Jehová.",
      "Llegó a Jerusalén el primer día del quinto mes desde Babilonia.",
      "Leyó el libro de la ley desde la mañana hasta el mediodía sobre un púlpito de madera."
    ],
    opciones: ["Esdras", "Nehemías", "Hageo", "Malaquías"],
    correcta: "Esdras"
  },
  {
    pistas: [
      "Su otro nombre era Hadasa.",
      "Permaneció doce meses bajo preparativos y perfumes antes de ver al rey.",
      "Invito al rey y a su ministro a dos banquetes privados consecutivos."
    ],
    opciones: ["Ester", "Rut", "Abigail", "Hulda"],
    correcta: "Ester"
  },
  {
    pistas: [
      "Su suegra le pidió que cambiara su nombre  tras quedar viuda.",
      "Recogía espigas tras los segadores en el campo de un pariente.",
      "Se acostó a los pies de su pariente redentor en la era durante la noche."
    ],
    opciones: ["Rut", "Tamar", "Ester", "Rahab"],
    correcta: "Rut"
  },
  {
    pistas: [
      "Descubrió una conspiración de dos eunucos contra la vida del rey.",
      "Se vestía de cilicio y ceniza junto a la puerta del rey.",
      "El rey ordenó pasearlo a caballo por la plaza con ropa real."
    ],
    opciones: ["Mardoqueo", "Nehemías", "Daniel", "Zorobabel"],
    correcta: "Mardoqueo"
  },
  {
    pistas: [
      "Nació cuando su madre tenía noventa años de edad.",
      "Cargó la leña sobre sus espaldas camino al monte.",
      "Salió a meditar al campo a la hora de la tarde cuando vio venir a su prometida."
    ],
    opciones: ["Isaac", "Jacob", "Ismael", "José"],
    correcta: "Isaac"
  },
  {
    pistas: [
      "Usó pieles de cabrito en las manos.",
      "Puso ramas descortezadas frente a los abrevaderos del ganado.",
      "Cojeaba de su muslo tras luchar en Peniel."
    ],
    opciones: ["Jacob", "Esaú", "José", "Isaac"],
    correcta: "Jacob"
  },
  {
    pistas: [
      "Recibió una túnica de diversos colores confeccionada por su padre.",
      "Sufrió una acusación falsa tras dejar su ropa en manos de la esposa de Potifar.",
      "Uso una copa de plata escondida en un costal para poner a prueba a sus hermanos."
    ],
    opciones: ["José", "Daniel", "Moisés", "Booz"],
    correcta: "José"
  },
  {
    pistas: [
      "Envió naves a Ofer para traer cuatrocientos veinte talentos de oro.",
      "Resolvió el pleito de dos mujeres.",
      "Su corazón se desvió tras los dioses de sus esposas en su vejez."
    ],
    opciones: ["Salomón", "David", "Ezequías", "Roboam"],
    correcta: "Salomón"
  },
  {
    pistas: [
      "Estuvo presente apoyando la muerte de Esteban guardando las ropas.",
      "Pasó tres días en Damasco sin ver, comer ni beber.",
      "Escapó de la ciudad dentro de una canasta bajada por el muro."
    ],
    opciones: ["Pablo", "Pedro", "Bernabé", "Apolo"],
    correcta: "Pablo"
  },
  {
    pistas: [
      "Cortó la oreja derecha de un siervo del Sumo Sacerdote.",
      "Salió fuera a llorar amargamente tras el canto del gallo.",
      "Fue liberado de la cárcel por un ángel y fue a casa de María, madre de Marcos."
    ],
    opciones: ["Pedro", "Pablo", "Felipe", "Esteban"],
    correcta: "Pedro"
  },
  {
    pistas: [
      "Iba año tras año a Silo y soportaba las burlas.",
      "Su esposo le daba el doble por cuanto la amaba.",
      "Llevó una túnica pequeña a su hijo cada año."
    ],
    opciones: ["Ana", "María", "Sarra", "Isabel"],
    correcta: "Ana"
  },
  {
    pistas: [
      "Era general del ejército del rey.",
      "Una muchacha cautiva israelita sugirió la solución a su afección.",
      "Llevó diez talentos de plata y seis mil piezas de oro al viaje."
    ],
    opciones: ["Naamán", "Cornelio", "Ciro", "Dario"],
    correcta: "Naamán"
  },
  {
    pistas: [
      "Pagó su pasaje en un barco.",
      "Dormía profundamente en la bodega de la nave durante la tempestad.",
      "Se sentó al oriente de la ciudad a la sombra de una calabacera."
    ],
    opciones: ["Jonás", "Amós", "Oseas", "Nahúm"],
    correcta: "Jonás"
  },
  {
    pistas: [
      "Jefe de los publicanos y hombre rico de Jericó.",
      "Tuvo que subir a un árbol.",
      "Prometió dar la mitad de sus bienes a los pobres."
    ],
    opciones: ["Zaqueo", "Mateo", "Nicodemo", "Bartimeo"],
    correcta: "Zaqueo"
  },
  {
    pistas: [
      "Mató a un león con sus manos en las viñas de Timnat.",
      "Propuso un enigma sobre comer y dulzura tras encontrar miel.",
      "Ató trescientas zorras por la cola con antorchas para quemar sembrados."
    ],
    opciones: ["Sansón", "Gedeón", "Jefté", "Saúl"],
    correcta: "Sansón"
  },
  {
    pistas: [
      "Llegó de noche a conversar con Jesús.",
      "Preguntó sobre el nuevo nacimiento.",
      "Trajo cien libras de una mezcla de mirra y áloes para el sepulcro."
    ],
    opciones: ["Nicodemo", "Gamaliel", "José de Arimatea", "Nathanael"],
    correcta: "Nicodemo"
  },
  {
    pistas: [
      "Ató un cordón de grana en su ventana como señal acordada.",
      "Recibió a los espías de Israel y los escondió con manojos de lino en el terrado.",
      "Su casa estaba construida sobre el muro mismo de la ciudad."
    ],
    opciones: ["Rahab", "Rut", "Débora", "Lidia"],
    correcta: "Rahab"
  },
  {
    pistas: [
      "Vendedora de púrpura originaria de la ciudad de Tiatira.",
      "Escuchó la predicación junto al río en Filipos un día de reposo.",
      "Insistió en hospedar a Pablo en su casa tras ser bautizada."
    ],
    opciones: ["Lidia", "Priscila", "Febe", "Marta"],
    correcta: "Lidia"
  },
  {
    pistas: [
      "Levita natural de Chipre que vendió una heredad y trajo el dinero.",
      "Fue a Tarso a buscar a Pablo para llevarlo a Antioquía.",
      "Tuvo un desacuerdo sobre llevar a Juan Marcos en un segundo viaje."
    ],
    opciones: ["Bernabé", "Apolo", "Silas", "Timoteo"],
    correcta: "Bernabé"
  },
  {
    pistas: [
      "Centurión de la compañía llamada la Italiana.",
      "Oraba a Dios continuamente y hacía muchas limosnas al pueblo.",
      "Envió a dos de sus criados y a un piadoso soldado a Jope."
    ],
    opciones: ["Cornelio", "Naamán", "Julio", "Félix"],
    correcta: "Cornelio"
  },
  {
    pistas: [
      "Compró un heredad en Anatot a su primo por diecisiete siclos de plata.",
      "Dictó las palabras de las profecías a su escriba Baruc.",
      "Fue echado en la cisterna de Malquías donde se hundió en el cieno."
    ],
    opciones: ["Jeremías", "Isaías", "Ezequiel", "Daniel"],
    correcta: "Jeremías"
  },
  {
    pistas: [
      "Recibió la instrucción de Dios de tomar una esposa.",
      "Llamó a sus hijos Lo-ruhama y Lo-ammi por orden divina.",
      "Compró de nuevo a su esposa por quince piezas de plata y un cabo de cebada."
    ],
    opciones: ["Oseas", "Amós", "Miqueas", "Malaquías"],
    correcta: "Oseas"
  },
  {
    pistas: [
      "Era boyero y recogedor de higos silvestres.",
      "Tuvo un enfrentamiento directo con Amasías.",
      "No era profeta ni hijo de profeta antes de su llamado."
    ],
    opciones: ["Amós", "Habacuc", "Joel", "Sofonías"],
    correcta: "Amós"
  },
  {
    pistas: [
      "Tenía dos hijos que ejercían el sacerdocio.",
      "Juzgó a Israel durante cuarenta años sentado en una silla junto al templo.",
      "Cayó de la silla hacia atrás al saber del arca y se desnucó."
    ],
    opciones: ["Elí", "Samuel", "Aarón", "Zacarías"],
    correcta: "Elí"
  },
  {
    pistas: [
      "Un serafín tocó sus labios con un carbón encendido tomado del altar.",
      "Tuvo su visión en el año que murió el rey Uzías.",
      "Profetizó sobre una virgen que daría a luz un hijo llamado Emanuel."
    ],
    opciones: ["Isaías", "Jeremías", "Ezequiel", "Zacarías"],
    correcta: "Isaías"
  },
  {
    pistas: [
      "Viajó con un gran séquito de camellos cargados de especias y oro.",
      "Llegó a probar a un rey mediante preguntas difíciles o enigmas.",
      "Regaló ciento veinte talentos de oro e inmensa cantidad de aromas."
    ],
    opciones: ["Reina de Sabá", "Princesa Vasti", "Atalía de Judá", "Candace"],
    correcta: "Reina de Sabá"
  },
  {
    pistas: [
      "Fue uno de los siete varones escogidos para atender las mesas.",
      "Su rostro parecía el de un ángel.",
      "Vio los cielos abiertos y al Hijo del Hombre a la diestra de Dios."
    ],
    opciones: ["Esteban", "Felipe", "Timoteo", "Santiago"],
    correcta: "Esteban"
  },
  {
    pistas: [
      "Hijo de Timeo, mendigaba sentado junto al camino.",
      "Gritaba: '¡Hijo de David, ten misericordia de mí!'.",
      "Arrojó su capa, dio un salto y vino a Jesús."
    ],
    opciones: ["Bartimeo", "Lázaro", "Zaqueo", "Malco"],
    correcta: "Bartimeo"
  },
  {
    pistas: [
      "Hijo de Eunice y nieto de Loida.",
      "Acompañó a Pablo desde Listra habiendo sido circuncidado.",
      "Padecía de frecuentes enfermedades estomacales según una carta epistolar."
    ],
    opciones: ["Timoteo", "Tito", "Apolo", "Lucas"],
    correcta: "Timoteo"
  },
  {
    pistas: [
      "Varón elocuente y poderoso en las Escrituras, nacido en Alejandría.",
      "Predicaba fervientemente en Efeso conociendo solo el bautismo de Juan.",
      "Fue instruido con más exactitud por el matrimonio de Aquila y Priscila."
    ],
    opciones: ["Apolo", "Pablo", "Esteban", "Cefas"],
    correcta: "Apolo"
  },
  {
    pistas: [
      "Estaba descansando debajo de una higuera antes de que lo invitaran a conocer al maestro.",
      "Cuestionó inicialmente si de una ciudad pequeña y humilde podía salir algo bueno.",
      "Se sorprendió al escuchar que lo conocían y lo describieron como un hombre sin engaño."
    ],
    opciones: ["Natanael", "Felipe", "Tomás", "Andrés"],
    correcta: "Natanael"
  },
  {
    pistas: [
      "Vivía en el desierto vistiendo ropa de pelo de camello y un cinto de cuero.",
      "Su alimentación diaria se basaba en langostas y miel silvestre.",
      "Se negó inicialmente a bautizar al maestro alegando que él necesitaba ser bautizado por él."
    ],
    opciones: ["Juan el Bautista", "Elías", "Amós", "Santiago"],
    correcta: "Juan el Bautista"
  },
  {
    pistas: [
      "Un rey impío ordenó apresarlo para ejecutarlo después de la fiesta de los panes sin levadura.",
      "Quedó encadenado entre dos soldados mientras la comunidad oraba sin cesar por él.",
      "Pensaba que estaba viviendo una visión hasta que se vio solo en medio de la calle."
    ],
    opciones: ["Pedro", "Santiago", "Juan", "Pablo"],
    correcta: "Pedro"
  },
  {
    pistas: [
      "Era una mujer respetada por la comunidad por confeccionar vestidos y túnicas para las viudas.",
      "Falleció en una ciudad costera y sus ropas tejidas fueron mostradas con tristeza.",
      "Su otro nombre traducido significaba Dorcas."
    ],
    opciones: ["Tabita", "Lidia", "Priscila", "Febe"],
    correcta: "Tabita"
  },
  {
    pistas: [
      "Acompañó a su esposo en el oficio de fabricar tiendas de campaña.",
      "Alojó en su casa a un gran orador de Alejandría para explicarle con más exactitud el camino.",
      "Es mencionada junto a su cónyuge como colaboradora clave en varias comunidades."
    ],
    opciones: ["Priscila", "Febe", "Lidia", "Sintique"],
    correcta: "Priscila"
  },
  {
    pistas: [
      "Era un siervo fugitivo que había abandonado a su dueño en la provincia de Asia.",
      "Conoció al maestro de las cartas mientras este se encontraba bajo custodia.",
      "Regresó a su antiguo hogar llevando consigo una carta que pedía recibirlo como a un hermano."
    ],
    opciones: ["Onésimo", "Epafrodito", "Tíquico", "Arquipo"],
    correcta: "Onésimo"
  },
  {
    pistas: [
      "Viajó miles de kilómetros para llevar una ayuda económica y servir a un prisionero.",
      "Enfermó gravemente al borde de la muerte durante su travesía de servicio.",
      "Fue enviado de regreso con una carta para tranquilizar a la comunidad que sufría por su salud."
    ],
    opciones: ["Epafrodito", "Onésimo", "Gayo", "Epafras"],
    correcta: "Epafrodito"
  },
  {
    pistas: [
      "Tuvo un hermano menor que compró su primogenitura por un plato de guisado rojo.",
      "Era un hábil cazador y el hijo preferido de su padre por la caza que traía.",
      "Salió a recibir a su hermano con cuatrocientos hombres tras años de distanciamiento."
    ],
    opciones: ["Esaú", "Laban", "Ismael", "Rubén"],
    correcta: "Esaú"
  },
  {
    pistas: [
      "Su padre decidió ofrecerlo como rey cuando era joven mientras buscaba unas asnas perdidas.",
      "Destacaba entre los demás por ser tan alto que sobresalía de hombros arriba.",
      "Consultó a una adivina en una noche de desesperación antes de su última batalla."
    ],
    opciones: ["Saúl", "Abner", "Jonatán", "Jeroboam"],
    correcta: "Saúl"
  },
  {
    pistas: [
      "Se quedó dormido en una ventana durante un discurso prolijo que duró hasta la medianoche.",
      "Cayó desde un tercer piso debido al sueño y fue levantado muerto.",
      "Fue abrazado por el predicador, quien calmó a la multitud diciendo que su vida estaba en él."
    ],
    opciones: ["Eutico", "Tíquico", "Sostenes", "Crispo"],
    correcta: "Eutico"
  },
  {
    pistas: [
      "Iba de regreso a su país natal en África leyendo sentado en su carro de combate.",
      "Iba leyendo un pasaje del profeta que hablaba de una oveja llevada al matadero.",
      "Pidió ser bautizado inmediatamente al ver un depósito de agua en el camino."
    ],
    opciones: ["El eunuco etíope", "Cornelio", "Manaén", "Simeón el Níger"],
    correcta: "El eunuco etíope"
  },
  {
    pistas: [
      "Obligado por los soldados romanos a llevar una cruz ajena camino al lugar del suplicio.",
      "Venía de trabajar en el campo cuando lo interceptó la multitud.",
      "Era oriundo del norte de África y padre de Alejandro y Rufo."
    ],
    opciones: ["Simón de Cirene", "José de Arimatea", "Cleofás", "Tadeo"],
    correcta: "Simón de Cirene"
  },
  {
    pistas: [
      "Fue llamado por su nombre divino para diseñar y construir los artefactos del tabernáculo.",
      "Lleno del Espíritu de Dios con sabiduría para trabajar en oro, plata, bronce y tallado de piedras.",
      "Pertenecía a la tribu de Judá y trabajó en equipo junto a Oholiab."
    ],
    opciones: ["Bezaleel", "Hiram", "Serafías", "Zorobabel"],
    correcta: "Bezaleel"
  },
  {
    pistas: [
      "Era un hombre piadoso a quien se le reveló que no moriría sin ver al enviado del Señor.",
      "Tomó al niño en sus brazos dentro del templo y bendijo a Dios.",
      "Expresó en su oración que ya podía partir en paz porque sus ojos habían visto la salvación."
    ],
    opciones: ["Simeón", "Zacarías", "Gamaliel", "Nicodemo"],
    correcta: "Simeón"
  },
  {
    pistas: [
      "Iba de camino a una aldea distante a unos sesenta estadios de la capital.",
      "Caminaba triste conversando con otro acompañante sobre los hechos ocurridos en la ciudad.",
      "No reconoció al maestro en el trayecto sino hasta el momento de partir el pan en la mesa."
    ],
    opciones: ["Cleofás", "Tómas", "Ananías", "Sostenes"],
    correcta: "Cleofás"
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