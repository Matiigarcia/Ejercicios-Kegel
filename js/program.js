// program.js — Programa de 12 semanas KegeFit Pro

const PROGRAM_12_WEEKS = [
  // ═══════════════════════ FASE 1 — Activación (Semanas 1-2) ═══════════════════════
  {
    week: 1, phase: 1, phaseName: 'Activación',
    phaseDescription: 'Identificá y activá tus músculos pélvicos. Establecé el hábito diario.',
    sessionsPerDay: 2,
    sessions: [
      {
        id: 'w1_session',
        name: 'Sesión de Activación',
        duration: 14,
        exercises: [
          { exerciseId: 'diaphragmatic', reps: 8, sets: 1, note: 'Para empezar — conectate con tu respiración' },
          { exerciseId: 'kegel_slow', reps: 8, sets: 2, contractDuration: 3, relaxDuration: 3 },
          { exerciseId: 'kegel_fast', reps: 10, sets: 2 },
          { exerciseId: 'glute_bridge', reps: 10, sets: 2 },
          { exerciseId: 'reclined_butterfly', reps: 1, sets: 1, note: 'Apertura somática pélvica' },
          { exerciseId: 'childs_pose', reps: 1, sets: 1, note: 'Enfriamiento' },
        ],
      },
    ],
  },
  {
    week: 2, phase: 1, phaseName: 'Activación',
    phaseDescription: 'Seguís construyendo la base. Los músculos empiezan a despertar.',
    sessionsPerDay: 2,
    sessions: [
      {
        id: 'w2_session',
        name: 'Sesión de Activación +',
        duration: 16,
        exercises: [
          { exerciseId: 'diaphragmatic', reps: 8, sets: 1 },
          { exerciseId: 'kegel_slow', reps: 10, sets: 2, contractDuration: 4, relaxDuration: 4 },
          { exerciseId: 'kegel_fast', reps: 12, sets: 2 },
          { exerciseId: 'kegel_reverse', reps: 8, sets: 1, note: 'Nuevo — equilibrá con relajación' },
          { exerciseId: 'glute_bridge', reps: 12, sets: 2 },
          { exerciseId: 'psoas_release', reps: 1, sets: 1, note: 'Desbloqueo de psoas y nervio pudendo' },
          { exerciseId: 'butterfly', reps: 1, sets: 1 },
        ],
      },
    ],
  },
  // ═══════════════════════ FASE 2 — Construcción (Semanas 3-5) ═══════════════════════
  {
    week: 3, phase: 2, phaseName: 'Construcción',
    phaseDescription: 'Aumentamos intensidad y duracion. El piso pélvico se fortalece.',
    sessionsPerDay: 2,
    sessions: [
      {
        id: 'w3_session',
        name: 'Sesión de Construcción',
        duration: 18,
        exercises: [
          { exerciseId: 'kegel_slow', reps: 10, sets: 3, contractDuration: 5, relaxDuration: 5 },
          { exerciseId: 'kegel_fast', reps: 15, sets: 3 },
          { exerciseId: 'kegel_pulsing', reps: 15, sets: 2 },
          { exerciseId: 'glute_bridge', reps: 12, sets: 3 },
          { exerciseId: 'donkey_kick', reps: 10, sets: 2, note: 'Aislamiento glúteo' },
          { exerciseId: 'pelvic_squat', reps: 10, sets: 2 },
          { exerciseId: 'butterfly', reps: 1, sets: 1 },
        ],
      },
    ],
  },
  {
    week: 4, phase: 2, phaseName: 'Construcción',
    phaseDescription: 'Incorporamos el Super Kegel y postura de la Diosa para soporte prostático.',
    sessionsPerDay: 2,
    sessions: [
      {
        id: 'w4_session',
        name: 'Construcción + Super Kegel',
        duration: 22,
        exercises: [
          { exerciseId: 'kegel_slow', reps: 10, sets: 3, contractDuration: 5, relaxDuration: 5 },
          { exerciseId: 'kegel_super', reps: 5, sets: 2, note: 'Nuevo — tomátelo con calma' },
          { exerciseId: 'kegel_fast', reps: 15, sets: 3 },
          { exerciseId: 'bridge_elevated', reps: 10, sets: 3 },
          { exerciseId: 'goddess_squat', reps: 8, sets: 2, note: 'Soporte somático prostático' },
          { exerciseId: 'sumo_squat', reps: 10, sets: 2 },
          { exerciseId: 'figure_four', reps: 1, sets: 1 },
        ],
      },
    ],
  },
  {
    week: 5, phase: 2, phaseName: 'Construcción',
    phaseDescription: 'Inicio de hipopresivos y descompresión de psoas. Mejora la circulación.',
    sessionsPerDay: 2,
    sessions: [
      {
        id: 'w5_session',
        name: 'Construcción + Hipopresivos',
        duration: 24,
        exercises: [
          { exerciseId: 'kegel_slow', reps: 10, sets: 3, contractDuration: 6, relaxDuration: 6 },
          { exerciseId: 'kegel_super', reps: 5, sets: 2 },
          { exerciseId: 'kegel_reverse', reps: 10, sets: 2 },
          { exerciseId: 'hypopressive', reps: 5, sets: 2, note: 'Nuevo — respiración clave' },
          { exerciseId: 'bridge_elevated', reps: 12, sets: 3 },
          { exerciseId: 'psoas_release', reps: 1, sets: 1 },
          { exerciseId: 'sumo_squat', reps: 12, sets: 3 },
          { exerciseId: 'childs_pose', reps: 1, sets: 1 },
        ],
      },
    ],
  },
  // ═══════════════════════ FASE 3 — Intensificación (Semanas 6-8) ═══════════════════════
  {
    week: 6, phase: 3, phaseName: 'Intensificación',
    phaseDescription: 'Incorporamos Mesa Invertida y Kegel Ascensor. Mayor exigencia y flujo arterial.',
    sessionsPerDay: 3,
    sessions: [
      {
        id: 'w6_session',
        name: 'Intensificación Completa',
        duration: 26,
        exercises: [
          { exerciseId: 'kegel_slow', reps: 12, sets: 3, contractDuration: 8, relaxDuration: 8 },
          { exerciseId: 'kegel_elevator', reps: 5, sets: 2, note: 'Nuevo — control total' },
          { exerciseId: 'kegel_fast', reps: 20, sets: 3 },
          { exerciseId: 'kegel_super', reps: 6, sets: 2 },
          { exerciseId: 'reverse_tabletop', reps: 8, sets: 2, note: 'Apertura de psoas y flujo pélvico' },
          { exerciseId: 'hypopressive', reps: 5, sets: 3 },
          { exerciseId: 'bridge_unilateral', reps: 10, sets: 2, note: 'Nuevo — cada pierna' },
          { exerciseId: 'sumo_squat', reps: 15, sets: 3 },
          { exerciseId: 'piriformis_stretch', reps: 1, sets: 2 },
        ],
      },
    ],
  },
  {
    week: 7, phase: 3, phaseName: 'Intensificación',
    phaseDescription: 'Sincronización respiración-Kegel y mariposa reclinada somática.',
    sessionsPerDay: 3,
    sessions: [
      {
        id: 'w7_session',
        name: 'Intensificación + Sincronización',
        duration: 28,
        exercises: [
          { exerciseId: 'breathing_478', reps: 6, sets: 2, note: 'Comenzá siempre con calma mental' },
          { exerciseId: 'kegel_slow', reps: 12, sets: 3, contractDuration: 8, relaxDuration: 8 },
          { exerciseId: 'kegel_elevator', reps: 5, sets: 2 },
          { exerciseId: 'kegel_breath_sync', reps: 10, sets: 2, note: 'Nuevo — integración avanzada' },
          { exerciseId: 'kegel_super', reps: 6, sets: 3 },
          { exerciseId: 'hypopressive', reps: 6, sets: 3 },
          { exerciseId: 'bridge_unilateral', reps: 12, sets: 3 },
          { exerciseId: 'reclined_butterfly', reps: 1, sets: 1, note: 'Descompresión prostática' },
          { exerciseId: 'happy_baby', reps: 1, sets: 1 },
        ],
      },
    ],
  },
  {
    week: 8, phase: 3, phaseName: 'Intensificación',
    phaseDescription: 'Consolidación de fuerza pélvica, patada de glúteo y postura de la Diosa.',
    sessionsPerDay: 3,
    sessions: [
      {
        id: 'w8_session',
        name: 'Consolidación',
        duration: 28,
        exercises: [
          { exerciseId: 'breathing_478', reps: 8, sets: 2 },
          { exerciseId: 'kegel_slow', reps: 12, sets: 3, contractDuration: 8, relaxDuration: 8 },
          { exerciseId: 'kegel_elevator', reps: 6, sets: 3 },
          { exerciseId: 'kegel_pulsing', reps: 20, sets: 3 },
          { exerciseId: 'donkey_kick', reps: 12, sets: 2 },
          { exerciseId: 'goddess_squat', reps: 8, sets: 2 },
          { exerciseId: 'kegel_breath_sync', reps: 12, sets: 3 },
          { exerciseId: 'hypopressive', reps: 6, sets: 3 },
          { exerciseId: 'bridge_unilateral', reps: 12, sets: 3 },
          { exerciseId: 'figure_four', reps: 1, sets: 2 },
        ],
      },
    ],
  },
  // ═══════════════════════ FASE 4 — Maestría (Semanas 9-12) ═══════════════════════
  {
    week: 9, phase: 4, phaseName: 'Maestría',
    phaseDescription: 'Nivel experto. Mesa invertida, super kegels y máximo rendimiento.',
    sessionsPerDay: 3,
    sessions: [
      {
        id: 'w9_session',
        name: 'Sesión Maestra I',
        duration: 30,
        exercises: [
          { exerciseId: 'breathing_478', reps: 8, sets: 2 },
          { exerciseId: 'kegel_slow', reps: 15, sets: 3, contractDuration: 10, relaxDuration: 10 },
          { exerciseId: 'kegel_elevator', reps: 6, sets: 3 },
          { exerciseId: 'kegel_super', reps: 8, sets: 3 },
          { exerciseId: 'reverse_tabletop', reps: 10, sets: 2 },
          { exerciseId: 'kegel_breath_sync', reps: 12, sets: 3 },
          { exerciseId: 'hypopressive', reps: 8, sets: 3 },
          { exerciseId: 'bridge_unilateral', reps: 15, sets: 3 },
          { exerciseId: 'psoas_release', reps: 1, sets: 1 },
          { exerciseId: 'happy_baby', reps: 1, sets: 1 },
        ],
      },
    ],
  },
  {
    week: 10, phase: 4, phaseName: 'Maestría',
    phaseDescription: 'Semana de pico de intensidad. Postura de la Diosa y máxima forma.',
    sessionsPerDay: 3,
    sessions: [
      {
        id: 'w10_session',
        name: 'Sesión Maestra II',
        duration: 32,
        exercises: [
          { exerciseId: 'breathing_478', reps: 8, sets: 2 },
          { exerciseId: 'kegel_slow', reps: 15, sets: 3, contractDuration: 10, relaxDuration: 10 },
          { exerciseId: 'kegel_elevator', reps: 8, sets: 3 },
          { exerciseId: 'kegel_fast', reps: 30, sets: 3 },
          { exerciseId: 'kegel_super', reps: 8, sets: 3 },
          { exerciseId: 'goddess_squat', reps: 8, sets: 2 },
          { exerciseId: 'kegel_breath_sync', reps: 15, sets: 3 },
          { exerciseId: 'hypopressive', reps: 8, sets: 3 },
          { exerciseId: 'bridge_unilateral', reps: 15, sets: 3 },
          { exerciseId: 'pelvic_squat', reps: 15, sets: 3 },
          { exerciseId: 'reclined_butterfly', reps: 1, sets: 1 },
        ],
      },
    ],
  },
  {
    week: 11, phase: 4, phaseName: 'Maestría',
    phaseDescription: 'Refinamiento y potencia glútea sin fatiga. Calidad en cada contracción.',
    sessionsPerDay: 3,
    sessions: [
      {
        id: 'w11_session',
        name: 'Sesión Maestra III',
        duration: 30,
        exercises: [
          { exerciseId: 'kegel_reverse', reps: 10, sets: 2, note: 'Comenzá equilibrando tensión' },
          { exerciseId: 'kegel_slow', reps: 15, sets: 3, contractDuration: 10, relaxDuration: 10 },
          { exerciseId: 'kegel_elevator', reps: 8, sets: 3 },
          { exerciseId: 'kegel_super', reps: 8, sets: 3 },
          { exerciseId: 'donkey_kick', reps: 12, sets: 2 },
          { exerciseId: 'kegel_breath_sync', reps: 15, sets: 3 },
          { exerciseId: 'hypopressive', reps: 8, sets: 3 },
          { exerciseId: 'bridge_unilateral', reps: 15, sets: 3 },
          { exerciseId: 'sumo_squat', reps: 15, sets: 3 },
          { exerciseId: 'psoas_release', reps: 1, sets: 1 },
          { exerciseId: 'butterfly', reps: 1, sets: 2 },
        ],
      },
    ],
  },
  {
    week: 12, phase: 4, phaseName: 'Maestría',
    phaseDescription: 'Semana final maestra. Celebrá tus logros y máxima integración somática.',
    sessionsPerDay: 3,
    sessions: [
      {
        id: 'w12_session',
        name: 'Sesión Final Maestra',
        duration: 32,
        exercises: [
          { exerciseId: 'breathing_478', reps: 8, sets: 2 },
          { exerciseId: 'kegel_slow', reps: 15, sets: 3, contractDuration: 10, relaxDuration: 10 },
          { exerciseId: 'kegel_elevator', reps: 8, sets: 3 },
          { exerciseId: 'kegel_fast', reps: 30, sets: 3 },
          { exerciseId: 'kegel_super', reps: 8, sets: 3 },
          { exerciseId: 'reverse_tabletop', reps: 10, sets: 2 },
          { exerciseId: 'kegel_breath_sync', reps: 15, sets: 3 },
          { exerciseId: 'hypopressive', reps: 8, sets: 3 },
          { exerciseId: 'bridge_unilateral', reps: 15, sets: 3 },
          { exerciseId: 'pelvic_squat', reps: 15, sets: 3 },
          { exerciseId: 'reclined_butterfly', reps: 1, sets: 1 },
          { exerciseId: 'psoas_release', reps: 1, sets: 1 },
        ],
      },
    ],
  },
];

