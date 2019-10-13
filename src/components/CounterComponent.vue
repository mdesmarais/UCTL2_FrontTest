<template>
    <div class="counter">
        <h2>Temps en course</h2>
        <v-row>
            <v-col>
                <p class="digit">{{ hours }}</p>
                <p class="text">Heures</p>
            </v-col>
            <v-col>
                <p class="digit">{{ minutes }}</p>
                <p class="text">Minutes</p>
            </v-col>
            <v-col>
                <p class="digit">{{ seconds }}</p>
                <p class="text">Secondes</p>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import numeral from 'numeral'

    export default {
        computed: {
            elapsedTimeFromRaceStart () {
                return this.$store.state.elapsedTimeFromRaceStart
            },
            seconds () {
                return numeral(this.elapsedTimeFromRaceStart % 60).format('00')
            },
            minutes () {
                return numeral(Math.trunc(this.elapsedTimeFromRaceStart / 60) % 60).format('00')
            },
            hours () {
                return numeral(Math.trunc(this.elapsedTimeFromRaceStart / 60 / 60) % 24).format('00')
            }
        },
        mounted () {
            setInterval(() => {
                this.$store.dispatch('updateElapsedTime')
            }, 1000)
        }
    }
</script>

<style>
h2 {
    text-transform: uppercase;
}

.cell {
    text-align: center;
}

.counter {
    padding-left: 10px;
    padding-right: 10px;
}

.text {
    color: #1abc9c;
    font-size: 20px;
    font-family: 'Roboto Condensed', serif;
    font-weight: 40;
    margin-top:10px;
    margin-bottom: 10px;
}

.digit {
    color: #797979;
    font-size: 50px;
    font-weight: 100;
    font-family: 'Roboto', serif;
    margin: 10px;
}

</style>