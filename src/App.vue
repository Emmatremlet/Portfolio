<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Modaux from './components/Modaux.vue'
import NotFound from './components/NotFound.vue'
import Presentation from './components/Presentation.vue'
import Contact from './components/Contact.vue'
import Creations from './components/Creations.vue'
</script>

<template>
  <div id="body">
    <Header></Header>
    <div id="welcome">
      <Presentation></Presentation>
      <br>
      <br>
      <br>
      <br>
      <Creations></Creations>
      <br>
      <br>
      <br>
      <br>
      <Contact></Contact>
    </div>
    <br>
    <br>
    <br>
    <Modaux></Modaux>
    <div class="modal-container-CV modal">
      <div class="overlay-CV modal-trigger-CV"></div>
      <div class="modal-CV">
        <button class="close-CV modal-trigger-CV">X</button>
        <h2>Curriculum Vitae Emma Tremlet</h2>
        <div class="body-modal-CV">
          <div class="slider-container slider-CV">
            <div class="slider">
              <img class="img-modal" src=../Images/CV.png alt="Photo d'un CV réalisé en site web">
              <img class="img-modal" src=../Images/CV2.png alt="Photo d'un CV réalisé en site web">
              <img class="img-modal" src=../Images/HTML_CV.png alt="Photo du code HTML d'un CV réalisé en site web">
              <img class="img-modal" src=../Images/CSS_CV.png alt="Photo du code CSS d'un CV réalisé en site web">
              <img class="img-modal" src=../Images/CV.png alt="Photo d'un CV réalisé en site web">
            </div>
          </div>
          <div class="details-modal-CV">
            <p class="creation-date date-CV"><i>Fait le 27/06/2023</i></p>
            <div class="technologies-used">
              <h4>Technologies utilisées :</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>GitHub</li>
              </ul>
            </div>
            <br>
            <a class="link CV-link" href="https://github.com/Emmatremlet/CV-Emma-TREMLET">Lien
              Github</a>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-container-specifications modal">
      <div class="overlay-specifications modal-trigger-specifications"></div>
      <div class="modal-specifications">
        <button class="close-specifications modal-trigger-specifications">X</button>
        <h2>Cahier des Charges fictif</h2>
        <div class="body-modal-specifications">
          <div class="slider-container slider-specifications">
            <div class="slider">
              <img class="img-modal" src=../Images/CahierDesCharges.png
                alt="Photo d'un extrait d'un cahier des charges d'un projet fictif">
              <img class="img-modal" src=../Images/CahierDesCharges2.png
                alt="Photo d'un extrait d'un cahier des charges d'un projet fictif">
              <img class="img-modal" src=../Images/CahierDesCharges3.png
                alt="Photo d'un extrait d'un cahier des charges d'un projet fictif">
              <img class="img-modal" src=../Images/CahierDesCharges4.png
                alt="Photo d'un extrait d'un cahier des charges d'un projet fictif">
              <img class="img-modal" src=../Images/CahierDesCharges.png
                alt="Photo d'un extrait d'un cahier des charges d'un projet fictif">
            </div>
          </div>
          <div class="details-modal-specifications">
            <p class="creation-date date-specifications"> <i>Fait le 05/07/2023</i> </p>
            <div class="technologies-used">
              <h4>Technologies utilisées :</h4>
              <ul>
                <li>Pages</li>
              </ul>
            </div>
            <br>
            <a class="link specifications-link" href="./Documents/Cahier_des_charges_La_Socketterie.pdf">Lien
              PDF</a>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-container-comments-space modal">
      <div class="overlay-comments-space modal-trigger-comments-space"></div>
      <div class="modal-comments-space">
        <button class="close-comments-space modal-trigger-comments-space">X</button>
        <h2>Espace de Commentaires dynamique</h2>
        <div class="body-modal-comments-space">
          <div class="slider-container slider-comments-space">
            <div class="slider">
              <img class="img-modal" src=../Images/EspaceDeComments.png alt="Photo d'un espace de commentaires dynamique">
              <img class="img-modal" src=../Images/EspaceDeComments2.png
                alt="Photo d'un espace de commentaires dynamique">
              <img class="img-modal" src=../Images/EspaceDeComments3.png
                alt="Photo du code JS d'un espace de commentaires dynamique">
              <img class="img-modal" src=../Images/EspaceDeComments4.png
                alt="Photo du code JS d'un espace de commentaires dynamique">
              <img class="img-modal" src=../Images/EspaceDeComments.png alt="Photo d'un espace de commentaires dynamique">
            </div>
          </div>
          <div class="details-modal-comments-space">
            <p class="creation-date date-comments-space"> <i>Fait le 20/07/2023</i> </p>
            <div class="technologies-used">
              <h4>Technologies utilisées :</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>GitHub</li>
              </ul>
            </div>
            <br>
            <a class="link comments-space-link" href="https://github.com/Emmatremlet/DynamiserUnEspaceDeCommentaire">Lien
              Github</a>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<style scoped>