const PROGRAM_PHASES = {
  1: { name: 'Activación', weeks: [1, 2], color: '#A8FF78', description: 'Identificás y activás los músculos. Empezás a sentir los primeros resultados.' },
  2: { name: 'Construcción', weeks: [3, 4, 5], color: '#00C896', description: 'Aumentás la fuerza y resistencia. La función eréctil mejora notablemente.' },
  3: { name: 'Intensificación', weeks: [6, 7, 8], color: '#4A9EFF', description: 'Entrenamiento avanzado. Controles plenos sobre el piso pélvico.' },
  4: { name: 'Maestría', weeks: [9, 10, 11, 12], color: '#FFD700', description: 'Nivel experto. Máxima performance sexual.' },
  5: { name: 'Mantenimiento', weeks: [13], color: '#FF9500', description: 'Sin entrenamiento los músculos se atrofian en 6–8 semanas. Este plan mantiene tu máximo nivel para siempre.' },
};

// Plan de Mantenimiento (semana 13 en adelante, repetible siempre)
const MAINTENANCE_PLAN = {
  isMaintenance: true,
  phase: 5,
  phaseName: 'Mantenimiento',
  phaseDescription: '3 sesiones por semana. La ciencia confirma: sin entrenamiento hay regresión en 6–8 semanas. Este plan mantiene tu máximo nivel sexual de por vida.',
  scienceNote: '🔬 Los músculos pélvicos tienen memoria muscular. Aunque pares, recuperar el nivel es 3–4x más rápido que la primera vez. Por eso: mejor nunca parar.',
  sessionsPerWeek: 3,
  sessions: [
    {
      id: 'maintenance_a',
      name: 'Mantenimiento A (Potencia)',
      duration: 22,
      exercises: [
        { exerciseId: 'breathing_478', reps: 6, sets: 2 },
        { exerciseId: 'kegel_slow', reps: 12, sets: 3, contractDuration: 10, relaxDuration: 10 },
        { exerciseId: 'kegel_super', reps: 6, sets: 3 },
        { exerciseId: 'kegel_fast', reps: 20, sets: 2 },
        { exerciseId: 'reverse_tabletop', reps: 10, sets: 2 },
        { exerciseId: 'donkey_kick', reps: 12, sets: 2 },
        { exerciseId: 'bridge_elevated', reps: 12, sets: 3 },
        { exerciseId: 'childs_pose', reps: 1, sets: 1 },
      ],
    },
    {
      id: 'maintenance_b',
      name: 'Mantenimiento B (Control y Flujo)',
      duration: 22,
      exercises: [
        { exerciseId: 'kegel_elevator', reps: 6, sets: 3 },
        { exerciseId: 'kegel_breath_sync', reps: 12, sets: 3 },
        { exerciseId: 'hypopressive', reps: 6, sets: 3 },
        { exerciseId: 'goddess_squat', reps: 8, sets: 2 },
        { exerciseId: 'bridge_unilateral', reps: 12, sets: 2 },
        { exerciseId: 'pelvic_squat', reps: 12, sets: 2 },
        { exerciseId: 'figure_four', reps: 1, sets: 1 },
      ],
    },
    {
      id: 'maintenance_c',
      name: 'Mantenimiento C (Recuperación y Próstata)',
      duration: 18,
      exercises: [
        { exerciseId: 'diaphragmatic', reps: 10, sets: 2 },
        { exerciseId: 'kegel_reverse', reps: 10, sets: 2 },
        { exerciseId: 'kegel_slow', reps: 10, sets: 2, contractDuration: 8, relaxDuration: 8 },
        { exerciseId: 'kegel_pulsing', reps: 20, sets: 2 },
        { exerciseId: 'psoas_release', reps: 1, sets: 1 },
        { exerciseId: 'reclined_butterfly', reps: 1, sets: 1 },
        { exerciseId: 'happy_baby', reps: 1, sets: 1 },
      ],
    },
  ],
  weeklySchedule: [
    { day: 'Lunes', sessionIndex: 0 },
    { day: 'Miércoles', sessionIndex: 1 },
    { day: 'Viernes', sessionIndex: 2 },
  ],
};

function getWeekData(weekNumber) {
  if (weekNumber >= 13) return null; // mantenimiento es un flujo aparte
  return PROGRAM_12_WEEKS.find(w => w.week === weekNumber) || null;
}

function getCurrentWeekSession(weekNumber) {
  const weekData = getWeekData(weekNumber);
  if (!weekData) return null;
  return weekData.sessions[0];
}

function isInMaintenanceMode(weekNumber) {
  return weekNumber > 12;
}

function getMaintenanceSessionForDay() {
  // Rota entre las 3 sesiones de mantenimiento segun el dia de la semana
  const dayOfWeek = new Date().getDay(); // 0=dom, 1=lun, etc.
  const sessionMap = { 1: 0, 3: 1, 5: 2 }; // lun, mier, vier
  const idx = sessionMap[dayOfWeek] !== undefined ? sessionMap[dayOfWeek] : (dayOfWeek % 3);
  return MAINTENANCE_PLAN.sessions[idx];
}
