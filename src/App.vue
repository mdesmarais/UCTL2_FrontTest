<template>
    <div id="app">
        <div class="grid-x">
            <div class="cell large-3">
                <h1>Univercity Trail 2020</h1>
                <br>
                <br>
                <counter-component />
                <br>
                <br>
                <div class="followRace">
                    <h3>Scanner ce QR code<br>pour suivre la course en direct</h3>
                    <img src="qrcode.png" alt="qrcode">
                </div>
            </div>
            <div class="cell large-9">
                <map-component />
                <br>
                <live-results-component />
            </div>
        </div>
    </div>
</template>

<script>
    import CounterComponent from './components/CounterComponent.vue'
    import LiveResultsComponent from './components/LiveResultsComponent.vue'
    import MapComponent from './components/MapComponent.vue'

    export default {
        name: 'app',
        components: {
            CounterComponent,
            LiveResultsComponent,
            MapComponent
        }
    }
</script>

<style>
    html, body, #app, .grid-x, .cell {
        height: 100%;
        width: 100%;
    }

    h1 {
        border-bottom: 2px solid black;
        text-align: center;
    }

    img {
        width: 70%;
    }
</style>
