// app.js — Orquestador principal KegeFit Pro

class KegeFitApp {
  constructor() {
    this.currentView = 'home';
    this.activeTimer = null;
    this.activeSession = null;
    this.activeExerciseIndex = 0;
    this.sessionStartTime = null;
    this.profile = null;
    this.settings = null;
    this.stats = null;
  }

  init() {
    this.profile = Storage.initProfile();
    this.settings = Storage.getSettings();
    this.stats = Storage.getStats();
    Audio.init(this.settings);
    this.renderApp();
    this.bindGlobalEvents();
    if (this.settings.notificationsEnabled) {
      Notifications.scheduleReminder(this.settings.reminderTime);
    }
    if (!this.profile.onboardingComplete) {
      this.showOnboarding();
    }
  }

  navigate(view, data = {}) {
    // Si salimos del timer con un ejercicio en marcha, lo pausamos
    if (this.currentView === 'timer' && view !== 'timer' && this.activeTimer) {
      this.activeTimer.pause();
    }

    this.currentView = view;
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const viewEl = document.getElementById('view-' + view);
    if (viewEl) viewEl.classList.add('active');
    const navEl = document.querySelector('[data-nav="' + view + '"]');
    if (navEl) navEl.classList.add('active');
    switch (view) {
      case 'home': this.renderHome(); break;
      case 'program': this.renderProgram(); break;
      case 'exercises': this.renderExercises(data); break;
      case 'progress': this.renderProgress(); break;
      case 'settings': this.renderSettings(); break;
    }
  }

  renderHome() {
    this.stats = Storage.getStats();
    const streak = Storage.getStreak();
    const isMaintenance = typeof isInMaintenanceMode === 'function' && isInMaintenanceMode(this.profile.currentWeek);
    const weekData = !isMaintenance ? getWeekData(this.profile.currentWeek) : null;
    const el = document.getElementById('home-content');
    if (!el) return;

    const todayKey = getLocalDateKey();
    const sessionsLoggedToday = Storage.getSessionsForDate(todayKey);
    const sessionsToday = sessionsLoggedToday.length;

    let targetSessions = 2;
    let phaseNum = 1;
    let phase = PROGRAM_PHASES[1];
    let session = null;

    if (isMaintenance) {
      phaseNum = 5;
      phase = PROGRAM_PHASES[5];
      session = getMaintenanceSessionForDay();
      targetSessions = 1; // 1 sesión por día activo en mantenimiento
    } else if (weekData) {
      phaseNum = weekData.phase;
      phase = PROGRAM_PHASES[phaseNum] || PROGRAM_PHASES[1];
      targetSessions = weekData.sessionsPerDay;
      session = weekData.sessions[0];
    }

    // Título y botón según progreso del día
    let todayTitle = '🎯 Sesión de hoy';
    let todayDurationText = session ? `~${session.duration} min` : '';
    let startBtnText = '▶ Empezar sesión';
    let todayBadgeHtml = '';

    if (sessionsToday === 0) {
      todayTitle = '🎯 Sesión de hoy';
      startBtnText = `▶ Empezar sesión (0/${targetSessions})`;
    } else if (sessionsToday < targetSessions) {
      todayTitle = `🎯 Sesión de hoy: ${sessionsToday} de ${targetSessions} completada`;
      todayBadgeHtml = `<span class="today-done-badge">✓ 1ª Sesión lista</span>`;
      startBtnText = `▶ Empezar siguiente sesión (${sessionsToday + 1}/${targetSessions})`;
    } else {
      todayTitle = `🎉 ¡Meta de hoy cumplida! (${sessionsToday}/${targetSessions})`;
      todayBadgeHtml = `<span class="today-done-badge" style="background:#00C89633;border-color:#00C896">✓ Meta cumplida</span>`;
      startBtnText = '▶ Hacer sesión extra';
    }

    el.innerHTML = `
      <div class="home-hero">
        <div class="greeting-badge" style="display:flex;justify-content:space-between;align-items:center">
          <span class="phase-badge" style="background:${phase.color}22;color:${phase.color}">
            Fase ${phaseNum}: ${phase.name}
          </span>
          <button onclick="app.showInstallGuide()" style="background:rgba(0,200,150,0.12);border:1px solid rgba(0,200,150,0.3);color:var(--primary);border-radius:var(--radius-full);padding:3px 10px;font-size:11px;font-weight:600;cursor:pointer">
            📲 Instalar en Celular
          </button>
        </div>
        <h1>${isMaintenance ? 'Fase de Mantenimiento' : `Semana ${this.profile.currentWeek} de 12`}</h1>
        <p class="subtitle">${isMaintenance ? MAINTENANCE_PLAN.phaseDescription : (weekData ? weekData.phaseDescription : '')}</p>
      </div>
      <div class="stats-grid">
        <div class="stat-card"><div class="stat-icon">🔥</div><div class="stat-value">${streak.current}</div><div class="stat-label">días seguidos</div></div>
        <div class="stat-card"><div class="stat-icon">💪</div><div class="stat-value">${this.stats.totalSessions}</div><div class="stat-label">sesiones totales</div></div>
        <div class="stat-card"><div class="stat-icon">📅</div><div class="stat-value">${sessionsToday}/${targetSessions}</div><div class="stat-label">sesiones hoy</div></div>
      </div>
      ${session ? `
      <div class="today-card">
        <div class="today-header">
          <h2>${todayTitle}</h2>
          <div style="display:flex;align-items:center;gap:6px">
            ${todayBadgeHtml}
            <span class="duration-badge">${todayDurationText}</span>
          </div>
        </div>
        <p class="session-name">${session.name}</p>
        ${sessionsToday > 0 ? `
          <div class="today-completed-list">
            <span>✅</span>
            <span>Completaste hoy: <strong>${sessionsLoggedToday.map(s => s.sessionName || 'Sesión Kegel').join(', ')}</strong></span>
          </div>
        ` : ''}
        <div class="exercise-preview">
          ${session.exercises.slice(0, 4).map(ex => {
            const exercise = getExerciseById(ex.exerciseId);
            return exercise ? '<span class="ex-chip">' + exercise.icon + ' ' + exercise.name + '</span>' : '';
          }).join('')}
          ${session.exercises.length > 4 ? '<span class="ex-chip more">+' + (session.exercises.length - 4) + ' más</span>' : ''}
        </div>
        <button class="btn-primary btn-start-session" onclick="app.startProgramSession()">
          <span>${startBtnText}</span>
        </button>
      </div>` : ''}
      <div class="quick-exercises">
        <h3>Ejercicios rápidos</h3>
        <div class="quick-grid">
          <button class="quick-card" onclick="app.startQuickExercise('kegel_slow')"><span class="q-icon">🔵</span><span class="q-name">Kegel Lento</span><span class="q-time">5 min</span></button>
          <button class="quick-card" onclick="app.startQuickExercise('kegel_fast')"><span class="q-icon">⚡</span><span class="q-name">Kegel Rápido</span><span class="q-time">3 min</span></button>
          <button class="quick-card" onclick="app.startQuickExercise('breathing_478')"><span class="q-icon">💆</span><span class="q-name">Resp. 4-7-8</span><span class="q-time">4 min</span></button>
          <button class="quick-card" onclick="app.startQuickExercise('glute_bridge')"><span class="q-icon">🌉</span><span class="q-name">Puente</span><span class="q-time">5 min</span></button>
        </div>
      </div>
      <div class="science-card">
        <div class="science-icon">🔬</div>
        <div class="science-text">
          <strong>¿Sabías que?</strong>
          <p>${isMaintenance ? MAINTENANCE_PLAN.scienceNote : 'Los músculos <em>isquiocavernoso</em> y <em>bulbocavernoso</em> son los responsables de atrapar la sangre en el pene durante la erección. Cada Kegel los fortalece directamente.'}</p>
        </div>
      </div>
    `;
  }

