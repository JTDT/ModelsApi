<template>
    <!--<div id="app">
        <Home msg="ModelsManagement" />
    </div>-->
    <div id="app">
        <!--<div class="routing" v-if="this.$route.path !== '/'">-->
        <router-view></router-view>
        <Navigation />
        <!--</div>-->        
    </div>
</template>

<script>
    import Navigation from './components/Navigation';

    export default {
        name: 'app',
        components: {
            'Navigation': Navigation
        }
    };
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

