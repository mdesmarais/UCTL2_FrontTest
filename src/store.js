import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        raceStartTime: Math.trunc(new Date().getTime() / 1000),
        // 0 : not started, 1 : live, 2 : finished
        raceStatus: 1,
        elapsedTimeFromRaceStart: 0,
        teams: []
    },
    mutations: {
        updateElapsedTime(state) {
            let now = Math.trunc(new Date().getTime() / 1000)
            state.elapsedTimeFromRaceStart = now - state.raceStartTime
        },
        updateTeams(state, updatedTeams) {
            state.teams = updatedTeams
        }
    },
    actions: {
        updateElapsedTime(context) {
            if (context.state.raceStatus == 1) {
                context.commit('updateElapsedTime')
            }
        }
    }
})

export default store