@font-face {
  font-family: "Manrope";
  src: url("../Fonts/Manrope-VariableFont_wght_1.woff");
  src: url("../Fonts/Manrope-VariableFont_wght_1.ttf") format("truetype");
}

@font-face {
  font-family: "Edu_Sa_Beginner";
  src: url("../Fonts/EduSABeginner-VariableFont_wght_1.woff");
  src: url("../Fonts/EduSABeginner-VariableFont_wght_1.ttf") format("truetype");
}

#body {
  width: 1000px;
  margin: 0 10%;
  padding: 0 30px;
  padding-bottom: 20px;
  color: black;
  background-color: #9ac8eb;
  font-family: "Manrope", sans-serif;
  line-height: 1.5;
  cursor: default;
  display: flex;
  flex-direction: column;
  flex-basis: auto;
  justify-content: space-between;
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

#welcome {
  order: 1;
  padding: 20px;
}

.modal-container-CV {
  position: fixed;
  top: 0;
  left: 0;
  width: 1600px;
  height: 100vh;
  margin: 0 auto;
  padding: 0;
  visibility: hidden;
  transition: visibility 0.4s;
}

.overlay-CV {
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #333333d3;
  transition: opacity 0.4s 0.2s ease-out;
}

.modal-CV {
  opacity: 0;
  width: 95%;
  max-width: 800px;
  min-width: 300px;
  padding: 30px;
  background: #fff;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 45%;
  transform: translate(-50%, calc(-50% - 50px));
  transition: opacity 0.4s ease-out, transform 0.4s ease-out;
}

.close-CV {
  padding: 4px 8px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background-color: #ff365e;
  color: #fff;
}

.modal-CV h2 {
  margin-bottom: 10px;
}

.body-modal-CV {
  display: flex;
  flex-direction: row;
}

.details-modal-CV {
  display: flex;
  flex-direction: column;
  padding-top: 15px;
}

.link {
  padding-top: 20px;
  color: #4ba1e3;
  text-decoration: underline;
}

li {
  padding-left: 15px;
}

.technologies-used {
  border: solid;
  border-color: #ff9cb6;
  padding: 20px;
  padding-top: 0px;
  margin-top: 10px;
}

.slider-CV {
  width: 500px;
  margin: 20px;
  border: solid;
  border-width: 3px;
  border-color: #feeaa1;
  overflow: hidden;
}

.slider-CV .slider {
  display: flex;
  animation: slider 12s infinite ease-in-out;
}

.slider-CV img {
  flex-shrink: 0;
  width: 100%;
}


.modal-container-CV.active {
  visibility: visible;
}

.modal-container-CV.active .overlay-CV {
  opacity: 1;
  transition: opacity 0.4s ease-out;
}

.modal-container-CV.active .modal-CV {
  opacity: 1;
  transform: translate(-50%, -50%);
  transition: opacity 0.4s 0.2s ease-out, transform 0.4s ease-out;
}

