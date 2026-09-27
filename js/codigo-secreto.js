(function () {
  // ------------
const ENIGMAS = [
  {
    pregunta: 'Se menciona una antigua imagen del desierto como presagio de la elevación del Hijo del Hombre. ¿A qué versículo pertenece esta declaración previa?',
    pista: 'Se encuentra en los relatos bíblicos de los Evangelios.',
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
    pregunta: 'Ante una petición audaz de contemplar lo divino, la respuesta se enfoca en la proclamación de la bondad y el nombre. ¿En qué cita ocurre este diálogo?',
    pista: 'Pertenece a la sección de los libros de la Ley o Pentateuco.',
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
    pregunta: 'Una dura reprimenda condena a los guías que se alimentan de la lana pero descuidan a las afligidas y descarriadas. ¿En qué cita se halla esta acusación?',
    pista: 'Corresponde a la literatura de los Profetas Mayores.',
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
    pregunta: 'Se registra una suposición humana apresurada al juzgar las apariencias del primer presentado antes de recibir la corrección divina. ¿Qué versículo recoge ese juicio inicial?',
    pista: 'Forma parte de la narrativa de los Libros Históricos del Antiguo Testamento.',
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
    pregunta: 'Una parábola sobre una corderita robada culmina en una confrontación directa y personal. ¿Dónde se registra la sentencia final?',
    pista: 'Se encuentra entre los relatos de los Libros Históricos.',
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
    pregunta: 'La manifestación de la presencia divina no ocurre mediante elementos violentos, sino a través de un susurro. ¿En qué cita se encuentra este momento?',
    pista: 'Se halla en los escritos históricos de los reyes de Israel.',
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
    pregunta: 'Una exhortación a la confianza divina y al apoyo en sus mensajeros es proclamada antes de salir al campo de batalla. ¿En qué referencia se halla?',
    pista: 'Está registrado dentro de las crónicas del pueblo de Israel.',
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
    pregunta: 'Un proverbio vincula la instrucción con un elemento luminoso y la corrección con la senda de la vida. ¿Dónde está ubicado?',
    pista: 'Pertenece a la sección de Libros Poéticos o de Sabiduría.',
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
    pregunta: 'Se profetiza un duelo nacional y un lamento profundo dirigido hacia aquel que fue atravesado. ¿Cuál es la referencia exacta?',
    pista: 'Se ubica en los escritos de los Profetas Menores.',
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
    pregunta: 'Un gobernante observa con asombro la presencia de una cuarta figura ilesa entre las llamas. ¿Dónde se encuentra esta declaración?',
    pista: 'Proviene de los libros proféticos del Antiguo Testamento.',
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
    pregunta: 'Se sintetizan los requerimientos fundamentales en tres acciones: equidad, clemencia y caminata humilde. ¿En qué cita aparece este resumen?',
    pista: 'Es parte del mensaje de uno de los Profetas Menores.',
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
    pregunta: 'Se establece un contraste entre la altivez del alma y la vivencia basada en la fidelidad. ¿Cuál es el pasaje profético original?',
    pista: 'Se halla en los libros de los Profetas Menores.',
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
    pregunta: 'Se prioriza la búsqueda del dominio divino y su rectitud por encima de las preocupaciones cotidianas. ¿Qué versículo del evangelio mateano lo expresa?',
    pista: 'Forma parte del cuerpo de los Evangelios.',
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
    pregunta: 'Se exhorta a los creyentes a un proceso de renovación enfocado internamente en la mente. ¿En qué carta apostólica se halla esta frase exacta?',
    pista: 'Se encuentra en las Epístolas o Cartas del Nuevo Testamento.',
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
    pregunta: 'Se describe una acción directa sobre la facultad intelectual para capacitar la comprensión de los escritos sagrados. ¿Cuál es el versículo específico?',
    pista: 'Corresponde a los pasajes finales de los Evangelios.',
    opciones: [
      { book: 'Lucas', chapter: 24, verse: 32 },
      { book: 'Lucas', chapter: 24, verse: 45 },
      { book: 'Juan', chapter: 20, verse: 20 },
      { book: 'Hechos', chapter: 2, verse: 42 }
    ],
    correctaIdx: 1,
    versiculoTexto: '"Entonces les abrió el entendimiento, para que comprendiesen las Escrituras."'
  },
  {
    // TRAMPA: Génesis 1:1 vs Génesis 1:3. Correcta: Génesis 1:2.
    pregunta: 'Se describe un estado inicial de penumbra y desolación sobre el abismo antes de que surgiera la primera orden de luz. ¿En qué versículo se menciona este estado del Espíritu?',
    pista: 'Se encuentra en la sección de la Ley o Pentateuco.',
    opciones: [
      { book: 'Génesis', chapter: 1, verse: 1 },
      { book: 'Génesis', chapter: 1, verse: 2 },
      { book: 'Génesis', chapter: 1, verse: 3 },
      { book: 'Salmos', chapter: 104, verse: 30 }
    ],
    correctaIdx: 1,
    versiculoTexto: '"Y la tierra estaba desordenada y vacía, y las tinieblas estaban sobre la faz del abismo, y el Espíritu de Dios se movía sobre la faz de las aguas."'
  },
  {
    // TRAMPA: Éxodo 20:3 (Primer mandamiento). Correcta: Éxodo 20:12 (Promesa).
    pregunta: 'Un mandamiento específico dentro del Decálogo incluye explícitamente una promesa de longevidad sobre la tierra. ¿Cuál es su referencia exacta?',
    pista: 'Pertenece a los libros de la Ley o Pentateuco.',
    opciones: [
      { book: 'Éxodo', chapter: 20, verse: 3 },
      { book: 'Éxodo', chapter: 20, verse: 12 },
      { book: 'Deuteronomio', chapter: 5, verse: 6 },
      { book: 'Efesios', chapter: 6, verse: 2 }
    ],
    correctaIdx: 1,
    versiculoTexto: '"Honra a tu padre y a tu madre, para que tus días se alarguen en la tierra que Jehová tu Dios te da."'
  },
  {
    // TRAMPA: Josué 1:9 ("Esfuérzate y sé valiente"). Correcta: Josué 1:8 (El libro de la ley).
    pregunta: 'Se condiciona el éxito y la prosperidad en el camino a la meditación constante de las escrituras de día y de noche. ¿Qué cita contiene esta instrucción?',
    pista: 'Forma parte de la narrativa de los Libros Históricos.',
    opciones: [
      { book: 'Josué', chapter: 1, verse: 8 },
      { book: 'Josué', chapter: 1, verse: 9 },
      { book: 'Salmos', chapter: 1, verse: 2 },
      { book: 'Deuteronomio', chapter: 28, verse: 1 }
    ],
    correctaIdx: 0,
    versiculoTexto: '"Nunca se apartará de tu boca este libro de la ley, sino que de día y de noche meditarás en él, para que guardes y hagas conforme a todo lo que en él está escrito; porque entonces harás prosperar tu camino, y todo te saldrá bien."'
  },
  {
    // TRAMPA: Jueces 16:30 (Muerte de Sansón). Correcta: Jueces 16:17 (El secreto).
    pregunta: 'Tras insistentes presiones, se revela la fuente de una fuerza extraordinaria vinculada a un voto consagrado desde el nacimiento. ¿Dónde se registra esta confesión?',
    pista: 'Está dentro de los relatos de los Libros Históricos.',
    opciones: [
      { book: 'Jueces', chapter: 14, verse: 14 },
      { book: 'Jueces', chapter: 16, verse: 17 },
      { book: 'Jueces', chapter: 16, verse: 20 },
      { book: 'Jueces', chapter: 16, verse: 30 }
    ],
    correctaIdx: 1,
    versiculoTexto: '"Le descubrió, pues, todo su corazón, y le dijo: Nunca a mi cabeza llegó navaja; porque soy nazareo para Dios desde el vientre de mi madre. Si fuere rasurado, mi fuerza se apartará de mí..."'
  },
  {
    // TRAMPA: Rut 1:16 (Rut a Noemí). Correcta: Rut 1:17.
    pregunta: 'Una declaración de fidelidad total sella el compromiso entre dos mujeres mediante un juramento invocando el juicio divino sobre la muerte. ¿Cuál es el versículo del juramento?',
    pista: 'Pertenece a la sección de Libros Históricos.',
    opciones: [
      { book: 'Rut', chapter: 1, verse: 16 },
      { book: 'Rut', chapter: 1, verse: 17 },
      { book: 'Rut', chapter: 2, verse: 12 },
      { book: '1 Samuel', chapter: 20, verse: 13 }
    ],
    correctaIdx: 1,
    versiculoTexto: '"Donde tú murieres, moriré yo, y allí seré sepultada; así me haga Jehová, y aun me añada, que sólo la muerte hará separación entre nosotras dos."'
  },
  {
    // TRAMPA: Job 1:21 ("Jehová dio, Jehová quitó"). Correcta: Job 2:10.
    pregunta: 'Ante la tragedia física y el reproche de su cónyuge, se formula una reflexión sobre aceptar tanto el bien como el mal de la mano divina. ¿En qué cita se encuentra?',
    pista: 'Se ubica en la literatura Poética y de Sabiduría.',
    opciones: [
      { book: 'Job', chapter: 1, verse: 21 },
      { book: 'Job', chapter: 2, verse: 10 },
      { book: 'Job', chapter: 19, verse: 25 },
      { book: 'Job', chapter: 42, verse: 5 }
    ],
    correctaIdx: 1,
    versiculoTexto: '"Y él le dijo: Como suele hablar cualquiera de las mujeres fatuas, has hablado. ¿Qué? ¿Recibiremos de Dios el bien, y el mal no lo recibiremos? En todo esto no pecó Job con sus labios."'
  },
  {
    // TRAMPA: Salmos 91:1 ("El que habita al abrigo..."). Correcta: Salmos 91:11 (Ángeles).
    pregunta: 'Se afirma el envío de mensajeros celestiales con la misión específica de custodiar todos los desplazamientos de una persona. ¿Cuál es la cita exacta?',
    pista: 'Pertenece a la sección de Libros Poéticos o Salmos.',
    opciones: [
      { book: 'Salmos', chapter: 91, verse: 1 },
      { book: 'Salmos', chapter: 91, verse: 11 },
      { book: 'Salmos', chapter: 34, verse: 7 },
      { book: 'Mateo', chapter: 4, verse: 6 }
    ],
    correctaIdx: 1,
    versiculoTexto: '"Pues a sus ángeles mandará cerca de ti, para que te guarden en todos tus caminos."'
  },
  {
    // TRAMPA: Salmos 23:1. Correcta: Salmos 23:4.
    pregunta: 'Se menciona el tránsito por una cañada sombría, donde la calma proviene de los instrumentos de guía del pastor. ¿Dónde se ubica este pasaje?',
    pista: 'Forma parte de los Libros Poéticos o Salmos.',
    opciones: [
      { book: 'Salmos', chapter: 23, verse: 1 },
      { book: 'Salmos', chapter: 23, verse: 4 },
      { book: 'Salmos', chapter: 27, verse: 1 },
      { book: 'Isaías', chapter: 43, verse: 2 }
    ],
    correctaIdx: 1,
    versiculoTexto: '"Aunque ande en valle de sombra de muerte, no temeré mal alguno, porque tú estarás conmigo; tu vara y tu cayado me infundirán aliento."'
  },
  {
    // TRAMPA: Eclesiastés 3:1. Correcta: Eclesiastés 3:11.
    pregunta: 'Se declara que la eternidad ha sido colocada en el entendimiento humano, aunque no se logre abarcar la obra divina en su totalidad. ¿Qué versículo lo firma?',
    pista: 'Se ubica en los escritos Poéticos y de Sabiduría.',
    opciones: [
      { book: 'Eclesiastés', chapter: 3, verse: 1 },
      { book: 'Eclesiastés', chapter: 3, verse: 11 },
      { book: 'Eclesiastés', chapter: 12, verse: 13 },
      { book: 'Proverbios', chapter: 3, verse: 5 }
    ],
    correctaIdx: 1,
    versiculoTexto: '"Todo lo hizo hermoso en su tiempo; y ha puesto eternidad en el corazón de ellos, sin que alcance el hombre a entender la obra que ha hecho Dios desde el principio hasta el fin."'
  },
  {
    // TRAMPA: Isaías 9:6 ("Porque un niño nos es nacido..."). Correcta: Isaías 7:14.
    pregunta: 'Se ofrece una señal milagrosa al gobernante concerniente al nacimiento de un hijo cuya concepción desafía el orden natural y llevará un nombre profético. ¿Dónde se encuentra?',
    pista: 'Pertenece a la colección de los Profetas Mayores.',
    opciones: [
      { book: 'Isaías', chapter: 7, verse: 14 },
      { book: 'Isaías', chapter: 9, verse: 6 },
      { book: 'Mateo', chapter: 1, verse: 21 },
      { book: 'Miqueas', chapter: 5, verse: 2 }
    ],
    correctaIdx: 0,
    versiculoTexto: '"Por tanto, el Señor mismo os dará señal: He aquí que la virgen concebirá, y dará a luz un hijo, y llamará su nombre Emanuel."'
  },
  {
    // TRAMPA: Jeremías 29:11 ("Pensamientos de paz"). Correcta: Jeremías 33:3.
    pregunta: 'Se emite un mandato a clamar con la promesa de revelar aspectos ocultos e inaccesibles al conocimiento ordinario. ¿Cuál es la referencia?',
    pista: 'Se halla en los libros de los Profetas Mayores.',
    opciones: [
      { book: 'Jeremías', chapter: 29, verse: 11 },
      { book: 'Jeremías', chapter: 33, verse: 3 },
      { book: 'Isaías', chapter: 55, verse: 6 },
      { book: 'Clamores', chapter: 3, verse: 22 }
    ],
    correctaIdx: 1,
    versiculoTexto: '"Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas que tú no conoces."'
  },
  {
    // TRAMPA: Ezequiel 37:1 (Visión del valle). Correcta: Ezequiel 37:9 (Llamado al viento).
    pregunta: 'Se ordena profetizar directamente a los cuatro vientos para que insuflen aliento sobre un grupo de cuerpos inanimados. ¿En qué cita ocurre este mandato?',
    pista: 'Proviene de los escritos de los Profetas Mayores.',
    opciones: [
      { book: 'Ezequiel', chapter: 37, verse: 1 },
      { book: 'Ezequiel', chapter: 37, verse: 9 },
      { book: 'Ezequiel', chapter: 36, verse: 26 },
      { book: 'Génesis', chapter: 2, verse: 7 }
    ],
    correctaIdx: 1,
    versiculoTexto: '"Y me dijo: Profetiza al espíritu, profetiza, hijo de hombre, y di al espíritu: Así ha dicho Jehová el Señor: Espíritu, ven de los cuatro vientos, y sopla sobre estos muertos, y vivirán."'
  },
  {
    // TRAMPA: Oseas 6:6. Correcta: Joel 2:28.
    pregunta: 'Se profetiza un derramamiento del Espíritu sobre toda carne, provocando visiones y sueños en jóvenes y ancianos. ¿Dónde está registrado?',
    pista: 'Forma parte de los libros de los Profetas Menores.',
    opciones: [
      { book: 'Joel', chapter: 2, verse: 28 },
      { book: 'Hechos', chapter: 2, verse: 17 },
      { book: 'Ezequiel', chapter: 39, verse: 29 },
      { book: 'Oseas', chapter: 6, verse: 6 }
    ],
    correctaIdx: 0,
    versiculoTexto: '"Y después de esto acaecerá que derramaré mi Espíritu sobre toda carne, y profetizarán vuestros hijos y vuestras hijas; vuestros ancianos soñarán sueños, y vuestros jóvenes verán visiones."'
  },
  {
    // TRAMPA: Jonás 1:17 (En el pez). Correcta: Jonás 2:2.
    pregunta: 'Desde las profundidades de una prueba angustiosa, se formula una oración de clamor reconociendo haber sido escuchado desde el vientre del abismo. ¿Qué versículo abre esta plegaria?',
    pista: 'Pertenece a la sección de los Profetas Menores.',
    opciones: [
      { book: 'Jonás', chapter: 1, verse: 17 },
      { book: 'Jonás', chapter: 2, verse: 2 },
      { book: 'Jonás', chapter: 4, verse: 2 },
      { book: 'Salmos', chapter: 130, verse: 1 }
    ],
    correctaIdx: 1,
    versiculoTexto: '"Y dijo: Invoqué en mi angustia a Jehová, y él me oyó; Desde el seno del Seol clamé, Y mi voz oíste."'
  },
  {
    // TRAMPA: Mateo 28:19 (La gran comisión). Correcta: Mateo 28:20.
    pregunta: 'Se concluye un encargo supremo con la promesa explícita de una presencia permanente todos los días hasta el término de la era. ¿Cuál es el versículo final?',
    pista: 'Se encuentra en los relatos del cuerpo de los Evangelios.',
    opciones: [
      { book: 'Mateo', chapter: 28, verse: 18 },
      { book: 'Mateo', chapter: 28, verse: 19 },
      { book: 'Mateo', chapter: 28, verse: 20 },
      { book: 'Marcos', chapter: 16, verse: 15 }
    ],
    correctaIdx: 2,
    versiculoTexto: '"enseñándoles que guarden todas las cosas que os he mandado; y he aquí yo estoy con vosotros todos los días, hasta el fin del mundo. Amén."'
  },
  {
    // TRAMPA: Hechos 2:1 (Pentecostés). Correcta: Hechos 1:8.
    pregunta: 'Se anuncia la recepción de poder tras la llegada del Espíritu Santo para actuar como testigos hasta las regiones más apartadas. ¿Dónde se halla esta promesa?',
    pista: 'Forma parte del libro histórico del Nuevo Testamento.',
    opciones: [
      { book: 'Hechos', chapter: 1, verse: 8 },
      { book: 'Hechos', chapter: 2, verse: 4 },
      { book: 'Lucas', chapter: 24, verse: 49 },
      { book: 'Hechos', chapter: 4, verse: 31 }
    ],
    correctaIdx: 0,
    versiculoTexto: '"pero recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra."'
  },
  {
    // TRAMPA: Romanos 8:28. Correcta: Romanos 8:38-39.
    pregunta: 'Se enumera una extensa lista de poderes, estados y circunstancias cósmicas incapaces de provocar un distanciamiento del amor divino. ¿En qué cita cierra esta firme convicción?',
    pista: 'Pertenece al bloque de las Cartas o Epístolas Apostólicas.',
    opciones: [
      { book: 'Romanos', chapter: 8, verse: 28 },
      { book: 'Romanos', chapter: 8, verses: '38-39' },
      { book: '1 Corintios', chapter: 13, verse: 13 },
      { book: 'Efesios', chapter: 3, verse: 18 }
    ],
    correctaIdx: 1,
    versiculoTexto: '"Por lo cual estoy seguro de que ni la muerte, ni la vida, ni ángeles, ni principados, ni potestades, ni lo presente, ni lo por venir, ni lo alto, ni lo profundo, ni ninguna otra cosa creada nos podrá separar del amor de Dios..."'
  },
  {
    // TRAMPA: 1 Corintios 13:1 (Hablar lenguas). Correcta: 1 Corintios 13:4-5.
    pregunta: 'Se definen los atributos prácticos de una virtud suprema, destacando su paciencia, benignidad y la ausencia de envidia o vanagloria. ¿Qué pasaje la describe?',
    pista: 'Se localiza en la sección de las Cartas Apostólicas.',
    opciones: [
      { book: '1 Corintios', chapter: 13, verse: 1 },
      { book: '1 Corintios', chapter: 13, verses: '4-5' },
      { book: '1 Corintios', chapter: 13, verse: 13 },
      { book: 'Gálatas', chapter: 5, verse: 22 }
    ],
    correctaIdx: 1,
    versiculoTexto: '"El amor es sufrido, es benigno; el amor no tiene envidia, el amor no es jactancioso, no se envanece; no hace nada indebido, no busca lo suyo, no se irrita, no guarda rencor;"'
  },
  {
    // TRAMPA: Filipenses 4:13 ("Todo lo puedo..."). Correcta: Filipenses 4:6.
    pregunta: 'Se exhorta a erradicar la aflicción mediante la presentación de solicitudes a través de la plegaria y el agradecimiento. ¿En qué cita se encuentra esta indicación?',
    pista: 'Se halla dentro de las Epístolas Apostólicas.',
    opciones: [
      { book: 'Filipenses', chapter: 4, verse: 6 },
      { book: 'Filipenses', chapter: 4, verse: 13 },
      { book: 'Filipenses', chapter: 4, verse: 19 },
      { book: 'Colosenses', chapter: 4, verse: 2 }
    ],
    correctaIdx: 0,
    versiculoTexto: '"Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias."'
  },
  {
    // TRAMPA: Apocalipsis 21:1 (Cielo nuevo). Correcta: Apocalipsis 3:20.
    pregunta: 'Se presenta una imagen poética a la entrada, aguardando la apertura por parte del oyente para ingresar a una cena compartida. ¿Cuál es su referencia exactísima?',
    pista: 'Pertenece al libro profético del Nuevo Testamento.',
    opciones: [
      { book: 'Apocalipsis', chapter: 3, verse: 20 },
      { book: 'Apocalipsis', chapter: 21, verse: 1 },
      { book: 'Apocalipsis', chapter: 22, verse: 17 },
      { book: 'Lucas', chapter: 12, verse: 36 }
    ],
    correctaIdx: 0,
    versiculoTexto: '"He aquí, yo estoy a la puerta y llamo; si alguno oye mi voz y abre la puerta, entraré a él, y cenaré con él, y él conmigo."'
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