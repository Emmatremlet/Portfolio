<script>
import emailjs from 'emailjs-com'

export default {
  name: 'Contact',
  data() {
    return {
        firstName: '',
        lastName: '',
        email: '',
        obejct:'',
        comments: ''
    }
  },
  methods: {
    sendEmail() {
      try {
        emailjs.sendForm('service_ptlbqr8', 'template_16vskto',
        '-zAyczA1-KABOJJnO', {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            object: this.object,
            comments: this.comments
        })

      } catch(error) {
          console.log({error})
      }
      // Reset form field
            this.firstName = '',
            this.lastName = '',
            this.email = '',
            this.object='',
            this.comments= ''
    },
  }
}
</script>






<template>
    <div class="body">
        <h2 id="contact_title">Contact</h2>
        <form method="post" id="contact_form">
            <div id="id">
                <div id="first-name">
                    <label for="first-name_box" id="first-name_label" >Prénom :</label>
                    <input type="text" id="first-name_box" name="firstName" placeholder="Votre prénom" v-model="firstName" required>
                </div>
                <div id="last-name">
                    <label for="last-name_box" id="last-name_label">Nom :</label>
                    <input type="text" id="last-name_box" name="lastName" placeholder="Votre nom" v-model="lastName" required>
                </div>
            </div>
            <div id="email">
                <label for="email_box" id="email_label">Adresse e-mail :</label>
                <input type="email" id="email_box" name="email" placeholder="NomPrenom@gmail.com" key="email-input" v-model="email" required>
            </div>
            <div id="object">
                <label for="object_box" id="object_label"> Objet :</label>
                <input type="text" id="object_box" name="object" placeholder="Le sujet de votre message" v-model="object" required>
            </div>
            <div id="comments_block">
                <label id="comments_label" for="comments">Commentaire : </label>
                <span id="comments-max">Max. 500 caractères</span>
                <textarea id="comments" name="comments" placeholder="Votre message" rows="4" maxlength="500" v-model="comments"
                    required></textarea>
            </div>
            <div id="submit_block">
                <button type="submit" id="submit" @click="sendEmail()">
                    Envoyer
                </button>
            </div>
        </form>
    </div>
</template>

<style scoped>
.body {
    font-size: 16px;
}

button {
    font-family: "Edu_Sa_Beginner", sans-serif;
    font-weight: 500;
    letter-spacing: 2px;
}

#contact_form {
    line-height: 3;
    margin-top: 70px;
    line-height: 4;
}

#id {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 50px;
    justify-content: flex-start;
}

#first-name {
    order: 1;
}

#last-name {
    order: 2;
}

#submit {
    background-color: #ebc999;
    font-size: 16px;
    margin-left: 89%;
    margin-top: 30px;
    height: 30px;
    width: 100px;
    border-radius: 10px;
}

#submit:hover {
    cursor: pointer;

}

#comments_block {
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 50%;
}

#comments_label {
    order: 1;
}

span {
    order: 2;
}

input {
    border-radius: 10px;
    height: 35px;
    width: 200px;
    padding: 5px;
    font-size: medium;
    border-color: black;
    margin-left: 20px;
}

#email_box {
    width: 400px;
}

#object_box {
    margin-left: 85px;
    width: 400px;
}

textarea {
    order: 3;
    width: 1000px;
    height: 200px;
    padding: 10px;
    font-size: medium;
    border-radius: 10px;
    border-color: black;
    border-width: 2px;
}

</style>