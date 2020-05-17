<template>
    <div id="modelsPage">
        <h1>{{ msg }}</h1>
        <h3>Models</h3>

        <h4>Add models</h4>
        <form id="createModelform">
            <label for="name">First Name: </label>
            <input type="text" id="firstname" name="firstname" /><br /><br />
            <label for="name">Last Name: </label>
            <input type="text" id="lastname" name="lastname" /><br /><br />
            <label for="email">Email: </label>
            <input type="text" id="email" name="email" /> <br /><br />
            <input type="submit" value="Add model" id="submit" @click="addModel()"> <br><br>
            <input type="reset" value="Reset fields"><br /><br />
        </form>

        <br /><br />
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
                    items.msg // mangler
                }).catch(error => alert({
                    isLoading: false,
                    message: 'Something bad happened ' + error
                }));
            },

            async deleteModel() {
                // mangler at specificere id på modellen som skal slettes!
                try {
                    fetch('http://localhost:44368/api/models/${id}'), {
                        method: 'DELETE'
                    }
                }
                catch {
                    throw DOMException;
                }
            },
        }
    }
</script>
<style>
form{
    background-color: aliceblue;
    width: auto;
    font-family: Arial, sans-serif;
    padding: 10px;
}
</style>
