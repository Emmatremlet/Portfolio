<script>
export default {
  name: 'Modal',
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<template>
  <transition name="modal-fade">
    <div class="modal-container-CV modal">
      <div class="overlay-CV modal-trigger-CV" @click="close"></div>
      <div class="modal-CV">
        <button class="close-CV modal-trigger-CV" @click="close">X</button>
        <slot name="header">
          <h2>Curriculum Vitae Emma Tremlet</h2>
        </slot>
        <div class="body-modal-CV">
          <slot name="body" class="slider-container slider-CV">
            <div class="slider">
              <img class="img-modal" src=../Images/CV.png alt="Photo d'un CV réalisé en site web">
              <img class="img-modal" src=../Images/CV2.png alt="Photo d'un CV réalisé en site web">
              <img class="img-modal" src=../Images/HTML_CV.png alt="Photo du code HTML d'un CV réalisé en site web">
              <img class="img-modal" src=../Images/CSS_CV.png alt="Photo du code CSS d'un CV réalisé en site web">
              <img class="img-modal" src=../Images/CV.png alt="Photo d'un CV réalisé en site web">
            </div>
          </slot>
          <slot name="footer" class="details-modal-CV">
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
          </slot>
        </div>
      </div>
    </div>
  </transition>
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

.modal {
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

.modal-container-CV {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 1600px;
  height: 100vh;
  margin: 0 auto;
  padding: 0;
  transition: visibility 0.4s;
}

.overlay-CV {
  display: flex;
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

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .5s ease;
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


