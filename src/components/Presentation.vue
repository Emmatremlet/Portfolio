<template>
    <div class="body">
        <h2 id="presentation_title">Presentation</h2>
        <div class="name">
            <h1>Emma Tremlet</h1>
        </div>
        <div class="presentation-block">
            <a href='#' onclick="popup()"><img src=../../Images/Photo_de_profil.JPG
                    alt="Photo d'une femme chatain qui sourit" class="Photo-De-Profil"></a>
            <p class="presentation">
                Suite à ma formation en ligne,
                <br>
                j'ai obtenu le dipôme de <strong>développeur web full-stack.</strong>
                <br>
                <br>
                Grâce à mon école d'ingénieur en cognitique,
                <br>
                j'ai appris à rendre accessible, à tous
                utilisateurs, les différentes interfaces.
                <br>
                <br>
                Voici les projets que j'aimerais vous présenter !
            </p>
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

.name {
    margin: 0 auto;
    width: 200px;
}

.presentation-block {
    margin-top: 70px;
    margin-left: 30px;
    display: flex;
    flex-direction: row;
    flex-basis: auto;
    flex-wrap: nowrap;
    justify-content: space-around;
}

.Photo-De-Profil {
    order: 1;
    width: 200px;
    border-radius: 50%;
    box-shadow: 0 0 10px #feeaa1;
    cursor: none;
}

.Photo-De-Profil:hover {
    cursor: zoom-in;
}

.presentation {
    order: 2;
    overflow: hidden;
    padding-top: 15px;
}
</style>