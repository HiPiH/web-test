<template>
 <div class="container-fluid ">
  <div class="row  counterline">
       <div class="col-sm-3"></div>
      <div class="col-sm-3">
        <div class="box counter ">
          <h6 class="lh-1">Вернулось за вчера</h6>
          <div class="value green"> + 555</div>
            
        </div>
      </div>
      <div class="col-sm-3">
        <div class="box counter red">
            <h6 class="lh-1"> Всего в мире </h6>
            <div class="value red"> - 555</div>
            
        </div>
      </div>
     
  </div>
  

  <div class="row box" style="">
    <svg class="col-sm-12 map" ref="mapBox" ></svg>
  </div>  
</div>
</template>

<script>
const d3 = require('d3');
// const topojson = require('topojson')

export default {
    name:'world1'    ,
   created() {
       
   }, methods: {

    },
    mounted:  function () {

      function get_random_color2() 
      {
           if(Math.random()< 0.5) return "#e4ecef";
          var r = function () { return 128+ Math.floor(Math.random()*128) };

          return "rgb("+r()+",0,0,1)";
      }

      console.log(this.$el,this.$refs);
        var  centerProjection = [20, 0];
        var width = this.$refs.mapBox.clientWidth,
            height = this.$refs.mapBox.clientHeight;

       var scaleProj = Math.min(width , height) / Math.PI;

        var projection = d3.geoEquirectangular().translate([width / 2, height / 2])
            .scale(scaleProj).rotate([-centerProjection[0], -centerProjection[1]]);
    
        var path = d3
                    .geoPath()
                    .projection(projection)
          
        /* World Map */
        d3.select(this.$el).select('svg')
                          .append('svg:g')
                          .attr('id', 'countries').selectAll('path')
          .data(window.countries_data.features) // get the data here: https://gist.github.com/2969317
          .enter()
          .append('svg:path')
          .attr('d', path)
           .attr("class", "state")
          .style("fill", function(d) {  return get_random_color2() /*"*/; })
          .attr('stroke', '#fff')
          .attr('fill-opacity', '1')
          .attr('fill-rule',"evenodd")
          .attr('stroke-width', 1);

    
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

.row{
    margin-top:30px;}
.box {
  border:1px solid #EEE;
  box-shadow: 0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03), 0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03), 0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05), 0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03);
}
.map {
    height:700px; 
  background-color:#FFF
}
.counterline{
    height: 100px;
    margin-bottom: 20px;
}
.counter{
    height: 100%;
    background-color: #FFF;
}
.counter h6{
    font-size:12px;
    padding: 5px 0 0 10px;
    font-family: Roboto,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Arial,sans-serif;
    color: #72777a;
}
.counter .green {
      color: #4caf50!important;
}

.counter .red {
        color: #f44336!important;
}
.counter .value{
    text-align: center;
    font-size:40px;
}
</style>