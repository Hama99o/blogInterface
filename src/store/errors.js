import back from '@/services/Back.js'

const state = {
  errorMessages: []
}

const getters = {
}

const mutations = {
  pushError (context, error) {
    let messages = []

    if (error.response && error.response.data && error.response.data.message) {
      if (error.response.data.errorData && typeof error.response.data.errorData === 'object' && !Array.isArray(error.response.data.errorData)) {
        messages = Object.entries(error.response.data.errorData).map(function (elem) {
          return elem.join(' ')
        })
      } else {
        messages = [error.response.data.message]
      }
    } else if (error.message) {
      messages = [error.message]
    } else {
      messages = [error]
    }
    messages.forEach((elem) => {
      state.errorMessages.push(elem)
    })
  },
  emptyError (context, errorIndex) {
    state.errorMessages.splice(errorIndex, 1)
  }
}

const actions = {
}

back.errorMethod = (error) => {
  mutations.pushError({}, error)
  throw error
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
