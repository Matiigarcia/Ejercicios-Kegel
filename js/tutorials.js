// tutorials.js — Tutoriales visuales con GIFs reales y guía anatómica para KegeFit Pro

const KEGEL_ANATOMY_SVG = `
<svg viewBox="0 0 460 260" class="anatomy-svg" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="pelvicGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00C896"/>
      <stop offset="100%" stop-color="#4A9EFF"/>
    </linearGradient>
    <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
    <marker id="arrowGreen" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#00C896"/>
    </marker>
  </defs>

  <!-- Fondo contenedor -->
  <rect x="0" y="0" width="460" height="260" rx="12" fill="#0c1322"/>

  <!-- Hueso Púbico (frente) -->
  <path d="M 80,130 C 80,105 105,95 120,110 C 130,125 120,155 100,165 C 85,160 80,145 80,130 Z" fill="#1a273e" stroke="#2d4368" stroke-width="2"/>
  <text x="96" y="135" fill="#8EA3C7" font-size="11" font-weight="700" text-anchor="middle">Pubis</text>

  <!-- Sacro y Coxis (detrás) -->
  <path d="M 360,70 C 375,90 380,130 365,160 C 355,175 340,185 330,175 C 340,150 345,110 335,80 Z" fill="#1a273e" stroke="#2d4368" stroke-width="2"/>
  <text x="360" y="125" fill="#8EA3C7" font-size="11" font-weight="700" text-anchor="middle">Coxis</text>

  <!-- Vejiga -->
  <ellipse cx="170" cy="95" rx="36" ry="28" fill="#16253c" stroke="#263d60" stroke-width="1.5"/>
  <text x="170" y="99" fill="#7E9EC9" font-size="11" text-anchor="middle">Vejiga</text>

  <!-- Próstata -->
  <ellipse cx="178" cy="140" rx="20" ry="16" fill="#1f233a" stroke="#3b446e" stroke-width="1.5"/>
  <text x="178" y="144" fill="#A2ACDE" font-size="10" font-weight="600" text-anchor="middle">Próstata</text>

  <!-- Base del Pene -->
  <path d="M 75,165 C 50,175 35,190 30,215 C 45,215 65,195 95,180 Z" fill="#16253c" stroke="#263d60" stroke-width="1.5"/>
  <text x="48" y="185" fill="#6A8EB5" font-size="10" text-anchor="middle">Base Pene</text>

  <!-- Conducto / Recto hacia atrás -->
  <path d="M 310,120 Q 305,170 295,210 Q 310,210 325,170 Q 325,120 310,120" fill="#16253c" stroke="#263d60" stroke-width="1.5"/>
  <text x="325" y="200" fill="#6A8EB5" font-size="10" text-anchor="middle">Ano</text>

  <!-- MÚSCULO PISO PÉLVICO (Hamaca Pubococcígea) -->
  <path d="M 98,172 C 160,225 240,225 330,175" fill="none" stroke="url(#pelvicGlow)" stroke-width="8" stroke-linecap="round" filter="url(#glowEffect)" class="kegel-ring"/>

  <!-- Flechas de tracción hacia arriba y adentro -->
  <g class="pulse-scale">
    <path d="M 210,208 L 210,165" stroke="#00C896" stroke-width="3" stroke-linecap="round" marker-end="url(#arrowGreen)"/>
    <path d="M 160,203 L 175,170" stroke="#00C896" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 260,198 L 245,170" stroke="#00C896" stroke-width="2.5" stroke-linecap="round"/>
  </g>

  <!-- Cartel indicador superior -->
  <rect x="110" y="14" width="240" height="26" rx="6" fill="rgba(0,200,150,0.12)" stroke="#00C896" stroke-width="1"/>
  <text x="230" y="31" fill="#00C896" font-size="11" font-weight="700" text-anchor="middle">MÚSCULO PUBOCÓCCÍGEO (PC)</text>

  <rect x="75" y="228" width="310" height="22" rx="4" fill="rgba(0,0,0,0.6)"/>
  <text x="230" y="243" fill="#A8D8EA" font-size="11" text-anchor="middle">Tirón hacia ARRIBA y ADENTRO (como cortar la orina)</text>
</svg>
`;

