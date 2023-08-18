<script setup>
import Header from '../components/Header.vue'

</script>



<template>
    
    <div class="body">
    <RouterView>
        <Header></Header>
        <br>
            <img src="../assets/Images/Photo_de_profil.JPG" alt="Photo d'une femme chatain qui sourit" >  
        <br>
        <RouterLink class="home" to="/">Retourner à la page d'acceuil</RouterLink>
    </RouterView>
    </div>
   
</template>


<style scoped>
.home{
    margin-top:100px;
    margin-left:27%;
}
.home:hover{
    background-color:transparent;
    color:#f0eff4;
}

img{
    margin-top:5%;
    margin-left:15%;
}

.body{
    width: 100vw;
    height:100vh;
}


</style>