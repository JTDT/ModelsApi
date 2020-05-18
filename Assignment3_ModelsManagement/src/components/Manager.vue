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
            async addManager() {
                if (this.firstName != "" && this.lastName != "" && this.email != "" && this.password) {
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
                } else {
                     alert('All inputFields required!');
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