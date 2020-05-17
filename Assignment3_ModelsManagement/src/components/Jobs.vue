<template>
    <div>
        <h2>Job list</h2>
        <div>
            <table>
                <tr v-on:click="showSelectedJob()">
                    <th>Customer</th>
                    <th>Start date</th>
                    <th>Days</th>
                    <th>Location</th>
                    <th>Comments</th>
                    <th>Models</th>
                    <th>Expenses</th>

                </tr>
            </table>

            <div v-for="job in jobList">
                <table>
                    <tr>
                        <td>{{job.customer}}</td>
                        <td>{{job.startDate}}</td>
                        <td>{{job.days}}</td>
                        <td>{{job.location}}</td>
                        <td>{{job.comments}}</td>
                        <!--<td>{{getModels(job)}}</td>-->
                        <td>{{getExpenses(job)}}</td>
                    </tr>
                </table>
            </div>


        </div>

        <div>
            <button type="button" @click="addExpenses()">Add expense</button>
            <input type="text" id="expense" name="expense" v-model="expense" />

        </div>

        <div>
            <button type="button" @click="addModelToJob()">Add Model</button>
            // drop down med modeller

        </div>

    </div>

</template>

<script>
    
    export default {
        name: "job",
        data() {
            return {
                jobList: [],
                expense: 0,
                expenses: []
                /*, isManager = false*/
}
        },

        //// Check user
        //let jwt = localStorage.getItem("token");
        //let jwtData = jwt.split('.')[1]
        //let decodedJwtJasonData = window.atob(jwtData)
        //let decodedJwtData = JSON.parse(decodedJwtJasonData)

        //let role = decodedJwtData["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]

        //if (role == "Manager") {
        //    this.isManager = true;
        //}

        created() {
            alert('Created hook has been called');
            this.getJobs();
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
            async getExpenses(job) {
                let response = await fetch('https://localhost:44368/api/Expenses', {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }
                })
                if (response.ok) {
                    //var expense = 0;
                    this.expenses.forEach(exp => {
                        // find the amount for each job
                        if (exp["jobId"] == job["efJobId"]) {
                            this.expense += exp["amount"];
                            console.log("get expenses" + expenses);
                        }
                    })
                }
                return this.expense;
            }
        }
    
    };

</script>


    //methods: {
    //    async addNewExpense() {
    //        if(this.input.amaount != "" && this.input.date != "")
    //        fetch('https://localhost:44368/api/Expenses', {
    //            method: 'POST',
    //            credentials: 'include',
    //            headers: {
    //                'Authorization': 'Bearer ' + localStorage.getItem("token"),
    //                'Content-Type': 'application/json'
    //            },
    //            body: JSON.stringify( //stringfy = konverterer alle elementer i json-objektet til stringe
    //                {
    //                    modelId: this.input.modelId,
    //                    jobId: this.input.jobId,
    //                    date: this.input.date,
    //                    text: this.input.text,
    //                    amaount: this.input.amaount

    //                }),
    //        }).then(response => {
    //            //var items = response;
    //        }).catch(error => alert({
    //            isLoading: false,
    //            message: 'Something bad happened ' + error
    //        }));
    //    }
    //},


    // methods: {
    //    async createJob() {
    //        if(this.input.customer != "" && this.input.startDate != "" && this.input.days != "" && this.input.location != "")
    //        fetch('https://localhost:44368/api/Jobs', {
    //            method: 'POST',
    //            credentials: 'include',
    //            headers: {
    //                'Authorization': 'Bearer ' + localStorage.getItem("token"),
    //                'Content-Type': 'application/json'
    //            },
    //            body: JSON.stringify( //stringfy = konverterer alle elementer i json-objektet til stringe
    //                {
    //                    customer: this.input.customer,
    //                    startDate: this.input.startDate,
    //                    days: this.input.days,
    //                    location: this.input.location,
    //                    comments: this.input.comments
    //                }),
    //        }).then(response => {
    //            //var items = response;
    //        }).catch(error => alert({
    //            isLoading: false,
    //            message: 'Something bad happened ' + error
    //        }));
    //    }
    //}




<style>
    table, th, td{
        border: 1px solid black;
        border-collapse: collapse;
        align-content: center;
        

    }
    table caption{
        font-weight: bold;
        font-size: larger;
    }
    th, td{
        padding: 5px;
        
    }
    th{
        text-align: left;
    }
</style>
