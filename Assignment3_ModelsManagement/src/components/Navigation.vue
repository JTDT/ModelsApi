<template>
    <div class="navbar">
        <router-link class="spacing" v-for="routes in links"
                     v-bind:key="routes.id"
                     :to="`${routes.page}`">{{routes.text}}</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Navigation',
        data() {
            return {
                links: [
                    //{
                    //    id: 0,
                    //    text: 'Home',
                    //    page: '/Home'
                    //},
                    {
                        id: 1,
                        text: 'Jobs',
                        page: '/Jobs'
                    },
                    {
                        id: 2,
                        text: 'AddJob',
                        page: '/AddJob'
                    },
                    {
                        id: 3,
                        text: 'AddModelToJob',
                        page: '/AddModelToJob'
                    },
                    {
                        id: 4,
                        text: 'Model',
                        page: '/Model'
                    },
                    {
                        id: 5,
                        text: 'Manager',
                        page: '/Manager'
                    }
                ]
            }
        },
    }
</script>
<style>
    .spacing {
        margin-right: 10px;
        float: left;
        display: block;
        color: white;
        font-weight: bold;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    .navbar {
        overflow: hidden;
        background-color: blue;
        position: fixed; /* Set the navbar to fixed position */
        top: 0; /* Position the navbar at the top of the page */
        width: 100%;
    }
</style>

