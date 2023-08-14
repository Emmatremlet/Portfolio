<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Modal from './components/Modal.vue'
import Presentation from './components/Presentation.vue'
import Contact from './components/Contact.vue'
import { ref } from 'vue'

var showModalCV = ref(false)

function toggleModalCV() {
    showModalCV.value = !showModalCV.value
}

var showModalSpecifications = ref(false)

function toggleModalSpecifications() {
  showModalSpecifications.value = !showModalSpecifications.value
}

var showModalCommentsSpace = ref(false)

function toggleModalCommentsSpace() {
  showModalCommentsSpace.value = !showModalCommentsSpace.value
}
  
</script>


<template>
  <RouterView>
  <div class="body">
    <Header></Header>
    <div id="welcome">
      <Presentation/>
      <br>
      <br>
      <br>
      <br>
      <div id="creation-block">
        <br>
        <br>
        <br>
        <br>
        <h2 id="creation_title">Creations</h2>
        <div id="creations">
            <div id="CV">
              <div v-if="showModalCV">
                    <Modal @close="toggleModalCV" />
              </div>
              <button type="button" class="modal-btn modal-trigger-CV" @click="toggleModalCV" >
                  <img src=./assets/Images/CV.png alt="Photo d'un CV réalisé en site web" id="creation_image">
                  <h3 id="Cv_title">Curriculum Vitae</h3>
              </button>
            </div>


            <div id="specifications">
                <button type ="button" class="modal-btn modal-trigger-specifications" @click="toggleModalSpecifications">
                    <img src=./assets/Images/CahierDesCharges.png
                        alt="Photo d'un extrait d'un cahier des charges d'un projet fictif" id="creation_image">
                    <h3 id="specifications_title">Cahier des charges fictif</h3>
                </button>
                <div v-if="showModalSpecifications">
                    <Modal @close="toggleModalSpecifications">

                        <template #title>Cahier des Charges fictif</template>

                        <template #slider>
                            <div class="slider">
                                <img class="img-modal" src=./assets/Images/CahierDesCharges.png
                                    alt="Photo d'un extrait d'un cahier des charges d'un projet fictif">
                                <img class="img-modal" src=/assets/Images/CahierDesCharges2.png
                                    alt="Photo d'un extrait d'un cahier des charges d'un projet fictif">
                                <img class="img-modal" src=./assets/Images/CahierDesCharges3.png
                                    alt="Photo d'un extrait d'un cahier des charges d'un projet fictif">
                                <img class="img-modal" src=./assets/Images/CahierDesCharges4.png
                                    alt="Photo d'un extrait d'un cahier des charges d'un projet fictif">
                                <img class="img-modal" src=./assets/Images/CahierDesCharges.png
                                    alt="Photo d'un extrait d'un cahier des charges d'un projet fictif">
                            </div>
                        </template>

                        <template #details>
                            <p class="creation-date date-specifications"> <i>Fait le 05/07/2023</i> </p>
                            <br>
                            <br>
                            <div class="technologies-used">
                                <h4>Technologies utilisées :</h4>
                                <ul>
                                    <li>Pages</li>
                                </ul>
                            </div>
                            <br>
                            <a class="link specifications-link"
                                href="./assets/Documents/Cahier_des_charges_La_Socketterie.pdf">
                                <img src="./assets/Images/faviconPDF.ico" alt="logo PDF" class="PDF"> <br>
                                <p class="PDF-title">Lien PDF</p>
                            </a>
                        </template>
                    </Modal>
                </div>
            </div>


            <div id="comments_space">
                <button class="modal-btn modal-trigger-comments-space" @click="toggleModalCommentsSpace">
                    <img src=./assets/Images/EspaceDeComments.png alt="Photo d'un espace de commentaires dynamique"
                        id="creation_image">
                    <h3 id="comments_space_title">Espace de commentaires dynamique</h3>
                </button>
                <div v-if="showModalCommentsSpace">
                    <Modal @close="toggleModalCommentsSpace">
                        <template #title>Espace de Commentaires dynamique</template>

                        <template #slider>
                            <div class="slider">
                                <img class="img-modal" src=./assets/Images/EspaceDeComments.png
                                    alt="Photo d'un espace de commentaires dynamique">
                                <img class="img-modal" src=./assets/Images/EspaceDeComments2.png
                                    alt="Photo d'un espace de commentaires dynamique">
                                <img class="img-modal" src=./assets/Images/EspaceDeComments3.png
                                    alt="Photo du code JS d'un espace de commentaires dynamique">
                                <img class="img-modal" src=./assets/Images/EspaceDeComments4.png
                                    alt="Photo du code JS d'un espace de commentaires dynamique">
                                <img class="img-modal" src=./assets/Images/EspaceDeComments.png
                                    alt="Photo d'un espace de commentaires dynamique">
                            </div>
                        </template>

                        <template #details>
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
                            <a class="link comments-space-link"
                                href="https://github.com/Emmatremlet/DynamiserUnEspaceDeCommentaire">
                                <img src=./assets/Images/github.svg alt="Profil GitHub Emma TREMLET" class="github"> <br>
                                <p class="github-title">GitHub</p>
                            </a>
                        </template>
                    </Modal>
                  </div>
            </div>
          </div>
      </div>
      <div id="contact">
      <br>
      <br>
      <br>
      <br>
      <Contact/>
      </div>
    </div>
    <br>
    <Footer></Footer>
  </div>