  renderProgram() {
    const el = document.getElementById('program-content');
    if (!el) return;
    el.innerHTML = `
      <div class="program-header">
        <h2>Programa de Entrenamiento</h2>
        <p>12 Semanas progresivas + Plan de Mantenimiento de por vida.</p>
      </div>
      <div class="phases-overview">
        ${Object.entries(PROGRAM_PHASES).map(([num, ph]) => `
          <div class="phase-card" style="border-color:${ph.color}33">
            <div class="phase-num" style="background:${ph.color}22;color:${ph.color}">Fase ${num}</div>
            <div class="phase-info">
              <strong>${ph.name}</strong>
              <span>${ph.weeks[0] === 13 ? 'Semana 13+' : `Semanas ${ph.weeks[0]}–${ph.weeks[ph.weeks.length-1]}`}</span>
              <p>${ph.description}</p>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="weeks-grid">
        ${PROGRAM_12_WEEKS.map(week => {
          const isCurrent = week.week === this.profile.currentWeek;
          const isPast = week.week < this.profile.currentWeek;
          const ph = PROGRAM_PHASES[week.phase];
          const wkSessions = Storage.getSessionsForWeek(week.week);
          const done = wkSessions.length >= week.sessionsPerDay * 7;
          return `
            <div class="week-card ${isCurrent ? 'current' : ''} ${isPast ? 'past' : ''}" onclick="app.selectWeek(${week.week})">
              <div class="week-num">${done ? '✅' : isPast ? '⭕' : isCurrent ? '📍' : '🔒'} <span>Sem. ${week.week}</span></div>
              <div class="week-phase" style="color:${ph.color}">${ph.name}</div>
              <div class="week-info">${week.sessions[0].name}</div>
              <div class="week-duration">~${week.sessions[0].duration} min · ${week.sessionsPerDay}x/día</div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Fase 5: Plan de Mantenimiento de por vida -->
      <div class="maintenance-section">
        <div class="maintenance-card ${this.profile.currentWeek >= 13 ? 'active' : ''}">
          <div class="maintenance-badge" style="background:#FF950022;color:#FF9500">🏆 Fase 5 — Mantenimiento de por vida</div>
          <h3>Plan de Mantenimiento Continuo (Semana 13+)</h3>
          <p>${MAINTENANCE_PLAN.phaseDescription}</p>
          <div class="science-box" style="margin:12px 0;background:var(--surface-3);padding:10px;border-radius:var(--radius-sm);border-left:3px solid var(--accent)">
            <small style="color:var(--text-secondary);font-size:12px;line-height:1.5;display:block">${MAINTENANCE_PLAN.scienceNote}</small>
          </div>
          <div class="maintenance-sessions-list">
            ${MAINTENANCE_PLAN.sessions.map((s, idx) => `
              <div class="m-session-item">
                <span class="m-session-tag">Día ${idx === 0 ? 'Lun' : idx === 1 ? 'Mié' : 'Vie'}</span>
                <strong>${s.name}</strong> (~${s.duration} min)
                <button class="btn-xs" onclick="event.stopPropagation();app.startMaintenanceSession(${idx})">Entrenar ▶</button>
              </div>
            `).join('')}
          </div>
          <button class="btn-primary" style="margin-top:8px;width:100%" onclick="app.selectWeek(13)">
            ${this.profile.currentWeek >= 13 ? '✓ Modo Mantenimiento Actualmente Activo' : 'Activar Modo Mantenimiento (Semana 13+)'}
          </button>
        </div>
      </div>
    `;
  }

  renderExercises(data = {}) {
    const el = document.getElementById('exercises-content');
    if (!el) return;
    el.innerHTML = `
      <div class="exercises-header">
        <h2>Biblioteca de Ejercicios</h2>
        <p>25 ejercicios respaldados por evidencia científica y Kegel Yoga somático</p>
      </div>
      <div class="category-filters">
        <button class="filter-btn active" onclick="app.filterExercises('all',this)">Todos</button>
        ${Object.entries(EXERCISE_CATEGORIES).map(([cat, catData]) =>
          `<button class="filter-btn" style="--cat-color:${catData.color}" onclick="app.filterExercises('${cat}',this)">${catData.icon} ${catData.name}</button>`
        ).join('')}
      </div>
      <div class="exercises-list" id="exercises-list">${this.renderExercisesList('all')}</div>
    `;
  }

  renderExercisesList(category) {
    const exercises = category === 'all' ? getAllExercises() : getExercisesByCategory(category);
    return exercises.map(ex => {
      const catData = EXERCISE_CATEGORIES[ex.category];
      return `
        <div class="exercise-card" onclick="app.openExercise('${ex.id}')">
          <div class="ex-icon-big">${ex.icon}</div>
          <div class="ex-info">
            <div class="ex-name">${ex.name}</div>
            <div class="ex-target">${ex.targetMuscle}</div>
            <div class="ex-benefit">✓ ${ex.benefit}</div>
            <div class="ex-meta">
              <span class="difficulty-dots">${'●'.repeat(ex.difficulty)}${'○'.repeat(3-ex.difficulty)}</span>
              <span>${ex.defaultReps} reps · ${ex.defaultSets} series</span>
            </div>
          </div>
          <div class="ex-cat-badge" style="background:${catData.color}22;color:${catData.color}">${catData.name}</div>
        </div>
      `;
    }).join('');
  }

  filterExercises(category, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const list = document.getElementById('exercises-list');
    if (list) list.innerHTML = this.renderExercisesList(category);
  }

  renderProgress() {
    this.stats = Storage.getStats();
    const streak = Storage.getStreak();
    const el = document.getElementById('progress-content');
    if (!el) return;
    const maxCount = Math.max(...this.stats.weeklyData.map(d => d.count), 1);
    el.innerHTML = `
      <div class="progress-header">
        <h2>Tu Progreso</h2>
        <p>Semana ${this.profile.currentWeek} de 12 · ${Math.round((this.profile.currentWeek/12)*100)}% completado</p>
      </div>
      <div class="progress-bar-main"><div class="progress-fill" style="width:${(this.profile.currentWeek/12)*100}%"></div></div>
      <div class="stats-big-grid">
        <div class="stat-big"><div class="stat-big-val">${streak.current}</div><div class="stat-big-label">🔥 Racha actual</div></div>
        <div class="stat-big"><div class="stat-big-val">${streak.best}</div><div class="stat-big-label">🏆 Mejor racha</div></div>
        <div class="stat-big"><div class="stat-big-val">${this.stats.totalSessions}</div><div class="stat-big-label">💪 Total sesiones</div></div>
        <div class="stat-big"><div class="stat-big-val">${this.stats.daysActive}</div><div class="stat-big-label">📅 Días activos</div></div>
      </div>
      <div class="chart-section">
        <h3>Últimos 7 días</h3>
        <div class="bar-chart">
          ${this.stats.weeklyData.map(day => {
            const dayName = new Date(day.date + 'T12:00:00').toLocaleDateString('es-AR', {weekday:'short'});
            const height = day.count > 0 ? Math.max((day.count/maxCount)*100, 15) : 4;
            return `
              <div class="bar-group">
                <div class="bar-wrap">
                  <div class="bar" style="height:${height}%;background:${day.count>0?'var(--primary)':'var(--surface-3)'}">
                    ${day.count > 0 ? '<span class="bar-val">'+day.count+'</span>' : ''}
                  </div>
                </div>
                <div class="bar-label">${dayName}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
      <div class="milestones">
        <h3>Logros</h3>
        <div class="milestone-list">
          ${this.getMilestones().map(m => `
            <div class="milestone ${m.achieved ? 'achieved' : ''}">
              <span class="m-icon">${m.achieved ? m.icon : '🔒'}</span>
              <div class="m-info"><strong>${m.name}</strong><span>${m.description}</span></div>
              ${m.achieved ? '<span class="m-check">✓</span>' : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  getMilestones() {
    const stats = this.stats;
    const streak = Storage.getStreak();
    return [
      {name:'Primera sesión', description:'Completaste tu primera sesión', icon:'🌱', achieved: stats.totalSessions>=1},
      {name:'Una semana', description:'7 días consecutivos de entrenamiento', icon:'🔥', achieved: streak.best>=7},
      {name:'Fase 2', description:'Llegaste a la Fase de Construcción', icon:'💪', achieved: this.profile.currentWeek>=3},
      {name:'20 sesiones', description:'Completaste 20 sesiones en total', icon:'🏅', achieved: stats.totalSessions>=20},
      {name:'Fase 3', description:'Llegaste a la Fase de Intensificación', icon:'⚡', achieved: this.profile.currentWeek>=6},
      {name:'Mes de entrenamiento', description:'30 días consecutivos', icon:'📆', achieved: streak.best>=30},
      {name:'Fase 4 — Maestría', description:'Llegaste a la Fase de Maestría', icon:'👑', achieved: this.profile.currentWeek>=9},
      {name:'Programa completo', description:'Completaste las 12 semanas', icon:'🏆', achieved: this.profile.currentWeek>=12 && stats.totalSessions>=60},
    ];
  }

  renderSettings() {
    const el = document.getElementById('settings-content');
    if (!el) return;
    el.innerHTML = `
      <div class="settings-header"><h2>Configuración</h2></div>
      <div class="settings-section">
        <h3>Notificaciones</h3>
        <div class="setting-row">
          <div class="setting-info"><strong>Recordatorio diario</strong><span>Te avisa cuando es hora de entrenar</span></div>
          <label class="toggle"><input type="checkbox" id="toggle-notifications" ${this.settings.notificationsEnabled?'checked':''}><span class="toggle-slider"></span></label>
        </div>
        <div class="setting-row" id="time-row" style="display:${this.settings.notificationsEnabled?'flex':'none'}">
          <div class="setting-info"><strong>Hora del recordatorio</strong></div>
          <input type="time" id="reminder-time" value="${this.settings.reminderTime}" class="time-input">
        </div>
      </div>
      <div class="settings-section">
        <h3>Sonido y Vibración</h3>
        <div class="setting-row">
          <div class="setting-info"><strong>Sonidos de guía</strong><span>Pitidos para indicar contracción y relajación</span></div>
          <label class="toggle"><input type="checkbox" id="toggle-sound" ${this.settings.soundEnabled?'checked':''}><span class="toggle-slider"></span></label>
        </div>
        <div class="setting-row">
          <div class="setting-info"><strong>Vibración háptica</strong><span>Feedback táctil durante los ejercicios</span></div>
          <label class="toggle"><input type="checkbox" id="toggle-vibration" ${this.settings.vibrationEnabled?'checked':''}><span class="toggle-slider"></span></label>
        </div>
      </div>
      <div class="settings-section">
        <h3>Programa</h3>
        <div class="setting-row">
          <div class="setting-info"><strong>Semana actual</strong><span>Semana ${this.profile.currentWeek >= 13 ? '13+ (Mantenimiento)' : this.profile.currentWeek + ' de 12'}</span></div>
          <div class="week-selector">
            <button onclick="app.changeWeek(-1)" class="week-btn">‹</button>
            <span id="week-display">${this.profile.currentWeek >= 13 ? '13+' : this.profile.currentWeek}</span>
            <button onclick="app.changeWeek(1)" class="week-btn">›</button>
          </div>
        </div>
      </div>
      <div class="settings-section">
        <h3>Instalación en Celular</h3>
        <div class="setting-row" style="cursor:pointer" onclick="app.showInstallGuide()">
          <div class="setting-info">
            <strong>📲 Cómo instalar en tu teléfono (PWA)</strong>
            <span>Instrucciones para Android e iPhone (100% gratis)</span>
          </div>
          <span style="font-size:18px;color:var(--primary)">›</span>
        </div>
      </div>
      <div class="settings-section danger-zone">
        <h3>Zona peligrosa</h3>
        <button class="btn-danger" onclick="app.confirmReset()">Reiniciar todo el progreso</button>
      </div>
      <div class="app-info">
        <p>KegeFit Pro v1.0 · 100% Gratuita · Sin suscripciones</p>
        <p>Basada en evidencia científica</p>
      </div>
    `;
    this.bindSettingsEvents();
  }

  bindSettingsEvents() {
    const toggleNotif = document.getElementById('toggle-notifications');
    const toggleSound = document.getElementById('toggle-sound');
    const toggleVibration = document.getElementById('toggle-vibration');
    const reminderTime = document.getElementById('reminder-time');
    const timeRow = document.getElementById('time-row');

    toggleNotif && toggleNotif.addEventListener('change', async (e) => {
      if (e.target.checked) {
        const granted = await Notifications.requestPermission();
        if (!granted) { e.target.checked = false; return; }
        timeRow.style.display = 'flex';
        this.settings.notificationsEnabled = true;
        Notifications.scheduleReminder(this.settings.reminderTime);
      } else {
        timeRow.style.display = 'none';
        this.settings.notificationsEnabled = false;
      }
      Storage.saveSettings(this.settings);
    });
    toggleSound && toggleSound.addEventListener('change', (e) => {
      this.settings.soundEnabled = e.target.checked;
      Audio.init(this.settings);
      Storage.saveSettings(this.settings);
      if (e.target.checked) Audio.playRepComplete();
    });
    toggleVibration && toggleVibration.addEventListener('change', (e) => {
      this.settings.vibrationEnabled = e.target.checked;
      Audio.init(this.settings);
      Storage.saveSettings(this.settings);
      if (e.target.checked) Audio.vibrateRepComplete();
    });
    reminderTime && reminderTime.addEventListener('change', (e) => {
      this.settings.reminderTime = e.target.value;
      Storage.saveSettings(this.settings);
      Notifications.scheduleReminder(e.target.value);
    });
  }

  changeWeek(delta) {
    const newWeek = Math.max(1, Math.min(13, this.profile.currentWeek + delta));
    this.profile.currentWeek = newWeek;
    Storage.updateWeek(newWeek);
    const el = document.getElementById('week-display');
    if (el) el.textContent = newWeek >= 13 ? '13+' : newWeek;
  }

  startProgramSession() {
    if (typeof isInMaintenanceMode === 'function' && isInMaintenanceMode(this.profile.currentWeek)) {
      const session = getMaintenanceSessionForDay();
      this.startSession(session, this.profile.currentWeek);
      return;
    }
    const weekData = getWeekData(this.profile.currentWeek);
    if (!weekData) return;
    this.startSession(weekData.sessions[0], this.profile.currentWeek);
  }

  startMaintenanceSession(sessionIndex) {
    const session = (typeof MAINTENANCE_PLAN !== 'undefined' && MAINTENANCE_PLAN.sessions[sessionIndex]) || MAINTENANCE_PLAN.sessions[0];
    this.startSession(session, 13);
  }

  startQuickExercise(exerciseId) {
    const exercise = getExerciseById(exerciseId);
    if (!exercise) return;
    this.startSession({
      id: 'quick_' + exerciseId,
      name: exercise.name,
      exercises: [{exerciseId, reps: exercise.defaultReps, sets: exercise.defaultSets}],
    }, this.profile.currentWeek);
  }

  startSession(session, week) {
    this.activeSession = session;
    this.activeExerciseIndex = 0;
    this.sessionStartTime = Date.now();
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('view-timer').classList.add('active');
    this.renderTimerView();
    this.startCurrentExercise();
  }

  renderTimerView() {
    const session = this.activeSession;
    const el = document.getElementById('timer-content');
    if (!el) return;
    el.innerHTML = `
      <div class="timer-header">
        <button class="btn-back" onclick="app.exitSession()">✕</button>
        <h3 id="session-name">${session.name}</h3>
        <div class="ex-counter" id="ex-counter">1/${session.exercises.length}</div>
      </div>
      <div class="timer-main">
        <div class="exercise-name-display" id="ex-name-display">Preparate</div>
        <div class="phase-name-display" id="phase-name">Listo para empezar</div>
        <div class="timer-circle-wrap">
          <svg viewBox="0 0 200 200" class="timer-svg">
            <circle cx="100" cy="100" r="85" fill="none" stroke="var(--surface-3)" stroke-width="12"/>
            <circle cx="100" cy="100" r="85" fill="none" stroke="var(--primary)" stroke-width="12"
              stroke-dasharray="534" stroke-dashoffset="534" stroke-linecap="round"
              transform="rotate(-90 100 100)" id="timer-arc" style="transition:stroke-dashoffset 0.9s linear,stroke 0.3s"/>
          </svg>
          <div class="timer-center">
            <div class="timer-seconds" id="timer-seconds">–</div>
            <div class="timer-phase-label">seg</div>
          </div>
        </div>
        <div class="instruction-display" id="instruction-display">Tocá Empezar cuando estés listo</div>
        <div class="rep-set-display">
          <div class="rep-info"><span class="rep-label">Repetición</span><span class="rep-val" id="rep-display">–</span></div>
          <div class="rep-info"><span class="rep-label">Serie</span><span class="rep-val" id="set-display">–</span></div>
        </div>
        <div class="timer-tip" id="timer-tip"></div>
      </div>
      <div class="timer-controls">
        <button class="btn-timer-secondary" onclick="app.previousExercise()">‹ Anterior</button>
        <button class="btn-timer-main" id="btn-play-pause" onclick="app.togglePause()">▶ Empezar</button>
        <button class="btn-timer-secondary" onclick="app.skipExercise()">Siguiente ›</button>
      </div>
      <div class="session-progress-bar"><div class="session-progress-fill" id="session-progress" style="width:0%"></div></div>
      <div class="exercises-queue" id="exercises-queue">${this.renderExercisesQueue()}</div>
    `;
  }

  renderExercisesQueue() {
    return this.activeSession.exercises.map((ex, i) => {
      const exercise = getExerciseById(ex.exerciseId);
      if (!exercise) return '';
      const isCurrent = i === this.activeExerciseIndex;
      const isPast = i < this.activeExerciseIndex;
      return `
        <div class="queue-item ${isCurrent?'current':''} ${isPast?'past':''}">
          <span class="q-status">${isPast?'✓':isCurrent?'▶':(i+1)}</span>
          <span class="q-ex-icon">${exercise.icon}</span>
          <span class="q-ex-name">${exercise.name}</span>
          <span class="q-ex-meta">${ex.reps}×${ex.sets}</span>
        </div>
      `;
    }).join('');
  }

  startCurrentExercise() {
    if (this.activeTimer) { this.activeTimer.stop(); this.activeTimer = null; }
    const session = this.activeSession;
    if (this.activeExerciseIndex >= session.exercises.length) {
      this.completeSession();
      return;
    }
    const exConfig = session.exercises[this.activeExerciseIndex];
    const exercise = getExerciseById(exConfig.exerciseId);
    if (!exercise) { this.activeExerciseIndex++; this.startCurrentExercise(); return; }

    const exNameEl = document.getElementById('ex-name-display');
    const exCounterEl = document.getElementById('ex-counter');
    const tipEl = document.getElementById('timer-tip');
    const repEl = document.getElementById('rep-display');
    const setEl = document.getElementById('set-display');
    const queueEl = document.getElementById('exercises-queue');
    const progressEl = document.getElementById('session-progress');

    if (exNameEl) {
      exNameEl.innerHTML = `
        <div style="font-size:18px;font-weight:700">${exercise.icon} ${exercise.name}</div>
        <button class="btn-tutorial-link" onclick="app.openExercise('${exercise.id}')">ℹ️ Ver técnica y animación</button>
      `;
    }
    if (exCounterEl) exCounterEl.textContent = (this.activeExerciseIndex+1) + '/' + session.exercises.length;
    if (tipEl) tipEl.textContent = exercise.tip || '';
    if (repEl) repEl.textContent = '1/' + exConfig.reps;
    if (setEl) setEl.textContent = '1/' + exConfig.sets;
    if (queueEl) queueEl.innerHTML = this.renderExercisesQueue();
    if (progressEl) progressEl.style.width = ((this.activeExerciseIndex / session.exercises.length) * 100) + '%';

    this.activeTimer = new ExerciseTimer({
      exercise,
      reps: exConfig.reps,
      sets: exConfig.sets,
      onPhaseChange: (phase, rep, set) => {
        this.updateTimerUI(phase, rep+1, set+1, exConfig.reps, exConfig.sets);
        if (phase.isRest || (exercise.phases.indexOf(phase) > 0)) {
          Audio.playRelax(); Audio.vibrateRelax();
        } else {
          Audio.playContract(); Audio.vibrateContract();
        }
      },
      onTick: (timeLeft, phase) => { this.updateTimerArc(timeLeft, phase); },
      onRepComplete: (rep) => {
        Audio.playRepComplete(); Audio.vibrateRepComplete();
        const r = document.getElementById('rep-display');
        if (r) r.textContent = Math.min(rep+1, exConfig.reps) + '/' + exConfig.reps;
      },
      onSetComplete: (set) => {
        const s = document.getElementById('set-display');
        const r = document.getElementById('rep-display');
        if (s) s.textContent = Math.min(set+1, exConfig.sets) + '/' + exConfig.sets;
        if (r) r.textContent = '1/' + exConfig.reps;
      },
      onExerciseComplete: () => {
        Storage.updateExerciseProgress(exercise.id, {});
        this.activeExerciseIndex++;
        setTimeout(() => this.startCurrentExercise(), 500);
      },
    });

    const btn = document.getElementById('btn-play-pause');
    if (btn) { btn.textContent = '▶ Empezar'; btn.dataset.state = 'ready'; }
  }

  updateTimerUI(phase, rep, set, totalReps, totalSets) {
    if (!phase) return;
    const secEl = document.getElementById('timer-seconds');
    const phaseEl = document.getElementById('phase-name');
    const instrEl = document.getElementById('instruction-display');
    const arc = document.getElementById('timer-arc');
    if (phaseEl) phaseEl.textContent = phase.name;
    if (instrEl) instrEl.textContent = phase.instruction;
    if (secEl) secEl.textContent = phase.duration;

    if (arc) {
      // 1. Quitar transición para que el reinicio sea instantáneo a 534 (vacío)
      // sin la animación de retroceso que confunde el conteo de segundos
      arc.style.transition = 'none';
      arc.style.strokeDashoffset = '534';
      const phaseColor = phase.color || (phase.isRest ? '#38BDF8' : 'var(--primary)');
      arc.style.stroke = phaseColor;

      // Forzar reflujo DOM síncrono
      void arc.offsetHeight;

      // 2. Reactivar transición suave hacia adelante para los ticks de llenado
      requestAnimationFrame(() => {
        arc.style.transition = 'stroke-dashoffset 0.95s linear, stroke 0.3s ease';
      });
    }

    const r = document.getElementById('rep-display');
    const s = document.getElementById('set-display');
    if (r) r.textContent = rep + '/' + totalReps;
    if (s) s.textContent = set + '/' + totalSets;
  }

  updateTimerArc(timeLeft, phase) {
    const arc = document.getElementById('timer-arc');
    const secEl = document.getElementById('timer-seconds');
    if (!arc || !phase) return;
    const duration = phase.duration || 1;
    const progress = Math.max(0, Math.min(1, (duration - timeLeft) / duration));
    const offset = 534 - (progress * 534);
    arc.style.strokeDashoffset = offset;
    if (secEl) secEl.textContent = Math.max(0, timeLeft);
  }

  togglePause() {
    const btn = document.getElementById('btn-play-pause');
    if (!this.activeTimer) return;
    if (!this.activeTimer.isRunning && !this.activeTimer.isPaused) {
      this.activeTimer.start();
      if (btn) { btn.textContent = '⏸ Pausar'; btn.dataset.state = 'running'; }
    } else if (this.activeTimer.isRunning) {
      this.activeTimer.pause();
      if (btn) { btn.textContent = '▶ Continuar'; btn.dataset.state = 'paused'; }
    } else {
      this.activeTimer.resume();
      if (btn) { btn.textContent = '⏸ Pausar'; btn.dataset.state = 'running'; }
    }
  }

  skipExercise() { if (this.activeTimer) this.activeTimer.stop(); this.activeExerciseIndex++; this.startCurrentExercise(); }
  previousExercise() { if (this.activeTimer) this.activeTimer.stop(); this.activeExerciseIndex = Math.max(0, this.activeExerciseIndex-1); this.startCurrentExercise(); }

  exitSession() {
    if (this.activeTimer) this.activeTimer.stop();
    this.activeTimer = null;
    this.navigate('home');
  }

  completeSession() {
    Audio.playSessionComplete(); Audio.vibrateSessionComplete();
    const durationMinutes = Math.round((Date.now() - this.sessionStartTime) / 60000);
    Storage.logSession({
      week: this.profile.currentWeek,
      name: this.activeSession.name,
      durationMinutes,
      exercisesCompleted: this.activeSession.exercises.length,
      completed: true,
    });
    const el = document.getElementById('timer-content');
    if (el) {
      el.innerHTML = `
        <div class="completion-screen">
          <div class="completion-icon">🎉</div>
          <h2>¡Sesión completada!</h2>
          <p>Excelente trabajo. Cada sesión te acerca más a tu objetivo.</p>
          <div class="completion-stats">
            <div class="c-stat"><strong>${durationMinutes}</strong><span>minutos</span></div>
            <div class="c-stat"><strong>${this.activeSession.exercises.length}</strong><span>ejercicios</span></div>
            <div class="c-stat"><strong>${Storage.getStreak().current}</strong><span>días seguidos</span></div>
          </div>
          <div class="science-note">
            <p>💡 Los músculos del piso pélvico se recuperan rápido. Ya podés hacer otra sesión más tarde hoy.</p>
          </div>
          <button class="btn-primary" onclick="app.navigate('home')">Volver al inicio</button>
        </div>
      `;
    }
  }

  openExercise(exerciseId) {
    const exercise = getExerciseById(exerciseId);
    if (!exercise) return;
    const modal = document.getElementById('exercise-modal');
    const modalContent = document.getElementById('modal-content');
    if (!modal || !modalContent) return;
    const catData = EXERCISE_CATEGORIES[exercise.category];
    modalContent.innerHTML = `
      <div class="modal-header">
        <button class="btn-modal-close" onclick="app.closeModal()">✕</button>
        <div class="modal-icon">${exercise.icon}</div>
        <h2>${exercise.name}</h2>
        <span class="modal-cat" style="background:${catData.color}22;color:${catData.color}">${catData.label}</span>
      </div>
      <div class="modal-body">
        ${typeof renderExerciseTutorial === 'function' ? renderExerciseTutorial(exercise.id) : ''}
        <p class="modal-desc">${exercise.description}</p>
        <div class="modal-section"><h4>🎯 Músculo objetivo</h4><p>${exercise.targetMuscle}</p></div>
        <div class="modal-section"><h4>✅ Beneficio</h4><p>${exercise.benefit}</p></div>
        <div class="modal-section">
          <h4>📋 Cómo hacerlo</h4>
          <ol class="how-to-list">${exercise.howTo.map(s => '<li>'+s+'</li>').join('')}</ol>
        </div>
        <div class="modal-section">
          <h4>⏱️ Fases del ejercicio</h4>
          <div class="phases-list">
            ${exercise.phases.map(ph => `
              <div class="phase-item" style="border-left:3px solid ${ph.color}">
                <strong>${ph.name}</strong> — ${ph.duration}s<br><span>${ph.instruction}</span>
              </div>
            `).join('')}
          </div>
        </div>
        ${exercise.tip ? '<div class="modal-tip"><strong>💡 Consejo</strong><p>'+exercise.tip+'</p></div>' : ''}
        <button class="btn-primary btn-full" onclick="app.startQuickExercise('${exercise.id}');app.closeModal()">
          ▶ Hacer este ejercicio ahora
        </button>
      </div>
    `;
    modal.classList.add('open');
  }

  closeModal() { document.getElementById('exercise-modal')?.classList.remove('open'); }

  showInstallGuide() {
    const modal = document.getElementById('install-modal');
    if (modal) modal.classList.add('open');
  }

  closeInstallModal() {
    const modal = document.getElementById('install-modal');
    if (modal) modal.classList.remove('open');
  }

  switchInstallTab(os) {
    document.querySelectorAll('.install-tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-btn-' + os)?.classList.add('active');
    document.querySelectorAll('.install-guide-content').forEach(c => c.style.display = 'none');
    const content = document.getElementById('install-guide-' + os);
    if (content) content.style.display = 'block';
  }

  selectWeek(week) {
    const isMaint = week >= 13;
    const msg = isMaint
      ? '¿Activar el Plan de Mantenimiento (Semana 13+)? Ideal para mantener tus resultados de por vida.'
      : '¿Cambiar al entrenamiento de la Semana ' + week + '?';
    if (confirm(msg)) {
      this.profile.currentWeek = week;
      Storage.updateWeek(week);
      this.navigate('program');
    }
  }

  confirmReset() {
    if (confirm('¿Estás seguro? Esto borrará TODO tu progreso. Esta acción no se puede deshacer.')) {
      Storage.resetAll();
      location.reload();
    }
  }

  showOnboarding() {
    const modal = document.getElementById('onboarding-modal');
    if (modal) modal.classList.add('open');
  }

  completeOnboarding() {
    const modal = document.getElementById('onboarding-modal');
    if (modal) modal.classList.remove('open');
    this.profile.onboardingComplete = true;
    Storage.saveProfile(this.profile);
  }

  renderApp() {
    document.getElementById('app').innerHTML = this.getAppHTML();
    this.navigate('home');
  }

  getAppHTML() {
    return `
      <div id="view-home" class="view active"><div class="view-scroll" id="home-content"></div></div>
      <div id="view-program" class="view"><div class="view-scroll" id="program-content"></div></div>
      <div id="view-exercises" class="view"><div class="view-scroll" id="exercises-content"></div></div>
      <div id="view-progress" class="view"><div class="view-scroll" id="progress-content"></div></div>
      <div id="view-settings" class="view"><div class="view-scroll" id="settings-content"></div></div>
      <div id="view-timer" class="view"><div id="timer-content"></div></div>
      <nav class="bottom-nav">
        <button class="nav-item active" data-nav="home" onclick="app.navigate('home')"><span class="nav-icon">🏠</span><span class="nav-label">Inicio</span></button>
        <button class="nav-item" data-nav="program" onclick="app.navigate('program')"><span class="nav-icon">📅</span><span class="nav-label">Programa</span></button>
        <button class="nav-item" data-nav="exercises" onclick="app.navigate('exercises')"><span class="nav-icon">💪</span><span class="nav-label">Ejercicios</span></button>
        <button class="nav-item" data-nav="progress" onclick="app.navigate('progress')"><span class="nav-icon">📊</span><span class="nav-label">Progreso</span></button>
        <button class="nav-item" data-nav="settings" onclick="app.navigate('settings')"><span class="nav-icon">⚙️</span><span class="nav-label">Config</span></button>
      </nav>
      <div id="exercise-modal" class="modal-overlay" onclick="if(event.target===this)app.closeModal()">
        <div class="modal-container"><div id="modal-content"></div></div>
      </div>
      <div id="install-modal" class="modal-overlay" onclick="if(event.target===this)app.closeInstallModal()">
        <div class="modal-container">
          <div class="modal-header">
            <button class="btn-modal-close" onclick="app.closeInstallModal()">✕</button>
            <div class="modal-icon">📲</div>
            <h2>Instalar en tu Celular</h2>
            <span class="modal-cat" style="background:#00C89622;color:#00C896">PWA 100% Gratuita</span>
          </div>
          <div class="modal-body">
            <p style="color:var(--text-secondary);font-size:13px;line-height:1.5">
              Podés usar KegeFit Pro como una app nativa en tu teléfono, en pantalla completa, sin barras de navegador y totalmente gratis sin suscripciones.
            </p>
            <div class="install-tabs">
              <button class="install-tab-btn active" id="tab-btn-android" onclick="app.switchInstallTab('android')">🤖 Android (Chrome)</button>
              <button class="install-tab-btn" id="tab-btn-ios" onclick="app.switchInstallTab('ios')">🍏 iPhone (Safari)</button>
            </div>
            <div id="install-guide-android" class="install-guide-content">
              <div class="install-step-list">
                <div class="install-step-item">
                  <div class="install-step-num">1</div>
                  <div class="install-step-text">
                    <strong>Abrí Chrome en tu celular</strong>
                    <p>Conectado al mismo WiFi, abrí: <code>http://192.168.100.11:3333</code> (o el enlace web si la subís).</p>
                  </div>
                </div>
                <div class="install-step-item">
                  <div class="install-step-num">2</div>
                  <div class="install-step-text">
                    <strong>Tocá los 3 puntos (Menú)</strong>
                    <p>En la esquina superior derecha de Google Chrome, tocá los 3 puntos verticales <strong>⋮</strong>.</p>
                  </div>
                </div>
                <div class="install-step-item">
                  <div class="install-step-num">3</div>
                  <div class="install-step-text">
                    <strong>Tocá "Instalar aplicación" o "Agregar a inicio"</strong>
                    <p>Confirmá tocando "Instalar". ¡Listo! La app aparecerá en tu menú de apps de Android con su propio ícono.</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="install-guide-ios" class="install-guide-content" style="display:none">
              <div class="install-step-list">
                <div class="install-step-item">
                  <div class="install-step-num">1</div>
                  <div class="install-step-text">
                    <strong>Abrí la dirección en Safari</strong>
                    <p>En iPhone es necesario usar el navegador <strong>Safari</strong> (abrí <code>http://192.168.100.11:3333</code>).</p>
                  </div>
                </div>
                <div class="install-step-item">
                  <div class="install-step-num">2</div>
                  <div class="install-step-text">
                    <strong>Tocá el botón Compartir</strong>
                    <p>En la barra inferior de Safari, tocá el ícono de <strong>Compartir</strong> (el cuadrado con la flecha hacia arriba 📤).</p>
                  </div>
                </div>
                <div class="install-step-item">
                  <div class="install-step-num">3</div>
                  <div class="install-step-text">
                    <strong>Elegí "Agregar al inicio"</strong>
                    <p>Deslizá las opciones y seleccioná <strong>"Agregar al inicio"</strong>. Luego confirmá tocando "Agregar".</p>
                  </div>
                </div>
              </div>
            </div>
            <div style="margin-top:14px;background:var(--surface-3);padding:12px;border-radius:var(--radius-sm);border-left:3px solid var(--primary)">
              <strong style="color:var(--primary);font-size:12px;display:block;margin-bottom:4px">💡 Acceso desde tu casa por WiFi</strong>
              <p style="color:var(--text-secondary);font-size:12px;margin:0;line-height:1.4">
                La IP local de tu compu es <code>192.168.100.11</code>. Mientras la compu esté encendida con el servidor en marcha, podés usarla en tu celu escribiendo <code>http://192.168.100.11:3333</code>.
              </p>
            </div>
            <button class="btn-primary btn-full" style="margin-top:14px" onclick="app.closeInstallModal()">¡Entendido!</button>
          </div>
        </div>
      </div>
      <div id="onboarding-modal" class="modal-overlay">
        <div class="modal-container onboarding">
          <div class="onboarding-slide">
            <div class="ob-icon">💪</div>
            <h2>Bienvenido a KegeFit Pro</h2>
            <p>La app de entrenamiento pélvico masculino <strong>100% gratuita</strong> basada en evidencia científica.</p>
            <div class="ob-facts">
              <div class="ob-fact">✅ 25 ejercicios completos</div>
              <div class="ob-fact">✅ Programa de 12 semanas</div>
              <div class="ob-fact">✅ Timer animado guiado</div>
              <div class="ob-fact">✅ Sin suscripciones</div>
            </div>
            <div class="ob-science">
              <strong>🔬 Base científica</strong>
              <p>Los ejercicios trabajan los músculos isquiocavernoso y bulbocavernoso, responsables directos de la rigidez y duración de la erección.</p>
            </div>
            <button class="btn-primary btn-full" onclick="app.completeOnboarding()">¡Empezar mi entrenamiento! →</button>
          </div>
        </div>
      </div>
    `;
  }

  bindGlobalEvents() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeModal();
        this.closeInstallModal();
      }
    });
  }
}

// Fix: <div id="app"> creates window.app as an HTMLDivElement.
// We need to explicitly assign window.app after construction to override it.
const _appInstance = new KegeFitApp();
window.app = _appInstance;

function startAppSafely() {
  window.app = _appInstance;
  try {
    _appInstance.init();
  } catch (err) {
    console.error('Error al inicializar KegeFit Pro:', err);
    const appEl = document.getElementById('app');
    if (appEl) {
      appEl.innerHTML = `
        <div style="padding:24px;text-align:center;color:#fff;font-family:Inter,sans-serif;margin-top:40px">
          <h2>⚠️ Error al iniciar la aplicación</h2>
          <p style="color:#8899BB;margin:12px 0 20px">${err.message || 'Error desconocido'}</p>
          <button onclick="localStorage.clear();location.reload()" style="background:#00C896;color:#080E1C;border:none;padding:12px 20px;border-radius:8px;font-weight:700;cursor:pointer">Reiniciar datos y reintentar</button>
        </div>
      `;
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startAppSafely);
} else {
  startAppSafely();
}
