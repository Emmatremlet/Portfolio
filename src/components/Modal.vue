<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits (["close"])

function closeModal() {
  emit('close')
}
</script>

<template>
  <div class="modal-container">
    <div class="overlay modal-trigger" @click="closeModal"></div>
    <div class="modal">
      <button class="close modal-trigger" @click="closeModal">X</button>
      <h2>
        <slot name="title">
          Curriculum Vitae Emma Tremlet
        </slot>
      </h2>
      <div class="body-modal">
        <div class="slider-container">
          <div class="slider">
            <slot name="slider">
              <img class="img-modal" src=../assets/Images/CV.png alt="Photo d'un CV réalisé en site web">
              <img class="img-modal" src=../assets/Images/CV2.png alt="Photo d'un CV réalisé en site web">
              <img class="img-modal" src=../assets/Images/HTML_CV.png alt="Photo du code HTML d'un CV réalisé en site web">
              <img class="img-modal" src=../assets/Images/CSS_CV.png alt="Photo du code CSS d'un CV réalisé en site web">
              <img class="img-modal" src=../assets/Images/CV.png alt="Photo d'un CV réalisé en site web">
            </slot>
          </div>
        </div>
        <div class="details-modal">
          <slot name="details" class="details-modal">
            <br>
            <p class="creation-date"><i>Fait le 27/06/2023</i></p> <br> <br>
            <div class="technologies-used">
              <h4>Technologies utilisées :</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>GitHub</li>
              </ul>
            </div>
            <br>
            <a href="https://github.com/Emmatremlet/CV-Emma-TREMLET" class="link">
              <img src=../assets/Images/github.svg alt="Profil GitHub Emma TREMLET" class="github"> <br>
              <p class="github-title">GitHub</p>
            </a>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.modal {
  font-family: "Manrope", sans-serif;
  line-height: 1.5;
  cursor: default;
}

.modal-container {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  padding: 0;
}

.overlay {
  display: flex;
  opacity: 0.5;
  position: absolute;
  width: 100%;
  height: 100%;
  cursor:pointer;
  background: #333333d3;
}

.modal {
  width: 95%;
  max-width: 800px;
  min-width: 300px;
  padding: 30px;
  background: #f0eff4;
  border-radius: 5px;
  position: absolute;
  top: 48%;
  left: 49%;
  transform: translate(-50%, -50%);
}

.close {
  padding: 4px 8px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background-color: #ff365e;
  color: #f0eff4;
}

.modal h2 {
  margin: 10px 0;
  width: 780px;
}

.body-modal {
  display: flex;
  flex-direction: row;
}

.details-modal {
  display: flex;
  flex-direction: column;
  padding-top: 15px;
}

.link {
  padding-top: 20px;
  color: #4ba1e3;
  text-decoration: underline;
  margin-left: 85px;
}

li {
  padding-left: 15px;
}

.technologies-used {
  border: solid;
  border-color: #F26659;
  padding: 20px;
  padding-top: 10px;
  margin-top: 10px;
}

.slider-container {
  width: 500px;
  margin: 20px;
  border: solid;
  border-width: 3px;
  border-color: #EBC999;
  overflow: hidden;
}

.slider-container .slider {
  display: flex;
  animation: slider 12s infinite ease-in-out;
}

.img-modal {
  flex-shrink: 0;
  width: 100%;
}

.link:hover {
  background-color: #f0eff4;
  text-decoration: underline;
  color: #ff365e;
}

.github {
  width: 35px;
  margin: 10px;
  opacity: 1;
}

.github:hover {
  opacity: 0.5;
}

.PDF {
  width: 35px;
  margin: 10px;
  opacity: 1;
}

.PDF:hover {
  opacity: 0.5;
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


