<template>
  <div class="vote">
  
    <div class="blue-strip">
      <h1 v-if="!spanish" class="election-day">Election day is February 26, 2019</h1>
      <h1 v-if="spanish" class="election-day">El día de las elecciones es el 26 de febrero de 2019.</h1>
    </div>

    <div class="red-strip">
      <h1 v-if="!spanish" class="where-to-vote">Where to vote</h1>
      <h1 v-if="spanish" class="where-to-vote">Donde votar</h1>
      <div class="vote-info">
        <p v-if="!spanish">Find out where to vote in the 20th and make a plan to cast your ballot for Jeanette Taylor!</p>
        <p v-if="spanish">¡Averigüe dónde votar el 20 y haga un plan para emitir su voto para Jeanette Taylor!</p>

        <b-button href="https://www.cookcountyclerk.com/service/your-voter-information" target="_blank" v-if="!spanish">FIND POLLING STATION</b-button>
        <b-button href="https://www.cookcountyclerk.com/service/your-voter-information" target="_blank" v-if="spanish">ENCUENTRA ESTACIÓN DE POLLING</b-button>
      </div> 
    </div>
    


  </div>
</template>

<style scoped>

.blue-strip{
    width: 100%; height: 180px;
    border-style: solid;
    border-color: #044696;
    background-color: #044696;
}

.red-strip{
    width: 100%; height: 360px;
    border-style: solid;
    border-color: #e90000;
    background-color: #e90000;
}

.election-day, .where-to-vote {
  text-align: center;
  color: white;
  font-family: bookman;
  font-weight: 900;
  font-size: 45px;
  letter-spacing: 0px;
}

.where-to-vote {
  vertical-align: middle;
  position: relative;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.election-day {
  vertical-align: middle;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.vote-info {
  text-align: center;
  position: relative;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}


</style>

<script>
export default {
  data: function() {
    return {
      spanish: false,
    };
  },
  created: function() {
      this.checkSpanish();
    },
  methods: {
    checkSpanish: function() {
      if (localStorage.spanish) {
        this.spanish = true;
      }
    }
  },
  computed: {}
};
</script>