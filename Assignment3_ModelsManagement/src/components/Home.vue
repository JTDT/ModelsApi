<template>
    <div class="home">
        <h1>{{ msg }}</h1>
        <p>Welcome to ModelsManagement!</p>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        props: {
            msg: String
            //Her laves fetch kald
        }
        fetch('/api/Account/login', {
            method: 'POST',
            body: JSON.stringify({
                email: username,
                password: password
            }),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
}).then(res => res.json().then((token) => {
                    localStorage.setItem("token", token.jwt);
)
                    .catch(error => alert('Error:', error))
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

