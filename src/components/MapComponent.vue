<template>
    <l-map id="raceMap" :zoom="zoom" :center="center">
        <l-tile-layer :url="tileUrl" :attribution="attribution" />
        <l-polyline :lat-lngs="segment.data" v-for="segment in segments" :key="segment.id" />
        <l-polyline :lat-lngs="transition.data" :color="transitionsColor" v-for="transition in transitions" :key="transition.id" />

        <!--<l-moving-marker v-for="team in movableTeams" :key="team.id" :lat-lng="team.currentPos" :duration="1000" />-->
        <l-marker v-for="poi in pois" :key="poi.id" :lat-lng="poi.pos" :icon="poi.icon" />
    </l-map>
</template>
<script type="text/babel">
    import L from 'leaflet'
    import { LMap, LMarker, LPolyline, LTileLayer } from 'vue2-leaflet'
    //import LMovingMarker from 'vue2-leaflet-movingmarker'
    import { S1, S2, S3, S4, S5, TS12, TS23, TS34, TS45 } from '../segments.js'

    const feedingZoneIcon = L.icon({
        iconUrl: 'marker-bottle.png'
    })

    export default {
        components: {
            LMap,
            LMarker,
            //LMovingMarker,
            LTileLayer,
            LPolyline
        },
        computed: {
            teams () {
                return this.$store.state.teams
            }
        },
        data () {
            return {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                center: [48.1266, -1.6694],
                tileUrl: 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png ',
                zoom: 13,

                segments: [ S1, S2, S3, S4, S5 ],
                transitions: [ TS12, TS23, TS34, TS45 ],
                transitionsColor: "black",

                pois: [
                    {
                        id: 'water1',
                        icon: feedingZoneIcon,
                        pos: [48.13855, -1.65967]
                    }
                ]
            }
        }
    }
</script>

<style>
    #raceMap {
        height: 400px
    }
</style>