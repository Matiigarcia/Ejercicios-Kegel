// audio.js — Web Audio API para KegeFit Pro

const Audio = {
  ctx: null,
  settings: null,

  init(settings) {
    this.settings = settings;
  },

  getCtx() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return this.ctx;
  },

  // Sonido de inicio de contracción (tono agudo corto)
  playContract() {
    if (!this.settings?.soundEnabled) return;
    try {
      const ctx = this.getCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.type = 'sine';
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.2);
    } catch (e) {}
  },

  // Sonido de relajación (tono grave suave)
  playRelax() {
    if (!this.settings?.soundEnabled) return;
    try {
      const ctx = this.getCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.type = 'sine';
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.3);
    } catch (e) {}
  },

  // Sonido de rep completada
  playRepComplete() {
    if (!this.settings?.soundEnabled) return;
    try {
      const ctx = this.getCtx();
      [523, 659].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.12);
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.2, ctx.currentTime + i * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.12 + 0.15);
        osc.start(ctx.currentTime + i * 0.12);
        osc.stop(ctx.currentTime + i * 0.12 + 0.15);
      });
    } catch (e) {}
  },

  // Sonido de sesión completada (fanfarria)
  playSessionComplete() {
    if (!this.settings?.soundEnabled) return;
    try {
      const ctx = this.getCtx();
      const notes = [523, 659, 784, 1047];
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.15);
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.25, ctx.currentTime + i * 0.15);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.15 + 0.3);
        osc.start(ctx.currentTime + i * 0.15);
        osc.stop(ctx.currentTime + i * 0.15 + 0.3);
      });
    } catch (e) {}
  },

  // Vibración (si disponible)
  vibrate(pattern) {
    if (!this.settings?.vibrationEnabled) return;
    if ('vibrate' in navigator) {
      navigator.vibrate(pattern);
    }
  },

  vibrateContract() { this.vibrate([100]); },
  vibrateRelax() { this.vibrate([50]); },
  vibrateRepComplete() { this.vibrate([50, 50, 50]); },
  vibrateSessionComplete() { this.vibrate([200, 100, 200, 100, 400]); },
};

// notifications.js — Notificaciones push
const Notifications = {
  async requestPermission() {
    if (!('Notification' in window)) return false;
    const result = await Notification.requestPermission();
    return result === 'granted';
  },

  isGranted() {
    return 'Notification' in window && Notification.permission === 'granted';
  },

  scheduleReminder(timeStr) {
    if (!this.isGranted()) return;
    const [hours, minutes] = timeStr.split(':').map(Number);
    const now = new Date();
    const target = new Date();
    target.setHours(hours, minutes, 0, 0);
    if (target <= now) target.setDate(target.getDate() + 1);
    const msUntilReminder = target.getTime() - now.getTime();
    setTimeout(() => {
      new Notification('KegeFit Pro 💪', {
        body: '¡Hora de tu sesión de Kegel! Tu cuerpo te lo va a agradecer.',
        icon: '/icons/icon-192.png',
        badge: '/icons/badge-96.png',
      });
      // Re-programar para mañana
      this.scheduleReminder(timeStr);
    }, msUntilReminder);
  },
};
