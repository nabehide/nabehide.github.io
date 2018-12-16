export const state = () => ({
  fps: {
    type: Number,
    fps: 30,
    max: 60,
    min: 1,
    step: 1,
  },
  scene: {
    type: 'object',
    scene: ["orb", "curves"],
    selected: "orb",
    max: null,
    min: null,
    step: null,
  },
})

export const mutations = {
  set (state, {name, value}) {
    state[name][name] = value
  }
}

export const getters = {
  state: state => {
    return state
  },
}

export const actions = {
}