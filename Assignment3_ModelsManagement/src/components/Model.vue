<template>
    <div>
        <h1>{{ msg }}</h1>
        <h3>Models</h3>
        <p>List of signed models at ModelsManagement.</p>

        <button type="button" @click="addModel()">Add model</button>

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
                    body: JSON.stringify(
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
                    }
                }).then(res => {
                    if (!res.ok) {
                        if (res.status == 400)
                            throw new Error(res.statusText);
                        else
                            throw new Error('Failed Network response');
                    }
                    else {
                        this.createstatus = "OK";
                    }
                });
            }
        }
    }
</script>

<style>
</style>