</RouterView>
  <RouterLink></RouterLink>
</template>

<style>
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

#app {
  width: 1000px;
  margin: 0 auto;
  padding: 0 30px;
  padding-bottom: 20px;
  color: black;
  background-color: #8CA9D3;
  font-family: "Manrope", sans-serif;
  line-height: 1.5;
  cursor: default;
  display: flex;
  flex-direction: column;
  flex-basis: auto;
  justify-content: space-between;
}
.body {
    font-family: "Manrope", sans-serif;
    line-height: 1.5;
    cursor: default;
    font-size: 17px;
    color: black;
}

h1 {
  font-family: "Edu_Sa_Beginner", sans-serif;
}

h2 {
  background-color: #F26659;
  line-height: 1;
  padding: 5px;
  color: black;
  font-family: "Edu_Sa_Beginner", sans-serif;
}

strong{
  font-weight: 700;
}

#welcome {
  order: 1;
  padding: 20px;
}

button {
    font-family: "Edu_Sa_Beginner", sans-serif;
}

#creation_title {
    order: 3;
}

#creations {
    order: 2;
    margin-top: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;
    flex-basis: auto;
    align-items: baseline;
}

.modal-btn {
    background-color: #8CA9D3;
    font-size: 18px;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    flex-basis: auto;
}

#CV {
    order: 1;
}

.modal-btn:hover {
    box-shadow: 7px 7px 10px 1px #EBC999;
    cursor: pointer;
}

#CV_image {
    order: 1;
}

#Cv_title {
    order: 2;
    padding-left: 25%;
}


#specifications {
    order: 2;
}

#specifications_image {
    order: 1;
}

#specifications_title {
    order: 2;
    padding-left: 15%;
}

#comments_space {
    order: 3;
}

#comments_space_image {
    order: 1;
}

#comments_space_title {
    order: 2;
    padding-left: 2%;
}

#creation_image {
    width: 250px;
    margin: 10px;
    border: solid;
    border-width: 3px;
    border-color: #EBC999;
}


a {
  color: black;
  text-decoration: none;
  cursor:pointer;
  margin: 0 10px;
}

a:hover {
  background-color: #8CA9D3;
  text-decoration: underline;
  color: plum;
}

/* .modal-container-specifications {
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
} */

/* .details-modal-comments-space {
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
 */

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


