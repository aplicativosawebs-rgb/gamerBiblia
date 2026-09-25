(function () {
  const QUESTIONS = [
  {
    "emoji": "🪐🌍🧬👨‍👩‍👧",
    "pista": "Su estructura pasa de la creación a la historia de una familia, y termina con esa familia instalada en Egipto, no con Israel ya formado como nación.",
    "opciones": [
      "Números",
      "Génesis",
      "Éxodo",
      "Deuteronomio"
    ],
    "correcta": "Génesis",
    "explicacion": "El libro que presenta los comienzos, los patriarcas y el descenso de Jacob y sus hijos a Egipto."
  },
  {
    "emoji": "🔥🩸🌊⛰️",
    "pista": "La identidad del pueblo cambia radicalmente: pasa de la opresión en Egipto a un pacto nacional acompañado por instrucciones para el culto.",
    "opciones": [
      "Génesis",
      "Deuteronomio",
      "Éxodo",
      "Levítico"
    ],
    "correcta": "Éxodo",
    "explicacion": "El libro que conecta la liberación de Egipto, el Sinaí y la construcción del tabernáculo."
  },
  {
    "emoji": "🐂🩸🔥🧼",
    "pista": "No se centra en grandes viajes militares; desarrolla sacrificios, pureza, sacerdocio y santidad comunitaria.",
    "opciones": [
      "Éxodo",
      "Levítico",
      "Deuteronomio",
      "Génesis"
    ],
    "correcta": "Levítico",
    "explicacion": "El libro que organiza buena parte de la vida ritual y sacerdotal de Israel."
  },
  {
    "emoji": "🏕️🔢🐍🚶",
    "pista": "Comienza con censos y termina con una nueva generación preparada para entrar en la tierra, después de años marcados por rebeliones y desplazamientos.",
    "opciones": [
      "Deuteronomio",
      "Números",
      "Génesis",
      "Éxodo"
    ],
    "correcta": "Números",
    "explicacion": "El libro que sigue al pueblo en el desierto y registra varias crisis que afectan la entrada a Canaán."
  },
  {
    "emoji": "📜👴🏞️🗣️",
    "pista": "Gran parte del libro tiene forma de discursos dirigidos a una generación que está a punto de cruzar el Jordán y que necesita recordar el pacto.",
    "opciones": [
      "Génesis",
      "Deuteronomio",
      "Éxodo",
      "Números"
    ],
    "correcta": "Deuteronomio",
    "explicacion": "El libro de los discursos finales de Moisés y de la renovación del pacto antes de la entrada en la tierra."
  },
  {
    "emoji": "🏞️🏰⚔️🪨",
    "pista": "La narración pasa del liderazgo de Moisés a la distribución territorial y termina con una renovación pública de la fidelidad al pacto.",
    "opciones": [
      "Ester",
      "Rut",
      "Josué",
      "1 Reyes"
    ],
    "correcta": "Josué",
    "explicacion": "El libro que narra la entrada en Canaán bajo el liderazgo de Josué."
  },
  {
    "emoji": "🌀⚔️🔁🙍",
    "pista": "Su patrón repetido muestra cómo Israel se desvía, sufre opresión, clama, recibe un libertador y vuelve a desviarse.",
    "opciones": [
      "1 Crónicas",
      "1 Samuel",
      "Jueces",
      "2 Crónicas"
    ],
    "correcta": "Jueces",
    "explicacion": "El libro donde los ciclos de infidelidad y liberación muestran el deterioro de Israel antes de la monarquía."
  },
  {
    "emoji": "🌾👣💍🏠",
    "pista": "Una mujer extranjera queda integrada en una familia israelita mediante lealtad, trabajo y una institución familiar relacionada con el rescate.",
    "opciones": [
      "1 Crónicas",
      "Rut",
      "Esdras",
      "2 Reyes"
    ],
    "correcta": "Rut",
    "explicacion": "El relato que comienza en tiempos de los jueces y termina conectando a una extranjera con el linaje de David."
  },
  {
    "emoji": "🫗👑🐄⚔️",
    "pista": "El libro enlaza el ministerio de Samuel, el surgimiento de la monarquía y el conflicto entre el primer rey y el hombre que será su sucesor.",
    "opciones": [
      "Josué",
      "Nehemías",
      "Esdras",
      "1 Samuel"
    ],
    "correcta": "1 Samuel",
    "explicacion": "El libro en el que conviven Samuel, Saúl y el ascenso inicial de David."
  },
  {
    "emoji": "👑🕊️⚔️🏙️",
    "pista": "La narración se concentra en el reinado de David, incluyendo la consolidación de Jerusalén, la promesa dinástica y graves crisis dentro de su propia casa.",
    "opciones": [
      "2 Reyes",
      "Josué",
      "2 Samuel",
      "Jueces"
    ],
    "correcta": "2 Samuel",
    "explicacion": "El libro que desarrolla principalmente el reinado de David después de la muerte de Saúl."
  },
  {
    "emoji": "🏛️💰👑⚡",
    "pista": "Comienza con una etapa de esplendor y construcción, pero avanza hacia la división del reino y conflictos relacionados con la idolatría.",
    "opciones": [
      "2 Samuel",
      "Esdras",
      "Ester",
      "1 Reyes"
    ],
    "correcta": "1 Reyes",
    "explicacion": "El libro que pasa de Salomón a la división del reino y presenta a Elías frente al poder de Acab."
  },
  {
    "emoji": "🔥👑🏚️⛓️",
    "pista": "Sigue a los reyes de Israel y Judá hasta la caída de ambos reinos y los exilios, incluyendo ministerios de Elías y Eliseo en su primera parte.",
    "opciones": [
      "2 Reyes",
      "Ester",
      "1 Samuel",
      "2 Crónicas"
    ],
    "correcta": "2 Reyes",
    "explicacion": "El libro que culmina con la caída de Jerusalén y el exilio de Judá."
  },
  {
    "emoji": "📜👨‍👩‍👦🎶👑",
    "pista": "Su extensa sección genealógica prepara una narración centrada en David, con mucho interés en organización, culto y preparación para el templo.",
    "opciones": [
      "2 Crónicas",
      "1 Crónicas",
      "1 Reyes",
      "2 Reyes"
    ],
    "correcta": "1 Crónicas",
    "explicacion": "El libro que reexpone la historia desde Adán hasta David con énfasis en genealogías y culto."
  },
  {
    "emoji": "🏛️🎺🙏📖",
    "pista": "La narración sigue principalmente a los reyes de Judá y presta especial atención a reformas religiosas, templo, sacerdocio y respuesta espiritual a las crisis.",
    "opciones": [
      "2 Crónicas",
      "1 Reyes",
      "Josué",
      "2 Samuel"
    ],
    "correcta": "2 Crónicas",
    "explicacion": "El libro que comienza con Salomón y termina con el exilio y el decreto que permite el regreso."
  },
  {
    "emoji": "📜🏗️🙏🧱",
    "pista": "El retorno del exilio se relaciona con la reconstrucción del templo y, más adelante, con la enseñanza y aplicación de la Ley.",
    "opciones": [
      "Josué",
      "Esdras",
      "Jueces",
      "1 Samuel"
    ],
    "correcta": "Esdras",
    "explicacion": "El libro que combina regreso, reconstrucción del templo y reforma bajo la dirección de Esdras."
  },
  {
    "emoji": "🏰🧱🌙📖",
    "pista": "La reconstrucción no se limita a levantar muros: el relato también aborda liderazgo, conflictos económicos, organización comunitaria y lectura pública de la Ley.",
    "opciones": [
      "1 Samuel",
      "Nehemías",
      "2 Crónicas",
      "Rut"
    ],
    "correcta": "Nehemías",
    "explicacion": "El libro donde un funcionario de la corte persa dirige la restauración de las murallas de Jerusalén."
  },
  {
    "emoji": "👑📜🎭🍷",
    "pista": "El nombre de Dios no aparece explícitamente en el texto, pero una serie de coincidencias, decisiones y cambios de poder determina la supervivencia de un pueblo amenazado.",
    "opciones": [
      "Jueces",
      "Ester",
      "2 Reyes",
      "1 Samuel"
    ],
    "correcta": "Ester",
    "explicacion": "El libro ambientado en una corte persa donde una joven judía llega a ocupar una posición decisiva."
  },
  {
    "emoji": "🌪️🪨🗣️⚖️",
    "pista": "El protagonista pierde casi todo y su experiencia provoca largos debates sobre sufrimiento, justicia y las explicaciones que sus amigos intentan ofrecer.",
    "opciones": [
      "Salmos",
      "Eclesiastés",
      "Job",
      "Proverbios"
    ],
    "correcta": "Job",
    "explicacion": "El libro poético donde una crisis personal se convierte en una discusión profunda sobre la justicia y la soberanía de Dios."
  },
  {
    "emoji": "🎵😭🙏👑",
    "pista": "Reúne poemas de géneros muy distintos: lamento, acción de gracias, realeza, sabiduría y adoración, muchos dirigidos directamente a Dios.",
    "opciones": [
      "Job",
      "Salmos",
      "Eclesiastés",
      "Proverbios"
    ],
    "correcta": "Salmos",
    "explicacion": "El gran libro de cantos y oraciones usado por generaciones de Israel y de la iglesia."
  },
  {
    "emoji": "🦉🗣️💡⚖️",
    "pista": "Su sabiduría contrasta repetidamente dos caminos de vida y trata asuntos como palabras, dinero, trabajo, disciplina, sexualidad y relaciones.",
    "opciones": [
      "Eclesiastés",
      "Salmos",
      "Job",
      "Proverbios"
    ],
    "correcta": "Proverbios",
    "explicacion": "El libro sapiencial lleno de máximas para formar carácter y discernimiento práctico."
  },
  {
    "emoji": "⏳🌫️☀️🧐",
    "pista": "El autor observa la repetición de la vida humana y cuestiona qué permanece cuando se persiguen logros, placer, conocimiento y riqueza.",
    "opciones": [
      "Eclesiastés",
      "Salmos",
      "Job",
      "Proverbios"
    ],
    "correcta": "Eclesiastés",
    "explicacion": "El libro que reflexiona sobre la fugacidad de las obras humanas y la dificultad de hallar sentido bajo el sol."
  },
  {
    "emoji": "👑🔥📜🕊️",
    "pista": "Combina denuncias contra la infidelidad del pueblo con visiones sobre juicio, consuelo, restauración y figuras mesiánicas estudiadas ampliamente en el Nuevo Testamento.",
    "opciones": [
      "Jonás",
      "Ezequiel",
      "Isaías",
      "Abdías"
    ],
    "correcta": "Isaías",
    "explicacion": "El libro profético que reúne visiones de santidad, juicio, consuelo y esperanza mesiánica."
  },
  {
    "emoji": "🏺😭📣⛓️",
    "pista": "El profeta anuncia el desastre de Jerusalén y, al mismo tiempo, habla de un futuro pacto escrito en el corazón.",
    "opciones": [
      "Sofonías",
      "Jeremías",
      "Daniel",
      "Zacarías"
    ],
    "correcta": "Jeremías",
    "explicacion": "El libro donde el ministerio de un profeta perseguido coincide con los últimos años antes de la caída de Jerusalén."
  },
  {
    "emoji": "🏚️😭🧱🕯️",
    "pista": "Cinco composiciones poéticas enfrentan el desastre de Jerusalén, alternando duelo colectivo, confesión y esperanza en medio de la ruina.",
    "opciones": [
      "Daniel",
      "Lamentaciones",
      "Zacarías",
      "Amós"
    ],
    "correcta": "Lamentaciones",
    "explicacion": "El libro poético que lamenta la destrucción de Jerusalén."
  },
  {
    "emoji": "👁️🦴🔥🌊",
    "pista": "Incluye visiones difíciles de interpretar, actos simbólicos y una extensa sección sobre restauración y un templo ideal.",
    "opciones": [
      "Isaías",
      "Ezequiel",
      "Hageo",
      "Abdías"
    ],
    "correcta": "Ezequiel",
    "explicacion": "El libro profético asociado con los querubines, el valle de huesos secos y visiones de restauración."
  },
  {
    "emoji": "🦁🔥🪙🌙",
    "pista": "Reúne relatos de fidelidad en un imperio extranjero y visiones sobre reinos y poderes que trascienden el contexto inmediato del protagonista.",
    "opciones": [
      "Isaías",
      "Oseas",
      "Miqueas",
      "Daniel"
    ],
    "correcta": "Daniel",
    "explicacion": "El libro que combina historias de exilio con sueños y visiones apocalípticas."
  },
  {
    "emoji": "💍💔🏠🌾",
    "pista": "La vida matrimonial del profeta funciona como una señal sobre la relación rota y persistente entre Dios e Israel.",
    "opciones": [
      "Oseas",
      "Amós",
      "Habacuc",
      "Malaquías"
    ],
    "correcta": "Oseas",
    "explicacion": "El libro profético que utiliza la experiencia de un matrimonio como imagen de la infidelidad de Israel."
  },
  {
    "emoji": "🦗🌾🔥🕊️",
    "pista": "Un desastre agrícola sirve para convocar al arrepentimiento y desemboca en una promesa sobre el derramamiento del Espíritu sobre toda carne.",
    "opciones": [
      "Zacarías",
      "Jonás",
      "Joel",
      "Jeremías"
    ],
    "correcta": "Joel",
    "explicacion": "El libro que une una plaga de langostas con una promesa futura sobre el Espíritu."
  },
  {
    "emoji": "⚖️🌾📣🏛️",
    "pista": "Un pastor de Judá denuncia a un reino próspero porque su culto no compensa la explotación y la injusticia social.",
    "opciones": [
      "Malaquías",
      "Sofonías",
      "Amós",
      "Hageo"
    ],
    "correcta": "Amós",
    "explicacion": "El libro profético que cuestiona la religiosidad de una sociedad económicamente fuerte pero moralmente injusta."
  },
  {
    "emoji": "🏔️⚔️🔥🏠",
    "pista": "Su mensaje se dirige de manera muy concentrada contra una nación vecina acusada de alegrarse de la caída de Jerusalén.",
    "opciones": [
      "Hageo",
      "Abdías",
      "Malaquías",
      "Zacarías"
    ],
    "correcta": "Abdías",
    "explicacion": "El libro profético más breve del Antiguo Testamento, centrado en el juicio contra Edom."
  },
  {
    "emoji": "🐟🌊🏙️🌱",
    "pista": "El protagonista intenta evitar una misión hacia una ciudad extranjera y termina más molesto por la misericordia recibida por otros que por el peligro que corrió él mismo.",
    "opciones": [
      "Jeremías",
      "Malaquías",
      "Jonás",
      "Habacuc"
    ],
    "correcta": "Jonás",
    "explicacion": "El libro donde un profeta huye de su misión hacia una gran ciudad y luego cuestiona la compasión de Dios."
  },
  {
    "emoji": "⚖️🏚️👑🗻",
    "pista": "Denuncia líderes corruptos y anuncia tanto juicio como una esperanza vinculada con un gobernante procedente de una pequeña localidad de Judá.",
    "opciones": [
      "Miqueas",
      "Hageo",
      "Malaquías",
      "Jeremías"
    ],
    "correcta": "Miqueas",
    "explicacion": "El libro que combina denuncias sociales con una profecía sobre un gobernante que saldría de Belén."
  },
  {
    "emoji": "🏙️🔥⚔️🌊",
    "pista": "Su poesía celebra el derrumbe de una potencia extranjera que había oprimido a otros pueblos, especialmente a Judá.",
    "opciones": [
      "Jeremías",
      "Amós",
      "Nahúm",
      "Sofonías"
    ],
    "correcta": "Nahúm",
    "explicacion": "El libro profético dedicado principalmente al juicio contra Nínive."
  },
  {
    "emoji": "❓🌑👁️🙏",
    "pista": "A diferencia de otros profetas, comienza cuestionando a Dios por la aparente victoria de la injusticia y termina expresando confianza aunque no haya cosecha.",
    "opciones": [
      "Oseas",
      "Hageo",
      "Abdías",
      "Habacuc"
    ],
    "correcta": "Habacuc",
    "explicacion": "El libro que presenta un diálogo intenso entre el profeta y Dios sobre el problema del mal."
  },
  {
    "emoji": "🔥👑🌍🎺",
    "pista": "Anuncia un día de juicio amplio que alcanza a naciones y a Judá, pero termina proyectando restauración y alegría de Dios por su pueblo.",
    "opciones": [
      "Daniel",
      "Sofonías",
      "Amós",
      "Oseas"
    ],
    "correcta": "Sofonías",
    "explicacion": "El libro profético que presenta el día del Señor como juicio y luego como restauración."
  },
  {
    "emoji": "🏗️🏛️📣🌱",
    "pista": "Sus mensajes se dirigen a una comunidad que había priorizado sus propias casas mientras la casa de Dios seguía sin reconstruirse.",
    "opciones": [
      "Miqueas",
      "Hageo",
      "Jeremías",
      "Jonás"
    ],
    "correcta": "Hageo",
    "explicacion": "El libro profético que anima a reanudar la construcción del templo después del exilio."
  },
  {
    "emoji": "🐎🕯️🫒👑",
    "pista": "Contiene una serie de visiones nocturnas y símbolos complejos, junto con anuncios sobre un rey humilde y la futura restauración de Jerusalén.",
    "opciones": [
      "Joel",
      "Zacarías",
      "Nahúm",
      "Lamentaciones"
    ],
    "correcta": "Zacarías",
    "explicacion": "El libro profético de visiones que combina restauración, sacerdocio y expectativas sobre un rey."
  },
  {
    "emoji": "🔥💍⚖️🛡️",
    "pista": "Sus mensajes cuestionan el culto negligente, la infidelidad del pueblo y la idea de que servir a Dios no produce ninguna diferencia.",
    "opciones": [
      "Habacuc",
      "Oseas",
      "Malaquías",
      "Amós"
    ],
    "correcta": "Malaquías",
    "explicacion": "El último libro de los profetas menores en el canon tradicional, con una fuerte forma de diálogo entre Dios y el pueblo."
  },
  {
    "emoji": "👑⛰️📜🗝️",
    "pista": "Presenta a Jesús en diálogo constante con las Escrituras de Israel y organiza enseñanzas extensas, incluyendo un gran discurso pronunciado desde una montaña.",
    "opciones": [
      "Mateo",
      "Juan",
      "Marcos",
      "Lucas"
    ],
    "correcta": "Mateo",
    "explicacion": "El evangelio que conecta a Jesús con promesas y figuras del Antiguo Testamento y enfatiza el reino de los cielos."
  },
  {
    "emoji": "⚡🏜️🛏️⚓",
    "pista": "Su relato avanza con rapidez y dedica mucho espacio a las acciones de Jesús, los conflictos y el proceso de comprensión de los discípulos.",
    "opciones": [
      "Mateo",
      "Juan",
      "Lucas",
      "Marcos"
    ],
    "correcta": "Marcos",
    "explicacion": "El evangelio más breve de los cuatro, conocido por su ritmo narrativo rápido y abundancia de acciones."
  },
  {
    "emoji": "📜👶🩺🎶",
    "pista": "Se interesa por una investigación ordenada, por personajes socialmente marginados y por episodios exclusivos como ciertas parábolas y escenas de infancia.",
    "opciones": [
      "Lucas",
      "Mateo",
      "Juan",
      "Marcos"
    ],
    "correcta": "Lucas",
    "explicacion": "El evangelio que introduce su obra como una investigación ordenada y continúa después en Hechos."
  },
  {
    "emoji": "💧🍞👁️🌿",
    "pista": "En lugar de usar principalmente parábolas breves, desarrolla largos diálogos y señales que apuntan a la identidad de Jesús.",
    "opciones": [
      "Marcos",
      "Mateo",
      "Juan",
      "Lucas"
    ],
    "correcta": "Juan",
    "explicacion": "El evangelio que organiza buena parte de su relato alrededor de señales y declaraciones sobre quién es Jesús."
  },
  {
    "emoji": "🔥🕊️🗺️⛵",
    "pista": "Comienza en Jerusalén y termina con el mensaje cristiano proclamado en la capital del imperio, siguiendo el avance desde un grupo local hacia otras regiones.",
    "opciones": [
      "Efesios",
      "Colosenses",
      "Hechos",
      "1 Tesalonicenses"
    ],
    "correcta": "Hechos",
    "explicacion": "El libro que narra la expansión de la iglesia y los viajes misioneros de figuras como Pedro y Pablo."
  },
  {
    "emoji": "⚖️🫀✝️🌍",
    "pista": "Desarrolla de manera sistemática temas como pecado, justificación, unión con Cristo, Israel, vida en el Espíritu y transformación de la comunidad.",
    "opciones": [
      "Filipenses",
      "Romanos",
      "Gálatas",
      "2 Corintios"
    ],
    "correcta": "Romanos",
    "explicacion": "La carta donde Pablo presenta una exposición amplia de su evangelio y luego extrae consecuencias prácticas para la iglesia."
  },
  {
    "emoji": "🍞🍷🧩⚖️",
    "pista": "La iglesia tiene problemas de divisiones, sexualidad, pleitos, culto y uso de dones, y Pablo responde también preguntas sobre la resurrección.",
    "opciones": [
      "Romanos",
      "Filipenses",
      "1 Corintios",
      "Gálatas"
    ],
    "correcta": "1 Corintios",
    "explicacion": "La carta que confronta múltiples problemas internos de una iglesia y desarrolla uno de los capítulos más conocidos sobre el amor."
  },
  {
    "emoji": "😭🫶📜🏺",
    "pista": "Pablo defiende su ministerio, habla de debilidad y consolación y explica por qué un ministro puede sufrir sin que eso invalide su llamado.",
    "opciones": [
      "Gálatas",
      "1 Corintios",
      "1 Tesalonicenses",
      "2 Corintios"
    ],
    "correcta": "2 Corintios",
    "explicacion": "La carta donde Pablo muestra con más detalle su relación pastoral con una iglesia que había cuestionado su autoridad."
  },
  {
    "emoji": "⛓️✝️🕊️🌿",
    "pista": "La discusión central gira en torno a la libertad en Cristo y a si los creyentes gentiles deben adoptar prácticas identitarias de la Ley para pertenecer plenamente al pueblo de Dios.",
    "opciones": [
      "Gálatas",
      "2 Tesalonicenses",
      "1 Tesalonicenses",
      "Romanos"
    ],
    "correcta": "Gálatas",
    "explicacion": "La carta que desarrolla con fuerza la justificación por la fe y contrasta las obras de la carne con el fruto del Espíritu."
  },
  {
    "emoji": "🧩🏛️🕊️🛡️",
    "pista": "Presenta a la iglesia como un solo cuerpo en Cristo y luego aplica esa identidad a relaciones familiares, vida comunitaria y conflicto espiritual.",
    "opciones": [
      "Gálatas",
      "1 Corintios",
      "Romanos",
      "Efesios"
    ],
    "correcta": "Efesios",
    "explicacion": "La carta que desarrolla la unidad de judíos y gentiles en un solo cuerpo y termina con una conocida imagen de la armadura de Dios."
  },
  {
    "emoji": "😊⛓️🏃‍♂️🫶",
    "pista": "Aunque Pablo escribe desde una situación de prisión, insiste en el gozo, la humildad y una manera de pensar centrada en el ejemplo de Cristo.",
    "opciones": [
      "Romanos",
      "2 Tesalonicenses",
      "2 Corintios",
      "Filipenses"
    ],
    "correcta": "Filipenses",
    "explicacion": "La carta breve donde el gozo cristiano aparece repetidamente incluso en medio del sufrimiento."
  },
  {
    "emoji": "👑🌌🧱🕊️",
    "pista": "La carta insiste en la supremacía de Cristo y advierte contra sistemas religiosos que podían desplazarlo como centro de la vida espiritual.",
    "opciones": [
      "Romanos",
      "Colosenses",
      "Filipenses",
      "2 Tesalonicenses"
    ],
    "correcta": "Colosenses",
    "explicacion": "La carta que presenta a Cristo como cabeza de la iglesia y desarrolla una visión elevada de su autoridad."
  },
  {
    "emoji": "🌙🎺🕊️🤝",
    "pista": "Pablo anima a una iglesia joven, elogia su perseverancia y responde preguntas relacionadas con creyentes que han muerto y con la futura venida del Señor.",
    "opciones": [
      "1 Tesalonicenses",
      "Efesios",
      "Colosenses",
      "Gálatas"
    ],
    "correcta": "1 Tesalonicenses",
    "explicacion": "La carta temprana donde Pablo consuela a una comunidad sobre la esperanza futura y la resurrección de los creyentes."
  },
  {
    "emoji": "⏳🔥👁️⚠️",
    "pista": "Pablo corrige ideas confusas sobre que el día del Señor ya habría ocurrido y llama a la comunidad a no abandonar sus responsabilidades ordinarias.",
    "opciones": [
      "Romanos",
      "2 Corintios",
      "2 Tesalonicenses",
      "Gálatas"
    ],
    "correcta": "2 Tesalonicenses",
    "explicacion": "La carta que aclara expectativas escatológicas y confronta el desorden causado por algunas interpretaciones sobre el fin."
  },
  {
    "emoji": "🩸⛺👑⚓",
    "pista": "Compara repetidamente el ministerio de Jesús con figuras y prácticas del antiguo pacto y presenta su sacrificio como definitivo.",
    "opciones": [
      "Apocalipsis",
      "2 Pedro",
      "Hebreos",
      "Santiago"
    ],
    "correcta": "Hebreos",
    "explicacion": "El escrito que desarrolla extensamente el sacerdocio de Cristo y la superioridad del nuevo pacto."
  },
  {
    "emoji": "🪞👅🔥💡",
    "pista": "Su enfoque práctico une fe y conducta mediante ejemplos sobre lengua, favoritismo, pruebas, sabiduría, oración y cuidado del necesitado.",
    "opciones": [
      "Apocalipsis",
      "Santiago",
      "2 Pedro",
      "1 Pedro"
    ],
    "correcta": "Santiago",
    "explicacion": "La carta que pregunta implícitamente cómo se demuestra una fe auténtica en la conducta diaria."
  },
  {
    "emoji": "🔥🪨🕊️🏠",
    "pista": "Escrita a comunidades que enfrentaban presión social, usa imágenes de peregrinos, piedras vivas y sacerdocio para explicar su identidad en medio del sufrimiento.",
    "opciones": [
      "Apocalipsis",
      "1 Pedro",
      "Santiago",
      "Hebreos"
    ],
    "correcta": "1 Pedro",
    "explicacion": "La carta que anima a creyentes dispersos a permanecer firmes en santidad mientras sufren oposición."
  },
  {
    "emoji": "🕯️🐎⚠️📖",
    "pista": "Advierte contra maestros que distorsionan la esperanza cristiana y anima a esperar el día del Señor viviendo en santidad.",
    "opciones": [
      "Santiago",
      "Hebreos",
      "2 Pedro",
      "Apocalipsis"
    ],
    "correcta": "2 Pedro",
    "explicacion": "La carta breve que combina advertencias contra falsos maestros con una reflexión sobre el juicio y la paciencia de Dios."
  },
  {
    "emoji": "🐉🐑🏆🏙️✨",
    "pista": "Usa visiones, símbolos, números y escenas celestiales para interpretar la perseverancia de las iglesias y presentar el conflicto final y la nueva creación.",
    "opciones": [
      "Santiago",
      "Apocalipsis",
      "Hebreos",
      "2 Pedro"
    ],
    "correcta": "Apocalipsis",
    "explicacion": "El libro de visiones dirigido a siete iglesias de Asia que culmina con juicio, victoria y una nueva Jerusalén."
  }
];

    const TOTAL_QUESTIONS = 5;
  let current = 0;
  let score = 0;
  let deck = [];
  let finished = false;

  const els = {
    emoji: document.getElementById("emoji"),
    question: document.getElementById("question"),
    options: document.getElementById("options"),
    feedback: document.getElementById("feedback"),
    nextBtn: document.getElementById("nextBtn"),
    progress: document.getElementById("progress"),
    qNum: document.getElementById("qNum"),
    qTotal: document.getElementById("qTotal"),
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

  function render() {
    if (finished) return;

    const q = deck[current];

    els.qNum.textContent = current + 1;
    els.qTotal.textContent = deck.length;
    els.progress.style.width = (current / deck.length * 100) + "%";
    els.emoji.textContent = q.emoji;
    els.question.textContent = "🔎 " + q.pista;
    els.feedback.className = "feedback";
    els.feedback.textContent = "";
    els.nextBtn.style.display = "none";
    els.options.innerHTML = "";

    if (els.section) {
      els.section.textContent = `Pregunta ${current + 1} de ${deck.length}`;
    }

    shuffle(q.opciones).forEach(op => {
      const button = document.createElement("button");
      button.className = "option-btn";
      button.textContent = op;
      button.addEventListener("click", () => answer(button, op, q));
      els.options.appendChild(button);
    });
  }

  function answer(button, selected, q) {
    if (finished) return;

    const all = els.options.querySelectorAll(".option-btn");
    all.forEach(b => b.disabled = true);

    if (selected === q.correcta) {
      button.classList.add("correct", "pop");
      score += 100;
      els.score.textContent = score;
      els.feedback.className = "feedback ok show";
      els.feedback.textContent = "✅ ¡Correcto! +100 puntos";
    } else {
      button.classList.add("wrong", "shake");
      all.forEach(b => {
        if (b.textContent === q.correcta) b.classList.add("correct");
      });
      els.feedback.className = "feedback bad show";
      els.feedback.innerHTML = `
        <p>❌ Era: <strong>${q.correcta}</strong></p>
        <p style="margin-top:8px;">${q.explicacion}</p>`;
    }

    els.nextBtn.style.display = "inline-flex";
  }

  els.nextBtn.addEventListener("click", () => {
    current++;
    if (current >= deck.length) {
      finish();
    } else {
      render();
    }
  });

  function finish() {
    finished = true;
    Storage.addScore("libro-emoji", score, true);

    els.progress.style.width = "100%";
    els.emoji.textContent = "🎉";
    els.question.textContent = "¡Has recorrido la selección de libros!";
    els.feedback.className = "feedback ok show";
    els.feedback.innerHTML = `
      <p style="font-size:1.3rem;margin-bottom:12px;">
        Puntos finales: <strong>${score}</strong> / ${deck.length * 100}
      </p>
      <a href="../index.html" class="btn primary">Menú</a>
      <button class="btn" id="again">Jugar de nuevo</button>`;

    els.nextBtn.style.display = "none";
    els.options.innerHTML = "";

    document.getElementById("again").addEventListener("click", reset);
  }

  function reset() {
    score = 0;
    current = 0;
    finished = false;
    deck = shuffle(QUESTIONS).slice(0, TOTAL_QUESTIONS);
    els.score.textContent = 0;
    render();
  }

  document.getElementById("resetBtn").addEventListener("click", () => {
    if (confirm("¿Reiniciar el juego?")) reset();
  });

  reset();
})();