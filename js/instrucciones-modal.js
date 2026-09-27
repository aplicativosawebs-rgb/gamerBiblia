// Lógica para mostrar instrucciones en modal
(function() {
  // Array con instrucciones de todos los juegos
  const GAME_INSTRUCTIONS = [
    {
      id: 1,
      gameId: 'personaje',
      params: ['personaje', 'p'],
      name: 'Adivina el Personaje',
      emoji: '👤',
      description: 'Adivina personajes bíblicos con pistas progresivas',
      instructions: [
        'Se te mostrarán pistas sobre un personaje bíblico',
        'Lee la pista y elige la respuesta correcta entre las opciones',
        'Cada respuesta correcta suma puntos',
        'Tienes 5 preguntas por sesión',
        '¡Completa el juego y ve tu puntuación!'
      ],
      difficulty: 'Fácil',
      maxScore: 500
    },
    {
      id: 2,
      gameId: 'libro-emoji',
      params: ['libro-emoji', 'libro', 'le'],
      name: 'Adivina qué Libro es',
      emoji: '📖',
      description: 'Identifica libros bíblicos usando emojis como pistas',
      instructions: [
        'Recibirás pistas con emojis que representan un libro de la Biblia',
        'Interpreta los emojis y elige el libro correcto',
        'Cada acierto suma puntos',
        'Tienes 5 preguntas por sesión',
        'Desarrolla tu intuición sobre los símbolos bíblicos'
      ],
      difficulty: 'Fácil',
      maxScore: 500
    },
    {
      id: 3,
      gameId: 'memoria',
      params: ['memoria', 'm'],
      name: 'Encuentra la Pareja',
      emoji: '🃏',
      description: 'Juego de memoria: empareja libros bíblicos',
      instructions: [
        'Se mostrarán 16 cartas boca abajo en una cuadrícula 4x4',
        'Haz clic en dos cartas para voltearlas',
        'Si coinciden, permanecen boca arriba',
        'Si no coinciden, se voltean nuevamente',
        'El objetivo es emparejar todos los 8 pares',
        'Menos movimientos = más puntos'
      ],
      difficulty: 'Fácil',
      maxScore: 500
    },
    {
      id: 4,
      gameId: 'ahorcado',
      params: ['ahorcado', 'a'],
      name: 'El Ahorcado',
      emoji: '🔤',
      description: 'Adivina palabras y conceptos bíblicos letra por letra',
      instructions: [
        'Se muestra una palabra oculta con espacios en blanco',
        'Sugiere letras para revelar la palabra',
        'Cada letra correcta se revela',
        'Tienes intentos limitados antes de perder',
        'Aprende conceptos importantes de la Biblia',
        'Completa 5 palabras por sesión'
      ],
      difficulty: 'Medio',
      maxScore: 500
    },
    {
      id: 5,
      gameId: 'timeline',
      params: ['timeline', 'tiempo', 't'],
      name: 'Línea de Tiempo Bíblica',
      emoji: '⏱️',
      description: 'Ordena eventos bíblicos en el orden cronológico correcto',
      instructions: [
        'Se te mostrarán 5 eventos bíblicos sin orden',
        'Arrastra y ordena los eventos del más antiguo al más reciente',
        'Verifica el orden correcto',
        'Si es correcto, ganas puntos',
        'Aprende la secuencia histórica de la Biblia',
        'Cada sesión tiene eventos diferentes'
      ],
      difficulty: 'Medio',
      maxScore: 500
    },
    {
      id: 6,
      gameId: 'codigo-secreto',
      params: ['codigo-secreto', 'codigo', 'cs'],
      name: 'El Código Secreto',
      emoji: '🔐',
      description: 'Encuentra versículos bíblicos usando coordenadas',
      instructions: [
        'Se te pide que encuentres un versículo específico',
        'Debes ingresar: Libro - Capítulo - Versículo',
        'Ejemplo: Génesis-1-1 o Mateo-5-3',
        'Si la respuesta es correcta, verás el versículo y ganarás puntos',
        'Aprende la ubicación de pasajes importantes',
        '5 versículos por sesión'
      ],
      difficulty: 'Difícil',
      maxScore: 500
    },
    {
      id: 7,
      gameId: 'verdadero-falso',
      params: ['verdadero-falso', 'vf', 'vof'],
      name: 'Verdadero o Falso',
      emoji: '✔️❌',
      description: 'Identifica si las afirmaciones bíblicas son ciertas o falsas',
      instructions: [
        'Leerás afirmaciones sobre la Biblia',
        'Haz clic en VERDE si es VERDADERO',
        'Haz clic en ROJO si es FALSO',
        'Las afirmaciones pueden contener detalles engañosos',
        'Recibirás explicación después de cada respuesta',
        '100 puntos por acierto - Máximo 500 puntos',
        'Cada sesión: 5 preguntas diferentes del banco de 15'
      ],
      difficulty: 'Fácil',
      maxScore: 500
    },
    {
      id: 8,
      gameId: 'detective-biblico',
      params: ['detective-biblico', 'detective', 'db'],
      name: 'Detective Bíblico',
      emoji: '🔍',
      description: 'Resuelve misterios bíblicos usando pistas progresivas',
      instructions: [
        'Se describe un misterio bíblico o personaje sin revelar quién es',
        'Recibe 3 pistas progresivas para investigar',
        'Puedes solicitar más pistas antes de resolver',
        'Cuando estés listo, ingresa tu respuesta de texto',
        'Puntos: 300 con 1 pista, 200 con 2, 100 con 3',
        'Las respuestas aceptan variaciones (sin mayúsculas, acentos)',
        '5 casos por sesión de un banco de 10'
      ],
      difficulty: 'Difícil',
      maxScore: 1500
    },
    {
      id: 9,
      gameId: 'semaforo-biblico',
      params: ['semaforo-biblico', 'semaforo', 'sb'],
      name: 'Semáforo Bíblico',
      emoji: '🚦',
      description: 'Identifica afirmaciones como verdaderas, falsas o contextuales',
      instructions: [
        'Leerás afirmaciones bíblicas que pueden ser:',
        '  🟢 VERDADERAS (completamente correctas)',
        '  🔴 FALSAS (incorrectas según la Biblia)',
        '  🟡 CONTEXTUALES (requieren aclaración o interpretación)',
        'Haz clic en el botón de color correcto',
        'Recibirás explicación detallada con fundamento bíblico',
        '100 puntos por acierto - Máximo 500 puntos',
        'Desarrolla pensamiento crítico teológico',
        '5 preguntas por sesión de un banco de 20'
      ],
      difficulty: 'Medio',
      maxScore: 500
    }
  ];

  // Obtener parámetro de URL
  function getGameParam() {
    const params = new URLSearchParams(window.location.search);
    return params.get('game') || getCurrentGameParam();
  }

  // Detectar el juego actual por el nombre del archivo
  function getCurrentGameParam() {
    const filename = window.location.pathname.split('/').pop().replace('.html', '');
    return filename;
  }

  // Buscar instrucciones por parámetro
  function findInstructions(param) {
    const normalized = param.toLowerCase().trim();
    return GAME_INSTRUCTIONS.find(game => 
      game.params.some(p => p.toLowerCase() === normalized) || 
      game.gameId === normalized
    );
  }

  // Obtener elementos del DOM
  const modalElement = document.getElementById('modal-instrucciones');
  const btnInstrucciones = document.getElementById('btn-instrucciones');
  const closeModalBtn = document.getElementById('cerrar-modal');
  const modalContent = document.getElementById('modal-content');

  // Validar que existan los elementos necesarios
  if (!modalElement || !btnInstrucciones) {
    console.warn('Modal de instrucciones no encontrado en el DOM');
    return;
  }

  // Llenar modal con instrucciones
  function fillModal(game) {
    if (!game || !modalContent) return;

    modalContent.innerHTML = `
      <div class="instrucciones-header">
        <h2>${game.emoji} ${game.name}</h2>
        <p class="instrucciones-desc">${game.description}</p>
        <div class="instrucciones-meta">
          <span class="dificultad ${game.difficulty.toLowerCase()}">⭐ ${game.difficulty}</span>
          <span class="max-score">🏆 Máximo: ${game.maxScore} pts</span>
        </div>
      </div>
      <div class="instrucciones-body">
        <ol class="instrucciones-list">
          ${game.instructions.map(inst => `<li>${inst}</li>`).join('')}
        </ol>
      </div>
      <div class="instrucciones-footer">
        <button class="btn primary" id="comenzar-juego">
          <span class="material-icons">play_arrow</span>
          Comenzar Juego
        </button>
      </div>
    `;

    // Evento para cerrar modal al hacer clic en "Comenzar Juego"
    document.getElementById('comenzar-juego').addEventListener('click', closeModal);
  }

  // Abrir modal
  function openModal() {
    const param = getGameParam();
    const game = findInstructions(param);//
    
    if (!game) {
      console.warn(`No se encontraron instrucciones para: ${param}`);
      return;
    }

    fillModal(game);
    modalElement.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevenir scroll
  }

  // Cerrar modal
  function closeModal() {
    modalElement.classList.remove('show');
    document.body.style.overflow = 'auto'; // Restaurar scroll
  }

  // Eventos
  btnInstrucciones.addEventListener('click', openModal);

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  // Cerrar modal al hacer clic fuera del contenido
  modalElement.addEventListener('click', (e) => {
    if (e.target === modalElement) {
      closeModal();
    }
  });

  // Cerrar con tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalElement.classList.contains('show')) {
      closeModal();
    }
  });
})();