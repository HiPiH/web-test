<template>
 <div class="container-fluid ">
    <div class="row">
        <div class="col-12">
            <div class="box">
                <multiselect 
                        v-model="searchCountrtValue" 
                        :options="getCountriesForSearch"  
                        placeholder="Выбрать страны"  
                        :multiple="true"></multiselect>
            </div>
        </div>
      </div>
      <div class="row">
        <div class="col-9">
            <div class="row">
                  <div class="col-3">
                      <div class="row">
                        <counter class="col-12" :value="getCounter1">
                            Вернулось за вчера
                        </counter>
                      </div>
                      <div class="row">
                        <counter class="col-12" :value="getCounter2">
                            Всего в мире
                        </counter>
                      </div>
                    <div class="row">
                        <CounterList class="col-12" :value="getCounter3" >
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
                <KarantinData  :optionsChart="getOptionChart1" class="col-xl-12  col-lg-12">
                </KarantinData>
            
            </div>
        </div>

        <TableProgressbar class="col-3" :data="getDataTable" height="960px">
        </TableProgressbar>

      </div>   
</div>
</template>

<script>


import counter from "./charts/template/Counter"

import KarantinData from './charts/Moscow/Sasha2v3.vue'

import CounterList from "./charts/template/CounterList"

import mapChart from './charts/template/MapChart.vue'

import TableProgressbar from './charts/template/TableProgressbar'

import { mapGetters,mapActions  } from 'vuex'


export default {
    name:'world1',
    components: {

          counter,
          KarantinData,
          CounterList,
          mapChart,
          TableProgressbar

    },
   computed: {
        ...mapGetters('world', [
            'getCountriesForSearch',
            'getCounter1',
            'getCounter2',
            'getCounter3',
            'getTableCountry',
            'getDate',
            'getChartN1'
        ]),
        getOptionChart1:function(){
              return {
                  title:'Количество жителей Москвы, возвращающихся из зарубежных стран',
                  yTitle:'Тысячи человек',
                  datacollection:{
                      labels: this.getDate,
                      datasets: [
                                  {
                                      label: 'Абоненты',
                                      backgroundColor: "#67001F",
                                      data:  this.getChartN1,
                                      trendlineLinear: {
                                                      style: "black",
                                                      lineStyle: "dotted",
                                                      width: 1,

                                                  }
                                    }
                        ]
          
                  }
              }
          }
    },
   data() {
      return {
            searchCountrtValue:""
      }
    },
   created() {
          this.loadStore();
    },

    methods: {
       ...mapActions('world',{
                loadStore:'load'
        }),
        getDataTable: function(){
          return {
                      sortBy: 'value',
                      sortDesc: false,
                      fields: [
                                { key: 'country', label: 'Страна', sortable: true },
                                { key: 'value', label: 'Абоненты', sortable: true },
                              ],
                      items: this.getTableCountry

              }
        },

        getColorForMap(){
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

