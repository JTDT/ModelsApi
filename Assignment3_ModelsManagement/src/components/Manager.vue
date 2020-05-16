<template>
    <div>
        <h1>{{ msg }}</h1>
        <h3>Managers</h3>
        <p>List of managers at ModelsManagement.</p>
        <table class="table">
            <thead class="bg-dark text-white">
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <!--<tr>
                    <td>{{ manager.firstname}}</td>
                    <td>{{ manager.lastname }}</td>
                    <td>{{ manager.email }}</td>
                </tr>-->
            </tbody>
        </table>"
        <button type="button" @click="addManager()">Add manager</button>
        <button type="button" @click="deleteManager()">Delete manager</button>

    </div>
</template>

<script>
    export default {
        name: 'Home',
        props: {
            msg: String
        },

        methods: {
            //async getManager() {
            //    fetch('https://localhost:44368/api/managers')
            //    method: 'GET',

            //},
            async addManager() {
                fetch('https://localhost:44368/api/managers', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify( //stringfy = konverterer alle elementer i json-objektet tils stringe
                        {
                            firstName: this.firstName,
                            lastName: this.lastName,
                            email: this.email,
                            password: this.password
                        }),
                }).then(response => {
                    //var items = response;
                }).catch(error => alert({
                    isLoading: false,
                    message: 'Something bad happened ' + error
                 }));
              },

            async deleteManager() {
                // mangler at specificere id på modellen som skal slettes!
                fetch('https://localhost:44368/api/managers/${id}'), {
                    method: 'DELETE'
                }
            },
        }
    }
</script>
<style>
</style>