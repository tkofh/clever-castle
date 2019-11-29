export const state = () => ({
  lights: [],
  rooms: []
})

export const getters = {
  lights: (state) => state.lights,
  rooms: (state) => state.rooms
}

export const mutations = {
  LIGHTS(state, lights) {
    state.lights = lights
  },
  ROOMS(state, rooms) {
    state.rooms = rooms
  }
}

export const actions = {
  fetchLights({ commit }) {
    commit('LIGHTS', [
      {
        id: 1,
        name: 'Lamp',
        favorite: false
      },
      {
        id: 2,
        name: 'Bar Lightstrips',
        favorite: true
      }
    ])
  },
  fetchRooms({ commit }) {
    commit('ROOMS', [
      {
        id: 1,
        name: 'Dining Room',
        devices: [1, 2]
      }
    ])
  }
}
