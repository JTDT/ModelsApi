<template>
    <div>
        <h1>{{ msg }}</h1>
        <h3>Managers</h3>
        <form id="createManagerform">
            <label for="name">First Name: </label> <input type="text" id="firstName" name="firstName" v-model="firstName" />
            <label for="name">Last Name: </label> <input type="text" id="lastName" name="lastName" v-model="lastName" />
            <label for="email">Email: </label> <input type="text" id="email" name="email" v-model="email" />
            <label for="password">Password: </label> <input type="password" id="password" name="password" v-model="password" />
            <input type="button" value="Add manager" id="button" @click="addManager()">
            <input type="reset" id="button">

            <label for="manager">Select Manager: </label>
            <input type="text" name="manager" id="managerList" v-model="managerList"  />
            <datalist id="managerList" v-for="manager in managerList">
                <option>{{manager.firstName}}</option>
                <!--<option value="test"></option>-->
            </datalist>
            <br /><br />
            <button type="button" id="button" v-on:click="deleteManager()">Delete manager</button>
        </form>     
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

        created() {
            this.getManagers();
        },
        methods: {
            async getManagers() {
                let response = await fetch('https://localhost:44368/api/Managers', {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }
                })

                if (response.ok) {
                    this.managerList = await response.json();
                    console.log("getJobs response ok" + this.managerList);
                }
            },
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
                        //localStorage.setItem("manager", firstName, lastName, email, password);                   
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
  form {
        background-color: aliceblue;
        width: 500px;
        font-family: Arial, sans-serif;
        padding: 10px;
        align-content: center;
    }

    label {
        float: left;
        width: 100px;
        display: block;
        clear: left;
        text-align: right;
        padding-right: 10px;
        margin-top: 10px;
    }

    input, textarea {
        margin-top: 10px;
        display: block;
    }

    #button {
        text-align: center;
        background-color: cornflowerblue;
        font-size: 10px;
        padding: 10px 24px;
        margin-left: 110px;
    }
</style>