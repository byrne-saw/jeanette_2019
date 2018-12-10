<template>
  <div class="priorities">
    <h1>Media</h1>
  </div>
</template>

<style>
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