<template>

  <div class="media">
    <div class="carousel-header-container">
    <div class="carousel-header-text">On Melissa Harris-Perry</div>
    </div>
        <a href="https://www.msnbc.com/melissa-harris-perry/watch/hunger-strikers-protest-school-closing-520095299586" target="_blank">
        <b-img :src="require('../assets/hunger-strike_1_orig-play.png')" fluid-grow />
        </a>


<!-- <div class="container">
  <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="http://player.theplatform.com/p/7wvmTC/MSNBCEmbeddedOffSite?guid=n_mhp_strike_150905"></iframe>
  </div>
</div> -->




    <div class="carousel-header-container">
    <div class="carousel-header-text">Elsewhere in the Media</div>
    </div>

    <div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="0"
                img-width="1024"
                img-height="180"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >
     
       <b-carousel-slide :img-src="require('../assets/launch1.jpg')">
      </b-carousel-slide>
    </b-carousel>
    </div>

    <div class="carousel-header-container">
    <div class="carousel-header-text">Campaign Launch</div>
    </div>

    <div>
    <b-carousel id="carousel2"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="0"
                img-width="1024"
                img-height="480"
                v-model="slide1"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >
      
      <b-carousel-slide :img-src="require('../assets/launch1.jpg')">
      </b-carousel-slide>
      <b-carousel-slide :img-src="require('../assets/launch2.jpg')">
      </b-carousel-slide>
      <b-carousel-slide :img-src="require('../assets/launch3.jpg')">
      </b-carousel-slide>
      <b-carousel-slide :img-src="require('../assets/launch4.png')">
      </b-carousel-slide>
      <b-carousel-slide :img-src="require('../assets/launch5.jpg')">
      </b-carousel-slide>
      <b-carousel-slide :img-src="require('../assets/launch6.png')">
      </b-carousel-slide>
      <b-carousel-slide :img-src="require('../assets/launch7.png')">
      </b-carousel-slide>

    </b-carousel>
    </div>

   
  
  </div>
</template>

<style>

.video {
}

.media {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #044696;
}

.carousel-header-container {
  width: 100vw;
  height: 8vh;
  background-color: #044696;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-header-text {
  font-size: 32px;
  color: white;
  font-weight: bold;
}


</style>

<script>
export default {
  data: function() {
    return {
      slide: 0,
      slide1: 0,
      sliding: null,
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
    },
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  },
  computed: {}
};
</script>