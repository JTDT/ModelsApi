<template>
    <div id=wrapper v-if="isManager">
        <h1>Jobs</h1>
        <p>Add new jobs here!</p>

        <form id="createaddJobform">
            <label for="customer">Customer: * </label><input type="text" id="customer" name="customer" v-model="customer" required />
            <label for="startDate">Start Date:* </label><input type="date" id="startDate" name="startDate" v-model="startDate" required />
            <label for="days">Days: *</label><input type="number" id="days" name="days" v-model.number="days" required />
            <label for="location">Location: </label><input type="text" id="location" name="location" v-model="location" />
            <label for="comments">Comments: </label><input type="text" id="comments" name="comments" v-model="comments" />

            <input type="submit" value="Add job" id="button" @click="addJob()">
            <input type="reset" value="Reset fields" id="button">
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
                isManager: false,

                customer: "",
                startDate: "",
                days: 0,
                location: "",
                comments: ""

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
            async addJob() {
                fetch('https://localhost:44368/api/Jobs', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(
                        {
                            customer: this.customer,
                            startDate: this.startDate,
                            days: this.days,
                            location: this.location,
                            comments: this.comments
                        })
                }).then(res => {
                    if (!res.ok) {
                        if (res.status == 400)
                            throw new Error(res.statusText);
                        else
                            throw new Error('Network response failed');
                    } else {
                        alert('Job was added!');
                        this.createstatus = "OK";
                    }
                });
            }
        },

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
