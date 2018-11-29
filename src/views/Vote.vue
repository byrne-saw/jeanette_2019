<template>
  <div class="vote">
  
    <div id="blue-strip">
      <h1 id="election-day">Election day is February 19, 2018</h1>
    </div>

    <div id="red-strip">
      <h1 id="where-to-vote">Where to vote</h1>
      <div id="vote-info">
        <p>Find out where to vote in the 20th and make a plan to cast your ballot for Jeanette Taylor!</p>
        <button>FIND POLLING STATION</button>
      </div> 
    </div>
    


  </div>
</template>

<style scoped>

#blue-strip{
    width: 100%; height: 180px;
    border-style: solid;
    border-color: #044696;
    background-color: #044696;
}

#red-strip{
    width: 100%; height: 360px;
    border-style: solid;
    border-color: #e90000;
    background-color: #e90000;
}

#election-day, #where-to-vote {
  text-align: center;
  color: white;
  font-family: bookman;
  font-weight: 900;
  font-size: 45px;
  letter-spacing: 0px;
}

#where-to-vote {
  vertical-align: middle;
  position: relative;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#election-day {
  vertical-align: middle;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#vote-info {
  text-align: center;
  position: relative;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}


</style>

<script>
export default {
  data: function() {
    return {
      message: "Now we votin now we votin"
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};
</script>