<script>
export default {
  name: 'Modal',
  methods: {
    closeModal1() {
      this.$emit('close1')
    },
  }
}
</script>

<template>
  <div class="modal-container">
    <div class="overlay modal-trigger" @click="closeModal1"></div>
    <div class="modal">
      <button class="close modal-trigger" @click="closeModal1">X</button>
      <h2>
        <slot name="title">
          Curriculum Vitae Emma Tremlet
        </slot>
      </h2>
      <div class="body-modal">
        <div class="slider container slider-CV">
          <div class="slider">
            <slot name="slider">
              <img class="img-modal" src=../../Images/CV.png alt="Photo d'un CV réalisé en site web">
              <img class="img-modal" src=../../Images/CV2.png alt="Photo d'un CV réalisé en site web">
              <img class="img-modal" src=../../Images/HTML_CV.png alt="Photo du code HTML d'un CV réalisé en site web">
              <img class="img-modal" src=../../Images/CSS_CV.png alt="Photo du code CSS d'un CV réalisé en site web">
              <img class="img-modal" src=../../Images/CV.png alt="Photo d'un CV réalisé en site web">
            </slot>
          </div>
        </div>
        <div class="details-modal">
          <slot name="details" class="details-modal">
            <br>
            <p class="creation-date date-CV"><i>Fait le 27/06/2023</i></p> <br> <br>
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
              <img src=../../Images/github.svg alt="Profil GitHub Emma TREMLET" class="github"> <br>
              <p class="github-title">GitHub</p>
            </a>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  /* transition: visibility 0.4s; */
}

.overlay {
  display: flex;
  opacity: 0.5;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #333333d3;
  /* transition: opacity 0.4s 0.2s ease-out; */
}

.modal {
  /* opacity: 0; */
  width: 95%;
  max-width: 800px;
  min-width: 300px;
  padding: 30px;
  background: #fff;
  border-radius: 5px;
  position: absolute;
  top: 55%;
  left: 49%;
  transform: translate(-50%, calc(-50% - 50px));
  transition: opacity 0.4s ease-out, transform 0.4s ease-out;
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
  color: #fff;
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
  border-color: #ff9cb6;
  padding: 20px;
  padding-top: 10px;
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

a:hover {
  background-color: #fff;
  text-decoration: underline;
  color: plum;
}

.github {
  width: 35px;
  margin: 10px;
  opacity: 1;
}

.github:hover {
  opacity: 0.5;
}

/* 
.modal-container.active {
  visibility: visible;
}

.modal-container.active .overlay {
  opacity: 1;
  transition: opacity 0.4s ease-out;
}

.modal-container.active .modal {
  opacity: 1;
  transform: translate(-50%, -50%);
  transition: opacity 0.4s 0.2s ease-out, transform 0.4s ease-out;
} */

/* .modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .5s ease;
} */

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


