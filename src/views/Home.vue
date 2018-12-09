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
            <h2>20th Ward Alderman Election 2/26/2019</h2>
          </template>
          <div class="btns">
            <div class="flex">
            <b-btn class="btn2" variant="danger" href="#/vote">Vote</b-btn>
            </div><br/>
            <div class="flex1">
            <b-btn class="btn1" variant="primary" href="https://secure.actblue.com/donate/taylorfor20th">Donate</b-btn>
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
      <b-img :src="require('../assets/meet-jeanette3.png')" fluid/>
    </div>
      <div class="row rowoverlay1">
        <b-container>
          <b-jumbotron>
            <template slot="header">
              <h2>Meet Jeanette</h2>
            </template>
            <p>I am Jeanette B. Taylor, and I have been a parent and school advocate for over 20 years. I want to be the alderman of the 20th Ward for a couple of reasons. First and foremost, I am tired of living in communities where I feel voiceless. I am expected to pay my fair share of taxes. However. I am never asked what I need in my community or what services could be provided for my family and me. Second, elected officials forget that they work for us not the other way around. They forget that they make decisions that affect our everyday lives. I want to work with our community so all members of the 20th Ward have a safe space to live and grow. I want to be the change agent God intended me to be, but I will not and cannot succeed without your help and support.</p>
          </b-jumbotron>
        </b-container>
      </div>
    </b-container>
   </div>
</div>



</template>

<style scoped>

.flex, .flex1 {
  display: flex;
  width: 200px;
}


.hero, .meet-image {
  margin-right: -12px;
}


.jumbotron {
  background-color: rgba(4,70,150, .8);
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
      message: "Home Page"
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};
</script>