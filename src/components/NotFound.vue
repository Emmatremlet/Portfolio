<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>


<template>
    <div class="body">
        <Header></Header>

        <div class="logo-404">
            <img src="../assets/Images/favicon.ico" alt="Image fond bleu avec les lettres E et T avec des contours jaunes"
                class="logo">
        </div>

        <h1 class="not-found">404 — Not Found</h1>


        <Footer></Footer>
    </div>
</template>


<style scoped>

#body-404 {
    width: 1000px;
    height: 100vh;
    margin: 0 auto;
    padding: 0 30px;
    background-color: #9ac8eb;
    font-family: "Manrope", sans-serif;
    line-height: 1.5;
    cursor: default;
}

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
}</style>