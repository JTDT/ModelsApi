<template>
    <div>
        <h1>Jobs</h1>
        <form id="createaddModelToJobform">
            <p>Add model to job here!</p>

            <label for="model">Select model:</label>
            <select>
                <option value="firstName" v-for="model in modelList">{{model.firstName}}</option>
            </select>

            <input type="submit" value="Add model to job" id="button" @click="addModelToJob()">
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                modelList: [],
                firstName: ""

            };
        },
        created() {
            alert('Created hook has been called');
            this.getModels();
        },

        methods: {
            async getModels() {
                let response = await fetch('https://localhost:44368/api/Models', {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }
                })

                if (response.ok) {
                    this.modelList = await response.json();
                    //console.log("getJobs response ok" + this.jobList);                    
                }
            },
            //async addModelToJob() {
            //        //fetch('https://localhost:44368/api/Managers', {
                    //    method: 'POST',
                    //    credentials: 'include',
                    //    headers: {
                    //        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                    //        'Content-Type': 'application/json'
                    //    },
                    //    body: JSON.stringify( //stringfy = konverterer alle elementer i json-objektet til stringe
                    //        {
                    //            firstName: this.firstName,
                    //            lastName: this.lastName,
                    //            email: this.email,
                    //            password: this.password

                    //        }),
                    //}).then(res => {
                    //    if (!res.ok) {
                    //        if (res.status == 400)
                    //            throw new Error(res.statusText);
                    //        else
                    //            throw new Error('Network response failed');
                    //    } else {
                    //        this.createstatus = "OK";
                    //        //localStorage.setItem("manager", firstName, lastName, email, password);
                    //    }
                    //});
        },
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
    .dropdown {
        cursor: pointer;
            line-height: 50px;
            padding-left: 10px;
            padding-right: 50px;
            position: relative;
            text-overflow: ellipsis;
    }
    .dropdown_content{
         height: auto;
         opacity: 1;
         visibility: visible;
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