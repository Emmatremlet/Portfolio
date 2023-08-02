<script setup>

</script>

<template>
  <header>
    <div class="header">
      <a href="#body">
        <div class="logo">
          <img src="../../Images/favicon.ico" alt="Image fond bleu avec les lettres E et T avec des contours jaunes"
            class="logo-img">
        </div>
      </a>
      <div class="name-job">
        <p class="name">Emma Tremlet</p>
        <i>Développeuse Web</i>
      </div>
    </div>
    <div class="presentation-header">
      <a href="#presentation_title">
        <nav class="link"> Présentation </nav>
      </a>
    </div>
    <div class="creation-header">
      <a href="#creation_title">
        <nav class="link"> Créations </nav>
      </a>
    </div>
    <div class="contact-header">
      <a href="#contact_title">
        <nav class="link"> Contact </nav>
      </a>
    </div>
  </header>
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


header {
  background-color: #feeaa1;
  font-size: 17px;
  width: 940px;
  padding: 5px;
  cursor: default;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}


.header {
  order: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.name {
  font-weight: 700;
}

.presentation-header {
  order: 2;
}

.creation-header {
  order: 3;
}

.contact-header {
  order: 4;
}

.link {
  padding-top: 4px;
}

.logo-img {
  order: 1;
  width: 50px;
  margin-top: 3px;
  margin-right: 20px;
  border: 3px #dbc2a4;
  box-shadow: 0px 0px 10px #dbc2a4;
  cursor: pointer;
}

.name-job {
  order: 2;
  margin-top: 5px;
}

nav {
  margin-top: 10px;
  color: black;
}

.header a {
  text-decoration: none;
}

nav:hover {
  text-decoration: underline;
}
</style>
