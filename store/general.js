export const state = () => ({
  audioSources: [
    "none",
    "music",
    "microphone",
  ],
  audioSource: "none",

  scenes: [
    "orb",
    "curves",
  ],
  scene: "orb",
});

export const mutations = {
  set (state, {name, value}) {
    state[name] = value
  }
}

export const getters = {
  state: state => {
    return state
  },
}

export const actions = {
}
