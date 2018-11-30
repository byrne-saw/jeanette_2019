<template>
  <div id="app">
    <div class="header">
      <div class="nav-bar">
        <b-navbar toggleable="md" variant="faded" type="light">
            <b-navbar-brand class="nav-image" href="/">
              <img src="./assets/JeanetteTaylor-WindowSign.png" class="d-inline-block align-top" alt="Jeanette 20th Ward" width="94px" height="62px">
            </b-navbar-brand>
            <b-navbar-nav class="ml-auto">
              <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
              <b-collapse is-nav id="nav_collapse">
              <b-nav-item to="/" style="padding-right: 5px">HOME</b-nav-item>
              <b-nav-item style="white-space: nowrap; padding-right: 5px" to="/jeanette">ABOUT JEANETTE</b-nav-item>
              <b-nav-item to="/priorities" style="padding-right: 5px">PRIORITIES</b-nav-item>
              <b-nav-item to="/media" style="padding-right: 5px">MEDIA</b-nav-item>
              <b-nav-item to="/vote" style="padding-right: 5px">VOTE</b-nav-item>
              <b-nav-item style="white-space: nowrap; padding-right: 5px" to="/constituents">USER STORIES</b-nav-item>
              <b-button variant= 'outline-danger' href="https://www.paypal.com/donate/?token=hHtkoo7KTCTYaFCim6yKHFeb-g2DNSE3EOPbVJvf24NwlGso8CBTwe9lEhaXTUvGSXMy-G&country.x=US&locale.x=US" target="_blank" >DONATE</b-button>
              <b-button variant= 'outline-warning'  >en español</b-button>
              </b-collapse>
            </b-navbar-nav>
        </b-navbar>
      </div>
    </div>
    <img src="" >
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
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

/*.nav-bar {
  position: absolute;
}*/

/*.nav-image {
  position: relative;
}*/
</style>
