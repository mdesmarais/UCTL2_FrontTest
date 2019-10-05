<template>
    <table>
        <thead>
            <tr>
                <td class="rankColumn">Position</td>
                <td>Equipe</td>
                <td>Progression</td>
                <td>Temps</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="team in teams" :key="team.id">
                <td>{{ team.rank }} ( <i class="fas" :class="rankIconClass(team)" /> )</td>
                <td>{{ team.name }}</td>
                <td><v-progress-linear value="15" height="20px" dark /></td>
                <td>{{ showTeamTime(team) }}</td>
            </tr>
        </tbody>
    </table>
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
                teamsArray.sort((t1, t2) => t1.rank >= t2.rank)
                return teamsArray
            }
        },
        methods: {
            rankIconClass (team) {
                if (team.rank < team.lastRank) {
                    return 'fa-caret-up'
                }
                else if (team.rank > team.lastRank) {
                    return 'fa-caret-down'
                }
                else {
                    return 'fa-equals'
                }
            },
            showTeamTime (team) {
                if (team.rank < 5) {
                    return numeral(this.elapsedTimeFromRaceStart).format('00:00:00')
                }
                else {
                    return '0'
                }
            }
        }
    }
</script>

<style>
    .rankColumn {
        width: 5%;
    }
</style>