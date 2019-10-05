<template>
    <div class="counter">
        <h2>Temps en course</h2>
        <div class="grid-x">
            <div class="cell large-auto">
                <p class="digit">00</p>
                <p class="text">Heures</p>
            </div>
            <div class="cell large-auto">
                <p class="digit">{{ minutes }}</p>
                <p class="text">Minutes</p>
            </div>
            <div class="cell large-auto">
                <p class="digit">{{ seconds }}</p>
                <p class="text">Secondes</p>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        computed: {
            elapsedTimeFromRaceStart () {
                return this.$store.state.elapsedTimeFromRaceStart
            },
            seconds () {
                return this.elapsedTimeFromRaceStart % 60
            },
            minutes () {
                return Math.trunc(this.elapsedTimeFromRaceStart / 60) % 60
            }
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