<template>

    <div id="login">
        <h1>ModelsManagement</h1>
        <p>Welcome to ModelsManagement. Please log in!</p>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" v-model="email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" v-model="password" />
            </div>
            <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>    
 
    export default {
        data() {
            return {
                 email: "",
                 password: "",
            };
        },
        methods: {
            async login() {
                fetch('https://localhost:44368/api/Account/login', {
                    method: 'POST', 
                    body: JSON.stringify(
                        {
                            email: this.email,
                            password: this.password
                        }),
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    })
                }).then(res => res.json()).then((token) => {
                    localStorage.setItem("token", token.jwt);
                    this.$router.push('Jobs')
                })
                    .catch(error => alert('Error:', error))
            },
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

