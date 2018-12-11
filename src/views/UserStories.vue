<template>
  <div class="user-stories">
    <h1>User Stories</h1>
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