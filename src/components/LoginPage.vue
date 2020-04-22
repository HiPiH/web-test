<template>  
    <div class="login">
       
        <div v-if="isAuth">
            Login sss {{userName}}
            <button v-on:click="logout">Logout</button>
        </div>
        <div v-if="!isAuth">
            <form class="login" @submit.prevent="auth">
                <h1>Sign in</h1>
                <label>Email</label>
                <input required v-model="login" type="email" placeholder="Name"/>
                <label>Password</label>
                <input required v-model="password" type="password" placeholder="Password"/>
                <hr/>
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'


export default {
    data(){
        return {
            login : "",
            password : ""
        }
    },
    name: 'LoginPage',
    computed: {
        ...mapGetters('user', [
             'isAuth',
             'userName'
        ])
    },
    methods: {
        auth () {
            this.$store.dispatch('user/login', this.login)
               .then(() => this.$router.push('/'))
                .catch(err => console.log(err));
        },
        logout () {
            this.$store.dispatch('user/logout')
                .then(() => this.$router.push('/login'))
                .catch(err => console.log(err));
        }
    }
}
</script>

