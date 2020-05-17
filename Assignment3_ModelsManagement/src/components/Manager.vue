<template>
    <div>
        <h1>{{ msg }}</h1>
        <h3>Managers</h3>
        <form id="createManagerform">
            <label for="name">First Name: </label>
            <input type="text" id="firstName" name="firstName" v-model="firstName" />
            <label for="name">Last Name: </label>
            <input type="text" id="lastName" name="lastName" v-model="lastName" />
            <label for="email">Email: </label>
            <input type="email" id="email" name="email" v-model="email"/> />
            <label for="password">Password: </label>
            <input type="password" id="password" name="password" v-model="password" />
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
                fetch('https://localhost:44368/api/Managers', {
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
                }).then(res => {
                    if (!res.ok) {
                        if (res.status == 400)
                            throw new Error(res.statusText);
                        else
                            throw new Error('Network response failed');
                    } else {
                        this.createstatus = "OK";
                    }
                });
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