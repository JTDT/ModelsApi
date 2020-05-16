<template>
	<div class="home">
		<h1>{{ msg }}</h1>
		<p>Welcome to ModelsManagement. Please log in!</p>
        <form>
            <h2>Login</h2>  
        </form>
	</div>
</template>

<script>
    let username = "Poul"
    let password = 123
    export default {
        name: 'Home',
        props: {
            msg: String
        },

        methods: {
            async login() {
                fetch('http://localhost:1337/api/Account/login', {
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
        },
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

