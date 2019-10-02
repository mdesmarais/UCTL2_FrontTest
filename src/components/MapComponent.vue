<template>
    <div id="raceMap">
        <l-map :zoom="zoom" :center="center">
            <l-tile-layer :url="tileUrl" :attribution="attribution" />
            <l-polyline :lat-lngs="segment" v-for="segment in segments" />
            <l-polyline :lat-lngs="transition" :color="transitionsColor" v-for="transition in transitions" />
        </l-map>
    </div>
</template>
<script>
    import { LMap, LTileLayer, LPolyline } from 'vue2-leaflet'
    import { S1, S2, S3, S4, S5, TS12, TS23, TS34, TS45 } from '../segments.js'

    export default {
        components: {
            LMap,
            LTileLayer,
            LPolyline
        },
        data () {
            return {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                center: [48.1266, -1.6694],
                tileUrl: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
                zoom: 13,

                segments: [ S1, S2, S3, S4, S5 ],
                transitions: [ TS12, TS23, TS34, TS45 ],
                transitionsColor: "black"
            }
        }
    }
</script>

<style>
    #raceMap {
        height: 100%;
    }
</style>