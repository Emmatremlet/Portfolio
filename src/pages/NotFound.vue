<script setup>
import { RouterLink, RouterView} from 'vue-router';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
</script>


<template>
    <div class="body">
        <RouterView>
            <Header></Header>

            <div class="logo-404">
                <img src="../../public/favicon.ico" alt="Image fond bleu avec les lettres E et T avec des contours jaunes"
                    class="logo">
            </div>

            <h1 class="not-found">404 — Not Found</h1>

            <br>
            <br>

            <RouterLink class="home" to="/">Retourner à la page d'acceuil</RouterLink>
            

            <Footer></Footer>
        </RouterView>
    </div>
</template>


<style scoped>


.logo-404 {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20%;
}

.not-found {
    padding-top: 2%;
    margin-left: 30%;
    font-size: 60px;
}

.logo {
    width: 150px;
    border: 3px #dbc2a4;
    box-shadow: 0px 0px 10px #dbc2a4;
}

.home{
    padding-top:100px;
    margin-left:40%;
}

.home:hover{
    background-color:transparent;
    color:#f0eff4;
}


</style>