<template>
 <div class="container-fluid ">
  <div class="row">
                            <div class="col-12">
                               <div class="containermap">  
                                      <div class="box">
                                          <multiselect v-model="value" :options="searchOption"  placeholder="Выбрать страны"  
                                  @search-change="searchCal"
                                    :multiple="true"
                                    ></multiselect>
                                      </div>
                                </div>
                            </div>
                      </div>
      <div class="row">
        <div class="col-9">
            <div class="row">
                  <div class="col-3">
                     
                      <div class="row">
                        <counter class="col-12" value="+ 555">Вернулось за вчера</counter>
                      </div>
                      <div class="row">
                        <counter class="col-12" value="- 7984">Всего в мире</counter>
                      </div>
                    <div class="row">
                        <CounterList class="col-12" :value="ListCountry" >ТОП 5 стран с нашими абонентами</CounterList>
                      </div>
                  </div>
                  <div class="col-9">
                    <div class="containermap">  
                      <div class="charbox" >
                          <div class="box" >
                              <svg class="col-sm-12 map" ref="mapBox" ></svg>
                          </div>
                      </div>
                    </div>
                  </div>
            </div>
          <div class="row">
                
                <TourinstPerCountry class="col-xl-6  col-lg-6"></TourinstPerCountry>
                <TourinstChnaged class="col-xl-6 col-lg-6" > </TourinstChnaged>
          
            </div>


        </div>
        <div class="col-3">

                <div class="charbox">
                            <b-table 
                            :small=true
                            :items="tableCal"
                            :fields="fields"
                            responsive="sm"
                            :borderless=false 
                            sticky-header="700px"
                          >
                  <template v-slot:cell(value)="row">
                     <b-progress :value="row.value"  show-value height="20px"   variant="secondary"  :max="500"></b-progress>
                      </template>
                  </b-table>
              </div>
        </div>
      </div>
<div class="row">
</div>
   
</div>
</template>

<script>
import counter from "./charts/Counter"

import TourinstPerCountry from './charts/Worlds/TourinstPerCountry'

import TourinstChnaged from './charts/Worlds/TourinstChnaged'

import CounterList from "./charts/template/CounterList"

const d3 = require('d3');
// const topojson = require('topojson')

export default {
    name:'world1',
    components: {
          counter,
          TourinstPerCountry,
          TourinstChnaged,
        CounterList
    },
   data() {
      return {
            value:"",
            searchOption:[],
           sortBy: 'value',
          sortDesc: false,
          fields: [
            { key: 'country', label: 'Страна', sortable: true },
            { key: 'value', label: 'Абоненты', sortable: true },
      
          ],
      }
    },
    methods: {
        ListCountry: function(){
            return  window.countries_data.features.map(function(el){ 
                  return el.properties.name 
            }).slice(0,5);
        }, 
        tableCal(){
           
            return  window.countries_data.features.map(function(el){ 
                  return {country: el.properties.name , value:  Math.floor(Math.random()*500)}
            })
            
        } ,
      searchCal(){
           
            this.searchOption =   window.countries_data.features.map(function(el){ 
                  return el.properties.name 
            })
            
        } 
  },
   created() {
       
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

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped>


.state {
  fill: #ccc;
  stroke: #fff;
}
.state:hover {
  fill: #e4ecef;
}


.box{
  height: 100%;
}
.map {
     /* height:50vh ; */
     height: 100%; 
    background-color:#FFF;
}
.tooltip{
    background-color: #FFF;
}



.containermap{
  height: 100%;
  padding-bottom: 20px;
}


.charbox{
 display: block;
  /* margin:0 0 0 0 ;
  padding:5px 5px 0 5px ; */
  border:1px solid #EEE;
  /* background-color: #FFF; */
  box-shadow: 0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03), 0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03), 0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05), 0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03);
    width: 100%;
  height:100%;
  
}

</style>