<template>
    <div>
        <h2>Navigation bar</h2>
        <nav>
            <router-link class="spacing" v-for="routes in links"
                         v-bind:key="routes.id"
                         :to="`${routes.page}`">{{routes.text}}</router-link>
        </nav>
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
        }
    }
</script>
<style>
    .spacing {
        margin-right: 10px;
    }
</style>

