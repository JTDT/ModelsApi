<template>
    <div>
        <h1>{{ msg }}</h1>
        <h3>Managers</h3>
        <form id="createManagerform">
            <label for="name">First Name: </label>
            <input type="text" id="firstname" name="firstname" /><br /><br />
            <label for="name">Last Name: </label>
            <input type="text" id="lastname" name="lastname" /><br /><br />
            <label for="email">Email: </label>
            <input type="email" id="email" name="email" /> <br /><br />
            <label for="password">Password: </label>
            <input type="password" id="password" name="password" /> <br /><br />
            <button type="button" v-on:click="addManager()">Add manager</button>
            <input type="reset">
        </form>
        <br /><br />
        <button type="button" v-on:click="deleteManager()">Delete manager</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                firstName: "",
                lastName: "",
                email: "",
                password: ""
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
                            firstName: this.firstName,
                            lastName: this.lastName,
                            email: this.email,
                            password: this.password
                            
                        }),
                }).then(responseJson => {
                    //var items = JSON.parse(responseJson);
                }).catch(error => alert({
                    isLoading: false,
                    message: 'Something bad happened ' + error
                }));

            },
               
            async deleteManager() {
                // mangler at specificere id på manageren som skal slettes!
                fetch('https://localhost:44368/api/Managers/${id}'), {
                    method: 'DELETE'
                }
            },
        }
    }
</script>
<style>
    form{
    background-color: aliceblue;
    padding: 10px;
}
</style>