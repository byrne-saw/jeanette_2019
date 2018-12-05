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

  <b-container fluid>
  <div class="bundle">
    <div class="meet-image">
      <b-img :src="require('../assets/meet-jeanette3.png')" fluid/>
    </div>
      
    <div class="row rowoverlay1">
      <b-container>  
        <b-jumbotron>
          <template slot="header">
            <h2>Meet Jeanette</h2>
          </template>
        </b-jumbotron>
      </b-container>
    </div>

    <div class="row rowoverlay2">
      <b-container>  
        <b-jumbotron>
          <template slot="lead">
            <p>Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff Stuff</p>
            <b-btn class="btn3" variant="primary" href="#/vote">About Jeanette</b-btn>
          </template>
        </b-jumbotron>
      </b-container>
    </div>
  </div>
</b-container>


  <!-- src="../assets/hero-image.png" -->

  </div>

</template>

<style scoped>

.flex, .flex1 {
  display: flex;
  width: 200px;
}


.hero, .meet-image {
  margin-right: -12px;
  /*display: inline-table;*/
}


.jumbotron {
  background-color: rgba(4,70,150, .8);
  color: white;
  border-radius: 0 !important;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100% !important;
 /* grid-row: 4 / span 1;*/
  align-content: center;
}

.jumbotron h2 {
  
  font-family: palatino;
  font-weight: bold;
  align-self: flex-start;
}

.btn1, .btn2 {
  flex: 1 1 200px;
  font-size: 5vh;
}

.btn3 {
  align-self: flex-end;
}

.rowoverlay {
  position: absolute;
  top: 80%;
  left:0;
  z-index:1;
  bottom:0;
  right:0;
 /* height:100%;*/
}

.rowoverlay1 {
  position: absolute;
  top: 50%;
  left: 40%;
  z-index:1;
  bottom:0;
  right:0;
  /*height: 100%;*/
}

.rowoverlay2 {
  display: flex;
  position: absolute;
  top: 80%;
  left: 0%;
  z-index:1;
  bottom:0;
  right:30%;
 /* height: 100%;*/
}

.bundle {
  position: relative;
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