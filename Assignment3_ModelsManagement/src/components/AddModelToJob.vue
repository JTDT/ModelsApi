<template>
    <div id=wrapper v-if="isManager">
        <h1>Add and remove models from jobs</h1>
        <form class="ModelJobForm">
            <h3>Add model to job: </h3>
            <label for="model">Select model:</label>
            <select @change="onChangeModel($event)">
                <option v-for="model in modelList">{{model.efModelId}} {{model.firstName}} </option>
            </select>

            <label for="model">Select Job:</label>
            <select @change="onChangeJob($event)">
                <option v-for="job in jobList">{{job.efJobId}} {{job.location}} </option>
            </select>


            <input type="submit" value="Add model to job" id="button" @click="addModelToJob()">

            <br />

            <h3>Delete model from job: </h3>
            <label for="model">Select model:</label>
            <select @change="onChangeModel($event)">
                <option v-for="model in modelList">{{model.efModelId}} {{model.firstName}} </option>
            </select>

            <label for="model">Select Job:</label>
            <select @change="onChangeJob($event)">
                <option v-for="job in jobList">{{job.efJobId}} {{job.location}} </option>
            </select>
            <input type="submit" value="Delete model from job" id="button" @click="deleteModelFromJob()">
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

                modelList: [],
                jobList: [],
                modelId: 0,
                jobId: 0
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
                this.getModels();
                this.getJobs();
            }
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
                }
            },
            async getJobs() {
                let response = await fetch('https://localhost:44368/api/Jobs', {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }
                })

                if (response.ok) {
                    this.jobList = await response.json();
                }
            },

            onChangeModel(event) {
                let selectedID = event.target.value;
                this.modelId = parseInt(selectedID) //får fat i den valgte models ID
                //alert(modelId);
            },

            onChangeJob(event) {
                let selectedJobId = event.target.value;
                this.jobId = parseInt(selectedJobId) //får fat i den valgte models ID
                //alert(jobId)

            },

            async addModelToJob() {
                fetch('https://localhost:44368/api/Jobs/' + this.jobId + '/model/' + this.modelId,
                    {
                        method: 'POST',
                        credentials: 'include',
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem("token"),
                            'Content-Type': 'application/json'
                        },
                    }).then(res => {
                        if (!res.ok) {
                            if (res.status == 400)
                                throw new Error(res.statusText);
                            else
                                throw new Error('Network response failed');
                        } else {
                            this.createstatus = "OK";
                            alert('Model was added to job!');
                        }
                    });
            },
            async deleteModelFromJob() {
                fetch('https://localhost:44368/api/Jobs/' + this.jobId + '/model/' + this.modelId, {
                    method: 'DELETE',
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    },

                }).then(res => {
                    if (!res.ok) {
                        if (res.status == 400)
                            throw new Error(res.statusText);
                        else
                            throw new Error('Network response failed');
                    } else {
                        this.createstatus = "OK";      
                        alert('Model was removed from job!');
                    }
                });s
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
    label {
        float: left;
        width: 100px;
        display: block;
        clear: left;
        text-align: right;
        padding-right: 10px;
        margin-top: 10px;
    }

    modelJobForm {
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

    select {
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