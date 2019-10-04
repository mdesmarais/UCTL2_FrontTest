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
                <td>{{ team.rank | formatRank(team) }}</td>
                <td>{{ team.name }}</td>
                <td><v-progress-linear value="15" height="20px" dark /></td>
                <td>+35s</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        data () {
            return {
                teams: [
                    {
                        id: 1,
                        rank: 1,
                        lastRank: 1,
                        name: "Istic Rennes 1"
                    },
                    {
                        id: 2,
                        rank: 2,
                        lastRank: 3,
                        name: "Les débutants"
                    }
                ]
            }
        },
        filters: {
            formatRank: function(rank, team) {
                if (rank == team.lastRank) {
                    return rank.toString() + ' ( = )'
                }

                return rank.toString() + ' (   )'
            }
        }
    }
</script>

<style>
    .rankColumn {
        width: 5%;
    }
</style>