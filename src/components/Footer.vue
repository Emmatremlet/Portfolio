<template>
  <div class="body">
    <div class="networks">
      <a href="https://www.linkedin.com/in/emma-tremlet/">
        <img src=../../Images/linkedin.png alt="Profil Linkedin Emma TREMLET" class="image"> <br>
        Linkedin
      </a>
      <a href="https://github.com/Emmatremlet">
        <img src=../../Images/github.png alt="Profil GitHub Emma TREMLET" class="image"> <br>
        GitHub
      </a>
    </div>
    <p class="maj">Mis à jour le 02/08/2023</p>
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
  order: 4;
  font-family: "Manrope", sans-serif;
  line-height: 1.5;
  cursor: default;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: auto;
}

.networks {
  order: 1;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

a {
  color: black;
  text-decoration: none;
  margin : 0 10px;
}

a:hover {
  background-color: #9ac8eb;
  text-decoration: underline;
  color: plum;
}

.maj {
  order: 2;
  margin-left: 42%;
  margin-top: 30px;
  font-size: small;
}

.image {
  padding-right: 30px;
  width: 30px;
  margin: 10px;
  opacity: 1;
}

.image:hover{
  opacity: 0.5;
}

</style>