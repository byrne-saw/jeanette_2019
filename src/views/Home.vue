<template>
  <div class="home">

  <div class="hero-container">
    <div class="hero-image">
      <div class="hero-text">
     <!--    <h1>Jeanette Taylor 2019</h1> -->
      </div>
    </div>
    <div class="hero-action">
      <h3 class="hero-info">20TH WARD ELECTION FEBRUARY 19, 2019</h3>
  
          <b-button class="donate-btn" variant= 'outline-danger' href="">DONATE</b-button>
          <b-button class="volunteer-btn" variant= 'outline-danger' href="">VOLUNTEER</b-button>

    </div>
  </div>

  </div>
</template>

<style>

/* The hero image */
.hero-image {
    background-image: url("../assets/hero-image.png");
    height: 70%;
    min-height: 65vh;
    /* Position and center the image to scale nicely on all screens */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    margin: 0 auto;
}

.hero-info {
  color: white;
  font-style: italic;
  font-weight: bolder;
  font-family: bookman;
  font-size: 2vw;
  position: absolute;
  top: 50%;
  left: 28%;
  transform: translate(-50%, -50%);
}

.donate-btn {
  position: relative;
  top: 50%;
  left: 68%;
  width: 15%;
  transform: translate(-50%, -50%);
}

.volunteer-btn {
  position: relative;
  top: 50%;
  left: 72%;
  width: 15%;
  transform: translate(-50%, -50%);
}

.hero-action {
  width: 75%; height: 120px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(4, 70, 150, .9);
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