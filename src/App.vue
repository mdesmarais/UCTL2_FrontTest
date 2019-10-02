<template>
    <div id="app">
        <map-component />
    </div>
</template>

<script>
    import MapComponent from './components/MapComponent.vue'

    export default {
        name: 'app',
        components: {
            MapComponent
        }
    }
</script>

<style>
    html, body, #app {
        height: 100%;
        width: 100%;
    }
</style>
