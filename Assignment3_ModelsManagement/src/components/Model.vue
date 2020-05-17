<template>
    <div id="modelsPage">
        <h1>Models</h1>

        <form id="createModelform">
            <p>Please fill out the form below to sign new models!</p>
            <label for="firstName">First Name: * </label><input type="text" id="firstName" name="firstName" v-model="firstName" required />
            <label for="lastName">Last Name: * </label><input type="text" id="lastName" name="lastName" v-model="lastName" required />
            <label for="email">Email: * </label><input type="text" id="email" name="email" v-model="email" required />
            <label for="phoneNo">Phone No: </label><input type="text" id="phoneNo" name="phoneNo" v-model="phoneNo" />
            <label for="addresLine1">AddresLine1: </label><input type="text" id="addresLine1" name="addresLine1" v-model="addresLine1" />
            <label for="addresLine2">AddresLine2: </label><input type="text" id="addresLine2" name="addresLine2" v-model="addresLine2" />
            <label for="zip">Zip: </label><input type="text" id="zip" name="zip" v-model="zip" />
            <label for="city">City: </label><input type="text" id="city" name="city" v-model="city" />
            <label for="country">Country: </label><input type="text" id="country" name="country" v-model="country" />
            <label for="birthDate">Birth date: </label><input type="text" id="birthDate" name="birthDate" v-model="birthDate" />
            <label for="nationality">Nationality: </label><input type="text" id="nationality" name="nationality" v-model="nationality" />
            <label for="height">Height: </label><input type="text" id="height" name="height" v-model="height" />
            <label for="shoeSize">Shoe size: </label><input type="text" id="shoeSize" name="shoeSize" v-model="shoeSize" />
            <label for="hairColor">Hair Color: </label><input type="text" id="hairColor" name="hairColor" v-model="hairColor" />
            <label for="eyeColor">Eye Color: </label><input type="text" id="eyeColor" name="eyeColor" v-model="eyeColor" />
            <label for="comment">Comment: </label><input type="text" id="comment" name="comment" v-model="comment" />
            <label for="password">Password: </label><input type="text" id="password" name="password" v-model="password" />

            <input type="submit" value="Add model" id="button" @click="addModel()">
            <input type="reset" value="Reset fields" id="button">
        </form>

        <table border="0">
        </table>

        <br /><br />
        <button type="button" @click="deleteModel()">Delete model</button>

    </div>
</template>

<script>
    let jwt = localStorage.getItem("token");
    let jwtData = jwt.split('.')[1]
    let decodedJwtJSONData = window.atob(jwtData)
    let decodedJwtData = JSON.parse(decodedJwtJSONData)

    let role = decodedJwtData["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

    if (role == "Manager") {
        //this.isManager = true
    }

    export default {
        data() {
            return {
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
                height: "",
                shoeSize: "",
                hairColor: "",
                eyeColor: "",
                comment: "",
                password: ""
            };
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
                            comment: this.comment,
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
                    }
                });
            }
        },

        async deleteModel() {
            // mangler at specificere id på modellen som skal slettes!
            try {
                fetch('https://localhost:44368/api/models/${id}'), {
                    method: 'DELETE'
                }
            }
            catch {
                throw DOMException;
            }
        },
    }

</script>

<style>
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
