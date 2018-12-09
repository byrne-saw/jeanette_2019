<template>
  <div class="priorities">
    
    <div class="priority-image">
      <b-img :src="require('../assets/prioritiestext.png')" fluid-grow/>
    </div>

  <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion1 variant="info">Economic Development</b-btn>
      </b-card-header>
      <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
            {{ econText }}
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion2 variant="info">Youth</b-btn>
      </b-card-header>
      <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
            {{ youthText }}
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion3 variant="info">Safety</b-btn>
      </b-card-header>
      <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
            {{ safetyText }}
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion4 variant="info">Senior Health & Wealth</b-btn>
      </b-card-header>
      <b-collapse id="accordion4" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
            {{ seniorText }}
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion5 variant="info">Education</b-btn>
      </b-card-header>
      <b-collapse id="accordion5" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
            {{ edText }}
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion6 variant="info">Housing</b-btn>
      </b-card-header>
      <b-collapse id="accordion6" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
            {{ housingText }}
          </p>
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
      econText: "My policies will prioritize supporting small businesses and partnering with business owners to provide residents of the ward employment and entrepreneurial opportunities.",
      youthText: "Young people need a space to be safe and work on issues that affect their everyday life. Young people have created some of the greatest change that has happened in this country. With the support of the community, young people will lead the charge of being an asset to drive change in the ward.",
      safetyText: "Community safety is everyone's responsibility. Current models of community policing need to be revisited. Bridging the gap between police and the community will require a new approach that is developed through a process in which all parties are treated as equals.",
      seniorText: "We have to acknowledge that what has been accomplished in our communities is the result of the hard work of previous generations. Our elders must have a say in decisions that are made. The should be knit into the fabric of our community through intergenerational opportunities.",
      edText: "Our schools in the 20th ward represent sites of possibility; however, we cannot deny that they face numerous challenges. Bringing parents, students, and community members together to support education is a must. We should ensure schools receive all aspects of support, ranging from city and district officials to local residents.",
      housingText: "The announcement of the Obama Center has caused housing prices to skyrocket. In this vein, we will include initiatives to provide safe and decent housing for everyone, such as introducing an ordinance for a property tax freeze. We will also support the preservation and development of affordable and subsidized housing in the ward."
    };
  },
  created: function() {},
  methods: {
  },
  computed: {}
};
</script>