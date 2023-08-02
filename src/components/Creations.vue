<script setup>
import Modal from './Modal.vue';
</script>

<script>

export default {
    name: 'App',
    components: {
        Modal,
    },
    data() {
        return {
            isModalVisible: false,
        };
    },
    methods: {
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        }
    }
};
</script>

<template>
    <div class="body">
        <h2 id="creation_title">Creations</h2>
        <div id="creations">
            <div id="CV">
                <button type="button" class="modal-btn modal-trigger-CV" @click="showModal">
                    <img src=../../Images/CV.png alt="Photo d'un CV réalisé en site web" id="CV_image">
                    <strong id="Cv_title">Curriculum Vitae</strong>
                </button>
                <Modal v-show="isModalVisible" @close="closeModal" />
            </div>
            <div id="specifications">
                <button class="modal-btn modal-trigger-specifications" @click="showModal">
                    <img src=../../Images/CahierDesCharges.png
                        alt="Photo d'un extrait d'un cahier des charges d'un projet fictif" id="specifications_image">
                    <strong id="specifications_title">Cahier des charges fictif</strong>
                </button>
                <Modal v-show="isModalVisible" @close="closeModal">
                    <template v-slot:header>
                        <h2>Cahier des Charges fictif</h2>
                    </template>

                    <template v-slot:body>
                        <div class="slider">
                            <img class="img-modal" src=../../Images/CahierDesCharges.png
                                alt="Photo d'un extrait d'un cahier des charges d'un projet fictif">
                            <img class="img-modal" src=../../Images/CahierDesCharges2.png
                                alt="Photo d'un extrait d'un cahier des charges d'un projet fictif">
                            <img class="img-modal" src=../../Images/CahierDesCharges3.png
                                alt="Photo d'un extrait d'un cahier des charges d'un projet fictif">
                            <img class="img-modal" src=../../Images/CahierDesCharges4.png
                                alt="Photo d'un extrait d'un cahier des charges d'un projet fictif">
                            <img class="img-modal" src=../../Images/CahierDesCharges.png
                                alt="Photo d'un extrait d'un cahier des charges d'un projet fictif">
                        </div>
                    </template>

                    <template v-slot:footer>
                        <p class="creation-date date-specifications"> <i>Fait le 05/07/2023</i> </p>
                        <div class="technologies-used">
                            <h4>Technologies utilisées :</h4>
                            <ul>
                                <li>Pages</li>
                            </ul>
                        </div>
                        <br>
                        <a class="link specifications-link" href="../../Documents/Cahier_des_charges_La_Socketterie.pdf">Lien
                            PDF</a>
                    </template>
                </Modal>
            </div>
            <div id="comments_space">
                <button class="modal-btn modal-trigger-comments-space" @click="showModal">
                    <img src=../../Images/EspaceDeComments.png alt="Photo d'un espace de commentaires dynamique"
                        id="comments_space_image">
                    <strong id="comments_space_title">Espace de commentaires dynamique</strong>
                </button>
                <Modal v-show="isModalVisible" @close="closeModal">
                    <template v-slot:header>
                        <h2>Espace de Commentaires dynamique</h2>
                    </template>

                    <template v-slot:body>
                        <div class="slider">
                            <img class="img-modal" src=../../Images/EspaceDeComments.png
                                alt="Photo d'un espace de commentaires dynamique">
                            <img class="img-modal" src=../../Images/EspaceDeComments2.png
                                alt="Photo d'un espace de commentaires dynamique">
                            <img class="img-modal" src=../../Images/EspaceDeComments3.png
                                alt="Photo du code JS d'un espace de commentaires dynamique">
                            <img class="img-modal" src=../../Images/EspaceDeComments4.png
                                alt="Photo du code JS d'un espace de commentaires dynamique">
                            <img class="img-modal" src=../../Images/EspaceDeComments.png
                                alt="Photo d'un espace de commentaires dynamique">
                        </div>
                    </template>

                    <template v-slot:footer>
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
                            href="https://github.com/Emmatremlet/DynamiserUnEspaceDeCommentaire">Lien
                            Github</a>
                    </template>
                </Modal>
            </div>
        </div>

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
    font-size: 17px;
    color: black;
}

h1 {
    font-family: "Edu_Sa_Beginner", sans-serif;
    padding-top: 40px;
    font-weight: 700;
}

h2 {
    background-color: #ff9cb6;
    line-height: 1;
    padding: 5px;
    font-weight: 700;
    color: black;
    font-family: "Edu_Sa_Beginner", sans-serif;
}

strong {
    font-weight: 700;
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

#creation div:hover {
    box-shadow: 7px 7px 10px 1px #feeaa1;
    cursor: pointer;
}

.modal-btn {
    background-color: #9ac8eb;
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

#creations img {
    width: 250px;
    margin: 10px;
    border: solid;
    border-width: 3px;
    border-color: #feeaa1;
}
</style>

