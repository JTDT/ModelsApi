<template>
    <div id=wrapper v-if="isManager">
        <h1>Managers</h1>
        <p>Please fill out the form below to add new managers!</p>

        <form id="createManagerform">
            <label for="name">First Name: </label> <input type="text" id="firstName" name="firstName" v-model="firstName" />
            <label for="name">Last Name: </label> <input type="text" id="lastName" name="lastName" v-model="lastName" />
            <label for="email">Email: </label> <input type="text" id="email" name="email" v-model="email" />
            <label for="password">Password: </label> <input type="password" id="password" name="password" v-model="password" />
            <input type="button" value="Add manager" id="button" @click="addManager()">
            <input type="reset" id="button" value="Reset fields">
        </form>
    </div>
    <div v-else>
        <p>Access denied. Only managers has access to this page!</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isMananger: false,

                firstName: "",
                lastName: "",
                email: "",
                password: ""
            };
        },

        created() {
            let jwt = localStorage.getItem("token");
            let jwtData = jwt.split('.')[1]
            let decodedJwtJSONData = window.atob(jwtData)
            let decodedJwtData = JSON.parse(decodedJwtJSONData)

            let role = decodedJwtData["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

            if (role == "Manager") {
                this.isManager = true
            }
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
                            alert('Manager was added!');
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
    #wrapper {
        margin-left: auto;
        margin-right: auto;
        width: 90%;
        background-color: aliceblue;
        min-width: 700px;
        box-shadow: 5px 5px 5px #828282;
        align-content: center;
    }
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