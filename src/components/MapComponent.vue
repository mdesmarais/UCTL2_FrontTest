<template>
    <div id="raceMap">
        <l-map :zoom="zoom" :center="center">
            <l-tile-layer :url="tileUrl" :attribution="attribution" />
            <l-polyline :lat-lngs="segment.data" v-for="segment in segments" :key="segment.id" />
            <l-polyline :lat-lngs="transition.data" :color="transitionsColor" v-for="transition in transitions" :key="transition.id" />

            <!--<l-moving-marker v-for="team in movableTeams" :key="team.id" :lat-lng="team.currentPos" :duration="1000" />-->
        </l-map>
    </div>
</template>
<script type="text/babel">
    import { LMap, LPolyline, LTileLayer } from 'vue2-leaflet'
    //import LMovingMarker from 'vue2-leaflet-movingmarker'
    import { S1, S2, S3, S4, S5, TS12, TS23, TS34, TS45 } from '../segments.js'

    export default {
        components: {
            LMap,
            //LMovingMarker,
            LTileLayer,
            LPolyline
        },
        computed: {
            movableTeams () {
                let pouet = []
                this.teams.forEach((team) =>  {
                    if (team.movable) {
                        pouet.push(team)
                    }
                })
                return pouet
            }
        },
        data () {
            return {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                center: [48.1266, -1.6694],
                tileUrl: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
                zoom: 13,

                segments: [ S1, S2, S3, S4, S5 ],
                transitions: [ TS12, TS23, TS34, TS45 ],
                transitionsColor: "black",

                teams: [
                    {
                        id: 'team1',
                        movable: true,
                        currentPos: [48.118682, -1.6996287],
                        nextPos: [48.1359652, -1.6419674]
                    }
                ]
            }
        },
        mounted () {
            setInterval(() => {
                this.teams.forEach(team => {
                    let r = Math.floor(Math.random() * S2.data.length)
                    team.currentPos = S2.data[r]
                })
            }, 5000)
        }
    }
</script>

<style>
    #raceMap {
        height: 70%;
    }
</style>