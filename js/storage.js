// storage.js — Persistencia en localStorage para KegeFit Pro

const STORAGE_KEYS = {
  USER_PROFILE: 'kegfit_profile',
  PROGRESS: 'kegfit_progress',
  SESSIONS_LOG: 'kegfit_sessions',
  SETTINGS: 'kegfit_settings',
  STREAK: 'kegfit_streak',
};

// Función auxiliar para obtener fecha local 'AAAA-MM-DD' sin problemas de UTC
function getLocalDateKey(d = new Date()) {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

const Storage = {
  // ─── Perfil de usuario ────────────────────────────────────────────────
  getProfile() {
    const raw = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
    return raw ? JSON.parse(raw) : null;
  },

  saveProfile(profile) {
    localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
  },

  initProfile() {
    const existing = this.getProfile();
    if (existing) return existing;
    const profile = {
      currentWeek: 1,
      currentDay: 1,
      startDate: new Date().toISOString(),
      totalSessions: 0,
      onboardingComplete: false,
    };
    this.saveProfile(profile);
    return profile;
  },

  updateWeek(week) {
    const profile = this.getProfile() || this.initProfile();
    profile.currentWeek = week;
    this.saveProfile(profile);
  },

  // ─── Registro de sesiones ─────────────────────────────────────────────
  getSessionsLog() {
    const raw = localStorage.getItem(STORAGE_KEYS.SESSIONS_LOG);
    return raw ? JSON.parse(raw) : [];
  },

  logSession(sessionData) {
    const log = this.getSessionsLog();
    const entry = {
      id: Date.now(),
      date: new Date().toISOString(),
      dateKey: getLocalDateKey(),
      week: sessionData.week,
      sessionName: sessionData.name,
      durationMinutes: sessionData.durationMinutes || 0,
      exercisesCompleted: sessionData.exercisesCompleted || 0,
      completed: sessionData.completed || false,
    };
    log.push(entry);
    localStorage.setItem(STORAGE_KEYS.SESSIONS_LOG, JSON.stringify(log));

    // Actualizar perfil
    const profile = this.getProfile() || this.initProfile();
    profile.totalSessions++;
    this.saveProfile(profile);

    // Actualizar racha
    this.updateStreak();

    return entry;
  },

  getSessionsForDate(dateKey) {
    const key = dateKey || getLocalDateKey();
    return this.getSessionsLog().filter(s => s.dateKey === key);
  },

  getSessionsForWeek(week) {
    return this.getSessionsLog().filter(s => s.week === week);
  },

  // ─── Racha diaria (streak) ────────────────────────────────────────────
  getStreak() {
    const raw = localStorage.getItem(STORAGE_KEYS.STREAK);
    return raw ? JSON.parse(raw) : { current: 0, best: 0, lastDate: null };
  },

  updateStreak() {
    const streak = this.getStreak();
    const today = getLocalDateKey();
    const yesterday = getLocalDateKey(new Date(Date.now() - 86400000));

    if (streak.lastDate === today) {
      // Ya entrenó hoy — no cambiar
      return streak;
    } else if (streak.lastDate === yesterday) {
      // Entrenó ayer — racha continúa
      streak.current++;
    } else {
      // Rompió la racha o primera vez
      streak.current = 1;
    }

    streak.lastDate = today;
    streak.best = Math.max(streak.current, streak.best);
    localStorage.setItem(STORAGE_KEYS.STREAK, JSON.stringify(streak));
    return streak;
  },

  // ─── Configuración ───────────────────────────────────────────────────
  getSettings() {
    const raw = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    return raw ? JSON.parse(raw) : {
      soundEnabled: true,
      vibrationEnabled: true,
      notificationsEnabled: false,
      reminderTime: '08:00',
      theme: 'dark',
    };
  },

  saveSettings(settings) {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  },

  // ─── Progreso por ejercicio ───────────────────────────────────────────
  getProgress() {
    const raw = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    return raw ? JSON.parse(raw) : {};
  },

  updateExerciseProgress(exerciseId, data) {
    const progress = this.getProgress();
    if (!progress[exerciseId]) {
      progress[exerciseId] = { timesCompleted: 0, lastCompleted: null, personalBest: 0 };
    }
    progress[exerciseId].timesCompleted++;
    progress[exerciseId].lastCompleted = new Date().toISOString();
    if (data.holdDuration > (progress[exerciseId].personalBest || 0)) {
      progress[exerciseId].personalBest = data.holdDuration;
    }
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
  },

  // ─── Estadísticas generales ───────────────────────────────────────────
  getStats() {
    const log = this.getSessionsLog();
    const streak = this.getStreak();
    const profile = this.getProfile() || this.initProfile();
    const today = getLocalDateKey();
    const last7Days = [...Array(7)].map((_, i) =>
      getLocalDateKey(new Date(Date.now() - i * 86400000))
    );

    return {
      totalSessions: profile.totalSessions,
      currentWeek: profile.currentWeek,
      currentStreak: streak.current,
      bestStreak: streak.best,
      sessionsToday: log.filter(s => s.dateKey === today).length,
      sessionsLast7Days: log.filter(s => last7Days.includes(s.dateKey)).length,
      daysActive: [...new Set(log.map(s => s.dateKey))].length,
      weeklyData: last7Days.map(date => ({
        date,
        count: log.filter(s => s.dateKey === date).length,
      })).reverse(),
    };
  },

  // ─── Reset completo ───────────────────────────────────────────────────
  resetAll() {
    Object.values(STORAGE_KEYS).forEach(key => localStorage.removeItem(key));
  },
};
