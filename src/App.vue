<template>
    <v-app>
        <v-content>
            <v-container fluid>
                <v-row justify="center" no-gutters>
                    <v-col :sm="3" style="text-align:center">
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
                    </v-col>
                    <v-col style="max-height: 70%">
                        <map-component />
                        <br>
                        <live-results-component />
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
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
    h1 {
        border-bottom: 2px solid black;
        text-align: center;
    }

    img {
        width: 70%;
    }
</style>
