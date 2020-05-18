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
                    <th>Expenses</th>
                    <th v-if="isManager">Models</th>
                </tr>
                <tr v-for="job in jobList" v-on:click="showSelectedJob(job)">
                    <td>{{job.customer}}</td>
                    <td>{{job.startDate}}</td>
                    <td>{{job.days}}</td>
                    <td>{{job.location}}</td>
                    <td>{{job.comments}}</td>
                    <td>{{getExpenses(job)}}</td>
                    <td v-if="isManager">{{models[job.efJobId]}}</td>
                </tr>
            </table>
        </div>

        <form id="addExpense" v-if="isModel">
           
            <label for="selectedJob">Selected job: </label>
            <label>{{selectedJob.customer}} {{selectedJob.location}}</label>
                      
            <input type="number" id="amount" name="amount" v-model.number="amount" />
            <button type="button" id="button" @click="addExpenses()">Add expense</button>

        </form>

    </div>

</template>

<script>

    export default {
        name: "job",
        data() {
            return {
                jobList: [],                
                expenses: [],                
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
            }
            else {
                this.isModel = true;
            }                

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
                }
            }
            ,
            showSelectedJob(job) {               
                this.selectedJob = job;               
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
                        alert('Expense was added! Please refresh the page to update the table.')
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
                    }
                })
                return expense;
            }
            ,
            getAPIModels() {
                this.jobList.forEach(job => {
                    this.getModelsAPI(job);                    
                });
                this.$forceUpdate();                
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
                                
                                job.models.forEach(model => {
                                    // find the models that match with the job
                                    models += model["firstName"] + " " + model["lastName"] + ", ";                                    
                                })
                               
                                self.models[jobId] = models; 
                            });
                        }
                    });
            }
            
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
    addExpense{
        background-color: aliceblue;
        width: 100px;
        font-family: Arial, sans-serif;
        padding: 10px;
        align-content: center;
    }
     #button {
        
        background-color: cornflowerblue;
        font-size: 10px;
        
    }
</style>
