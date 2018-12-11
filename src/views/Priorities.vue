<template>
  <div class="priorities">
    
    <div class="priority-image">
      <b-img :src="require('../assets/prioritiestext.png')" fluid-grow/>
    </div>

  <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion1 variant="info" v-if="!spanish">Economic Development</b-btn>
        <b-btn block href="#" v-b-toggle.accordion1 variant="info" v-if="spanish">Desarrollo Economico</b-btn>
      </b-card-header>
      <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text" v-if="!spanish">{{ econText }}</p>
          <p class="card-text" v-if="spanish">{{ econTextEsp }}</p>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion2 variant="info" v-if="!spanish">Youth</b-btn>
        <b-btn block href="#" v-b-toggle.accordion2 variant="info" v-if="spanish">Juventud</b-btn>
      </b-card-header>
      <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text" v-if="!spanish">{{ youthText }}</p>
          <p class="card-text" v-if="spanish">{{ youthTextEsp }}</p>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion3 variant="info" v-if="!spanish">Safety</b-btn>
        <b-btn block href="#" v-b-toggle.accordion3 variant="info" v-if="spanish">La Seguridad</b-btn>
      </b-card-header>
      <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text" v-if="!spanish">{{ safetyText }}</p>
          <p class="card-text" v-if="spanish">{{ safetyTextEsp }}</p>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion4 variant="info" v-if="!spanish">Senior Health & Wealth</b-btn>
        <b-btn block href="#" v-b-toggle.accordion4 variant="info" v-if="spanish">Salud y Riqueza para Personas Mayores</b-btn>
      </b-card-header>
      <b-collapse id="accordion4" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text" v-if="!spanish">{{ seniorText }}</p>
          <p class="card-text" v-if="spanish">{{ seniorTextEsp }}</p>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion5 variant="info" v-if="!spanish">Education</b-btn>
        <b-btn block href="#" v-b-toggle.accordion5 variant="info" v-if="spanish">Educación</b-btn>
      </b-card-header>
      <b-collapse id="accordion5" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text" v-if="!spanish">{{ edText }}</p>
          <p class="card-text" v-if="spanish">{{ edTextEsp }}</p>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion6 variant="info" v-if="!spanish">Housing</b-btn>
        <b-btn block href="#" v-b-toggle.accordion6 variant="info" v-if="spanish">Alojamiento</b-btn>
      </b-card-header>
      <b-collapse id="accordion6" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text" v-if="!spanish">{{ housingText }}</p>
          <p class="card-text" v-if="spanish">{{ housingTextEsp }}</p>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>



  </div>
</template>

<style>

a.btn.btn-info.btn-block {
  background-color: #044696;
  border: 5px solid #044696;
}

</style>

<script>
export default {
  data: function() {
    return {
      spanish: false,

      econText: "My policies will prioritize supporting small businesses and partnering with business owners to provide residents of the ward employment and entrepreneurial opportunities.",
      econTextEsp: "Mis políticas darán prioridad al apoyo a las pequeñas empresas y al asociarse con propietarios de negocios para brindarles a los residentes del barrio empleo y oportunidades empresariales.",
      youthText: "Young people need a space to be safe and work on issues that affect their everyday life. Young people have created some of the greatest change that has happened in this country. With the support of the community, young people will lead the charge of being an asset to drive change in the ward.",
      youthTextEsp: "Los jóvenes necesitan un espacio para estar seguros y trabajar en temas que afectan su vida cotidiana. Los jóvenes han creado algunos de los cambios más grandes que han ocurrido en este país. Con el apoyo de la comunidad, los jóvenes liderarán el cargo de ser un activo para impulsar el cambio en el barrio.",
      safetyText: "Community safety is everyone's responsibility. Current models of community policing need to be revisited. Bridging the gap between police and the community will require a new approach that is developed through a process in which all parties are treated as equals.",
      safetyTextEsp: "La seguridad de la comunidad es responsabilidad de todos. Los modelos actuales de policía comunitaria deben ser revisados. Cerrar la brecha entre la policía y la comunidad requerirá un nuevo enfoque que se desarrolle a través de un proceso en el que todas las partes sean tratadas como iguales.",
      seniorText: "We have to acknowledge that what has been accomplished in our communities is the result of the hard work of previous generations. Our elders must have a say in decisions that are made. The should be knit into the fabric of our community through intergenerational opportunities.",
      seniorTextEsp: "Debemos reconocer que lo que se ha logrado en nuestras comunidades es el resultado del arduo trabajo de las generaciones anteriores. Nuestros mayores deben tener voz en las decisiones que se toman. El debe ser tejido en la trama de nuestra comunidad a través de oportunidades intergeneracionales.",
      edText: "Our schools in the 20th ward represent sites of possibility; however, we cannot deny that they face numerous challenges. Bringing parents, students, and community members together to support education is a must. We should ensure schools receive all aspects of support, ranging from city and district officials to local residents.",
      edTextEsp: "Nuestras escuelas en el barrio 20 representan sitios de posibilidad; Sin embargo, no podemos negar que se enfrentan a numerosos desafíos. Reunir a padres, estudiantes y miembros de la comunidad para apoyar la educación es una necesidad. Debemos asegurarnos de que las escuelas reciban todos los aspectos de apoyo, desde funcionarios de la ciudad y del distrito hasta residentes locales.",
      housingText: "The announcement of the Obama Center has caused housing prices to skyrocket. In this vein, we will include initiatives to provide safe and decent housing for everyone, such as introducing an ordinance for a property tax freeze. We will also support the preservation and development of affordable and subsidized housing in the ward.",
      housingTextEsp: "El anuncio del Centro Obama ha hecho que los precios de la vivienda se disparen. En este sentido, incluiremos iniciativas para proporcionar viviendas seguras y dignas para todos, como la introducción de una ordenanza para la congelación de impuestos a la propiedad. También apoyaremos la preservación y el desarrollo de viviendas asequibles y subsidiadas en el barrio."
    };
  },
  created: function() {
      this.checkSpanish();
  },
  methods: {
<<<<<<< HEAD
    // downclick #e90000
=======
    checkSpanish: function() {
      if (localStorage.spanish) {
        this.spanish = true;
      }
    }
>>>>>>> d6e7bbc4ceecd9e6f4d758d40e2bfd79feb95ebd
  },
  computed: {}
};
</script>