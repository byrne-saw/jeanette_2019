<template>
  <div id="app">
    <div class="header">
      <div class="nav-bar">
        <b-navbar toggleable="md" variant="faded" type="light">
            <b-navbar-brand class="nav-image" href="/">
              <img src="./assets/JeanetteLogo_Blue.png" class="d-inline-block align-top" alt="Jeanette 20th Ward" width="109px" height="60px">
            </b-navbar-brand>
            <b-navbar-nav class="ml-auto">
              <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
              <b-collapse is-nav id="nav_collapse">

              <b-nav-item v-if="!spanish" to="/" style="padding-right: 5px">HOME</b-nav-item>
              <b-nav-item v-if="spanish" to="/" style="padding-right: 5px">CASA</b-nav-item>

              <b-nav-item v-if="!spanish" style="white-space: nowrap; padding-right: 5px" to="/jeanette">ABOUT JEANETTE</b-nav-item>
              <b-nav-item v-if="spanish" style="white-space: nowrap; padding-right: 5px" to="/jeanette">ACERCA DE JEANETTE</b-nav-item>

              <b-nav-item v-if="!spanish" to="/priorities" style="padding-right: 5px">PRIORITIES</b-nav-item>
              <b-nav-item v-if="spanish" to="/priorities" style="padding-right: 5px">PRIORIDADES</b-nav-item>

              <b-nav-item v-if="!spanish" to="/media" style="padding-right: 5px">MEDIA</b-nav-item>
              <b-nav-item v-if="spanish" to="/media" style="padding-right: 5px">MEDIOS DE COMUNICACIÓN</b-nav-item>

              <b-nav-item v-if="!spanish" to="/vote" style="padding-right: 5px">VOTE</b-nav-item>
              <b-nav-item v-if="spanish" to="/vote" style="padding-right: 5px">VOTAR</b-nav-item>

              <b-nav-item v-if="!spanish" style="white-space: nowrap; padding-right: 5px" to="/constituents">USER STORIES</b-nav-item>
              <b-nav-item v-if="spanish" style="white-space: nowrap; padding-right: 5px" to="/constituents">HISTORIAS DE USUARIOS</b-nav-item>


              <b-button v-if="!spanish" variant= 'outline-danger' href="https://secure.actblue.com/donate/taylorfor20th" target="_blank" >DONATE</b-button>
              <b-button v-if="spanish" variant= 'outline-danger' href="https://secure.actblue.com/donate/taylorfor20th" target="_blank" >DONAR</b-button>

              <b-nav-item style="font-size: small;" v-if="!spanish" v-on:click="setSpanish()">en español</b-nav-item>
              <b-nav-item style="font-size: small;" v-if="spanish" v-on:click="removeSpanish()">english</b-nav-item>
              </b-collapse>

            </b-navbar-nav>
        </b-navbar>
      </div>
    </div>
    <router-view/>
    <footer class="footer"></footer>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.footer {
  height: 30vh;
  background-color: rgb(4,70,150)
}

/*.nav-bar {
  position: absolute;
}*/

/*.nav-image {
  position: relative;
}*/
</style>

<script>
  export default {
    data: function() {
      return {
        spanish: false
      };
    },
    created: function() {
      this.checkSpanish();
    },
    methods: {
      setSpanish: function() {
        localStorage.setItem("spanish", true);
        window.location.href = "/";
      },
      removeSpanish: function() {
        localStorage.removeItem("spanish");
        window.location.href = "/";
      },
      checkSpanish: function() {
        if (localStorage.spanish) {
          this.spanish = true;
        }
      }
    },
    computed: {}
  };


</script>
