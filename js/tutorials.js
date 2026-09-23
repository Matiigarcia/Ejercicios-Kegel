// tutorials.js — Tutoriales animados SVG para cada ejercicio en KegeFit Pro

const EXERCISE_TUTORIALS = {

  // ══════════════════════════════════════
  // KEGEL EXERCISES
  // ══════════════════════════════════════
  kegel_slow: {
    steps: ['Sentado o acostado', 'Contraé el músculo', 'Mantenelo', 'Relajá completamente'],
    svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <!-- Figura sentada en silla -->
      <g class="kegel-figure">
        <!-- Silla -->
        <rect x="155" y="140" width="90" height="8" rx="3" class="fig-body" stroke="#334"/>
        <line x1="165" y1="148" x2="165" y2="175" class="fig-body" stroke="#334"/>
        <line x1="235" y1="148" x2="235" y2="175" class="fig-body" stroke="#334"/>
        <!-- Respaldo -->
        <line x1="235" y1="148" x2="235" y2="100" class="fig-body" stroke="#334"/>
        <!-- Cuerpo -->
        <circle cx="200" cy="62" r="14" class="fig-head"/>
        <line x1="200" y1="76" x2="200" y2="130" class="fig-body"/>
        <line x1="200" y1="85" x2="175" y2="108" class="fig-body"/>
        <line x1="200" y1="85" x2="225" y2="108" class="fig-body"/>
        <!-- Piernas sentadas -->
        <line x1="195" y1="130" x2="185" y2="155" class="fig-body"/>
        <line x1="205" y1="130" x2="215" y2="155" class="fig-body"/>
        <line x1="185" y1="155" x2="168" y2="155" class="fig-body"/>
        <line x1="215" y1="155" x2="232" y2="155" class="fig-body"/>
      </g>
      <!-- Ondas de contracción pulsantes -->
      <circle cx="200" cy="110" r="18" class="kegel-ring" fill="none" stroke="#00C896" stroke-width="2"/>
      <circle cx="200" cy="110" r="28" class="kegel-ring-2" fill="none" stroke="#00C896" stroke-width="1.5"/>
      <circle cx="200" cy="110" r="38" class="kegel-ring-3" fill="none" stroke="#00C896" stroke-width="1"/>
      <!-- Punto de contracción -->
      <circle cx="200" cy="110" r="8" class="kegel-core" fill="#00C896"/>
      <!-- Labels -->
      <text x="200" y="192" text-anchor="middle" class="fig-label">Músculo pélvico</text>
      <!-- Flecha indicando zona -->
      <line x1="235" y1="108" x2="212" y2="112" stroke="#00C896" stroke-width="1.5" marker-end="url(#arr)" opacity="0.7"/>
      <text x="248" y="111" class="fig-active-label">Aquí</text>
    </svg>`,
  },

  kegel_fast: {
    steps: ['Localiza el músculo', 'Contracción rápida 1s', 'Soltá inmediatamente', 'Repite el pulso'],
    svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <g class="kegel-figure">
        <circle cx="200" cy="62" r="14" class="fig-head"/>
        <line x1="200" y1="76" x2="200" y2="130" class="fig-body"/>
        <line x1="200" y1="85" x2="175" y2="108" class="fig-body"/>
        <line x1="200" y1="85" x2="225" y2="108" class="fig-body"/>
        <line x1="200" y1="130" x2="185" y2="165" class="fig-body"/>
        <line x1="200" y1="130" x2="215" y2="165" class="fig-body"/>
        <line x1="185" y1="165" x2="178" y2="175" class="fig-body"/>
        <line x1="215" y1="165" x2="222" y2="175" class="fig-body"/>
      </g>
      <!-- Pulsos rápidos -->
      <circle cx="200" cy="112" r="12" class="kegel-ring" fill="#00C896"/>
      <circle cx="200" cy="112" r="20" class="kegel-ring-2" fill="none" stroke="#00C896" stroke-width="3"/>
      <circle cx="200" cy="112" r="30" class="kegel-ring-3" fill="none" stroke="#00C896" stroke-width="2"/>
      <circle cx="200" cy="112" r="42" class="kegel-ring" fill="none" stroke="#00C896" stroke-width="1"/>
      <!-- Rayos de energía -->
      <line x1="200" y1="68" x2="200" y2="56" stroke="#FFD700" stroke-width="2" opacity="0.7"/>
      <line x1="225" y1="75" x2="234" y2="67" stroke="#FFD700" stroke-width="2" opacity="0.7"/>
      <line x1="175" y1="75" x2="166" y2="67" stroke="#FFD700" stroke-width="2" opacity="0.7"/>
      <text x="200" y="192" text-anchor="middle" class="fig-active-label">Contracción máxima ⚡</text>
    </svg>`,
  },

  kegel_elevator: {
    steps: ['20% — muy suave', '→ 40% → 60%', '→ 80% → 100%', 'Bajá piso por piso'],
    svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <!-- Edificio de 5 pisos -->
      <rect x="60" y="30" width="50" height="150" rx="4" fill="#1A2845" stroke="#334" stroke-width="1"/>
      <!-- Pisos -->
      <rect x="62" y="152" width="46" height="26" rx="2" fill="#1A2845" stroke="#00C896" stroke-width="1"/>
      <rect x="62" y="122" width="46" height="28" rx="2" fill="#1A2845" stroke="#2A3855" stroke-width="1"/>
      <rect x="62" y="92"  width="46" height="28" rx="2" fill="#1A2845" stroke="#2A3855" stroke-width="1"/>
      <rect x="62" y="62"  width="46" height="28" rx="2" fill="#1A2845" stroke="#2A3855" stroke-width="1"/>
      <rect x="62" y="32"  width="46" height="28" rx="2" fill="#1A2845" stroke="#2A3855" stroke-width="1"/>
      <!-- Labels pisos -->
      <text x="85" y="169" text-anchor="middle" class="fig-label">20%</text>
      <text x="85" y="140" text-anchor="middle" class="fig-label">40%</text>
      <text x="85" y="110" text-anchor="middle" class="fig-label">60%</text>
      <text x="85" y="80"  text-anchor="middle" class="fig-label">80%</text>
      <text x="85" y="50"  text-anchor="middle" class="fig-label">100%</text>
      <!-- Flecha del ascensor animada -->
      <g style="animation: elevator-move 6s ease-in-out infinite">
        <rect x="72" y="145" width="26" height="20" rx="3" fill="#00C896" opacity="0.9"/>
        <text x="85" y="158" text-anchor="middle" fill="#000" font-size="8" font-weight="700" font-family="Inter,sans-serif">▲</text>
      </g>
      <!-- Figura de pie al lado -->
      <circle cx="280" cy="62" r="14" class="fig-head"/>
      <line x1="280" y1="76" x2="280" y2="130" class="fig-body"/>
      <line x1="280" y1="90" x2="260" y2="110" class="fig-body"/>
      <line x1="280" y1="90" x2="300" y2="110" class="fig-body"/>
      <line x1="280" y1="130" x2="265" y2="165" class="fig-body"/>
      <line x1="280" y1="130" x2="295" y2="165" class="fig-body"/>
      <line x1="265" y1="165" x2="258" y2="175" class="fig-body"/>
      <line x1="295" y1="165" x2="302" y2="175" class="fig-body"/>
      <!-- Ondas de contracción en la figura -->
      <circle cx="280" cy="112" r="14" class="kegel-ring" fill="none" stroke="#00C896" stroke-width="2"/>
      <circle cx="280" cy="112" r="22" class="kegel-ring-2" fill="none" stroke="#00C896" stroke-width="1.5"/>
      <text x="280" y="192" text-anchor="middle" class="fig-active-label">Controlá cada nivel</text>
      <style>
        @keyframes elevator-move {
          0%    { transform: translateY(0); }
          20%   { transform: translateY(-26px); }
          40%   { transform: translateY(-52px); }
          60%   { transform: translateY(-78px); }
          80%   { transform: translateY(-104px); }
          100%  { transform: translateY(0); }
        }
      </style>
    </svg>`,
  },

  kegel_reverse: {
    steps: ['Inhalá profundo', 'Abrí el músculo hacia afuera', 'Sentís expansión', 'Exhalá y soltá'],
    svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <g class="kegel-figure">
        <circle cx="200" cy="55" r="14" class="fig-head"/>
        <line x1="200" y1="69" x2="200" y2="123" class="fig-body"/>
        <line x1="200" y1="78" x2="178" y2="100" class="fig-body"/>
        <line x1="200" y1="78" x2="222" y2="100" class="fig-body"/>
        <line x1="200" y1="123" x2="185" y2="158" class="fig-body"/>
        <line x1="200" y1="123" x2="215" y2="158" class="fig-body"/>
        <line x1="185" y1="158" x2="178" y2="168" class="fig-body"/>
        <line x1="215" y1="158" x2="222" y2="168" class="fig-body"/>
      </g>
      <!-- Efecto de apertura hacia afuera -->
      <circle cx="200" cy="108" r="32" class="kegel-ring-3" fill="rgba(0,200,150,0.05)" stroke="#00C896" stroke-width="1.5"/>
      <circle cx="200" cy="108" r="22" class="kegel-ring-2" fill="rgba(0,200,150,0.08)" stroke="#00C896" stroke-width="2"/>
      <!-- Flechas hacia afuera -->
      <line x1="200" y1="108" x2="175" y2="108" stroke="#4A9EFF" stroke-width="2" opacity="0.8"/>
      <line x1="200" y1="108" x2="225" y2="108" stroke="#4A9EFF" stroke-width="2" opacity="0.8"/>
      <line x1="200" y1="108" x2="200" y2="128" stroke="#4A9EFF" stroke-width="2" opacity="0.8"/>
      <!-- Punto central relajado -->
      <circle cx="200" cy="108" r="7" fill="#4A9EFF" opacity="0.7"/>
      <text x="150" y="108" text-anchor="middle" class="fig-label">Apertura</text>
      <text x="200" y="190" text-anchor="middle" style="fill:#4A9EFF;font-size:10px;font-family:Inter,sans-serif">← Relajación activa →</text>
    </svg>`,
  },

  kegel_super: {
    steps: ['Inhalá profundo', 'Exhalá y contraé al 100%', 'Aguantá 8 segundos', 'Relajá completamente'],
    svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <g class="kegel-figure">
        <circle cx="200" cy="58" r="14" class="fig-head"/>
        <line x1="200" y1="72" x2="200" y2="126" class="fig-body"/>
        <line x1="200" y1="82" x2="174" y2="104" class="fig-body"/>
        <line x1="200" y1="82" x2="226" y2="104" class="fig-body"/>
        <line x1="200" y1="126" x2="183" y2="160" class="fig-body"/>
        <line x1="200" y1="126" x2="217" y2="160" class="fig-body"/>
        <line x1="183" y1="160" x2="176" y2="170" class="fig-body"/>
        <line x1="217" y1="160" x2="224" y2="170" class="fig-body"/>
      </g>
      <!-- Anillos de máxima intensidad -->
      <circle cx="200" cy="110" r="12" class="kegel-core" fill="#FF4757"/>
      <circle cx="200" cy="110" r="20" class="kegel-ring" fill="none" stroke="#FF4757" stroke-width="3"/>
      <circle cx="200" cy="110" r="30" class="kegel-ring-2" fill="none" stroke="#FF4757" stroke-width="2.5"/>
      <circle cx="200" cy="110" r="42" class="kegel-ring-3" fill="none" stroke="#FF4757" stroke-width="2"/>
      <circle cx="200" cy="110" r="56" class="kegel-ring" fill="none" stroke="#FF4757" stroke-width="1"/>
      <!-- Rayos de poder -->
      <line x1="200" y1="54" x2="200" y2="36" stroke="#FFD700" stroke-width="3" opacity="0.9"/>
      <line x1="228" y1="62" x2="242" y2="50" stroke="#FFD700" stroke-width="3" opacity="0.9"/>
      <line x1="172" y1="62" x2="158" y2="50" stroke="#FFD700" stroke-width="3" opacity="0.9"/>
      <text x="200" y="192" text-anchor="middle" style="fill:#FF4757;font-size:10px;font-family:Inter,sans-serif;font-weight:700">¡MÁXIMA CONTRACCIÓN!</text>
    </svg>`,
  },

  kegel_pulsing: {
    steps: ['Ritmo constante', 'Contraé 2s', 'Soltá 2s', 'Mantené el ritmo'],
    svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <g class="kegel-figure">
        <circle cx="200" cy="58" r="14" class="fig-head"/>
        <line x1="200" y1="72" x2="200" y2="126" class="fig-body"/>
        <line x1="200" y1="82" x2="174" y2="104" class="fig-body"/>
        <line x1="200" y1="82" x2="226" y2="104" class="fig-body"/>
        <line x1="200" y1="126" x2="183" y2="160" class="fig-body"/>
        <line x1="200" y1="126" x2="217" y2="160" class="fig-body"/>
        <line x1="183" y1="160" x2="176" y2="170" class="fig-body"/>
        <line x1="217" y1="160" x2="224" y2="170" class="fig-body"/>
      </g>
      <!-- Onda pulsante tipo ECG -->
      <polyline points="80,120 100,120 108,85 115,155 123,120 360,120"
        fill="none" stroke="#00C896" stroke-width="2.5" stroke-linecap="round"
        style="stroke-dasharray: 300; animation: kegel-wave 2s linear infinite"/>
      <text x="200" y="185" text-anchor="middle" class="fig-active-label">Pulso rítmico constante</text>
    </svg>`,
  },

  // ══════════════════════════════════════
  // STRENGTH EXERCISES
  // ══════════════════════════════════════
  glute_bridge: {
    steps: ['Acostado boca arriba', 'Rodillas dobladas 90°', 'Levantá la pelvis', 'Apretá glúteos arriba'],
    svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <!-- Suelo -->
      <line x1="40" y1="170" x2="360" y2="170" class="fig-ground" stroke="#1A2845" stroke-width="3"/>
      <!-- Figura acostada en posición inicial (fondo tenue) -->
      <g opacity="0.2">
        <ellipse cx="200" cy="165" rx="55" ry="8" fill="#1A2845"/>
        <line x1="120" y1="162" x2="280" y2="162" stroke="#334" stroke-width="3" stroke-linecap="round"/>
      </g>
      <!-- Figura levantando (principal) -->
      <g class="bridge-pelvis">
        <!-- Cabeza en el suelo -->
        <circle cx="110" cy="158" r="12" class="fig-head"/>
        <!-- Torso inclinado -->
        <line x1="122" y1="158" x2="200" y2="128" class="fig-body" stroke-width="3"/>
        <!-- Pelvis arriba -->
        <line x1="200" y1="128" x2="222" y2="148" class="fig-body" stroke-width="3"/>
        <!-- Pierna derecha (apoyo en piso) -->
        <line x1="222" y1="148" x2="245" y2="170" class="fig-body"/>
        <line x1="245" y1="170" x2="265" y2="170" class="fig-body"/>
        <!-- Pierna izquierda (apoyo) -->
        <line x1="200" y1="128" x2="210" y2="150" class="fig-body"/>
        <line x1="210" y1="150" x2="200" y2="170" class="fig-body"/>
        <line x1="200" y1="170" x2="180" y2="170" class="fig-body"/>
        <!-- Brazos al costado -->
        <line x1="135" y1="155" x2="160" y2="168" class="fig-body"/>
        <line x1="135" y1="155" x2="115" y2="167" class="fig-body"/>
        <!-- Glow en pelvis/glúteos -->
        <ellipse cx="200" cy="132" rx="22" ry="14" class="bridge-torso-glow" stroke="#00C896"/>
      </g>
      <!-- Flecha de subida -->
      <g class="bridge-arrow">
        <line x1="200" y1="105" x2="200" y2="82" stroke="#FFD700" stroke-width="2.5"/>
        <polygon points="200,75 194,88 206,88" fill="#FFD700"/>
      </g>
      <!-- Labels -->
      <text x="200" y="190" text-anchor="middle" class="fig-active-label">Pelvis sube — Glúteos apretados</text>
      <text x="108" y="145" text-anchor="middle" class="fig-label">Cabeza en el suelo</text>
    </svg>`,
  },

  bridge_elevated: {
    steps: ['Igual que el puente', 'Pausa isométrica arriba', 'Apretá glúteos + Kegel', 'Bajá MUY lentamente'],
    svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="170" x2="360" y2="170" class="fig-ground" stroke="#1A2845" stroke-width="3"/>
      <g class="bridge-pelvis">
        <circle cx="110" cy="158" r="12" class="fig-head"/>
        <line x1="122" y1="158" x2="200" y2="115" class="fig-body" stroke-width="3"/>
        <line x1="200" y1="115" x2="222" y2="145" class="fig-body" stroke-width="3"/>
        <line x1="222" y1="145" x2="242" y2="170" class="fig-body"/>
        <line x1="242" y1="170" x2="262" y2="170" class="fig-body"/>
        <line x1="200" y1="115" x2="210" y2="145" class="fig-body"/>
        <line x1="210" y1="145" x2="198" y2="170" class="fig-body"/>
        <line x1="198" y1="170" x2="178" y2="170" class="fig-body"/>
        <line x1="135" y1="155" x2="158" y2="168" class="fig-body"/>
        <line x1="135" y1="155" x2="113" y2="167" class="fig-body"/>
        <!-- Glow de contracción máxima -->
        <ellipse cx="200" cy="120" rx="25" ry="16" class="bridge-torso-glow" stroke="#FF4757"/>
        <!-- Punto de contracción Kegel -->
        <circle cx="200" cy="122" r="6" fill="#FF4757" opacity="0.8" class="kegel-ring"/>
      </g>
      <!-- Temporizador isométrico indicativo -->
      <rect x="340" y="85" width="46" height="26" rx="8" fill="#FF475722"/>
      <text x="363" y="103" text-anchor="middle" style="fill:#FF4757;font-size:12px;font-weight:700;font-family:Inter,sans-serif">5s</text>
      <text x="363" y="120" text-anchor="middle" class="fig-label">pausa</text>
      <!-- Flecha doble = sostenido -->
      <text x="200" y="190" text-anchor="middle" style="fill:#FF4757;font-size:10px;font-family:Inter,sans-serif;font-weight:700">⏸ Mantené la pausa — Máxima contracción</text>
    </svg>`,
  },

  bridge_unilateral: {
    steps: ['Posición de puente', 'Extendé una pierna', 'Levantá con una sola pierna', 'Cadera nivelada'],
    svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="170" x2="360" y2="170" class="fig-ground" stroke="#1A2845" stroke-width="3"/>
      <g class="unilateral-hips">
        <circle cx="110" cy="158" r="12" class="fig-head"/>
        <line x1="122" y1="158" x2="200" y2="120" class="fig-body" stroke-width="3"/>
        <line x1="200" y1="120" x2="215" y2="142" class="fig-body" stroke-width="3"/>
        <!-- Pierna de apoyo (dobla) -->
        <line x1="215" y1="142" x2="235" y2="170" class="fig-body"/>
        <line x1="235" y1="170" x2="255" y2="170" class="fig-body"/>
        <!-- Pierna extendida (arriba) -->
        <g class="unilateral-leg-ext">
          <line x1="200" y1="120" x2="240" y2="118" class="fig-body" stroke="#4A9EFF" stroke-width="2.5"/>
          <line x1="240" y1="118" x2="268" y2="118" class="fig-body" stroke="#4A9EFF" stroke-width="2"/>
        </g>
        <line x1="135" y1="155" x2="110" y2="167" class="fig-body"/>
        <line x1="135" y1="155" x2="158" y2="168" class="fig-body"/>
        <!-- Glow -->
        <ellipse cx="200" cy="125" rx="18" ry="12" class="bridge-torso-glow" stroke="#00C896"/>
      </g>
      <!-- Etiqueta pierna extendida -->
      <text x="255" y="112" text-anchor="start" style="fill:#4A9EFF;font-size:9px;font-family:Inter,sans-serif">Pierna extendida</text>
      <!-- Flecha arriba -->
      <g class="bridge-arrow">
        <line x1="200" y1="98" x2="200" y2="78" stroke="#FFD700" stroke-width="2"/>
        <polygon points="200,71 195,82 205,82" fill="#FFD700"/>
      </g>
      <text x="200" y="190" text-anchor="middle" class="fig-active-label">Una sola pierna — Cadera nivelada</text>
    </svg>`,
  },

  pelvic_squat: {
    steps: ['Pies al ancho de hombros', 'Bajá como a sentarte', 'Al subir: exhalá + Kegel', 'Espalda recta'],
    svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <line x1="60" y1="175" x2="340" y2="175" class="fig-ground" stroke="#1A2845" stroke-width="3"/>
      <!-- Figura bajando (fondo) -->
      <g class="squat-body">
        <circle cx="200" cy="52" r="14" class="fig-head"/>
        <line x1="200" y1="66" x2="200" y2="108" class="fig-body" stroke-width="3"/>
        <!-- Brazos al frente -->
        <g class="squat-arm-l">
          <line x1="200" y1="80" x2="172" y2="96" class="fig-body"/>
          <line x1="172" y1="96" x2="155" y2="96" class="fig-body"/>
        </g>
        <g class="squat-arm-r">
          <line x1="200" y1="80" x2="228" y2="96" class="fig-body"/>
          <line x1="228" y1="96" x2="245" y2="96" class="fig-body"/>
        </g>
        <!-- Piernas -->
        <g class="squat-knee-l">
          <line x1="196" y1="108" x2="180" y2="145" class="fig-body"/>
          <line x1="180" y1="145" x2="168" y2="175" class="fig-body"/>
          <line x1="168" y1="175" x2="150" y2="175" class="fig-body"/>
        </g>
        <g class="squat-knee-r">
          <line x1="204" y1="108" x2="220" y2="145" class="fig-body"/>
          <line x1="220" y1="145" x2="232" y2="175" class="fig-body"/>
          <line x1="232" y1="175" x2="250" y2="175" class="fig-body"/>
        </g>
        <!-- Kegel al subir -->
        <circle cx="200" cy="108" r="10" class="squat-kegel-label" fill="#00C896" opacity="0.6"/>
        <circle cx="200" cy="108" r="18" class="squat-kegel-label" fill="none" stroke="#00C896" stroke-width="2"/>
      </g>
      <!-- Flechas arriba/abajo -->
      <g style="opacity: 0.6">
        <text x="290" y="80" class="fig-label">⬆ Subí:</text>
        <text x="290" y="92" class="fig-active-label">Exhalá + Kegel</text>
        <text x="290" y="110" class="fig-label">⬇ Bajás:</text>
        <text x="290" y="122" style="fill:#4A9EFF;font-size:9px;font-family:Inter,sans-serif">Inhalá + relajá</text>
      </g>
      <text x="200" y="195" text-anchor="middle" class="fig-active-label">Sentadilla con activación pélvica</text>
    </svg>`,
  },

  sumo_squat: {
    steps: ['Pies más anchos que hombros', 'Puntillas hacia afuera 45°', 'Bajá con rodillas abiertas', 'Subí apretando glúteos'],
    svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <line x1="60" y1="175" x2="340" y2="175" class="fig-ground" stroke="#1A2845" stroke-width="3"/>
      <g class="sumo-body">
        <circle cx="200" cy="52" r="14" class="fig-head"/>
        <line x1="200" y1="66" x2="200" y2="105" class="fig-body" stroke-width="3"/>
        <!-- Manos juntas -->
        <line x1="200" y1="80" x2="183" y2="95" class="fig-body"/>
        <line x1="200" y1="80" x2="217" y2="95" class="fig-body"/>
        <line x1="183" y1="95" x2="200" y2="98" class="fig-body"/>
        <line x1="217" y1="95" x2="200" y2="98" class="fig-body"/>
      </g>
      <!-- Piernas abiertas animadas -->
      <g class="sumo-leg-l">
        <line x1="196" y1="105" x2="155" y2="138" class="fig-body" stroke-width="2.5" stroke="#00C896"/>
        <line x1="155" y1="138" x2="130" y2="175" class="fig-body"/>
        <line x1="130" y1="175" x2="108" y2="175" class="fig-body"/>
      </g>
      <g class="sumo-leg-r">
        <line x1="204" y1="105" x2="245" y2="138" class="fig-body" stroke-width="2.5" stroke="#00C896"/>
        <line x1="245" y1="138" x2="270" y2="175" class="fig-body"/>
        <line x1="270" y1="175" x2="292" y2="175" class="fig-body"/>
      </g>
      <!-- Indicadores de ángulo -->
      <text x="108" y="165" class="fig-label">↙ 45°</text>
      <text x="272" y="165" class="fig-label">45° ↘</text>
      <!-- Ancho indicado -->
      <line x1="108" y1="183" x2="292" y2="183" stroke="#4A9EFF" stroke-width="1" stroke-dasharray="4,3" opacity="0.6"/>
      <text x="200" y="195" text-anchor="middle" style="fill:#4A9EFF;font-size:9px;font-family:Inter,sans-serif">← Más ancho que los hombros →</text>
    </svg>`,
  },

  hypopressive: {
    steps: ['Exhalar todo el aire', 'Pulmones vacíos — apnea', 'Abrí costillas hacia afuera', 'Succioná el abdomen adentro/arriba'],
    svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <line x1="60" y1="175" x2="340" y2="175" class="fig-ground" stroke="#1A2845" stroke-width="3"/>
      <!-- Figura de pie -->
      <circle cx="200" cy="52" r="14" class="fig-head"/>
      <g class="hypopressive-ribs">
        <!-- Torso con costillas expandidas -->
        <ellipse cx="200" cy="87" rx="28" ry="22" fill="none" stroke="#00C896" stroke-width="2" class="hypopressive-ribs"/>
      </g>
      <g class="hypopressive-belly">
        <!-- Abdomen succionado -->
        <ellipse cx="200" cy="112" rx="20" ry="14" fill="#142035" stroke="#FF4757" stroke-width="2" class="hypopressive-belly"/>
        <!-- Glow del vacío -->
        <ellipse cx="200" cy="112" rx="28" ry="20" fill="none" stroke="#FF4757" stroke-width="1" class="hypopressive-glow"/>
      </g>
      <!-- Cuerpo -->
      <line x1="200" y1="66" x2="200" y2="130" class="fig-body"/>
      <line x1="200" y1="82" x2="174" y2="104" class="fig-body"/>
      <line x1="200" y1="82" x2="226" y2="104" class="fig-body"/>
      <line x1="200" y1="130" x2="183" y2="165" class="fig-body"/>
      <line x1="200" y1="130" x2="217" y2="165" class="fig-body"/>
      <line x1="183" y1="165" x2="176" y2="175" class="fig-body"/>
      <line x1="217" y1="165" x2="224" y2="175" class="fig-body"/>
      <!-- Flechas costillas -->
      <line x1="170" y1="87" x2="155" y2="87" stroke="#00C896" stroke-width="2" opacity="0.8"/>
      <line x1="230" y1="87" x2="245" y2="87" stroke="#00C896" stroke-width="2" opacity="0.8"/>
      <text x="148" y="91" text-anchor="end" class="fig-label">Costillas ←</text>
      <text x="252" y="91" text-anchor="start" class="fig-label">→ afuera</text>
      <!-- Flecha abdomen hacia adentro -->
      <line x1="200" y1="130" x2="200" y2="118" stroke="#FF4757" stroke-width="2" opacity="0.8"/>
      <polygon points="200,112 196,122 204,122" fill="#FF4757" opacity="0.8"/>
      <text x="200" y="148" text-anchor="middle" style="fill:#FF4757;font-size:9px;font-family:Inter,sans-serif">Abdomen: adentro ↑</text>
      <text x="200" y="192" text-anchor="middle" class="fig-active-label">Vacío abdominal en apnea</text>
    </svg>`,
  },

  // ══════════════════════════════════════
  // STRETCHES
  // ══════════════════════════════════════
  childs_pose: {
    steps: ['Arrodilláte en el suelo', 'Abrí las rodillas', 'Extendé los brazos al frente', 'Frente al suelo — respirá'],
    svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="162" x2="360" y2="162" class="fig-ground" stroke="#1A2845" stroke-width="3"/>
      <g class="childs-body">
        <!-- Cuerpo en postura del niño -->
        <!-- Brazos extendidos -->
        <line x1="130" y1="158" x2="200" y2="150" class="fig-body" stroke="#4A9EFF" stroke-width="2.5"/>
        <line x1="130" y1="158" x2="100" y2="158" class="fig-body" stroke="#4A9EFF"/>
        <!-- Cabeza en el suelo -->
        <circle cx="118" cy="158" r="10" class="fig-head"/>
        <!-- Torso curvado hacia el suelo -->
        <path d="M128 155 Q180 135 215 145 Q240 150 255 158" fill="none" class="fig-body" stroke-width="3"/>
        <!-- Glúteos arriba -->
        <ellipse cx="250" cy="152" rx="20" ry="12" fill="none" class="fig-body" stroke="#00C896"/>
        <!-- Rodillas en el suelo -->
        <line x1="240" y1="158" x2="225" y2="162" class="fig-body"/>
        <line x1="260" y1="158" x2="275" y2="162" class="fig-body"/>
        <!-- Pies -->
        <line x1="225" y1="162" x2="215" y2="162" class="fig-body"/>
        <line x1="275" y1="162" x2="288" y2="162" class="fig-body"/>
        <!-- Glow de relajación -->
        <ellipse cx="230" cy="148" rx="35" ry="18" class="childs-glow" fill="none" stroke="#4A9EFF" stroke-width="4"/>
      </g>
      <!-- Flecha de respiración -->
      <text x="155" y="130" text-anchor="middle" style="fill:#4A9EFF;font-size:10px;font-family:Inter,sans-serif">🫁 Respirá hacia la espalda baja</text>
      <text x="200" y="185" text-anchor="middle" style="fill:#4A9EFF;font-size:10px;font-family:Inter,sans-serif">Relajación profunda del piso pélvico</text>
    </svg>`,
  },

  butterfly: {
    steps: ['Sentáte en el suelo', 'Uní las plantas de los pies', 'Tomá los pies con las manos', 'Dejá caer las rodillas'],
    svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="165" x2="360" y2="165" class="fig-ground" stroke="#1A2845" stroke-width="3"/>
      <!-- Figura sentada mariposa -->
      <g class="butterfly-torso">
        <circle cx="200" cy="72" r="13" class="fig-head"/>
        <line x1="200" y1="85" x2="200" y2="128" class="fig-body" stroke-width="3"/>
        <!-- Brazos hacia abajo (tomando pies) -->
        <line x1="200" y1="92" x2="178" y2="118" class="fig-body"/>
        <line x1="200" y1="92" x2="222" y2="118" class="fig-body"/>
      </g>
      <!-- Rodillas animadas cayendo -->
      <g class="butterfly-knee-l">
        <line x1="196" y1="128" x2="162" y2="148" class="fig-body" stroke="#00C896" stroke-width="2.5"/>
        <line x1="162" y1="148" x2="172" y2="158" class="fig-body"/>
      </g>
      <g class="butterfly-knee-r">
        <line x1="204" y1="128" x2="238" y2="148" class="fig-body" stroke="#00C896" stroke-width="2.5"/>
        <line x1="238" y1="148" x2="228" y2="158" class="fig-body"/>
      </g>
      <!-- Pies juntos en el centro -->
      <ellipse cx="200" cy="160" rx="18" ry="8" fill="none" stroke="#00C896" stroke-width="2"/>
      <!-- Flechas hacia abajo -->
      <line x1="162" y1="148" x2="162" y2="162" stroke="#4A9EFF" stroke-width="1.5" opacity="0.7"/>
      <line x1="238" y1="148" x2="238" y2="162" stroke="#4A9EFF" stroke-width="1.5" opacity="0.7"/>
      <polygon points="162,165 158,156 166,156" fill="#4A9EFF" opacity="0.7"/>
      <polygon points="238,165 234,156 242,156" fill="#4A9EFF" opacity="0.7"/>
      <text x="200" y="185" text-anchor="middle" class="fig-active-label">Rodillas caen por gravedad</text>
    </svg>`,
  },

  figure_four: {
    steps: ['Acostado boca arriba', 'Cruzá el tobillo sobre la rodilla', 'Tomá el muslo con ambas manos', 'Acercálo hacia vos'],
    svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="165" x2="360" y2="165" class="fig-ground" stroke="#1A2845" stroke-width="3"/>
      <!-- Figura acostada -->
      <g class="figure4-legs">
        <!-- Cabeza y torso -->
        <circle cx="100" cy="158" r="12" class="fig-head"/>
        <line x1="112" y1="158" x2="230" y2="155" class="fig-body" stroke-width="2.5"/>
        <!-- Pierna izquierda doblada (la de apoyo, levantada) -->
        <line x1="215" y1="155" x2="228" y2="118" class="fig-body" stroke="#00C896" stroke-width="2.5"/>
        <line x1="228" y1="118" x2="250" y2="135" class="fig-body" stroke="#00C896" stroke-width="2.5"/>
        <!-- Pierna derecha cruzada (tobillo sobre rodilla izquierda) -->
        <line x1="215" y1="155" x2="255" y2="145" class="fig-body" stroke="#4A9EFF" stroke-width="2.5"/>
        <line x1="255" y1="145" x2="248" y2="122" class="fig-body" stroke="#4A9EFF" stroke-width="2.5"/>
        <!-- Glow en glúteo derecho -->
        <ellipse cx="228" cy="135" rx="22" ry="16" class="figure4-glow" fill="none" stroke="#4A9EFF" stroke-width="4"/>
        <!-- Brazos tirando del muslo -->
        <line x1="140" y1="155" x2="220" y2="130" class="fig-body"/>
        <line x1="155" y1="155" x2="235" y2="125" class="fig-body"/>
      </g>
      <!-- Label -->
      <text x="248" y="118" text-anchor="start" style="fill:#4A9EFF;font-size:9px;font-family:Inter,sans-serif">Pierna cruzada</text>
      <text x="258" y="148" text-anchor="start" class="fig-active-label">← tirá</text>
      <text x="200" y="185" text-anchor="middle" class="fig-active-label">Sentís el estiramiento en el glúteo</text>
    </svg>`,
  },

  happy_baby: {
    steps: ['Acostado boca arriba', 'Rodillas al pecho', 'Tomá la parte interna de los pies', 'Abrí las rodillas hacia las axilas'],
    svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="170" x2="360" y2="170" class="fig-ground" stroke="#1A2845" stroke-width="3"/>
      <g class="happy-baby-body">
        <!-- Cabeza y espalda en el suelo -->
        <circle cx="200" cy="164" r="12" class="fig-head"/>
        <line x1="188" y1="162" x2="100" y2="162" class="fig-body" stroke-width="2.5"/>
        <!-- Piernas arriba abiertas -->
        <line x1="120" y1="162" x2="145" y2="120" class="fig-body" stroke="#00C896" stroke-width="2.5"/>
        <line x1="145" y1="120" x2="125" y2="95" class="fig-body" stroke="#00C896" stroke-width="2.5"/>
        <line x1="80" y1="162" x2="70" y2="118" class="fig-body" stroke="#00C896" stroke-width="2.5"/>
        <line x1="70" y1="118" x2="82" y2="94" class="fig-body" stroke="#00C896" stroke-width="2.5"/>
        <!-- Manos tomando los pies -->
        <line x1="100" y1="155" x2="84" y2="100" class="fig-body" stroke="#4A9EFF"/>
        <line x1="110" y1="155" x2="128" y2="100" class="fig-body" stroke="#4A9EFF"/>
        <!-- Pies arriba -->
        <ellipse cx="84" cy="90" rx="10" ry="7" fill="none" class="fig-body" stroke="#00C896"/>
        <ellipse cx="128" cy="92" rx="10" ry="7" fill="none" class="fig-body" stroke="#00C896"/>
      </g>
      <!-- Efecto de relajación -->
      <text x="100" y="185" text-anchor="middle" class="fig-active-label">Relajación pélvica total</text>
    </svg>`,
  },

  piriformis_stretch: {
    steps: ['De pie', 'Cruzá el pie sobre la rodilla opuesta', 'Doblá la rodilla de apoyo', 'Inclináte hacia adelante'],
    svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="178" x2="360" y2="178" class="fig-ground" stroke="#1A2845" stroke-width="3"/>
      <!-- Figura de pie con pierna cruzada -->
      <circle cx="200" cy="52" r="14" class="fig-head"/>
      <!-- Torso inclinado hacia adelante -->
      <line x1="200" y1="66" x2="190" y2="110" class="fig-body" stroke-width="3"/>
      <!-- Brazos hacia adelante (equilibrio) -->
      <line x1="194" y1="78" x2="170" y2="90" class="fig-body"/>
      <line x1="194" y1="78" x2="220" y2="90" class="fig-body"/>
      <!-- Pierna de apoyo doblada -->
      <line x1="192" y1="110" x2="185" y2="145" class="fig-body" stroke-width="2.5"/>
      <line x1="185" y1="145" x2="188" y2="178" class="fig-body"/>
      <line x1="188" y1="178" x2="168" y2="178" class="fig-body"/>
      <!-- Pierna cruzada -->
      <line x1="192" y1="110" x2="220" y2="130" class="fig-body" stroke="#4A9EFF" stroke-width="2.5"/>
      <line x1="220" y1="130" x2="192" y2="138" class="fig-body" stroke="#4A9EFF" stroke-width="2.5"/>
      <!-- Glow en glúteo/piriforme -->
      <ellipse cx="210" cy="122" rx="20" ry="14" class="figure4-glow" fill="none" stroke="#4A9EFF" stroke-width="4"/>
      <text x="240" y="126" text-anchor="start" style="fill:#4A9EFF;font-size:9px;font-family:Inter,sans-serif">Piriforme</text>
      <text x="200" y="192" text-anchor="middle" class="fig-active-label">Sentís el estiramiento profundo en el glúteo</text>
    </svg>`,
  },

  // ══════════════════════════════════════
  // BREATHING
  // ══════════════════════════════════════
  diaphragmatic: {
    steps: ['Mano en el pecho, mano en abdomen', 'Inhalá — abdomen sube, pecho quieto', 'Piso pélvico se abre al inhalar', 'Exhalá — abdomen baja, piso sube'],
    svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <!-- Figura acostada -->
      <circle cx="88" cy="148" r="14" class="fig-head"/>
      <line x1="102" y1="148" x2="270" y2="148" class="fig-body" stroke-width="2.5"/>
      <!-- Pecho (poco movimiento) -->
      <g class="diaphragm-chest">
        <ellipse cx="180" cy="142" rx="25" ry="12" fill="rgba(74,158,255,0.15)" stroke="#4A9EFF" stroke-width="2" class="diaphragm-chest"/>
        <text x="180" y="138" text-anchor="middle" style="fill:#4A9EFF;font-size:8px;font-family:Inter,sans-serif">pecho quieto</text>
      </g>
      <!-- Abdomen (mucho movimiento) -->
      <g class="diaphragm-belly">
        <ellipse cx="230" cy="140" rx="28" ry="16" fill="rgba(0,200,150,0.15)" stroke="#00C896" stroke-width="2" class="diaphragm-belly"/>
      </g>
      <!-- Flechas del abdomen -->
      <g class="diaphragm-arrow">
        <line x1="208" y1="140" x2="252" y2="140" stroke="#00C896" stroke-width="2" opacity="0.8"/>
        <polygon points="255,140 248,136 248,144" fill="#00C896" opacity="0.8"/>
        <polygon points="205,140 212,136 212,144" fill="#00C896" opacity="0.8"/>
      </g>
      <!-- Manos indicativas -->
      <text x="180" y="165" text-anchor="middle" style="fill:#4A9EFF;font-size:9px;font-family:Inter,sans-serif">🤚 Mano pecho</text>
      <text x="238" y="165" text-anchor="middle" class="fig-active-label">🤚 Mano abdomen</text>
      <!-- Label abdomen -->
      <text x="238" y="144" text-anchor="middle" style="fill:#00C896;font-size:8px;font-weight:700;font-family:Inter,sans-serif" class="inhale-label">sube ↑</text>
      <text x="200" y="185" text-anchor="middle" class="fig-active-label">Abdomen sube al inhalar — Pecho quieto</text>
    </svg>`,
  },

  breathing_478: {
    steps: ['Inhalá por la nariz 4s', 'Aguantá el aire 7s', 'Exhalá por la boca 8s', 'Repetí 8 veces'],
    svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <!-- Círculo de respiración animado -->
      <circle cx="200" cy="95" r="60" fill="rgba(0,200,150,0.04)" stroke="#1A2845" stroke-width="1"/>
      <circle cx="200" cy="95" r="45" class="b478-circle" fill="rgba(0,200,150,0.06)" stroke="#00C896" stroke-width="2.5"/>
      <!-- Figura dentro -->
      <circle cx="200" cy="68" r="12" class="fig-head"/>
      <line x1="200" y1="80" x2="200" y2="110" class="fig-body"/>
      <line x1="200" y1="88" x2="184" y2="100" class="fig-body"/>
      <line x1="200" y1="88" x2="216" y2="100" class="fig-body"/>
      <!-- Números 4-7-8 -->
      <text x="130" y="85" text-anchor="middle" style="fill:#A8FF78;font-size:22px;font-weight:800;font-family:Inter,sans-serif">4</text>
      <text x="200" y="172" text-anchor="middle" style="fill:#FFD700;font-size:22px;font-weight:800;font-family:Inter,sans-serif">7</text>
      <text x="270" y="85" text-anchor="middle" style="fill:#4A9EFF;font-size:22px;font-weight:800;font-family:Inter,sans-serif">8</text>
      <text x="130" y="98" text-anchor="middle" class="fig-label">inhalar</text>
      <text x="200" y="183" text-anchor="middle" class="fig-label">aguantar</text>
      <text x="270" y="98" text-anchor="middle" class="fig-label">exhalar</text>
      <text x="200" y="200" text-anchor="middle" style="fill:#00C896;font-size:9px;font-family:Inter,sans-serif">Activa el sistema nervioso parasimpático</text>
    </svg>`,
  },

  kegel_breath_sync: {
    steps: ['Inhalá — relajá el Kegel', 'Exhalá — contraé el Kegel', 'Ritmo fluido, sin pausa', 'Igual que en el acto sexual'],
    svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <!-- Figura -->
      <circle cx="200" cy="58" r="14" class="fig-head"/>
      <line x1="200" y1="72" x2="200" y2="130" class="fig-body" stroke-width="2.5"/>
      <line x1="200" y1="82" x2="176" y2="104" class="fig-body"/>
      <line x1="200" y1="82" x2="224" y2="104" class="fig-body"/>
      <line x1="200" y1="130" x2="185" y2="165" class="fig-body"/>
      <line x1="200" y1="130" x2="215" y2="165" class="fig-body"/>
      <!-- Onda de sincronización -->
      <path d="M60,110 Q80,70 100,110 Q120,150 140,110 Q160,70 180,110 Q200,150 220,110 Q240,70 260,110 Q280,150 300,110 Q320,70 340,110"
        fill="none" stroke="#00C896" stroke-width="2.5" stroke-linecap="round"
        style="animation: kegel-wave 3s linear infinite; stroke-dasharray: 30 8"/>
      <!-- Sinc labels -->
      <text x="90" y="88" text-anchor="middle" style="fill:#A8FF78;font-size:9px;font-family:Inter,sans-serif">↑ inhalar</text>
      <text x="90" y="99" class="fig-label">relajá Kegel</text>
      <text x="170" y="155" text-anchor="middle" style="fill:#00C896;font-size:9px;font-family:Inter,sans-serif">↓ exhalar</text>
      <text x="170" y="166" class="fig-active-label">contraé Kegel</text>
      <text x="200" y="190" text-anchor="middle" class="fig-active-label">Sincronización respiración + Kegel</text>
    </svg>`,
  },

  // ══════════════════════════════════════
  // KEGEL YOGA & LIBERACIÓN SOMÁTICA
  // ══════════════════════════════════════

  reverse_tabletop: {
    steps: ['Sentado, manos atrás', 'Pies ancho de hombros', 'Elevá pelvis hasta mesa recta', 'Apretá glúteos y piso pélvico'],
    svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <!-- Suelo -->
      <line x1="40" y1="170" x2="360" y2="170" class="fig-ground" stroke="#1A2845" stroke-width="3"/>
      <!-- Posición de inicio (fondo tenue) -->
      <g opacity="0.2">
        <line x1="140" y1="170" x2="140" y2="135" stroke="#334" stroke-width="2.5"/>
        <line x1="140" y1="135" x2="180" y2="165" stroke="#334" stroke-width="2.5"/>
        <circle cx="130" cy="120" r="10" fill="#334"/>
      </g>
      <!-- Figura elevando en mesa invertida (animada) -->
      <g class="tabletop-body-lift">
        <!-- Cabeza -->
        <circle cx="115" cy="115" r="12" class="fig-head"/>
        <!-- Brazos de apoyo (verticales) -->
        <line x1="130" y1="126" x2="130" y2="170" class="fig-body" stroke-width="3"/>
        <!-- Torso horizontal recto -->
        <line x1="130" y1="126" x2="200" y2="126" class="fig-body" stroke-width="3.5"/>
        <!-- Muslos horizontales -->
        <line x1="200" y1="126" x2="265" y2="126" class="fig-body" stroke-width="3.5"/>
        <!-- Piernas de apoyo (verticales desde rodilla al suelo) -->
        <line x1="265" y1="126" x2="265" y2="170" class="fig-body" stroke-width="3"/>
        <line x1="265" y1="170" x2="280" y2="170" class="fig-body"/>
      </g>
      <!-- Pelvis y glúteos activos (resplandor) -->
      <g class="tabletop-pelvis-glow">
        <circle cx="200" cy="126" r="16" fill="#00C896" opacity="0.3"/>
        <circle cx="200" cy="126" r="8" fill="#00C896"/>
        <path d="M190,140 Q200,120 210,140" fill="none" stroke="#FFD700" stroke-width="2.5"/>
      </g>
      <!-- Flecha de empuje hacia arriba -->
      <line x1="200" y1="156" x2="200" y2="135" stroke="#00C896" stroke-width="2" marker-end="url(#arr)"/>
      <text x="200" y="190" text-anchor="middle" class="fig-active-label">Mesa plana horizontal — Apertura de psoas</text>
    </svg>`,
  },

  donkey_kick: {
    steps: ['En cuatro apoyos', 'Abdomen firme, espalda neutra', 'Talón empuja al techo a 90°', 'Apretá glúteo 2s arriba'],
    svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <!-- Suelo -->
      <line x1="40" y1="170" x2="360" y2="170" class="fig-ground" stroke="#1A2845" stroke-width="3"/>
      <!-- Torso y apoyo en cuadrupedia -->
      <g>
        <!-- Cabeza -->
        <circle cx="120" cy="105" r="12" class="fig-head"/>
        <!-- Brazos de apoyo -->
        <line x1="145" y1="115" x2="145" y2="170" class="fig-body" stroke-width="3"/>
        <!-- Torso horizontal -->
        <line x1="145" y1="115" x2="235" y2="120" class="fig-body" stroke-width="3.5"/>
        <!-- Pierna base (rodilla en el suelo) -->
        <line x1="225" y1="120" x2="215" y2="170" class="fig-body" stroke-width="3"/>
        <line x1="215" y1="170" x2="200" y2="170" class="fig-body"/>
      </g>
      <!-- Pierna que patea (animada) -->
      <g class="donkey-moving-leg">
        <!-- Muslo hacia atrás y arriba -->
        <line x1="235" y1="120" x2="280" y2="105" class="fig-body" stroke-width="3.5"/>
        <!-- Pantorrilla a 90° hacia el techo -->
        <line x1="280" y1="105" x2="280" y2="65" class="fig-body" stroke-width="3"/>
        <!-- Pie plano hacia el cielo -->
        <line x1="272" y1="65" x2="288" y2="65" class="fig-body" stroke-width="2.5"/>
      </g>
      <!-- Punto focal: Glúteo apretado -->
      <g class="donkey-glute-spot">
        <circle cx="240" cy="115" r="14" fill="#00C896" opacity="0.3"/>
        <circle cx="240" cy="115" r="7" fill="#00C896"/>
      </g>
      <!-- Flecha de empuje hacia arriba -->
      <line x1="300" y1="90" x2="300" y2="60" stroke="#00C896" stroke-width="2"/>
      <polygon points="300,55 296,63 304,63" fill="#00C896"/>
      <text x="200" y="190" text-anchor="middle" class="fig-active-label">Aislamiento de glúteo mayor sin arquear columna</text>
    </svg>`,
  },

  psoas_release: {
    steps: ['Boca arriba en el mat', 'Abrazá rodilla derecha al pecho', 'Pierna izquierda larga extendida', 'Respirá al vientre y cambiá'],
    svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <!-- Suelo -->
      <line x1="40" y1="170" x2="360" y2="170" class="fig-ground" stroke="#1A2845" stroke-width="3"/>
      <!-- Cabeza y torso acostado -->
      <circle cx="105" cy="158" r="12" class="fig-head"/>
      <line x1="117" y1="160" x2="195" y2="160" class="fig-body" stroke-width="3.5"/>
      <!-- Pierna contraria estirada por completo en el piso -->
      <line x1="195" y1="160" x2="320" y2="163" class="fig-body" stroke-width="3"/>
      <line x1="320" y1="163" x2="330" y2="156" class="fig-body"/>
      <!-- Pierna flexionada hacia el pecho (animada) -->
      <g class="psoas-knee-group">
        <!-- Muslo acercándose al torso -->
        <line x1="195" y1="160" x2="170" y2="128" class="fig-body" stroke-width="3.5"/>
        <!-- Pantorrilla doblada -->
        <line x1="170" y1="128" x2="185" y2="152" class="fig-body" stroke-width="3"/>
        <!-- Brazos abrazando la rodilla -->
        <path d="M140,158 Q155,120 172,126" fill="none" class="fig-body" stroke-width="2.5"/>
      </g>
      <!-- Línea de liberación del psoas (onda de flujo de descompresión) -->
      <path d="M190,158 Q220,145 250,162" fill="none" stroke="#38BDF8" stroke-width="3" class="psoas-nerve-line"/>
      <!-- Labels -->
      <text x="240" y="140" text-anchor="middle" style="fill:#38BDF8;font-size:9px;font-family:Inter,sans-serif">Psoas ilíaco liberado</text>
      <text x="200" y="190" text-anchor="middle" class="fig-active-label">Descompresión del nervio pudendo y flujo prostático</text>
    </svg>`,
  },

  reclined_butterfly: {
    steps: ['Boca arriba en el piso', 'Plantas de los pies juntas', 'Rodillas caen a los lados', 'Respiración somática pélvica'],
    svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <!-- Suelo / mat -->
      <rect x="50" y="70" width="300" height="90" rx="6" fill="#0F172A" stroke="#1E293B"/>
      <!-- Cuerpo vista cenital / 45° -->
      <circle cx="95" cy="115" r="14" class="fig-head"/>
      <!-- Brazos abiertos relajados hacia atrás -->
      <line x1="110" y1="115" x2="80" y2="85" class="fig-body"/>
      <line x1="110" y1="115" x2="80" y2="145" class="fig-body"/>
      <!-- Torso -->
      <line x1="110" y1="115" x2="190" y2="115" class="fig-body" stroke-width="4"/>
      <!-- Pelvis -->
      <circle cx="190" cy="115" r="8" fill="#00C896"/>
      <!-- Rodilla izquierda abriendo (animada) -->
      <g class="supta-knee-l">
        <line x1="190" y1="115" x2="225" y2="80" class="fig-body" stroke-width="3"/>
        <line x1="225" y1="80" x2="265" y2="115" class="fig-body" stroke-width="3"/>
      </g>
      <!-- Rodilla derecha abriendo (animada) -->
      <g class="supta-knee-r">
        <line x1="190" y1="115" x2="225" y2="150" class="fig-body" stroke-width="3"/>
        <line x1="225" y1="150" x2="265" y2="115" class="fig-body" stroke-width="3"/>
      </g>
      <!-- Pies unidos en el centro -->
      <ellipse cx="265" cy="115" rx="5" ry="8" fill="#00C896"/>
      <!-- Ondas somáticas de descompresión pélvica -->
      <circle cx="190" cy="115" r="20" class="supta-pelvic-wave" fill="none" stroke="#00C896" stroke-width="2"/>
      <circle cx="190" cy="115" r="34" class="supta-pelvic-wave" fill="none" stroke="#38BDF8" stroke-width="1.5"/>
      <text x="200" y="185" text-anchor="middle" class="fig-active-label">Gravedad abre aductores — Máxima relajación prostática</text>
    </svg>`,
  },

  goddess_squat: {
    steps: ['Pies ancho doble, a 45°', 'Palmas juntas al pecho', 'Bajá pelvis a 90° con torso erguido', 'Sostené y pulso de Kegel'],
    svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <!-- Suelo -->
      <line x1="40" y1="170" x2="360" y2="170" class="fig-ground" stroke="#1A2845" stroke-width="3"/>
      <!-- Figura en postura de la Diosa (animada bajando) -->
      <g class="goddess-body-group">
        <!-- Cabeza -->
        <circle cx="200" cy="46" r="13" class="fig-head"/>
        <!-- Torso vertical erguido -->
        <line x1="200" y1="59" x2="200" y2="116" class="fig-body" stroke-width="3.5"/>
        <!-- Brazos en posición de rezo frente al pecho -->
        <path d="M200,72 L182,90 L200,90 L218,90 Z" fill="none" stroke="#00C896" stroke-width="2.5"/>
        <!-- Muslos bien separados hacia afuera (horizontales) -->
        <line x1="200" y1="116" x2="135" y2="132" class="fig-body" stroke-width="3.5"/>
        <line x1="200" y1="116" x2="265" y2="132" class="fig-body" stroke-width="3.5"/>
        <!-- Pantorrillas verticales hacia el suelo -->
        <line x1="135" y1="132" x2="135" y2="170" class="fig-body" stroke-width="3"/>
        <line x1="265" y1="132" x2="265" y2="170" class="fig-body" stroke-width="3"/>
        <!-- Pies a 45° hacia afuera -->
        <line x1="135" y1="170" x2="115" y2="170" class="fig-body" stroke-width="2.5"/>
        <line x1="265" y1="170" x2="285" y2="170" class="fig-body" stroke-width="2.5"/>
      </g>
      <!-- Anillo pélvico de activación somática prostática -->
      <g class="goddess-pulse-ring">
        <circle cx="200" cy="130" r="14" fill="#00C896" opacity="0.3"/>
        <circle cx="200" cy="130" r="24" fill="none" stroke="#FFD700" stroke-width="2"/>
        <circle cx="200" cy="130" r="6" fill="#FFD700"/>
      </g>
      <!-- Indicadores de activación de aductores y obturador interno -->
      <line x1="165" y1="126" x2="175" y2="128" stroke="#00C896" stroke-width="2"/>
      <line x1="235" y1="126" x2="225" y2="128" stroke="#00C896" stroke-width="2"/>
      <text x="200" y="190" text-anchor="middle" class="fig-active-label">Soporte somático a la próstata + obturador interno</text>
    </svg>`,
  },
};

// Función para obtener el tutorial de un ejercicio
function getExerciseTutorial(exerciseId) {
  return EXERCISE_TUTORIALS[exerciseId] || null;
}

// Renderiza el tutorial en HTML
function renderExerciseTutorial(exerciseId) {
  const tutorial = getExerciseTutorial(exerciseId);
  if (!tutorial) return '';

  return `
    <div class="exercise-tutorial">
      <div class="tutorial-label">📹 Cómo hacerlo — Tutorial animado</div>
      <div class="tutorial-svg-wrap">
        ${tutorial.svg}
      </div>
      <div class="tutorial-steps">
        ${tutorial.steps.map((s, i) => `<span class="t-step">${i+1}. ${s}</span>`).join('')}
      </div>
    </div>
  `;
}
