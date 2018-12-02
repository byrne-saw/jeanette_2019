<template>
  <div class="home">

  <div class="home-grid">
    <div class="image">
      <img src="../assets/hero-image2.png"/>
    </div>

    <div class="ctatext">
      <p>20TH WARD ALDERMAN ELECTION 2/19/19</p>
      </div>

    <div class="calltoaction">
        <b-button class="home-btn" variant= 'danger' href="" target="_blank" >DONATE</b-button>
        <b-button class="home-btn" variant= 'danger' href="" target="_blank" >VOTE</b-button>
    </div>

    <div class="meet-image"></div>
    <div class="image">
      <img src="../assets/hero-image2.png"/>
    </div>

    <div class="meet-candidate">
      <h1>Meet Jeanette</h1>
      <p>Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello </p>
    </div>


  </div>

  </div>
</template>

<style>

.home-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(30, 1fr);
}
   
.image {
   grid-column: 1 / -1;
   grid-row: 1 / 7;
   overflow: hidden;
   object-fit: contain;
 } 
 
 .image img {
   max-width: 100%;
 }

 .calltoaction {
  grid-column: 2 / 7;
  grid-row: 6 /8;
  display: flex;
  background-color: rgba(4, 70, 150, .8);
  align-items: center;
  overflow: hidden;
  z-index: 0;
 }

 .home-btn {
  flex-grow: 1;
  align-self: stretch;
  margin-top: 7%;
  margin-left: 6%;
  margin-right: 6%;
  margin-bottom: 3%;
 }

 .calltoaction button {
  font-weight: bold;
  font-size: 3vw;
  font-family: verdana;
 }

 .ctatext {
  grid-column: 3 / 6;
  grid-row: 6 / 7;
  z-index: 1;
 }

.ctatext p {
 color: white;
 font-size: 1.735vw;
 font-family: verdana;
 font-weight: bold;
 }

 .meet-image {
  background-color: mistyrose;
  grid-column: 1 / 6;
  grid-row: 9 / 16;
  display: flex;
 }

 .meet-candidate {
  grid-column: 4 / -1;
  grid-row: 10 / 14;
  background-color: rgb(4, 70, 150);
  display: flex;
  align-content: space-around;
  flex-direction: column;
 }

 .meet-candidate h1, p {
  color: white;
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