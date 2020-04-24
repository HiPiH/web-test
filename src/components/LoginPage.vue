<template>  

  <div class="container-fluid">
        <div class="row h-100 ">
            <div class="col-sm-7 "><div class="left_panel">1</div></div>
            <div class="col-sm-4 ">
                <div v-if="isAuth">
                    Сессия для {{userName}}
                    <button v-on:click="logout">Выход</button>
                </div>
                <div v-if="!isAuth" >
                    <div class="auth-form">
                        <form class="login" @submit.prevent="auth">
                            <div class="form-group">
                                <label for="login">Имя пользователя</label>
                                <input required v-model="login" type="email" id="login" class="form-control" placeholder="Name"/>
                            </div>
                            <div class="form-group">
                                <label for="password">Пароль</label>
                                <input required v-model="password" type="password" id="password"  class="form-control" placeholder="Password"/>
                            </div>
                            <button type="submit"  class="btn btn-primary">Вход</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-sm-1 "> </div>
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
            this.$store.dispatch('user/login',  { login : this.login, password : this.password})
               .then((l) => { console.log(l); this.$router.push('/russia/moscow/map')})
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



<style scoped>

   .left_panel {
        background-image: url(/man.jpeg);
        background-position: center center; /* Положение фона */
        background-repeat: no-repeat; /* Отменяем повторение фона */
        background-size: 120% 120%;
        position: fixed; 
        top: 0; 
        left: 0; 
        min-width: 50%;
        min-height: 100%;
        -webkit-box-shadow: 12px 29px 81px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 12px 29px 81px 0px rgba(0,0,0,0.75);
        box-shadow: 12px 29px 81px 0px rgba(0,0,0,0.75);
 
    }
    .auth-form {
            padding-top: 35%;

    }
</style>