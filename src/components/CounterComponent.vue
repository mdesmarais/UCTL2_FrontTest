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
        data () {
            return {
                now: 0
            }
        },
        computed: {
            seconds () {
                return (this.now - this.startingTime) % 60
            },
            minutes () {
                return Math.trunc((this.now - this.startingTime) / 60) % 60
            }
        },
        props: {
            startingTime: {
                type: Number,
                default () {
                    return Math.trunc(new Date().getTime() / 1000)
                }
            }
        },
        mounted() {
            setInterval(() => {
                this.now = Math.trunc(new Date().getTime() / 1000)
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