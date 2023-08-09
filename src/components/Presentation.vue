




<template>
    <div class="body">
        <h2 id="presentation_title">Presentation</h2>
        <br>
        <br>
        <div class="name">
            <h1>Emma Tremlet</h1>
        </div>
        <div class="presentation-block">
            <a href='../assets/Images/Photo_de_profil.JPG' @click=""><img src=../assets/Images/Photo_de_profil.JPG
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

.body{
    margin-top: 70px;
}

.name {
    margin: 0 auto;
    padding-top: 30px;
    width: 200px;
}

.presentation-block {
    margin-top: 60px;
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
    background-color: #9ac8eb;
}

img:hover{
    background-color: #9ac8eb;
}

.presentation {
    order: 2;
    overflow: hidden;
    padding-top: 15px;
    font-size: 18px;
}
</style>