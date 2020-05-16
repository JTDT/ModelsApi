<template>
    <div id="modelsPage">
        <h1>{{ msg }}</h1>
        <h3>Models</h3>
        <p>List of signed models at ModelsManagement.</p>
        <table class="table">
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
        </table>
        <div v-for="model in modelList" :key="model.id">
            <table>
                <tr v-on:click="updateSelectedModel(model)">
                    <td>{{model.firstname}}</td>
                    <td>{{model.lastname}}</td>
                    <td>{{model.email}}</td>
                </tr>
            </table>
        </div>

        <button type="button" @click="addModel()">Add model</button>
        <button type="button" @click="deleteModel()">Delete model</button>

    </div>
</template>

<script>
    //let jwt = localStorage.getItem("token");
    //let jwtData = jwt.split('.')[1]
    //let decodedJwtJSONData = window.atob(jwtData)
    //let decodedJwtData = JSON.parse(decodedJwtJSONData)

    //let role = decodedJwtData["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

    //if (role == "Manager") {

    //}
    let response = await fetch('http://localhost:44368/api/Models', {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        this.modelList = await response.json();
    }

    export default {
        name: 'Home',
        props: {
            msg: String
        },

        methods: {
            // Tilføjer model, når man har trykket på "Add-model"-knappen
            async addModel() {
                fetch('http://localhost:44368/api/Models', {
                    method: 'POST',
                    credentials: 'include',
                    body: JSON.stringify( //stringfy = konverterer alle elementer i json-objektet tils stringe
                        {
                            firstName: this.firstName,
                            lastName: this.lastName,
                            email: this.email,
                            phoneNo: this.phoneNo,
                            addresLine1: this.addresLine1,
                            addresLine2: this.addresLine2,
                            zip: this.zip,
                            city: this.city,
                            country: this.country,
                            birthDate: this.birthDate,
                            nationality: this.nationality,
                            height: this.height,
                            shoeSize: this.shoeSize,
                            hairColor: this.hairColor,
                            eyeColor: this.eyeColor,
                            comment: this.comment,
                            password: this.password
                        }),
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    },
                }).then(resonse => {
                    let items = JSON.parse(resonse);
                    //items.msg // mangler!
                }).catch(error => alert({
                    isLoading: false,
                    message: 'Something bad happened ' + error
                }));
            },

            async deleteModel() {
                // mangler at specificere id på modellen som skal slettes!
                fetch('http://localhost:44368/api/models/${id}'), {
                    method: 'DELETE'
                }
            },
        }
    }
</script>
<style></style>
