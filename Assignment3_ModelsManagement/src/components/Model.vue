<template>
    <div>
        <h1>{{ msg }}</h1>
        <h3>Models</h3>
        <p>List of signed models at ModelsManagement.</p>

        <button type="button" @click="addModel()">Add model</button>
        <button type="button" @click="deleteModel()">Delete model</button>
        
    </div>
</template>

<script>
    export default {
        name: 'Home',
        props: {
            msg: String
        },

        methods: {
            // Tilføjer model, når man har trykket på "Add-model"-knappen
            async addModel() {
                fetch('http://localhost:1337/api/Models', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    },
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
                }).then(resonse => {
                    //var items = resonse;
                }).catch(error => alert({
                    isLoading: false,
                    message: 'Something bad happened ' + error
                }));
            },

            async deleteModel() {
                // mangler at specificere id på modellen som skal slettes!
                fetch('https://localhost:44368/api/models/${id}'), {
                    method: 'DELETE'
                }  
            },
        }
    }
</script>
<style>
</style>