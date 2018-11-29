<template>
  <div id="app">
    <div class="header">
      <div>
        <b-navbar toggleable="md" variant="faded" type="light">
            <b-navbar-brand href="/">
              <img src="https://electjon.com/wp-content/uploads/2017/03/ossoff-2.png" class="d-inline-block align-top" alt="Jeanette 20th Ward" width=20% height=20%>
              Jeanette Taylor for 20th Ward
            </b-navbar-brand>

            <b-navbar-nav class="ml-auto">
              <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
              <b-collapse is-nav id="nav_collapse">
              <b-button variant= 'outline-danger' href="https://www.paypal.com/donate/?token=hHtkoo7KTCTYaFCim6yKHFeb-g2DNSE3EOPbVJvf24NwlGso8CBTwe9lEhaXTUvGSXMy-G&country.x=US&locale.x=US">DONATE</b-button>
              </b-collapse>
            </b-navbar-nav>
        </b-navbar>
      </div>
    </div>
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
</style>
