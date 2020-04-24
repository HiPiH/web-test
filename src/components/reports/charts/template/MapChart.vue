<template>
    <div>
        <div class="box">
            <svg class="col-sm-12 map" ref="mapBox" ></svg>
        </div>
    </div>
</template>

<script>





const d3 = require('d3');

export default {
    name:'mapChart',
     data() {
      return {
           data: null,
            svg:null
      }
    },
    props: {
            coloredField:{ type: Function },
            getData:{ type: Function },
            urlData:{ type: String },
            centerProjection:{type: Array}
    },
    methods:{
        calculateDate: function(){
            return this.getData();
        },
        renderMap: function(){
            var width = this.$refs.mapBox.clientWidth,
            height = this.$refs.mapBox.clientHeight;
            var div = d3.select("body")
                            .append("div")   
                            .attr("class", "tooltip")               
                            .style("opacity", 0);

           
            console.log(width,height);
            var projection = d3.geoMercator() 
                        .fitSize([width, height], this.data);
            var path = d3.geoPath()
                                .projection(projection);

            var svg = d3.select(this.$el)
                            .select('svg').
                            call(d3.zoom()
                                    .scaleExtent([1,4])
                                    .translateExtent([[0,0],[width,height]])
                                    .on("zoom", function () {
                                svg.attr("transform", d3.event.transform)
                            }))
                            .append('g');

            svg
                    .attr('id', 'countries')
                    .selectAll('path')
                    .data(this.data.features) // get the data here: https://gist.github.com/2969317
                    .enter()
                    .append('svg:path')
                    .attr('d', path)
                    .attr("class", "state")
                    .style("fill",this.coloredField)
                    .attr('stroke', '#226688')
                    .attr('fill-opacity', '1')
                   // .attr('fill-rule',"evenodd")
                   // .attr('stroke-width', 1) 
                    .on("mouseover", function(d) {
            
                            d3.select(this).transition().duration(300).style("opacity", 0.2);
                            div.transition().duration(300)
                            .style("opacity", 1)
                            div.text(d.properties.name || d.properties.NAME)
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
    },
    mounted:  function () {
            var my = this;

            console.log("Start");
            if(my.urlData != "" && my.urlData != undefined)
            {
                    console.log("Load "+my.urlData);
                    d3.json(my.urlData)
                        .then(function( data) {
                         console.log(data)
                         my.data = data
                         my.renderMap();
                    }).catch(function(error) {
                       console.error(error);
                    });
            }else{
                my.data = my.getData();
                my.renderMap();
            }
      
        



                 
    




  }
}


</script>


<style  scoped>

.state {
  fill: #ccc;

}
/* 


.state:hover {
  fill: #e4ecef;
}



.containermap{
  height: 100%;
  padding-bottom: 20px;
}


.charbox{
 display: block;
  border:1px solid #EEE;
  box-shadow: 0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03), 0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03), 0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05), 0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03);
    width: 100%;
  height:100%;
  
}
.box{
  height: 100%;
}
.map {
     height: 100%; 
    background-color:#FFF;
}
.tooltip{
    background-color: #FFF;
} */


</style>