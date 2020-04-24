<template>
 <div class="container-fluid ">
    <div class="row">
        <div class="col-12">
            <div class="box">
                <multiselect 
                        v-model="searchCountrtValue" 
                        :options="searchOption"  
                        placeholder="Выбрать страны"  
                        @search-change="loadCoutnryForSearch"
                        :multiple="true"></multiselect>
            </div>
        </div>
      </div>
      <div class="row">
        <div class="col-9">
            <div class="row">
                  <div class="col-3">
                      <div class="row">
                        <counter class="col-12" value="+ 555">
                            Вернулось за вчера
                        </counter>
                      </div>
                      <div class="row">
                        <counter class="col-12" value="- 7984">
                            Всего в мире
                        </counter>
                      </div>
                    <div class="row">
                        <CounterList class="col-12" :value="ListCountryTop5" >
                            ТОП 5 стран с нашими абонентами
                        </CounterList>
                      </div>
                  </div>
                  <mapChart  class="col-9"
                    :coloredField=getColorForMap
                    :centerProjection=[0,0] 
                    urlData="/countries.geojson" >
                  </mapChart>

            </div>
          <div class="row">
                <TourinstPerCountry class="col-xl-6  col-lg-6">
                </TourinstPerCountry>
                <TourinstChnaged class="col-xl-6 col-lg-6" >
                </TourinstChnaged>
            </div>
        </div>

        <TableProgressbar class="col-3" :data="getDataTable" height="720px">
        </TableProgressbar>

      </div>   
</div>
</template>

<script>


import counter from "./charts/template/Counter"

import TourinstPerCountry from './charts/Worlds/TourinstPerCountry'

import TourinstChnaged from './charts/Worlds/TourinstChnaged'

import CounterList from "./charts/template/CounterList"

import mapChart from './charts/template/MapChart.vue'

import TableProgressbar from './charts/template/TableProgressbar'


export default {
    name:'world1',
    components: {

          counter,
          TourinstPerCountry,
          TourinstChnaged,
          CounterList,
          mapChart,
          TableProgressbar

    },
   data() {
      return {
            searchCountrtValue:"",
            searchOption:[]
      }
    },
    methods: {
        getDataTable: function(){
          return {
                      sortBy: 'value',
                      sortDesc: false,
                      fields: [
                                { key: 'country', label: 'Страна', sortable: true },
                                { key: 'value', label: 'Абоненты', sortable: true },
                              ],
                      items: window.countries_data.features.map(function(el){ 
                                    return {country: el.properties.name , value:  Math.floor(Math.random()*500)}
                              })

              }
        },

        ListCountryTop5: function(){
            return  window.countries_data.features.map(function(el){ 
                  return el.properties.name 
            }).slice(0,5);
        }, 

        loadCoutnryForSearch(){
            this.searchOption =   window.countries_data.features.map(function(el){ 
                  return el.properties.name 
            })
        } ,

        getColorForMap(){
              // console.log('From the child:', d);
              if(Math.random()< 0.5) return null;
              var r = function () { return 128+ Math.floor(Math.random()*128) };
              return "rgb("+r()+",0,0)";
        },

        getDataForMap(){
          return window.countries_data
        }
    }
}


</script>



<style scoped>

/* 
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
  border:1px solid #EEE;
  box-shadow: 0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03), 0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03), 0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05), 0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03);
    width: 100%;
  height:100%;
  
} */

</style>