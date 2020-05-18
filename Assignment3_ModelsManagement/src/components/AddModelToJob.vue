<template>

    <input type="button" value="Add model to job" id="button" @click="addModelToJob()">


    <!--<label for="model">Select : </label>
    <input type="text" name="model" id="modelList" v-model="modelList" />
    <datalist id="modelList" v-for="model in modelList">
        <option>{{model.firstName}}</option>
        <option value="test"></option>
    </datalist>-->
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
            async addModelToJob() {
        //            fetch('https://localhost:44368/api/Managers', {
        //                method: 'POST',
        //                credentials: 'include',
        //                headers: {
        //                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
        //                    'Content-Type': 'application/json'
        //                },
        //                body: JSON.stringify( //stringfy = konverterer alle elementer i json-objektet til stringe
        //                    {
        //                        firstName: this.firstName,
        //                        lastName: this.lastName,
        //                        email: this.email,
        //                        password: this.password

        //                    }),
        //            }).then(res => {
        //                if (!res.ok) {
        //                    if (res.status == 400)
        //                        throw new Error(res.statusText);
        //                    else
        //                        throw new Error('Network response failed');
        //                } else {
        //                    this.createstatus = "OK";
        //                    //localStorage.setItem("manager", firstName, lastName, email, password);
        //                }
        //            });
        //},
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