const BREATHING_ANATOMY_SVG = `
<svg viewBox="0 0 460 220" class="breathing-svg" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="460" height="220" rx="12" fill="#0c1322"/>
  
  <!-- Círculos de expansión pulmonar y diafragmática -->
  <circle cx="230" cy="110" r="75" fill="none" stroke="rgba(74, 158, 255, 0.15)" stroke-width="30" />
  <circle cx="230" cy="110" r="75" fill="none" stroke="#4A9EFF" stroke-width="3" stroke-dasharray="6 6" class="breath-ring" />
  <circle cx="230" cy="110" r="42" fill="#00C896" opacity="0.85" class="breath-core" />
  
  <text x="230" y="105" fill="#FFFFFF" font-size="15" font-weight="800" text-anchor="middle">RESPIRACIÓN</text>
  <text x="230" y="125" fill="#78FFB6" font-size="11" font-weight="600" text-anchor="middle">Expande panza y relaja pelvis</text>

  <text x="75" y="112" fill="#8EA3C7" font-size="11" text-anchor="middle">👃 Inhalá: panza se infla</text>
  <text x="385" y="112" fill="#8EA3C7" font-size="11" text-anchor="middle">👄 Exhalá: panza baja</text>
</svg>
`;

const EXERCISE_TUTORIALS = {

  // ═══════════════════════════════════════════════════════
  // EJERCICIOS KEGEL DIRECTOS (MÚSCULO INTERNO)
  // ═══════════════════════════════════════════════════════

  kegel_slow: {
    title: 'Kegel Lento (Resistencia)',
    svg: KEGEL_ANATOMY_SVG,
    pos: 'Sentado en una silla con la espalda recta o acostado boca arriba con rodillas dobladas y pies apoyados.',
    mov: 'Contraé el músculo del periné hacia arriba y hacia adentro como si intentaras cortar el flujo de orina o evitar un gas. Mantené la contracción constante durante los segundos indicados y soltá totalmente.',
    feel: 'Debés sentir un tirón hacia adentro en la base del pene y una leve elevación del escroto. La panza y los glúteos deben permanecer relajados.',
    avoid: 'NO aprietes los glúteos ni los muslos. NO metas la panza con fuerza ni contengas el aire.',
  },

  kegel_fast: {
    title: 'Kegel Rápido (Potencia Pico)',
    svg: KEGEL_ANATOMY_SVG,
    pos: 'Sentado o de pie con postura cómoda y hombros relajados.',
    mov: 'Apretá el músculo del periné con el 100% de fuerza en 1 segundo y soltalo de inmediato. Pensá en un interruptor de luz: encender con fuerza y apagar al instante.',
    feel: 'Un pulso potente y rápido en el piso de la pelvis, como un latido firme en la base genital.',
    avoid: 'NO te apures tanto que pierdas la fuerza del pulso. Cada repetición debe sentirse al 100%.',
  },

  kegel_super: {
    title: 'Super Kegel (Fuerza Máxima)',
    svg: KEGEL_ANATOMY_SVG,
    pos: 'Acostado boca arriba con rodillas flexionadas para eliminar la tensión de la gravedad.',
    mov: 'Inhalá profundo por la nariz. Al exhalar por la boca, contraé el suelo pélvico con la máxima fuerza posible que tengas (100%) y aguantá sin soltar todo el tiempo de la fase.',
    feel: 'Tensión isométrica intensa y concentrada en el periné y el músculo bulbocavernoso.',
    avoid: 'NO contengas la respiración (maniobra de Valsalva). Seguí respirando suavemente mientras mantenés el músculo contraído.',
  },

  kegel_elevator: {
    title: 'Kegel Ascensor (Control Gradual)',
    svg: KEGEL_ANATOMY_SVG,
    pos: 'Sentado en una silla firme con ambos pies apoyados en el suelo.',
    mov: 'Imaginá que tu piso pélvico es un ascensor: contraé muy suave al 20% (Piso 1), aumentá al 40% (Piso 2), 60% (Piso 3), 80% (Piso 4) y 100% al tope. Luego bajá piso por piso con control sin soltar de golpe.',
    feel: 'Control milimétrico de la tensión. Diferenciás contracciones suaves de contracciones potentes.',
    avoid: 'NO pases de 0 a 100% de golpe. El objetivo es la graduación controlada.',
  },

  kegel_reverse: {
    title: 'Kegel Inverso (Liberación & Flujo)',
    svg: KEGEL_ANATOMY_SVG,
    pos: 'Acostado boca arriba o en postura del niño (rodillas separadas).',
    mov: 'Inhalá profundo dirigiendo el aire hacia el abdomen bajo y la pelvis. En lugar de apretar hacia adentro, sentí cómo el suelo pélvico se expande y abre suavemente hacia afuera, soltando toda la presión.',
    feel: 'Apertura, calor y alivio en el periné y la próstata. Como si un nudo apretado se desatara.',
    avoid: 'NO hagas fuerza hacia abajo como defecando con esfuerzo. La expansión debe ser suave y guiada por la respiración.',
  },

  kegel_pulsing: {
    title: 'Kegel Pulsante (Coordinación)',
    svg: KEGEL_ANATOMY_SVG,
    pos: 'Sentado cómodo, de pie o acostado.',
    mov: 'Contraé durante 2 segundos con firmeza y soltá 2 segundos con relajación total, manteniendo un compás constante como un metrónomo.',
    feel: 'Ritmo neuromuscular fluido. Ideal para entrenar el control previo al clímax.',
    avoid: 'NO acumules tensión residual. Cada relajación de 2 segundos debe devolver el músculo a cero.',
  },

  kegel_trembling: {
    title: 'Kegel Temblor (Fatiga Muscular)',
    svg: KEGEL_ANATOMY_SVG,
    pos: 'Acostado boca arriba con rodillas flexionadas o sentado cómodo.',
    mov: 'Contraé el piso pélvico al 80-90% de tu fuerza máxima (no al 100%) y mantenelo sostenido sin soltar. Cuando el músculo empiece a temblar, esa es la señal de reclutamiento máximo de fibras. Aguantá el temblor hasta que termine el tiempo.',
    feel: 'Después de 15-20 segundos, sentís un temblor fino en el periné y la base del pene. Es la fatiga muscular — exactamente lo que buscamos para generar crecimiento.',
    avoid: 'NO aprietes al 100% desde el principio — te cansás rápido y no llegás al temblor productivo. Mantené un 80-90% sostenido.',
  },

  kegel_triple_sync: {
    title: 'Activación Triple (3 Músculos Juntos)',
    svg: KEGEL_ANATOMY_SVG,
    pos: 'Acostado boca arriba con rodillas flexionadas. Es la mejor posición para sentir los 3 músculos por separado.',
    mov: 'Activá los 3 músculos en secuencia: primero el pubococcígeo (cortá la orina), luego sumá el isquiocavernoso (empujá el pene hacia arriba) y finalmente el bulbocavernoso (exprimí la base del pene). Mantené los 3 activos juntos durante la fase de sostén.',
    feel: 'Sentís 3 capas de contracción que se suman. La base del pene se siente comprimida desde todos los ángulos. Es mucho más intenso que un Kegel normal.',
    avoid: 'NO sueltes un músculo cuando activés el siguiente. La clave es SUMAR capas sin perder las anteriores.',
  },

  // ═══════════════════════════════════════════════════════
  // EJERCICIOS COMPLEMENTARIOS DE FUERZA (GIFS REALES)
  // ═══════════════════════════════════════════════════════

  glute_bridge: {
    title: 'Puente de Glúteos (Glute Bridge)',
    gif: 'gifs/glute_bridge.gif',
    pos: 'Acostado boca arriba en el suelo o colchoneta, rodillas flexionadas, pies planos apoyados al ancho de caderas y brazos a los lados.',
    mov: 'Empujá con los talones y elevá la pelvis hacia el techo hasta que tus rodillas, caderas y hombros formen una línea diagonal recta. Sostené arriba apretando los glúteos y descendé con control.',
    feel: 'Activación intensa en los glúteos mayores e isquiotibiales. El soporte de estos músculos descomprime la próstata y sostiene el periné.',
    avoid: 'NO arquees la cintura (columna lumbar). La fuerza debe salir pura y exclusivamente de los glúteos y talones.',
  },

  bridge_elevated: {
    title: 'Puente Elevado (Elevated Bridge)',
    gif: 'gifs/bridge_elevated.gif',
    pos: 'Acostado boca arriba con los talones apoyados sobre un banco, silla o escalón elevado.',
    mov: 'Elevá la pelvis empujando los talones contra la superficie elevada. En el punto más alto, apretá fuertemente los glúteos y sumá una contracción de Kegel sostenida.',
    feel: 'Mayor rango de recorrido y mayor tensión isométrica en la cadena posterior y el suelo pélvico.',
    avoid: 'NO dejes que las rodillas se abran o se junten de golpe; mantenelas firmes y alineadas con las caderas.',
  },

  bridge_unilateral: {
    title: 'Puente Unilateral (Single Leg Bridge)',
    gif: 'gifs/bridge_unilateral.gif',
    pos: 'Acostado boca arriba, un pie apoyado en el suelo y la otra pierna estirada hacia adelante en el aire.',
    mov: 'Empujá con el pie de apoyo para elevar la pelvis usando una sola pierna. Mantené la cadera horizontal y nivelada sin que se caiga hacia el lado de la pierna levantada.',
    feel: 'Glúteo individual trabajando al máximo. Corrige asimetrías de fuerza que tuercen la pelvis.',
    avoid: 'NO inclines la pelvis hacia el lado sin apoyo. Si perdés estabilidad, bajá la altura del levantamiento.',
  },

  pelvic_squat: {
    title: 'Sentadilla Pélvica Profunda (Deep Pelvic Squat)',
    gif: 'gifs/pelvic_squat.gif',
    pos: 'De pie con los pies un poco más anchos que los hombros y las puntas ligeramente hacia afuera.',
    mov: 'Bajá la cadera hacia abajo y atrás como si te sentaras en una silla muy baja. Mantené el pecho erguido. Al subir, empujá el piso y exhalá contrayendo el periné.',
    feel: 'Apertura de cadera en la bajada y fuerza de glúteos y suelo pélvico en la subida.',
    avoid: 'NO dejes que las rodillas colapsen hacia adentro ni despegues los talones del suelo.',
  },

  sumo_squat: {
    title: 'Sentadilla Sumo (Sumo Squat)',
    gif: 'gifs/sumo_squat.gif',
    pos: 'Pies bien separados (el doble del ancho de hombros) con las puntas apuntando hacia afuera a 45 grados.',
    mov: 'Flexioná las rodillas dirigidas en la misma línea de los pies, descendiendo con el torso vertical hasta que los muslos queden paralelos al piso. Subí apretando aductores y glúteos.',
    feel: 'Tensión en la cara interna de los muslos (aductores) que conectan y estabilizan la base del pubis.',
    avoid: 'NO te inclines excesivamente hacia adelante con el pecho. Mantené la columna erguida.',
  },

  goddess_squat: {
    title: 'Sentadilla Jinete / Postura de la Diosa (Goddess Squat)',
    gif: 'gifs/goddess_squat.gif',
    pos: 'Apertura amplia de piernas con pies hacia afuera a 45°, manos juntas en el pecho en posición de rezo o brazos firmes.',
    mov: 'Descendé la pelvis profundamente manteniendo el torso erguido. Sostené la posición estática en carga y realizá micro-pulsos pélvicos.',
    feel: 'Carga muscular profunda en el músculo obturador interno y la musculatura que envuelve la próstata.',
    avoid: 'NO levantes los talones del suelo ni curves la espalda baja.',
  },

  reverse_tabletop: {
    title: 'Mesa Invertida (Reverse Tabletop / Crab)',
    gif: 'gifs/reverse_tabletop.gif',
    pos: 'Sentado en el suelo con rodillas dobladas, pies apoyados al ancho de hombros y palmas de las manos apoyadas detrás de la cadera con dedos hacia los pies.',
    mov: 'Empujá firmemente con manos y talones, elevando la pelvis hacia el techo hasta que el torso y los muslos formen una mesa horizontal perfecta. Apretá glúteos en la cima.',
    feel: 'Apertura profunda de los flexores de cadera y el psoas, liberando la arteria pudenda que irriga el pene.',
    avoid: 'NO dejes caer la cabeza bruscamente hacia atrás ni permitas que la pelvis quede hundida.',
  },

  donkey_kick: {
    title: 'Patada en Cuadrupedia (Donkey Kick)',
    gif: 'gifs/donkey_kick.gif',
    pos: 'En cuatro apoyos (cuadrupedia) sobre una colchoneta: manos directamente debajo de los hombros y rodillas debajo de las caderas.',
    mov: 'Manteniendo la rodilla doblada a 90 grados, elevá la pierna empujando la planta del pie hacia el techo hasta que el muslo quede alineado con el torso. Apretá el glúteo 2 segundos y bajá sin tocar el suelo.',
    feel: 'Contracción focalizada y aislada en el glúteo mayor y la inserción del ligamento sacro.',
    avoid: 'NO arquees la columna lumbar al patear. La espalda debe quedar quieta; solo se mueve la pierna.',
  },

  hypopressive: {
    title: 'Hipopresivo / Vacío Abdominal (Stomach Vacuum)',
    gif: 'gifs/hypopressive.gif',
    pos: 'De pie con las manos apoyadas sobre los muslos o en cuatro apoyos con la espalda neutra.',
    mov: 'Inhalá profundo por la nariz y exhalá TODO el aire por la boca hasta vaciar los pulmones. Sin tomar aire (apnea), abrí las costillas y succioná el ombligo hacia adentro y hacia arriba.',
    feel: 'Efecto de succión ascendente en toda la cavidad pélvica y abdominal. Descomprime la próstata al instante.',
    avoid: 'NO tomes aire durante la fase de vacío. Mantené la apnea relajando la garganta.',
  },

  // ═══════════════════════════════════════════════════════
  // ESTIRAMIENTOS Y YOGA PÉLVICO (GIFS REALES)
  // ═══════════════════════════════════════════════════════

  childs_pose: {
    title: "Postura del Niño (Child's Pose / Balasana)",
    gif: 'gifs/childs_pose.gif',
    pos: 'Arrodillado en el suelo con las rodillas separadas al ancho de la colchoneta y los dedos gordos de los pies juntos.',
    mov: 'Llevá la cola hacia los talones, estirá los brazos hacia adelante en el suelo y apoyá la frente en la colchoneta. Respirá profundamente llevando el aire a la espalda baja y el periné.',
    feel: 'Relajación y apertura pasiva del piso pélvico, eliminando la tensión post-entrenamiento.',
    avoid: 'NO levantes la cola de los talones; si no llegás, colocá un almohadón entre tus talones y glúteos.',
  },

  butterfly: {
    title: 'Mariposa Sentada (Baddha Konasana)',
    gif: 'gifs/butterfly.gif',
    pos: 'Sentado en el suelo con la columna erguida, uniendo las plantas de los pies con las rodillas cayendo hacia los costados.',
    mov: 'Tomá los tobillos con ambas manos y acercá los talones hacia la pelvis. Con la espalda recta, dejá caer las rodillas hacia los lados por su propio peso.',
    feel: 'Elongación profunda en aductores e ingle, aumentando el flujo circulatorio hacia el pene.',
    avoid: 'NO rebotes las rodillas con fuerza ni encorves la parte alta de la espalda.',
  },

  reclined_butterfly: {
    title: 'Mariposa Reclinada (Supta Baddha Konasana)',
    gif: 'gifs/reclined_butterfly.gif',
    pos: 'Acostado boca arriba con las plantas de los pies unidas y las rodillas relajadas cayendo hacia los laterales.',
    mov: 'Apoyá los brazos relajados a los costados o sobre el abdomen. Respirá lento y profundo, permitiendo que la gravedad abra la cuenca pélvica.',
    feel: 'Descongestión total de la próstata y el plexo venoso pélvico.',
    avoid: 'NO fuerces las rodillas a tocar el suelo; la gravedad hace el trabajo de manera natural.',
  },

  psoas_release: {
    title: 'Liberación de Psoas (Knee to Chest)',
    gif: 'gifs/psoas_release.gif',
    pos: 'Acostado boca arriba con el cuerpo completamente estirado sobre la colchoneta.',
    mov: 'Llevá una rodilla hacia el pecho y abrazala con ambas manos, mientras la otra pierna se mantiene estirada proyectándose hacia adelante.',
    feel: 'Liberación de la tensión en la ingle y el psoas ilíaco de la pierna extendida.',
    avoid: 'NO levantes la cabeza ni los hombros del suelo; descansá el cuello relajado.',
  },

  happy_baby: {
    title: 'Bebé Feliz (Happy Baby / Ananda Balasana)',
    gif: 'gifs/happy_baby.gif',
    pos: 'Acostado boca arriba o en postura de descarga pélvica amplia con caderas abiertas.',
    mov: 'Flexioná las piernas abriéndolas hacia los laterales, permitiendo una descompresión total del periné y la zona isquiática.',
    feel: 'Apertura de la base de la pelvis, descompresión del nervio pudendo y alivio de presión.',
    avoid: 'NO tenses el cuello ni la mandíbula; respirá con calma en la apertura.',
  },

  figure_four: {
    title: 'Figura 4 en Suelo (Lying Piriformis Stretch)',
    gif: 'gifs/figure_four.gif',
    pos: 'Acostado boca arriba con ambas rodillas flexionadas y pies en el suelo.',
    mov: 'Cruzá el tobillo derecho sobre la rodilla izquierda. Pasá las manos por detrás del muslo izquierdo y tirá suavemente hacia tu pecho.',
    feel: 'Estiramiento profundo en el glúteo y piriforme del lado cruzado, liberando el nervio pudendo.',
    avoid: 'NO despegues la cabeza del piso ni tires con tirones bruscos.',
  },

  piriformis_stretch: {
    title: 'Estiramiento de Piriforme Sentado (Seated Piriformis)',
    gif: 'gifs/piriformis_stretch.gif',
    pos: 'Sentado en el suelo con una pierna cruzada por delante y el torso erguido.',
    mov: 'Incliná el torso ligeramente hacia adelante desde las caderas manteniendo la espalda recta hasta sentir la elongación.',
    feel: 'Liberación del músculo piriforme, previniendo el estrangulamiento arterial hacia el pene.',
    avoid: 'NO encorves la columna lumbar; el movimiento nace desde la bisagra de cadera.',
  },

  // ═══════════════════════════════════════════════════════
  // RESPIRACIÓN Y CONCIENCIA
  // ═══════════════════════════════════════════════════════

  diaphragmatic: {
    title: 'Respiración Diafragmática (Vientre Libre)',
    svg: BREATHING_ANATOMY_SVG,
    pos: 'Acostado o sentado con una mano sobre el pecho y otra sobre el abdomen.',
    mov: 'Inhalá por la nariz durante 4 segundos haciendo que la mano del abdomen suba (el pecho casi no se mueve). Exhalá lentamente por la boca en 6 segundos sintiendo cómo el vientre baja.',
    feel: 'Al inhalar, el piso pélvico se expande y baja. Al exhalar, sube naturalmente sin esfuerzo.',
    avoid: 'NO respires con el pecho ni levantes los hombros al tomar aire.',
  },

  breathing_478: {
    title: 'Respiración 4-7-8 (Antiestrés & Erecction)',
    svg: BREATHING_ANATOMY_SVG,
    pos: 'Sentado cómodo con la espalda recta y los ojos cerrados.',
    mov: 'Inhalá silenciosamente por la nariz durante 4s. Sostené el aire en los pulmones 7s. Exhalá completamente por la boca con un suave sonido en 8s.',
    feel: 'Baja las pulsaciones, apaga la adrenalina y activa el sistema parasimpático responsable de la erección.',
    avoid: 'NO te saltees los tiempos. El secreto de esta técnica médica es el tiempo prolongado de exhalación (8s).',
  },

  kegel_breath_sync: {
    title: 'Kegel + Respiración Sincronizada',
    svg: BREATHING_ANATOMY_SVG,
    pos: 'Acostado boca arriba con rodillas flexionadas.',
    mov: 'Inhalá relajando totalmente el periné (expansión). Al comenzar a exhalar, iniciá la contracción del Kegel y sostenela durante toda la salida del aire. Al volver a inhalar, soltá todo.',
    feel: 'Sincronía orgánica entre diafragma y suelo pélvico, exactamente como funciona durante el acto sexual.',
    avoid: 'NO contraigas al inhalar. Recordá la regla de oro: Inhalar = Relajar, Exhalar = Contraer.',
  },
};

