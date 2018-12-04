<template>
  <div class="home">

  <div class="hero">
  <b-img :src="require('../assets/hero-image2.png')" fluid-grow/>
 </div>

  <b-jumbotron>
    <template slot="header">
    <h2>20th Ward Alderman Election February 19, 2019</h2>
    </template>
  <b-btn class="btn" variant="primary" href="#">Donate</b-btn>
  <b-btn class="btn" variant="danger" href="#">Vote</b-btn>
</b-jumbotron>



<!-- src="../assets/hero-image.png" -->

</div>

</template>

<style scoped>

.hero {
  margin-right: -15px;
  display: flex;
  align-items: center;
}

.jumbotron {
  background-color: #044696;
  color: white;
  border-radius: 0 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100% !important;
}

.jumbotron h2 {
  padding-right: 10%;
}

.btn {
  flex: 2 1 200px;
  font-size: 7vh;
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