<template>
    <div id="wrapper" v-if="isManager">
        <h1>Models</h1>
        <p>Please fill out the form below to sign new models!</p>

        <form id="createModelform">
            <label for="firstName">First Name: * </label><input type="text" id="firstName" name="firstName" v-model="firstName" required />
            <label for="lastName">Last Name: * </label><input type="text" id="lastName" name="lastName" v-model="lastName" required />
            <label for="email">Email: * </label><input type="text" id="email" name="email" v-model="email" required />
            <label for="phoneNo">Phone No: </label><input type="text" id="phoneNo" name="phoneNo" v-model="phoneNo" required />
            <label for="addresLine1">AddresLine1: </label><input type="text" id="addresLine1" name="addresLine1" v-model="addresLine1" required />
            <label for="addresLine2">AddresLine2: </label><input type="text" id="addresLine2" name="addresLine2" v-model="addresLine2" required />
            <label for="zip">Zip: </label><input type="text" id="zip" name="zip" v-model="zip" required />
            <label for="city">City: </label><input type="text" id="city" name="city" v-model="city" required />
            <label for="country">Country: </label><input type="text" id="country" name="country" v-model="country" required />
            <label for="birthDate">Birth date: </label><input type="date" id="birthDate" name="birthDate" v-model="birthDate" required />
            <label for="nationality">Nationality: </label><input type="text" id="nationality" name="nationality" v-model="nationality" required />
            <label for="height">Height: </label><input type="number" id="height" name="height" v-model.number="height" required />
            <label for="shoeSize">Shoe size: </label><input type="number" id="shoeSize" name="shoeSize" v-model.number="shoeSize" required />
            <label for="hairColor">Hair Color: </label><input type="text" id="hairColor" name="hairColor" v-model="hairColor" required />
            <label for="eyeColor">Eye Color: </label><input type="text" id="eyeColor" name="eyeColor" v-model="eyeColor" required />
            <label for="comment">Comments: </label><input type="text" id="comments" name="comments" v-model="comments" required />
            <label for="password">Password: * </label><input type="text" id="password" name="password" v-model="password" required />

            <input type="submit" value="Add model" id="button" @click="addModel()">
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
                isMananger: false, 

                firstName: "",
                lastName: "",
                email: "",
                phoneNo: "",
                addresLine1: "",
                addresLine2: "",
                zip: "",
                city: "",
                country: "",
                birthDate: "",
                nationality: "",
                height: 0,
                shoeSize: 0,
                hairColor: "",
                eyeColor: "",
                comments: "",
                password: ""
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
            // Tilføjer model, når man har trykket på "Add-model"-knappen
            async addModel() {
                fetch('https://localhost:44368/api/Models', {
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
                            comments: this.comments,
                            password: this.password
                        })
                }).then(res => {
                    if (!res.ok) {
                        if (res.status == 400)
                            throw new Error(res.statusText);
                        else
                            throw new Error('Network response failed');
                    } else {
                        this.createstatus = "OK";
                        alert('Model was added!');
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

    #createModelform {
        background-color: aliceblue;
        font-family: Arial, sans-serif;
    }

    #button {
        text-align: center;
        background-color: cornflowerblue;
        font-size: 10px;
        padding: 10px 24px;
        margin-left: 110px;
    }
</style>
