<template>
    <div>
        <h1>{{ msg }}</h1>
        <h3>Managers</h3>
        <p>List of managers at ModelsManagement.</p>
        <!-- <div v-for="managers in managerList" :key="manager.id">-->
        <!--<table>
       <tr v-on:click="updateSelectedManager(manager)">
           <td>{{manager.firstname}}</td>
           <td>{{manager.lastname}}</td>
           <td>{{manager.email}}</td>
       </tr>
    </table>-->
        <input type="text" v-model="firstName" placeholder="First Name">
        <input type="text" v-model="lastName" placeholder="Last Name">
        <input type="email" v-model="email" placeholder="Email">
        <div>
            <button type="button" v-on:click="addManager">Add manager</button>
            <button type="button" v-on:click="deleteManager">Delete manager</button>
        </div>
    </div>
    <!--</div>-->
</template>

<script>
    export default {
        data() {
            return {
                firstName: "",
                lastName: "",
                email: ""
            };
        },

        methods: {
            async addManager() {
                //if (this.input.firstName != "" && this.input.lastName != "" && this.input.email != "") {
                fetch('http://localhost:44368/api/Managers', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify( //stringfy = konverterer alle elementer i json-objektet til stringe
                        {
                            //firstName: this.input.firstName,
                            //lastName: this.input.lastName,
                            //email: this.input.email,
                            //password: this.input.password
                            firstName: firstName,
                            lastName: lastName,
                            email: email
                        }),
                }).then(responseJson => {
                    //var items = JSON.parse(responseJson);
                }).catch(error => alert({
                    isLoading: false,
                    message: 'Something bad happened ' + error
                }));

                //} else {

                //}
                //});
            },
               
            async deleteManager() {
                // mangler at specificere id på modellen som skal slettes!
                fetch('https://localhost:44368/api/Managers/${id}'), {
                    method: 'DELETE'
                }
            },
        }
    }
</script>
<style>

</style>