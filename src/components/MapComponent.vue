<template>
    <l-map id="raceMap" ref="leafmap" :zoom="getZoom()" :center="getCenter()">
        <l-tile-layer :url="tileUrl" :attribution="attribution" />
        <l-polyline :lat-lngs="racePoints" key="racePoints" />

        <l-moving-marker v-for="team in teams" :key="team.name" :lat-lng="team.pos" :duration="1000" />
    </l-map>
</template>
<script type="text/babel">
    import L from 'leaflet'
    import { LMap, LPolyline, LTileLayer } from 'vue2-leaflet'
    import LMovingMarker from 'vue2-leaflet-movingmarker'

    export default {
        components: {
            LMap,
            LMovingMarker,
            LTileLayer,
            LPolyline
        },
        computed: {
            racePoints () {
                return this.$store.state.racePoints
            },
            teams () {
                return this.$store.state.teams
            }
        },
        data () {
            return {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                tileUrl: 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png ',

                defaultCenter: [48.13855, -1.65967],
                defaultZoom: 13
            }
        },
        methods: {
            getCenter () {
                let points = this.racePoints

                if (points.length == 0) {
                    return this.defaultCenter
                }

                return L.latLngBounds(points).getCenter()
            },
            getZoom () {
                let points = this.racePoints

                // Vérifie que la map est bien chargée
                if (points.length > 0 && "leafmap" in this.$refs) {
                    // Mise à jour du zoom
                    return this.$refs.leafmap.mapObject.getBoundsZoom(points)
                }

                return this.defaultZoom
            }
        }
    }
</script>

<style>
    #raceMap {
        height: 400px
    }
</style>