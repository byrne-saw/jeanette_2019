<template>

  <div class="media">


  
<ul class="list-unstyled">
  <b-media tag="li">
    <h1>Jeanette in the Media</h1>
  </b-media>
  <b-media tag="li">
    <b-img slot="aside" blank blank-color="#abc" width="64" alt="placeholder" />
    <h5 class="mt-0 mb-1">List-based media object</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
    ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
    viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
    lacinia congue felis in faucibus.
  </b-media>
  <b-media tag="li" class="my-4">
    <b-img slot="aside" blank blank-color="#cba" width="64" alt="placeholder" />
    <h5 class="mt-0 mb-1">List-based media object</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
    ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
    viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
    lacinia congue felis in faucibus.
  </b-media>
  <b-media tag="li">
    <b-img slot="aside" blank blank-color="#bac" width="64" alt="placeholder" />
    <h5 class="mt-0 mb-1">List-based media object</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
    ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
    viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
    lacinia congue felis in faucibus.
  </b-media>
</ul>
  </div>
</template>

<style>

.list-unstyled {
  margin-left: 10px;
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