// Función para obtener el tutorial de un ejercicio
function getExerciseTutorial(exerciseId) {
  return EXERCISE_TUTORIALS[exerciseId] || null;
}

// Renderiza el tutorial completo en HTML
function renderExerciseTutorial(exerciseId) {
  const t = getExerciseTutorial(exerciseId);
  if (!t) return '';

  let visualMedia = '';
  if (t.gif) {
    visualMedia = `
      <div class="tutorial-media-wrap">
        <img src="${t.gif}" class="tutorial-gif" alt="${t.title}" loading="lazy">
        <div class="tutorial-media-badge">Demostración en bucle</div>
      </div>
    `;
  } else if (t.svg) {
    visualMedia = `
      <div class="tutorial-media-wrap">
        ${t.svg}
        <div class="tutorial-media-badge">Guía anatómica</div>
      </div>
    `;
  }

  return `
    <div class="exercise-tutorial">
      <div class="tutorial-label">📹 Cómo hacerlo paso a paso — Guía visual</div>
      ${visualMedia}
      <div class="tutorial-grid">
        <div class="tutorial-card pos">
          <div class="tutorial-card-title">📍 Posición inicial</div>
          <div class="tutorial-card-text">${t.pos}</div>
        </div>
        <div class="tutorial-card mov">
          <div class="tutorial-card-title">🔄 Movimiento exacto</div>
          <div class="tutorial-card-text">${t.mov}</div>
        </div>
        <div class="tutorial-card feel">
          <div class="tutorial-card-title">🎯 Qué tenés que sentir</div>
          <div class="tutorial-card-text">${t.feel}</div>
        </div>
        <div class="tutorial-card avoid">
          <div class="tutorial-card-title">⚠️ Error común a evitar</div>
          <div class="tutorial-card-text">${t.avoid}</div>
        </div>
      </div>
    </div>
  `;
}
