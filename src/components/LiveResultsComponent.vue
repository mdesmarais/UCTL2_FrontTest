<template>
    <v-simple-table>
        <thead>
            <tr>
                <th class="title">Position</th>
                <th class="title">Equipe</th>
                <th class="title">Progression</th>
                <th class="title">Temps</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="team in teams" :key="team.name">
                <td>{{ team.rank }} <v-icon>{{ rankStatusIcon(team) }}</v-icon></td>
                <td>{{ team.name }}</td>
                <td><v-progress-linear :value="team.progress" height="20px"/></td>
                <td>{{ showTeamTime(team) }}</td>
            </tr>
        </tbody>
    </v-simple-table>
</template>

<script>
    import numeral from 'numeral'

    export default {
        computed: {
            elapsedTimeFromRaceStart () {
                return this.$store.state.elapsedTimeFromRaceStart
            },
            teams () {
                let teamsArray = this.$store.state.teams
                teamsArray.sort((t1, t2) => {
                    if (t1.rank < t2.rank) {
                        return -1
                    }
                    else if (t1.rank > t2.rank) {
                        return 1
                    }
                    
                    // Si deux équipes ont le même rang, alors on les tries
                    // par ordre lexicographique
                    return (t1.name <= t2.name) ? -1 : 1
                })
                return teamsArray
            }
        },
        methods: {
            rankStatusIcon (team) {
                if (team.rank < team.lastRank) {
                    return 'mdi-menu-up'
                }
                else if (team.rank > team.lastRank) {
                    return 'mdi-menu-down'
                }
                else {
                    return 'mdi-equal'
                }
            },
            showTeamTime (team) {
                if (team.rank == 1) {
                    return numeral(this.elapsedTimeFromRaceStart).format('00:00')
                }
                else {
                    return '0'
                }
            }
        }
    }
</script>

<style>
    th {
        font-weight: bold;
    }
</style>