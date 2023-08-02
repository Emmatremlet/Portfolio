<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>


<template>
    <div class="body">
        <Header></Header>

        <div class="logo-404">
            <img src="./Images/favicon.ico" alt="Image fond bleu avec les lettres E et T avec des contours jaunes"
                class="logo">
        </div>

        <h1 class="not-found">404 — Not Found</h1>


        <Footer></Footer>
    </div>
</template>


<style scoped>
@font-face {
    font-family: "Manrope";
    src: url("../../Fonts/Manrope-VariableFont_wght_1.woff");
    src: url("../../Fonts/Manrope-VariableFont_wght_1.ttf") format("truetype");
}

@font-face {
    font-family: "Edu_Sa_Beginner";
    src: url("../../Fonts/EduSABeginner-VariableFont_wght_1.woff");
    src: url("../../Fonts/EduSABeginner-VariableFont_wght_1.ttf") format("truetype");
}

.body {
    font-family: "Manrope", sans-serif;
    line-height: 1.5;
    cursor: default;
}

h1 {
    font-family: "Edu_Sa_Beginner", sans-serif;
}

h2 {
    background-color: #ff9cb6;
    line-height: 1;
    padding: 5px;
    color: black;
    font-family: "Edu_Sa_Beginner", sans-serif;
}

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