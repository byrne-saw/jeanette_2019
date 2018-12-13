<template>
  <div class="home">
    
    <div class="bundle">

      <div class="hero">
        <b-img :src="require('../assets/hero-image2.png')" fluid-grow/>
      </div>
        
        <div class="row rowoverlay">
        <b-container>  
          <b-jumbotron>
            <template slot="header">
              <h2 v-if="!spanish">20th Ward Alderman Election 2/26/2019</h2>
              <h2 v-if="spanish">El día de las elecciones es el 26 de febrero de 2019.</h2>

            </template>
            <div class="btns">
              <div class="flex">
              <b-btn class="btn2" variant="danger" href="#/vote" v-if="!spanish">Vote</b-btn>
              <b-btn class="btn2" variant="danger" href="#/vote" v-if="spanish">Votar</b-btn>
              </div><br/>
              <div class="flex1">
              <b-btn class="btn1" variant="primary" href="https://secure.actblue.com/donate/taylorfor20th" target="_blank" v-if="!spanish">Donate</b-btn>
              <b-btn class="btn1" variant="primary" href="https://secure.actblue.com/donate/taylorfor20th" target="_blank" v-if="spanish">Donar</b-btn>
              </div>
            </div>
          </b-jumbotron>
          </b-jumbotron>
        </b-container>
      </div>
    </div>

    <div class="space">
    </div>

  <div class="bundle">
    <b-container fluid>
      <div class="meet-image">
        <b-img :src="require('../assets/meet-jeanette3-play.png')" fluid @click="showModal"/>
      </div>
        <div class="row rowoverlay1">
          <b-container>
            <b-jumbotron>
              <template slot="header">
                <h2 v-if="!spanish">Meet Jeanette</h2>
                <h2 v-if="spanish">Conoce a Jeanette</h2>
              </template>
              <p v-if="!spanish">I am Jeanette B. Taylor, and I have been a parent and school advocate for over 20 years. I want to be the alderman of the 20th Ward for a couple of reasons. First and foremost, I am tired of living in communities where I feel voiceless. I am expected to pay my fair share of taxes. However. I am never asked what I need in my community or what services could be provided for my family and me. Second, elected officials forget that they work for us not the other way around. They forget that they make decisions that affect our everyday lives. I want to work with our community so all members of the 20th Ward have a safe space to live and grow. I want to be the change agent God intended me to be, but I will not and cannot succeed without your help and support.</p>
              <p v-if="spanish">Soy Jeanette B. Taylor, y he sido madre y defensora de la escuela durante más de 20 años. Quiero ser el regidor del Distrito 20 por un par de razones. En primer lugar, estoy cansado de vivir en comunidades donde me siento sin voz. Se espera que pague mi parte justa de impuestos. Sin embargo. Nunca me preguntan qué necesito en mi comunidad o qué servicios se pueden brindar a mi familia y a mí. Segundo, los funcionarios electos olvidan que trabajan para nosotros, no al revés. Olvidan que toman decisiones que afectan nuestra vida cotidiana. Quiero trabajar con nuestra comunidad para que todos los miembros del Distrito 20 tengan un espacio seguro para vivir y crecer. Quiero ser el agente de cambio que Dios quiso que fuera, pero no tendré y no podré tener éxito sin su ayuda y apoyo.
            </p>
            </b-jumbotron>
          </b-container>
        </div>
      </b-container>
     </div>
 
   <div>
     <b-modal id="modal-center" size="lg" hide-footer hide-header centered  v-model="modalShow">
      <b-embed type="iframe"
                 aspect="16by9"
                 v-bind:src="videoJeanette" 
                 allowfullscreen
        ></b-embed>
<!--       <iframe width="791" height="445" src="https://www.youtube.com/embed/fWBtLW3NpYg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
     </b-modal>
   </div>


  </div>



</template>

<style scoped>

.flex, .flex1 {
  display: flex;
  width: 200px;
}


.hero, .meet-image {
  width: 100%;
}


.jumbotron {
  background-color: rgba(4,70,150, .9);
  color: white;
  border-radius: 0 !important;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
}

.jumbotron h2 {
  font-weight: bold;
  align-self: flex-end;
  font-size: 3vw;
}

.btn1, .btn2 {
  flex: 1 1 200px;
  font-size: 5vh;
}

.rowoverlay {
  position: absolute;
  top: 80%;
  left: 0;
  z-index:1;
  bottom:0;
  right:0;
}

.rowoverlay1 {
  position: absolute;
  top: 50%;
  left: 40%;
  z-index:1;
  bottom:0;
  right:0;
}

.bundle {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
}

.space {
  height: 10vh;
}

@media (max-width: 700px) {
  .btn1, .btn2 {
  font-size: 2vh;
  }
  .space {
  height: 15vh;
  }
}

@media (max-width: 800px) {
  .jumbotron p {
  font-size: 2vw;
 }
 .rowoverlay1 {
  position: absolute;
  top: 85%;
  left: 0;
  z-index:0;
  bottom:0;
  right: 0;
  margin: -40% auto;
}
}


</style>

<script>
export default {
  data: function() {
    return {
      spanish: false,
      modalShow: false,
      videoJeanette: ""
    };
  },
  created: function() {
    this.checkSpanish();
  },
  updated: function() {
    this.videoSrc();
  },
  methods: {
    checkSpanish: function() {
      if (localStorage.spanish) {
        this.spanish = true;
      }
    },
    showModal: function() {
      this.modalShow = !this.modalShow;
    },
    videoSrc: function() {
      if (this.modalShow) {
        this.videoJeanette = "https://www.youtube.com/embed/fWBtLW3NpYg?rel=0&autoplay=1";
      } else {
        this.videoJeanette = "";
      }
    }
  },
  computed: {}
};


</script>



