(function() {
  const CASE_BANK = [
    {
    question: '¿Quién es este personaje?',
    clues: [
      'Negué conocer a Jesús tres veces antes de que el gallo cantara.',
      'Fui uno de los doce apóstoles más cercanos al Maestro.',
      'Llegué a ser un líder fundamental en la iglesia primitiva en Jerusalén.'
    ],
    answers: ['pedro', 'peter', 'simón pedro', 'simon pedro', 'simon'],
    hint: 'Un apóstol y pescador de Galilea',
    correctResponse: '¡Excelente! Descubriste a Pedro, el apóstol que se convirtió en pilar de la iglesia primitiva.'
  },
  {
    question: '¿Cuál es este personaje o evento bíblico?',
    clues: [
      'Un hombre fue arrojado a un foso de leones por no dejar de orar a su Dios.',
      'Sus enemigos engañaron al rey para promulgar un edicto y así atraparlo.',
      'El rey selló el foso, pero Dios envió a su ángel para cerrar la boca de los leones.'
    ],
    answers: ['daniel', 'daniel en el foso de los leones', 'foso de los leones', 'daniel foso'],
    hint: 'Un profeta y consejero en Babilonia',
    correctResponse: '¡Correcto! Daniel fue preservado milagrosamente en el foso de los leones por su fidelidad.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Fui famoso por pedir sabiduría a Dios antes que riquezas o larga vida.',
      'Tuve un gran número de esposas extranjeras, lo que desvió mi corazón en la vejez.',
      'Construí el primer Templo de Jerusalén y escribí gran parte de Proverbios.'
    ],
    answers: ['salomón', 'salomon', 'solomon', 'rey salomón', 'rey salomon', 'king solomon'],
    hint: 'Un monarca famoso por su sabiduría',
    correctResponse: '¡Exacto! Salomón fue el rey más sabio de Israel, aunque en sus últimos años su corazón se apartó de Dios.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Vivía en Jericó y protegí a los espías enviados por Josué escondiéndolos en mi terrado.',
      'Atesoré una cordón de grana en mi ventana como señal para salvar a mi familia.',
      'A pesar de mi pasado como ramera, pasé a formar parte de la genealogía de Jesús.'
    ],
    answers: ['rahab', 'raab'],
    hint: 'Una mujer de Jericó mencionada en la genealogía de Cristo',
    correctResponse: '¡Muy bien! Rahab demostró fe al ayudar a los espías de Israel y fue integrada al pueblo de Dios.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Mi ofrenda de las primeras crías del rebaño fue del agrado de Dios.',
      'Soy el primer ser humano víctima de un homicidio en el relato bíblico.',
      'Mis padres eran Adán y Eva, y mi hermano me mató por envidia.'
    ],
    answers: ['abel'],
    hint: 'El segundo hijo de Adán y Eva',
    correctResponse: '¡Correcto! Abel fue el primer hombre asesinado en la historia bíblica, víctima del rencor de su hermano Caín.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Recibí la instrucción de construir una enorme embarcación de madera de gofer.',
      'Fui hallado justo ante Dios en medio de una generación corrupta.',
      'Mi familia y yo fuimos preservados del gran diluvio junto con los animales.'
    ],
    answers: ['noé', 'noe', 'noah'],
    hint: 'El constructor del arca',
    correctResponse: '¡Correcto! Noé halló gracia ante los ojos de Dios y preservó la vida sobre la tierra.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Fui sacado de las aguas del Nilo cuando era apenas un bebé.',
      'Enfrenté al faraón exigiendo la libertad del pueblo de Israel.',
      'Recibí las tablas de la Ley en el monte Sinaí.'
    ],
    answers: ['moisés', 'moises', 'moses'],
    hint: 'El libertador del Éxodo',
    correctResponse: '¡Excelente! Moisés fue el profeta y legislador que guio a Israel fuera de la esclavitud en Egipto.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Traté de huir del llamado de Dios embarcándome hacia Tarsis.',
      'Permanecí tres días y tres noches en el vientre de un gran pez.',
      'Prediqué finalmente en Nínive, logrando que la ciudad se arrepintiera.'
    ],
    answers: ['jonás', 'jonas'],
    hint: 'El profeta que intentó huir de su misión',
    correctResponse: '¡Correcto! Jonás entendió la soberanía y misericordia de Dios tras su experiencia con el gran pez.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Llevaba la bolsa del dinero entre los discípulos de Jesús.',
      'Entregué al Maestro a los principales sacerdotes por 30 piezas de plata.',
      'Identifiqué a Jesús ante los guardias dándole un beso en el huerto de Getsemaní.'
    ],
    answers: ['judas', 'judas iscariote', 'judas iscariot'],
    hint: 'El discípulo que entregó a Jesús',
    correctResponse: '¡Correcto! Judas Iscariote fue el apóstol que traicionó a Jesús por dinero.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Siendo un joven pastor, vencí al gigante Goliat con una honda y una piedra.',
      'Fui un talentoso músico que tocaba el arpa para calmar al rey Saúl.',
      'Fui ungido como el segundo rey de Israel y llamado "un varón conforme al corazón de Dios".'
    ],
    answers: ['david', 'rey david', 'king david'],
    hint: 'El rey poeta de Israel',
    correctResponse: '¡Excelente! David fue el gran rey de Israel, compositor de salmos y antepasado del Mesías.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Mi padre era un sacerdote de Benjamín y fui santificado desde el vientre para ser profeta.',
      'Compré un campo en Anatot en plena invasión babilonia como símbolo de esperanza futura.',
      'Fui arrojado a una cisterna llena de barro por anunciar la caída inminente de Jerusalén.'
    ],
    answers: ['jeremías', 'jeremias', 'jeremiah'],
    hint: 'Conocido popularmente como el profeta llorón',
    correctResponse: '¡Excelente deducción! Jeremías anunció el exilio babilonio y la restauración futura de Israel.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Mi esposo y yo fuimos instruidos por un ángel sobre cómo criar a un hijo bajo voto nazareo.',
      'Cuestioné al ángel preguntándole su nombre, y me respondió: "¿Por qué preguntas por mi nombre, que es admirable?".',
      'Ofrecí un cabrito sobre una roca y vi al ángel del Señor ascender en la llama del altar.'
    ],
    answers: ['manoa', 'manoah'],
    hint: 'El padre del juez Sansón',
    correctResponse: '¡Impresionante! Manoa fue el padre de Sansón y presenció la manifestación del ángel del Señor.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Fui rey de Judá y comencé mi reinado a la temprana edad de ocho años.',
      'Durante las reparaciones del Templo, el sumo sacerdote Hilcías encontró el Libro de la Ley olvidado.',
      'Lideré la mayor reforma religiosa en Judá, destruyendo los altares paganos y celebrando una Pascua memorable.'
    ],
    answers: ['josías', 'josias', 'josiah'],
    hint: 'Uno de los últimos y más piadosos reyes de Judá',
    correctResponse: '¡Correcto! Josías restauró la adoración pura tras el hallazgo del Libro de la Ley.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Acompañé a Pablo en su primer viaje misionero, pero los abandoné al llegar a Panfilia.',
      'Mi partida posterior causó un fuerte desacuerdo y separación entre Pablo y Bernabé.',
      'Tiempo después fui restaurado en la estima de Pablo y escribí uno de los cuatro Evangelios.'
    ],
    answers: ['marcos', 'juan marcos', 'mark', 'john mark'],
    hint: 'Sobrino o pariente de Bernabé y autor de un evangelio',
    correctResponse: '¡Exacto! Juan Marcos superó su tropiezo inicial y fue útil para el ministerio de la iglesia primitiva.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Llegué a ser el rey de los amorreos y mi cama de hierro medía más de cuatro metros de largo.',
      'Fui uno de los últimos supervivientes de la raza de los gigantes (los refaítas).',
      'Mi reino en Basán fue conquistado por los israelitas bajo el mando de Moisés.'
    ],
    answers: ['og', 'og de basan', 'og de basán'],
    hint: 'Un rey gigante de Basán vencido en el desierto',
    correctResponse: '¡Conocimiento de nivel experto! Og fue el célebre rey gigante vencido por Israel en Edrei.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Era una próspera vendedora de púrpura originaria de la ciudad de Tiatira.',
      'Escuché la predicación a orillas del río y el Señor abrió mi corazón para creer.',
      'Me convertí en la primera persona convertida al cristianismo registrada en Europa y hospedé a Pablo en mi casa.'
    ],
    answers: ['lidia', 'lidia de tiatira', 'lydia'],
    hint: 'Comerciante hospedadora en la ciudad de Filipos',
    correctResponse: '¡Muy bien! Lidia albergó la primera iglesia en Filipos tras su conversión.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Construí una horca de 22 metros de altura para ejecutar a mi mayor enemigo político.',
      'Fui un alto oficial del imperio persa bajo el reinado del rey Asuero.',
      'Mi plan de exterminar al pueblo judío fue descubierto y terminé colgado en mi propia horca.'
    ],
    answers: ['amán', 'aman', 'haman'],
    hint: 'El antagonista principal en el libro de Ester',
    correctResponse: '¡Correcto! Amán promovió el genocidio contra los judíos pero su maldad recayó sobre él.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Nací en Alejandría, era un judío elocuente y muy versado en las Escrituras.',
      'Enfrenté un problema en mi doctrina: solo conocía y predicaba el bautismo de Juan.',
      'Un matrimonio piadoso (Aquila y Priscila) me tomó aparte para exponerme más exactamente el camino de Dios.'
    ],
    answers: ['apolos', 'apolosh', 'apollos'],
    hint: 'Predicador elocuente que enseñó en Éfeso y Corinto',
    correctResponse: '¡Sobresaliente! Apolos se convirtió en un pilar clave en la edificación de las iglesias comunitarias.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Fui un profeta campesino oriundo de Tecoa dedicado a cuidar higueras silvestres y rebaños.',
      'Fui enviado al Reino del Norte (Israel) a denunciar la opresión a los pobres y la falsa religiosidad.',
      'El sacerdote Amasías en Betel trató de silenciarme y me ordenó huir de regreso a Judá.'
    ],
    answers: ['amós', 'amos'],
    hint: 'Profeta menor que enfatizó la justicia social',
    correctResponse: '¡Excelente! Amós proclamó el juicio de Dios contra la injusticia en el santuario de Betel.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Era una jueza y profetisa que dictaba sentencias bajo una palmera entre Ramá y Betel.',
      'Mandé llamar a Barac para que liderara al ejército israelita contra las tropas de Sísara.',
      'Acompañé al ejército a la batalla y compuse un célebre cántico de victoria.'
    ],
    answers: ['débora', 'debora', 'deborah'],
    hint: 'La única mujer nombrada como jueza de Israel',
    correctResponse: '¡Correcto! Débora guio a Israel con sabiduría y coraje durante el periodo de los Jueces.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Suplanté a mi hermano mayor vistiéndome con sus ropas y cubriendo mis brazos con pieles de cabrito.',
      'Tuve una visión de una escalera que tocaba el cielo por la cual subían y bajaban ángeles.',
      'Trabajé 14 años para mi tío Labán para poder casarme con la mujer que amaba.'
    ],
    answers: ['jacob', 'israel'],
    hint: 'Patriarca que más tarde fue renombrado Israel',
    correctResponse: '¡Exacto! Jacob obtuvo la bendición y se convirtió en el padre de los doce patriarcas.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Era un diácono de la iglesia primitiva lleno de gracia y poder que hacía grandes prodigios.',
      'Sostuve un intenso debate teológico ante el Sanedrín revisando toda la historia de Israel.',
      'Vi los cielos abiertos y a Jesús a la diestra de Dios mientras era apedreado hasta la muerte.'
    ],
    answers: ['esteban', 'stephen', 'san esteban'],
    hint: 'Considerado el primer mártir (protomártir) del cristianismo',
    correctResponse: '¡Muy bien! Esteban perdonó a sus agresores mientras entregaba su vida por la fe.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Me apodaron "Hijo de Consolación" por mi generosidad al vender una heredad para la comunidad.',
      'Fui a buscar a Saulo a Tarso y lo introduje ante los apóstoles en Jerusalén cuando todos le temían.',
      'Lideré junto a Pablo la primera gran misión evangelizadora entre los gentiles.'
    ],
    answers: ['bernabé', 'bernabe', 'barnabas'],
    hint: 'Compañero de viajes de Pablo reconocido por su carácter alentador',
    correctResponse: '¡Correcto! Bernabé respaldó a Pablo y fue una pieza clave en el crecimiento en Antioquía.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Mi padre me ofreció en holocausto cumpliendo un voto apresurado hecho antes de la batalla.',
      'Lloré mi virginidad durante dos meses en los montes junto a mis compañeras.',
      'Soy la única hija de un juez galaadita que derrotó a los amonitas.'
    ],
    answers: ['la hija de jefté', 'hija de jefte', 'hija de jefté', 'hija de jefte'],
    hint: 'La joven víctima del voto hecho por el juez Jefté',
    correctResponse: '¡Gran deducción! La historia de la hija de Jefté representa uno de los pasajes más trágicos de Jueces.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Fui el sumo sacerdote que juzgó e interrogó a Jesús la noche de su arresto.',
      'Propuse ante el consejo: "Nos conviene que un solo hombre muera por el pueblo, y no que toda la nación perezca".',
      'Presidí el tribunal religioso junto con mi suegro Anás.'
    ],
    answers: ['caifás', 'caifas', 'caiaphas'],
    hint: 'El sumo sacerdote durante el juicio a Jesús',
    correctResponse: '¡Correcto! Caifás lideró la conspiración religiosa para entregar a Jesús a las autoridades romanas.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
       'me enamoré de la nuera de mi prima lejana y actué como su pariente redentor (*goel*).',
      'Acepté comprar la propiedad familiar y casarme con una viuda moabita para preservar el nombre del difunto.',
      'Gané el derecho quitándome el calzado en la puerta de la ciudad según la costumbre ancestral.'
    ],
    answers: ['booz', 'boaz'],
    hint: 'El esposo de Rut y bisabuelo del rey David',
    correctResponse: '¡Excelente! Booz actuó con justicia y misericordia, entrando en la línea genealógica de David y Jesús.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Fui enviado a reconstruir las murallas destruidas de Jerusalén mientras ejercía como copero real.',
      'Enfronté la constante oposición y burlas de Sanbalat y Tobías durante las obras.',
      'Organizaba a los trabajadores para que construyeran con una mano y sostuvieran la espada con la otra.'
    ],
    answers: ['nehemías', 'nehemias', 'nehemiah'],
    hint: 'El líder y gobernador que amuralló Jerusalén tras el exilio',
    correctResponse: '¡Correcto! Nehemías demostró un liderazgo excepcional al reconstruir los muros en solo 52 días.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Era un centurión romano piadoso y temeroso de Dios asignado en Cesarea.',
      'Vi a un ángel en visión que me ordenó mandar a llamar a Simón Pedro a Jope.',
      'Al recibir el mensaje del Evangelio, el Espíritu Santo cayó sobre mi familia antes de ser bautizados.'
    ],
    answers: ['cornelio', 'cornelius'],
    hint: 'El primer oficial gentil convertido registrado en el libro de Hechos',
    correctResponse: '¡Exacto! Cornelio abrió las puertas de la iglesia apostólica para los creyentes de origen gentil.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Traté de matar al bebé Moisés, pero años después mi propia hija lo rescató y crió en mi palacio.',
      'Sufrí diez plagas devastadoras sobre mi nación por haberme negado a dejar ir al pueblo de Dios.',
      'Mi ejército pereció ahogado en las aguas del Mar Rojo mientras perseguía a los israelitas.'
    ],
    answers: ['faraón', 'faraon', 'el faraón', 'el faraon', 'pharaoh'],
    hint: 'El gobernante de Egipto durante el Éxodo',
    correctResponse: '¡Muy bien! El Faraón endureció su corazón y experimentó el juicio divino sobre su reino.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Caí de un carro de guerra herido de muerte por una flecha lanzada al azar en Ramot de Galaad.',
      'Mandé a edificar una casa de marfil y promoví el culto al dios Baal introducido por mi esposa Jezabel.',
      'Codicié y me apoderé de la viña de Nabot tras ordenar su ejecución con falsos testigos.'
    ],
    answers: ['acab', 'ahab', 'rey acab'],
    hint: 'Uno de los reyes más malvados del Reino del Norte (Israel)',
    correctResponse: '¡Excelente resolución! Acab fue el rey confrontado repetidamente por el profeta Elías.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Era un oficial de alto rango del rey Acab que escondió a cien profetas del Señor en dos cuevas para salvarlos de Jezabel.',
      'Alimenté a los profetas perseguidos con pan y agua a escondidas.',
      'Me encontré con el profeta Elías en el camino y me aterrorizó llevar su mensaje a Acab por temor a que el Espíritu se lo llevara y yo fuera ejecutado.'
    ],
    answers: ['abdías', 'abdias', 'obadiah'],
    hint: 'Mayordomo o mayordomo de la casa del rey Acab (diferente del profeta menor)',
    correctResponse: '¡Impresionante nivel de detective! Abdías arriesgó su vida para proteger a los profetas de la ira de Jezabel.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Fui un oficial militar que mató a Sísara, el comandante del ejército de Jabín, mientras este dormía en mi tienda.',
      'Le ofrecí leche y una manta para que descansara tras su derrota en la batalla.',
      'Usé una estaca de la tienda y un martillo para atravesar sus sienes mientras estaba profundamente dormido.'
    ],
    answers: ['jael', 'jahel'],
    hint: 'La mujer cenea mencionada en el cántico de Débora',
    correctResponse: '¡Excelente deducción! Jael acabó con el general Sísara cumpliendo la profecía dada por Débora.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Era el rey de los moabitas que contrató a Balaam para que maldijera al pueblo de Israel.',
      'Edifiqué altares y ofrecí sacrificios en varios montes intentando cambiar el juicio divino.',
      'Viendo que Balaam solo bendecía a Israel, me indigné profundamente con el adivino.'
    ],
    answers: ['balac', 'balak'],
    hint: 'El monarca de Moab en el libro de Números',
    correctResponse: '¡Correcto! Balac intentó sin éxito usar la adivinación para frenar el avance israelita.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Era el abuelo materno del rey David y vivía en la región de Belén.',
      'Fui el hijo de la moabita Rut y del adinerado Booz.',
      'Mi propio hijo, Isaí, tuvo ocho hijos, siendo el menor de ellos el rey David.'
    ],
    answers: ['obed', 'obedh'],
    hint: 'El padre de Isaí y eslabón en la genealogía mesiánica',
    correctResponse: '¡Sorprendente conocimiento genealógico! Obed fue el abuelo del rey David.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Era un general de David que mató brutalmente a Absalón atravesando su corazón con tres dardos mientras colgaba de un encina.',
      'Desobedecí la orden directa del rey David de conservar la vida del joven Absalón.',
      'Años después fui ejecutado al pie del altar en el Templo por orden del rey Salomón.'
    ],
    answers: ['joab'],
    hint: 'El sanguinario comandante en jefe del ejército de David',
    correctResponse: '¡Excelente! Joab fue el poderoso pero implacable jefe del ejército de David.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Mi hermano y yo frotamos el suelo y fuimos heridos de muerte por el fuego del altar por ofrecer "fuego extraño" ante el Señor.',
      'Éramos los hijos mayores del sumo sacerdote Aarón y estábamos consagrados como sacerdotes.',
      'Nuestra repentina muerte trágica sirvió como una seria advertencia sobre la santidad del tabernáculo.'
    ],
    answers: ['nadab', 'nadab y abiú', 'nadab y abiu'],
    hint: 'El primogénito de Aarón mencionado en Levítico 10',
    correctResponse: '¡Increíble memoria bíblica! Nadab desobedeció los rituales de santidad ordenados para el sacerdocio.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Fui un oficial etíope de la casa real que intercedió ante el rey Sedequías para salvar al profeta Jeremías.',
      'Saqué a Jeremías de la cisterna de barro usando cuerdas y trapos viejos para no lastimar sus axilas.',
      'Recibí una promesa directa de parte de Dios de que mi vida sería preservada durante la destrucción de Jerusalén.'
    ],
    answers: ['ebed-melec', 'ebed melec', 'ebedmelec', 'ebed-melech'],
    hint: 'Eunuco sirviente en el palacio del rey Sedequías',
    correctResponse: '¡Conocimiento de nivel maestro! Ebed-melec salvó la vida de Jeremías cuando los príncipes lo dejaron morir.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Era un orador y abogado contratado por los sacerdotes para acusar formalmente al apóstol Pablo ante el gobernador Félix.',
      'Comencé mi discurso halagando la gestión del gobernador antes de calumniar a Pablo.',
      'Califiqué a Pablo como una "plaga" y líder de la secta de los nazarenos.'
    ],
    answers: ['tértulo', 'tertulo', 'tertullus'],
    hint: 'El retórico acusador en Hechos 24',
    correctResponse: '¡Gran investigación! Tértulo fue el abogado contratado para argumentar la querella contra Pablo en Cesarea.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Fui rey de Judá y enfermé gravemente de los pies en mi vejez, pero no busqué al Señor sino a los médicos.',
      'Destruí los altares de Baal al inicio de mi reinado y derroté al gigantesco ejército etíope de Zera.',
      'Encarcelé al profeta Hanani cuando me reprendió por hacer una alianza con el rey de Siria.'
    ],
    answers: ['asá', 'asa'],
    hint: 'El tercer rey de Judá, hijo de Abías',
    correctResponse: '¡Correcto! Asá fue un rey piadoso la mayor parte de su vida, aunque tuvo un triste declive en su vejez.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Era un sirviente del profeta Eliseo que codició los regalos que el sirio Naamán ofreció tras ser sanado.',
      'Mentí al profeta y corrí tras Naamán para pedirle plata y vestidos a sus espaldas.',
      'Como castigo por mi codicia y engaño, la lepra de Naamán se me pegó a mí y a mi descendencia.'
    ],
    answers: ['gazi', 'giezi', 'gehazi'],
    hint: 'El criado del profeta Eliseo',
    correctResponse: '¡Muy bien resuelto! Giezi sufrió las consecuencias inmediatas de su codicia y falsedad.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Era el rey de Moab, un hombre extremadamente obeso que sometió a Israel durante 18 años.',
      'El juez Aod me engañó pidiendo una audiencia privada para entregarme un "mensaje de Dios".',
      'Fui asesinado en mi sala de verano con un puñal de doble filo que quedó enterrado en mi gordura.'
    ],
    answers: ['eglón', 'eglon'],
    hint: 'El rey moabita ajusticiado por el juez zurdo Aod',
    correctResponse: '¡Deducción implacable! Eglón fue derrotado por el juez Aod en su propia residencia.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Era una profetisa de la tribu de Aser, hija de Fanuel, que no se apartaba del Templo.',
      'Quedé viuda tras siete años de matrimonio y serví a Dios con ayunos y oraciones hasta los 84 años.',
      'Llegué en el preciso momento en que presentaban al niño Jesús en el Templo y di gracias a Dios hablando de él a todos.'
    ],
    answers: ['ana', 'anna'],
    hint: 'La anciana profetisa presente en la presentación de Jesús',
    correctResponse: '¡Exacto! Ana reconoció al Mesías al ser presentado en el Templo por María y José.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Traté de usurpar el trono de David en su vejez autoproclamándome rey junto al manantial de Rogel.',
      'Conté con el apoyo del general Joab y del sacerdote Abiatar, pero no con el del profeta Natán.',
      'Huí al altar y me agarré de los cuernos del mismo temiendo que mi hermano Salomón me ejecutara.'
    ],
    answers: ['adonías', 'adonias', 'adonijah'],
    hint: 'El cuarto hijo de David que intentó arrebatar la corona a Salomón',
    correctResponse: '¡Excelente! Adonías intentó ser coronado antes de que Salomón fuera ungido oficialmente.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Fui el profeta que rompió su manto nuevo en doce pedazos y le entregó diez a Jeroboam.',
      'Profeticé la división del reino de Salomón como juicio por su idolatría.',
      'Vivía en Silo y ya anciano y ciego, reconocí a la esposa disfrazada de Jeroboam anunciándole el juicio sobre su casa.'
    ],
    answers: ['ahías', 'ahias', 'ahijah'],
    hint: 'El profeta de Silo durante la división del reino',
    correctResponse: '¡Nivel leyenda! Ahías simbolizó la partición de las diez tribus del norte mediante la túnica rasgada.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Traté de comprar el poder de conferir el Espíritu Santo ofreciendo dinero a los apóstoles Pedro y Juan.',
      'Antes de mi encuentro con los apóstoles, ejercía la magia en Samaria y la gente me llamaba "el gran poder de Dios".',
      'Pedro me reprendió severamente diciéndome: "Tu dinero perezca contigo, porque has pensado que el don de Dios se obtiene con dinero".'
    ],
    answers: ['simón el mago', 'simon el mago', 'simón mago', 'simon mago', 'simón', 'simon'],
    hint: 'Personaje de Hechos 8 de cuyo nombre proviene el término "simonía"',
    correctResponse: '¡Impresionante! Simón el mago dio origen al término simonía por intentar comerciar con dones sagrados.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Era un rey filisteo de Gerar a quien Abraham engañó diciéndole que Sara era su hermana.',
      'Tomé a Sara para mi casa, pero Dios me advirtió en sueños que moría porque ella era mujer casada.',
      'Confronté a Abraham por su engaño y le devolví a su esposa con regalos y ovejas.'
    ],
    answers: ['abimelec', 'abimelech'],
    hint: 'El rey de Gerar mencionado en Génesis 20',
    correctResponse: '¡Gran precisión! Abimelec actuó con integridad tras la advertencia divina en sueños.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Fui el primer sumo sacerdote del Templo edificado tras el retorno del exilio babilonio.',
      'Aparezco en una visión del profeta Zacarías vistiendo ropas sucias mientras Satanás me acusaba.',
      'El ángel ordenó quitarme las vestiduras viles y ponerme ropa de gala y una mitra limpia.'
    ],
    answers: ['josué', 'josue', 'joshua', 'jesúa', 'jesua'],
    hint: 'El sumo sacerdote contemporáneo del gobernador Zorobabel (Zacarías 3)',
    correctResponse: '¡Súper complejo! Josué (hijo de Josadac) fue el sumo sacerdote restaurador junto a Zorobabel.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Era el consejero más brillante del rey David, cuyos consejos eran considerados como la palabra misma de Dios.',
      'Traicioné a David y me uní a la rebelión de su hijo Absalón.',
      'Cuando Absalón prefirió el consejo de Husai antes que el mío, ordené mi casa y me ahorqué.'
    ],
    answers: ['ahitófel', 'ahitofel', 'ahithophel'],
    hint: 'El famoso consejero traidor de David y abuelo de Betsabé',
    correctResponse: '¡Brillante detective! Ahitófel se suicidó al prever el inevitable fracaso de la rebelión de Absalón.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Fui un rey moabita que mandó a edificar la célebre "Estepa o Piedra Moabita" descubierta en el siglo XIX.',
      'Me rebelé contra el rey de Israel tras la muerte de Acab y dejé de pagar el tributo de 100,000 corderos.',
      'Sacrifiqué a mi primogénito sobre el muro de la ciudad en medio de un desesperado sitio militar.'
    ],
    answers: ['mesa', 'mesha'],
    hint: 'El rey de Moab que luchó contra la alianza de Joram y Josafat (2 Reyes 3)',
    correctResponse: '¡Impresionante dominio de la historia bíblica! Mesa recorded su rebelión en la famosa Estela de Mesa.'
  },
  {
    question: '¿Quién es este personaje?',
    clues: [
      'Fui un oficial judío que asesinó a Gudalías, el gobernador puesto por los babilonios tras la caída de Jerusalén.',
      'Pertenecía a la estirpe real y ejecuté mi golpe con el respaldo del rey de los amonitas.',
      'Engañé a ochenta hombres que venían con ofrendas a Jerusalén y arrojé sus cuerpos a una cisterna.'
    ],
    answers: ['ismael', 'ismael hijo de netanías', 'ismael hijo de netanias'],
    hint: 'El insurgente que masacró a Gedalías en Mizpa (Jeremías 40-41)',
    correctResponse: '¡Resolución impecable! Ismael provocó el colapso final del remanente judío que quedaba en Judá.'
  }
  ];

  let CASES = [];
  let currentCase = 0;
  let clueIndex = 0;
  let score = 0;
  let solved = false;
  let guessing = false;

  function selectRandomCases(count = 5) {
    const shuffled = [...CASE_BANK].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  const els = {
    cluesList: document.getElementById('cluesList'),
    clueNum: document.getElementById('clueNum'),
    caseNum: document.getElementById('caseNum'),
    score: document.getElementById('score'),
    nextClueBtn: document.getElementById('nextClueBtn'),
    solveBtn: document.getElementById('solveBtn'),
    guessSection: document.getElementById('guessSection'),
    guessInput: document.getElementById('guessInput'),
    submitGuessBtn: document.getElementById('submitGuessBtn'),
    cancelGuessBtn: document.getElementById('cancelGuessBtn'),
    feedback: document.getElementById('feedback'),
    progress: document.getElementById('progress'),
    nextBtn: document.getElementById('nextBtn')
  };

  function updateProgress() {
    const percentage = ((currentCase + 1) / CASES.length) * 100;
    els.progress.style.width = percentage + '%';
  }

  function startCase() {
    const c = CASES[currentCase];
    clueIndex = 0;
    solved = false;
    guessing = false;
    
    els.caseNum.textContent = currentCase + 1;
    document.getElementById('caseTotal').textContent = CASES.length;
    els.cluesList.innerHTML = '';
    els.feedback.className = 'feedback';
    els.feedback.innerHTML = '';
    els.nextBtn.style.display = 'none';
    els.guessSection.style.display = 'none';
    els.guessInput.value = '';
    els.nextClueBtn.disabled = false;
    els.solveBtn.disabled = false;
    els.nextClueBtn.textContent = '💡 Siguiente Pista';
    els.solveBtn.textContent = '🔍 Resolver Caso';
    
    updateProgress();
    showClue();
  }

  function showClue() {
    if (clueIndex < CASES[currentCase].clues.length) {
      const clueItem = document.createElement('div');
      clueItem.className = 'clue-item';
      clueItem.textContent = CASES[currentCase].clues[clueIndex];
      els.cluesList.appendChild(clueItem);
      
      clueIndex++;
      els.clueNum.textContent = clueIndex;
      
      if (clueIndex >= CASES[currentCase].clues.length) {
        els.nextClueBtn.disabled = true;
        els.nextClueBtn.textContent = '✓ Todas las pistas reveladas';
      }
    }
  }

  function normalizeName(str) {
    return str.toLowerCase().trim().replace(/[^\w\s]/g, '');
  }

  function checkAnswer(guess) {
    const c = CASES[currentCase];
    const normalizedGuess = normalizeName(guess);
    
    let isCorrect = false;
    for (let answer of c.answers) {
      if (normalizeName(answer) === normalizedGuess) {
        isCorrect = true;
        break;
      }
    }

    solved = true;
    els.nextClueBtn.disabled = true;
    els.solveBtn.disabled = true;
    els.guessSection.style.display = 'none';

    if (isCorrect) {
      // Puntos: 300 si resuelve con 1 pista, 200 con 2, 100 con 3
      let points = 300 - ((clueIndex - 1) * 100);
      score += points;
      
      els.feedback.className = 'feedback ok show';
      els.feedback.innerHTML = `
        <p style="font-size:1.2rem; color:#10b981;">🎉 ¡Caso Resuelto!</p>
        <p style="margin:12px 0; color:var(--text-muted);">${c.correctResponse}</p>
        <p style="font-size:1.1rem; color:#059669; font-weight:bold;">Pistas usadas: ${clueIndex}/3</p>
        <p style="font-size:1.2rem; color:#10b981; font-weight:bold;">+${points} pts</p>
      `;
    } else {
      els.feedback.className = 'feedback error show';
      const firstAnswer = CASES[currentCase].answers[0];
      els.feedback.innerHTML = `
        <p style="font-size:1.2rem; color:#ef4444;">❌ Respuesta Incorrecta</p>
        <p style="margin:12px 0; color:var(--text-muted);">${c.correctResponse}</p>
        <p style="color:#dc2626;">La respuesta era: <strong>${firstAnswer}</strong></p>
        <p style="font-size:0.95rem; color:#d97706; margin-top:8px;">Sin puntos en este caso.</p>
      `;
    }

    els.score.textContent = score;

    if (currentCase < CASES.length - 1) {
      els.nextBtn.style.display = 'inline-flex';
    } else {
      setTimeout(finishGame, 2000);
    }
  }

  function finishGame() {
    const maxScore = 5 * 300; // 5 casos máximo
    const percentage = Math.round((score / maxScore) * 100);
    let message = '';
    let emoji = '';

    if (percentage === 100) {
      message = '¡Eres un Detective Bíblico Experto!';
      emoji = '🕵️';
    } else if (percentage >= 80) {
      message = '¡Excelente trabajo detective!';
      emoji = '🔍';
    } else if (percentage >= 60) {
      message = '¡Buen trabajo resolviendo casos!';
      emoji = '📋';
    } else if (percentage >= 40) {
      message = 'Sigue practicando tus habilidades de detective.';
      emoji = '🎯';
    } else {
      message = 'Necesitas estudiar más la Biblia.';
      emoji = '📖';
    }

    els.feedback.className = 'feedback ok show win-pulse';
    els.feedback.innerHTML = `
      <p style="font-size:1.5rem; margin-bottom:16px;">${emoji} ${message}</p>
      <p style="font-size:1.1rem; margin-bottom:8px;">Casos completados: <strong>5</strong></p>
      <p style="font-size:1.2rem; color:#10b981; font-weight:bold; margin-bottom:16px;">Puntos totales: <strong>${score}</strong></p>
      <a href="../index.html" class="btn primary">Menú</a>`;
    
    Storage.addScore('detective-biblico', score, true);
  }

  els.nextClueBtn.addEventListener('click', () => {
    if (!solved && clueIndex < CASES[currentCase].clues.length) {
      showClue();
    }
  });

  els.solveBtn.addEventListener('click', () => {
    if (!solved && !guessing) {
      guessing = true;
      els.guessSection.style.display = 'block';
      els.guessInput.focus();
      els.nextClueBtn.disabled = true;
      els.solveBtn.disabled = true;
    }
  });

  els.submitGuessBtn.addEventListener('click', () => {
    const guess = els.guessInput.value.trim();
    if (guess) {
      checkAnswer(guess);
    }
  });

  els.cancelGuessBtn.addEventListener('click', () => {
    guessing = false;
    els.guessSection.style.display = 'none';
    els.guessInput.value = '';
    els.nextClueBtn.disabled = false;
    els.solveBtn.disabled = false;
  });

  els.guessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      els.submitGuessBtn.click();
    }
  });

  els.nextBtn.addEventListener('click', () => {
    currentCase++;
    startCase();
  });

  document.getElementById('resetBtn').addEventListener('click', () => {
    if (confirm('¿Reiniciar el juego?')) {
      CASES = selectRandomCases(5);
      currentCase = 0;
      score = 0;
      els.score.textContent = 0;
      startCase();
    }
  });

  // Iniciar con 5 casos aleatorios
  CASES = selectRandomCases(5);
  startCase();
})();