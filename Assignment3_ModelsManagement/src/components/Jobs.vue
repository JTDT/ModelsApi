<template>
    <div>
        <h2>Job list</h2>
        <div>
            <table id="jobList">
                <tr>
                    <th>Customer</th>
                    <th>Start date</th>
                    <th>Days</th>
                    <th>Location</th>
                    <th>Comments</th>
                    <th v-if="isManager">Models</th>
                    <th>Expenses</th>
                </tr>
                <tr v-for="job in jobList" v-on:click="showSelectedJob(job)">
                    <td>{{job.customer}}</td>
                    <td>{{job.startDate}}</td>
                    <td>{{job.days}}</td>
                    <td>{{job.location}}</td>
                    <td>{{job.comments}}</td>
                    <td v-if="isManager">{{models[job.efJobId]}}</td>
                    <td>{{getExpenses(job)}}</td>
                </tr>
            </table>
        </div>

        <div v-if="isModel">
            <label for="selectedJob">Selected job: </label>
            <label>{{selectedJob.customer}} {{selectedJob.location}}</label>     
        
            <button type="button" @click="addExpenses()">Add expense</button>
            <input type="number" id="amount" name="amount" v-model.number="amount" />
        </div>

        <!--<div>
            <button type="button" @click="addModelToJob()">Add Model</button>
            // drop down med modeller

        </div>-->

    </div>
    <!--<label for="model">Select : </label>
    <input type="text" name="model" id="modelList" v-model="modelList" />
    <datalist id="modelList" v-for="model in modelList">
        <option>{{model.firstName}}</option>
        <option value="test"></option>
    </datalist>-->

</template>

<script>

    export default {
        name: "job",
        data() {
            return {
                jobList: [],
                //expense: 0,
                expenses: [],
                //jobmodelsAPI: [],
                models: [],
                selectedJob: {}, // object
                amount: 0,
                modelId: 0,

                isManager: false,
                isModel: false
            }
        },

        async created() {


            // Check user
            let jwt = localStorage.getItem("token");
            let jwtData = jwt.split('.')[1]
            let decodedJwtJasonData = window.atob(jwtData)
            let decodedJwtData = JSON.parse(decodedJwtJasonData)

            let role = decodedJwtData["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
            this.modelId = decodedJwtData["modelId"];

            if (role == "Manager") {
                this.isManager = true;
                //alert('Created hook has been called');
            }
            else
                this.isModel = true;

            await this.getJobs();
            this.getAPIModels();
            await this.getAPIExpenses();
        },

        methods: {
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
                    //console.log("getJobs response ok" + this.jobList);
                }
            }
            ,
            showSelectedJob(job) {
                //let table = "";
                this.selectedJob = job;

                //table = document.getElementById('jobList');
                //let rowId =

                //var cells = table.getElementsById('rowCust');

                //cells.style.backgroundColor = "yellow";
                // curent tag ???
                // class
            }
            ,
            async addExpenses() {
                // Tilføjer expense for a model
                fetch('https://localhost:44368/api/Expenses', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify( //stringfy = konverterer alle elementer i json-objektet til stringe
                        {
                            modelId: this.modelId,
                            jobId: this.selectedJob["efJobId"],
                            date: this.selectedJob["date"],
                            text: "",
                            amount: this.amount

                        })
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
            }

            ,
            async getAPIExpenses() {
                let response = await fetch('https://localhost:44368/api/Expenses', {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }
                })
                if (response.ok) {
                    this.expenses = await response.json();
                }
            },

            getExpenses(job) {
                let expense = 0;
                this.expenses.forEach(exp => {
                    // find the amount for each job
                    if (exp["jobId"] == job["efJobId"]) {
                        expense += exp["amount"];
                        //console.log("get expenses" + expenses);
                    }
                })
                return expense;
            }
            ,
            getAPIModels() {
                this.jobList.forEach(job => {
                    this.getModelsAPI(job);
                    //this.jobList.models = models;
                });
                this.$forceUpdate();

                //let response = await fetch('https://localhost:44368/api/Models', {
                //    method: 'GET',
                //    credentials: 'include',
                //    headers: {
                //        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                //        'Content-Type': 'application/json'
                //    }
                //})
                //if (response.ok) {
                //    this.jobmodelsAPI = await response.json();
                //    console.log("models API: ")
                //}
            }
            ,
            getModelsAPI(job) {
                let self = this;
                let jobId = job.efJobId;
                fetch('https://localhost:44368/api/Jobs/' + job.efJobId, {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }
                })
                    .then(response => {
                        if (response.ok) {
                            response.json().then(job => {
                                let models = "";
                                //this.jobmodelAPI = null;
                                job.models.forEach(model => {
                                    // find the models that match with the job
                                    models += model["firstName"] + " " + model["lastName"] + ", ";

                                    //if (model["location"] == job["location"] && model["customer"] == job["customer"]) {
                                    //    job["models"].forEach(m => this.models += m["firstName"] + " " );
                                    //        console.log(models);
                                    //    }
                                })
                                //return models;
                                self.models[jobId] = models; //this.getModelsAPI(job);
                            });
                        }
                    });
            }
            //,
            //getModels(job) {
            //    //let model = 0;

            //    return this.models[job.efJobId];
            //}
        }

    };

</script>

<style>
    table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
        align-content: center;
    }

        table caption {
            font-weight: bold;
            font-size: larger;
        }

    th, td {
        padding: 5px;
    }

    th {
        text-align: left;
    }

    selected {
        background-color: dodgerblue;
    }
</style>
