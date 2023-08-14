<script setup>



</script>

<template>
  <header>
    <div class="header">
      <a href="#welcome">
        <div class="logo">
          <img src="/favicon.ico" alt="Image fond bleu avec les lettres E et T avec des contours jaunes"
            class="logo-img">
        </div>
      </a>
      <div class="name-job">
        <strong>Emma Tremlet</strong> <br>
        <i>Développeuse Web</i>
      </div>
    </div>
    <div class="presentation-header" v-bind:class="{ active: isActive }">
      <a href="#welcome">
        <nav id="link"> Présentation </nav>
      </a>
    </div>
    <div class="creation-header" v-bind:class="{ active: isActive }">
      <a href="#creation-block">
        <nav id="link"> Créations </nav>
      </a>
    </div>
    <div class="contact-header" v-bind:class="{ active: isActive }">
      <a href="#contact">
        <nav id="link"> Contact </nav>
      </a>
    </div>
  </header>
</template>

<style scoped>

header {
  background-color: #EBC999;
  font-size: 17px;
  width: 990px;
  height: 70px;
  padding: 5px;
  margin: 0;
  cursor: default;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items:  center;
}


.header {
  order: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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

#link {
  padding: 0;
  text-decoration: none;
  margin: 0;
}

.logo-img {
  order: 1;
  width: 50px;
  margin-top: 2px;
  margin-right: 20px;
  border: 3px #EBC999;
  box-shadow: 0px 0px 10px #EBC999;
  cursor: pointer;
}

.name-job {
  order: 2;
  margin-top: 6px;
}

.header a {
  text-decoration: none;
  margin-top: 5px;
  background-color: #EBC999;
}

a:hover {
  text-decoration: underline;
  color: black;
}

.menuselected{
  text-decoration: underline;
}
</style>
