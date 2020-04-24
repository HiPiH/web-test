<template>
 <div class="container-fluid ">
  <mapChart 
      :coloredField=getColor
      :centerProjection=[0,0] 
      urlData="/ao.geojson"
     :getData=getData ></mapChart>
</div>
</template>

<script>


//

import mapChart from './charts/template/MapChart.vue'

export default {
    name:'moscow1',
    components: {
        mapChart
    },
    methods: {
      getColor(d){
          console.log('From the child:', d);
            if(Math.random()< 0.5) return null;
            var r = function () { return 128+ Math.floor(Math.random()*128) };
            return "rgb("+r()+",0,0)";
      },
      getData(){
         return window.countries_data
       }
  }
}


</script>



<style>

/* .state {
  fill: #000;
  stroke: #fff;
} */
</style>