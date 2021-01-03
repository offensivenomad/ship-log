import LogService from '@/services/LogService.js'

export const namespaced = true

export const state = {
  logs: [],
  logsTotal: 0,
  log: {}
}

export const mutations = {
  ADD_LOG(state, log) {
    state.logs.push(log)
  },
  SET_LOGS(state, logs) {
    state.logs = logs
  },
  SET_LOGS_TOTAL(state, logsTotal) {
    state.logsTotal = logsTotal
  },
  SET_LOG(state, log) {
    state.log = log
  }
}

export const actions = {
  createLog({ commit }, log) {
    return LogService.postLog(log).then(() => {
      commit('ADD_LOG', log)
    })
  },
  fetchLogs({ commit }, { perPage, page }) {
    LogService.getLogs(perPage, page)
      .then(response => {
        commit('SET_LOGS_TOTAL', parseInt(response.headers['x-total-count']))
        commit('SET_LOGS', response.data)
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  },
  fetchLog({ commit, getters }, id) {
    var log = getters.getLogById(id)

    if (log) {
      commit('SET_LOG', log)
    } else {
      LogService.getLog(id)
        .then(response => {
          commit('SET_LOG', response.data)
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    }
  }
}
export const getters = {
  getLogById: state => id => {
    return state.logs.find(log => log.id === id)
  }
}