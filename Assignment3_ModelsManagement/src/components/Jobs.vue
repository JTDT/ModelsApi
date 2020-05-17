<!--<template>
    <div>
        <h2>Job list</h2>
        <div>
            <table>
                <tr>
                    <th>Customer</th>
                    <th>Start date</th>
                    <th>Days</th>
                    <th>Location</th>
                    <th>Comments</th>
                    <th>Models</th>
                    
                </tr>
            </table>
            <div v-for="job in joblist" : accesskey="job.id">
                <table>
                    <tr v-on:click="updateSelectedJob(job)">
                        <td>{{job.customer}}</td>
                        <td>{{job.startDate}}</td>
                        <td>{{job.days}}</td>
                        <td>{{job.location}}</td>
                        <td>{{job.comments}}</td>
                        <td>{{getModels(job)}}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    
    // Check user
    let jwt = localStorage.getItem("token");
    let jwtData = jwt.split('.')[1]
    let decodedJwtJasonData = window.atob(jwtData)
    let decodedJwtData = JSON.parse(decodedJwtJasonData)

    let user = decodedJwtData[""]

    if (user == "Manager") {
        this.isManager = true;
    }

    let response = await fetch('http://localhost:44368/api/Jobs', {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Authorization': 'Bearer' + localStorage.getItem("token"),
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        this.jobList = await response.json();
    }

</script>
<style>
    
</style>-->