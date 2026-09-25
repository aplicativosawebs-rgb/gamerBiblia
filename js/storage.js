// Sistema de almacenamiento en localStorage
const STORAGE_KEY = 'bibliaGames_v1';

const Storage = {
  _default() {
    return {
      scores: {
        personaje: 0,
        'libro-emoji': 0,
        memoria: 0,
        ahorcado: 0,
        timeline: 0,
        'codigo-secreto': 0
      },
      completed: {
        personaje: false,
        'libro-emoji': false,
        memoria: false,
        ahorcado: false,
        timeline: false,
        'codigo-secreto': false
      },
      theme: 'dark',
      lastPlayed: null
    };
  },

  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return this._default();
      const data = JSON.parse(raw);
      return { ...this._default(), ...data };
    } catch (e) {
      return this._default();
    }
  },

  save(data) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }
    catch (e) { console.warn('No se pudo guardar:', e); }
  },

  addScore(game, points, completed = false) {
    const data = this.load();
    if (!data.scores[game] || points > data.scores[game]) {
      data.scores[game] = points;
    }
    if (completed) data.completed[game] = true;
    data.lastPlayed = game;
    this.save(data);
    return data;
  },

  getScore(game) { return this.load().scores[game] || 0; },

  getTotal() {
    const s = this.load().scores;
    return Object.values(s).reduce((a, b) => a + b, 0);
  },

  getCompletedCount() {
    const c = this.load().completed;
    return Object.values(c).filter(Boolean).length;
  },

  setTheme(theme) {
    const data = this.load();
    data.theme = theme;
    this.save(data);
  },

  getTheme() { return this.load().theme || 'dark'; },

  resetAll() {
    localStorage.removeItem(STORAGE_KEY);
  }
};