<template>
    <div class="home" id="login">
        <h1>ModelManagement</h1>
        <p>Welcome to ModelsManagement. Please log in!</p>
        <form>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" v-model="username">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" v-model="password" />
            </div>
           <!--<button type="button" v-on:click="login()">Login</button>-->
            <button type="button" v-on:click="checkAccount">Login</button>
        </form>
    </div>
</template>

<script>    
    let username;
    let password;
  
    export default {
        data() {
            return {
                //username: "",
                // password: "",
            };
        },
        methods: {
            async login() {
                fetch('http://localhost:44368/api/Account/login', {
                    method: 'POST', 
                    body: JSON.stringify(
                        {
                            email: username,
                            password: password
                        }),
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    })
                }).then(res => res.json()).then((token) => {
                    localStorage.setItem("token", token.jwt);
                })
                    .catch(error => alert('Error:', error))
            },
            async checkAccount() {
                if (this.email == manager.email && this.password == manager.password) {
                    //Naviger til Manager siden 
                } else if (this.email == model.email && this.password == model.password) {
                    //Naviger til Model side
                }
                else {
                    error => alert('Error:', error)
                }
            }
        },
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
     #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>

