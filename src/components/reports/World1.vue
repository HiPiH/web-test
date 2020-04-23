<template>
 <div class="container-fluid ">

  <div class="row ">
      <counter class="col-lg-3 offset-lg-3 col-xl-2 offset-xl-3" value="+ 555">Вернулось за вчера</counter>
      <counter class="col-lg-3 col-xl-2 offset-xl-1" value="- 7984">Всего в мире</counter>
  </div>
     

  <div class="row" style="">
    <div class="charbox">
      <div class="box">
          <svg class="col-sm-12 map" ref="mapBox" ></svg>
      </div>
    </div>
  </div>  
</div>
</template>

<script>
import counter from "./charts/Counter"

const d3 = require('d3');
// const topojson = require('topojson')

export default {
  name:'world1',
  components: {counter},
   created() {
       
   }, methods: {

    },
    mounted:  function () {
    

        var  centerProjection = [13, 0];
        var width = this.$refs.mapBox.clientWidth,
            height = this.$refs.mapBox.clientHeight;

       var scaleProj = Math.min(width , height) / (Math.PI+0.2);


        var projection = d3.geoEquirectangular().translate([width / 2, height / 1.8])
            .scale(scaleProj).rotate([-centerProjection[0], -centerProjection[1]]);
    
        var path = d3.geoPath()
                    .projection(projection)
          

         var div = d3.select("body")
                .append("div")   
                .attr("class", "tooltip")               
                .style("opacity", 0);

          var svg = d3.select(this.$el).select('svg').
                  call(d3.zoom()
                          .scaleExtent([1,4])
                          .translateExtent([[0,0],[width,height]]).on("zoom", function () {
                      svg.attr("transform", d3.event.transform)
                  }))
                  .append('g');
 



                   function get_random_color2() 
                  {
                      if(Math.random()< 0.5) return "#e4ecef";
                      var r = function () { return 128+ Math.floor(Math.random()*128) };

                      return "rgb("+r()+",0,0)";
                  }
                  svg
                  .attr('id', 'countries')
                  .selectAll('path')
                  .data(window.countries_data.features) // get the data here: https://gist.github.com/2969317
                  .enter()
                  .append('svg:path')
                  .attr('d', path)
                  .attr("class", "state")
                  .style("fill", function() {  return get_random_color2() ; })
                  .attr('stroke', '#226688')
                  .attr('fill-opacity', '1')
                  .attr('fill-rule',"evenodd")
                  .attr('stroke-width', 1) .on("mouseover", function(d) {
        
                          d3.select(this).transition().duration(300).style("opacity", 0.2);
                          div.transition().duration(300)
                          .style("opacity", 1)
                          div.text(d.properties.name)
                          .style("left", (d3.event.pageX) + "px")
                          .style("top", (d3.event.pageY -30) + "px");
                  })
                  .on("mouseout", function() {
                          d3.select(this)
                          .transition().duration(300)
                          .style("opacity", 0.8);
                          div.transition().duration(300)
                          .style("opacity", 0);
                  })
    




  }
}


</script>


<style scoped>


.state {
  fill: #ccc;
  stroke: #fff;
}
.state:hover {
  fill: #e4ecef;
}



.map {
     height:50vh ;
  background-color:#FFF;
}
.tooltip{
    background-color: #FFF;
}


</style>