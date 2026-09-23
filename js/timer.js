// timer.js — Motor del temporizador para KegeFit Pro

class ExerciseTimer {
  constructor(options) {
    this.exercise = options.exercise;
    this.currentRep = 0;
    this.currentSet = 0;
    this.totalReps = options.reps || this.exercise.defaultReps;
    this.totalSets = options.sets || this.exercise.defaultSets;
    this.currentPhaseIndex = 0;
    this.timeLeft = 0;
    this.isRunning = false;
    this.isPaused = false;
    this.intervalId = null;

    // Callbacks
    this.onPhaseChange = options.onPhaseChange || (() => {});
    this.onRepComplete = options.onRepComplete || (() => {});
    this.onSetComplete = options.onSetComplete || (() => {});
    this.onExerciseComplete = options.onExerciseComplete || (() => {});
    this.onTick = options.onTick || (() => {});
  }

  get currentPhase() {
    return this.exercise.phases[this.currentPhaseIndex];
  }

  get progressPercent() {
    if (!this.currentPhase) return 0;
    const total = this.currentPhase.duration;
    return ((total - this.timeLeft) / total) * 100;
  }

  get totalProgress() {
    const totalCycles = this.totalSets * this.totalReps;
    const completedCycles = this.currentSet * this.totalReps + this.currentRep;
    return (completedCycles / totalCycles) * 100;
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.isPaused = false;
    if (this.timeLeft === 0) {
      this.timeLeft = this.currentPhase?.duration || 5;
      this.onPhaseChange(this.currentPhase, this.currentRep, this.currentSet);
    }
    this._tick();
  }

  pause() {
    this.isPaused = true;
    this.isRunning = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  resume() {
    if (!this.isPaused) return;
    this.isPaused = false;
    this.isRunning = true;
    this._tick();
  }

  stop() {
    this.isRunning = false;
    this.isPaused = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  reset() {
    this.stop();
    this.currentRep = 0;
    this.currentSet = 0;
    this.currentPhaseIndex = 0;
    this.timeLeft = 0;
  }

  _tick() {
    this.intervalId = setInterval(() => {
      if (!this.isRunning) return;

      this.timeLeft--;
      this.onTick(this.timeLeft, this.currentPhase, this.currentRep, this.currentSet);

      if (this.timeLeft <= 0) {
        clearInterval(this.intervalId);
        this.intervalId = null;
        // Micro-pausa antes de la siguiente fase para que el arco se vea completar
        setTimeout(() => {
          if (this.isRunning) this._nextPhase();
        }, 250);
      }
    }, 1000);
  }

  _nextPhase() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.currentPhaseIndex++;

    if (this.currentPhaseIndex >= this.exercise.phases.length) {
      // Completó todas las fases de una rep
      this.currentPhaseIndex = 0;
      this.currentRep++;
      this.onRepComplete(this.currentRep, this.currentSet);

      if (this.currentRep >= this.totalReps) {
        // Completó todas las reps de un set
        this.currentRep = 0;
        this.currentSet++;
        this.onSetComplete(this.currentSet);

        if (this.currentSet >= this.totalSets) {
          // Ejercicio completo
          this.stop();
          this.onExerciseComplete();
          return;
        }

        // Descanso entre series (15s)
        this.timeLeft = 15;
        this.onPhaseChange(
          { name: 'Descanso entre series', duration: 15, instruction: 'Descansá y respirá profundo', color: '#666', isRest: true },
          0, this.currentSet
        );
        this._tick();
        return;
      }
    }

    this.timeLeft = this.currentPhase.duration;
    this.onPhaseChange(this.currentPhase, this.currentRep, this.currentSet);
    this._tick();
  }
}

// Timer simple para cuenta regresiva (usado en estiramientos)
class SimpleTimer {
  constructor(duration, onTick, onComplete) {
    this.duration = duration;
    this.timeLeft = duration;
    this.onTick = onTick;
    this.onComplete = onComplete;
    this.intervalId = null;
    this.isRunning = false;
  }

  start() {
    this.isRunning = true;
    this.timeLeft = this.duration;
    this.intervalId = setInterval(() => {
      this.timeLeft--;
      this.onTick(this.timeLeft);
      if (this.timeLeft <= 0) {
        clearInterval(this.intervalId);
        this.isRunning = false;
        this.onComplete();
      }
    }, 1000);
  }

  stop() {
    if (this.intervalId) clearInterval(this.intervalId);
    this.isRunning = false;
  }
}