.modal-container-specifications {
  position: fixed;
  top: 0;
  left: 0;
  width: 1600px;
  height: 100vh;
  margin: 0 auto;
  padding: 0;
  visibility: hidden;
  transition: visibility 0.4s;
}

.overlay-specifications {
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #333333d3;
  transition: opacity 0.4s 0.2s ease-out;
}

.modal-specifications {
  opacity: 0;
  width: 95%;
  max-width: 800px;
  min-width: 300px;
  padding: 30px;
  background: #fff;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 45%;
  transform: translate(-50%, calc(-50% - 50px));
  transition: opacity 0.4s ease-out, transform 0.4s ease-out;
}

.close-specifications {
  padding: 4px 8px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background-color: #ff365e;
  color: #fff;
}

.modal-specifications h2 {
  margin-bottom: 10px;
}

.slider-specifications {
  width: 500px;
  margin: 20px;
  border: solid;
  border-width: 3px;
  border-color: #feeaa1;
  overflow: hidden;
}

.slider-specifications .slider {
  display: flex;
  animation: slider 12s infinite ease-in-out;
}

.slider-specifications img {
  flex-shrink: 0;
  width: 100%;
}

.body-modal-specifications {
  display: flex;
  flex-direction: row;
}

.details-modal-specifications {
  display: flex;
  flex-direction: column;
  padding-top: 15px;
}

.modal-container-specifications.active {
  visibility: visible;
}

.modal-container-specifications.active .overlay-specifications {
  opacity: 1;
  transition: opacity 0.4s ease-out;
}

.modal-container-specifications.active .modal-specifications {
  opacity: 1;
  transform: translate(-50%, -50%);
  transition: opacity 0.4s 0.2s ease-out, transform 0.4s ease-out;
}



.modal-container-comments-space {
  position: fixed;
  top: 0;
  left: 0;
  width: 1600px;
  height: 100vh;
  margin: 0 auto;
  padding: 0;
  visibility: hidden;
  transition: visibility 0.4s;
}

.overlay-comments-space {
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #333333d3;
  transition: opacity 0.4s 0.2s ease-out;
}

.modal-comments-space {
  opacity: 0;
  width: 95%;
  max-width: 800px;
  min-width: 300px;
  padding: 30px;
  background: #fff;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 45%;
  transform: translate(-50%, calc(-50% - 50px));
  transition: opacity 0.4s ease-out, transform 0.4s ease-out;
}

.close-comments-space {
  padding: 4px 8px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background-color: #ff365e;
  color: #fff;
}

.modal-comments-space h2 {
  margin-bottom: 10px;
}

.slider-comments-space {
  width: 500px;
  margin: 20px;
  border: solid;
  border-width: 3px;
  border-color: #feeaa1;
  overflow: hidden;
}

.slider-comments-space .slider {
  display: flex;
  animation: slider 12s infinite ease-in-out;
}

.slider-comments-space img {
  flex-shrink: 0;
  width: 100%;
}

.body-modal-comments-space {
  display: flex;
  flex-direction: row;
}

.details-modal-comments-space {
  display: flex;
  flex-direction: column;
  padding-top: 15px;
}

.modal-container-comments-space.active {
  visibility: visible;
}

.modal-container-comments-space.active .overlay-comments-space {
  opacity: 1;
  transition: opacity 0.4s ease-out;
}

.modal-container-comments-space.active .modal-comments-space {
  opacity: 1;
  transform: translate(-50%, -50%);
  transition: opacity 0.4s 0.2s ease-out, transform 0.4s ease-out;
}


@keyframes slider {

  0%,
  20% {
    transform: translateX(0);
  }

  25%,
  45% {
    transform: translateX(-100%);
  }

  50%,
  70% {
    transform: translateX(-200%);
  }

  75%,
  95% {
    transform: translateX(-300%);
  }

  100% {
    transform: translateX(-400%);
  }
}
</style>
