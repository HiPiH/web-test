<template>
 <div class="container-fluid ">
    <div class="row">
          <div class="col-12"> 
                <div class="box">
                    <multiselect 
                        v-model="searchAOValue" 
                        :options="getAOsForSearch"  
                        placeholder="Районы"  
                        :multiple="true"  >
                    </multiselect>
                </div>
          </div>

    </div>
    <div class="row">
            <div class="col-6">
                <div class="box">

                      <MglMap 
                            container="map-test"
                            :accessToken="map.accessToken" 
                            :mapStyle.sync="map.mapStyle"
                            :zoom="map.zoom"
                            :center.sync="map.center">
                            <MglGeojsonLayer
                            :sourceId="map.geoJsonSource.id"
                            :source="map.geoJsonSource"
                            layerId="moscow"
                            :layer="map.geoJsonlayer"
                            />
                        </MglMap>
                   
                </div>
            </div>
    
        <div class="col-6">
            <div class="row">
                <div class="col-12">  
                    <b-form-datepicker v-model="selectedDate" 
                                    v-bind="labelsCalendar"
                                     today-button
                                    reset-button
                                    locale="ru"
                                    close-button></b-form-datepicker>
                </div>
            </div>
            
            <div class="row">
                <TablePSimple class="col-12" :data="getDataTable" height="750px">
                </TablePSimple>
            </div>
            <div class="row">
                  <counter class="col-6" :value="getCounter1">Лучший район по % соблюдающих карантин</counter>
                  <counter class="col-6" :value="getCounter2">Худший район по % соблюдающих карантин</counter>

            </div>
        </div>
    </div>
<div class="row">
                <KarantinData :optionsChart="getOptionChart1"  class="col-6"></KarantinData>
                <KarantinData :optionsChart="getOptionChart2"  class="col-6"></KarantinData>
 </div>
<div class="row">
                 <KarantinData :optionsChart="getOptionChart3"  class="col-6"></KarantinData>
                 <KarantinData :optionsChart="getOptionChart4"  class="col-6"></KarantinData>
 </div>
</div>
</template>
<script src="https://api.mapbox.com/mapbox-gl-js/v1.9.1/mapbox-gl.js"></script>

<script>


import counter from "./charts/template/Counter"

import KarantinData from './charts/Moscow/Sasha2v3.vue'

import TablePSimple from './charts/template/Table'


import Mapbox from "mapbox-gl";
import { MglMap, MglGeojsonLayer } from "vue-mapbox";


import { mapGetters,mapActions  } from 'vuex'


export default {
    name:'moscow1',
    components: {
      counter,
      MglMap,
      MglGeojsonLayer,   
      KarantinData,
      TablePSimple
    },
    computed: {
        ...mapGetters('moscow', [
            'getAOsForSearch',
            'getAOTop',
            'getCounter1',
            'getCounter2',
            'getDate',
            'getChartN1',
            'getChartN2'
        ]),
        
        getOptionChart1:function(){
            return {
                title:'Соблюдение карантина вернувшимися из зарубежных стран',
                yTitle:'Тысячи человек',
                datacollection:{
                    labels: this.getDate,
                    datasets: [
                        {
                            label: '% жителей, не соблюдающих карантин',
                            data:  this.getChartN1,
                            backgroundColor: "#67001F",
                            
                        },
                        {
                            label: 'Кол-во жителей Москвы на карантине',
                            data:  this.getChartN2,
                            backgroundColor: "#BABABA"
                            
                        }
                  ]
                }
            }
        },
        getOptionChart2:function(){
            return {
                title:'Соблюдение режима самоизоляции (% жителей, не выходящих из дома)',
                yTitle:'Тысячи человек',
                datacollection:{
                    labels: this.getDate,
                    datasets: [
                        {
                            label: '% жителей, не выходящих из дома',
                            data:  this.getChartN1,
                            backgroundColor: "rgba(49, 156, 21,100)",
                        },
                        {
                            label: 'Кол-во жителей района',
                            data:  this.getChartN2,
                            backgroundColor: "#BABABA"
                            
                        }
                  ]
                }
            }
        },
        getOptionChart3:function(){
            return {
                title:'Соблюдение режима самоизоляции (% жителей, выходящих на допустимое расстояние)',
                yTitle:'Тысячи человек',
                datacollection:{
                    labels: this.getDate,
                    datasets: [
                        {
                            label: '% жителей, выходящих на допустимое расстояние',
                            data:  this.getChartN1,
                            backgroundColor: "rgba(255, 160, 64,100)",
                            
                        },
                        {
                            label: 'Кол-во жителей района',
                            data:  this.getChartN2,
                            backgroundColor: "#BABABA"
                            
                        }
                  ]
                }
            }
        },
        getOptionChart4:function(){
            return {
                title:'Соблюдение режима самоизоляции (% жителей, посещающих работу)',
                yTitle:'Тысячи человек',
                datacollection:{
                    labels: this.getDate,
                    datasets: [
                        {
                            label: '% жителей, посещающих работу',
                            data:  this.getChartN1,
                            backgroundColor: "rgba(230, 122, 14,100)",
                            
                        },
                        {
                            label: 'Кол-во жителей района',
                            data:  this.getChartN2,
                            backgroundColor: "#BABABA"
                            
                        }
                  ]
                }
            }
        }
    },
    data() {
      return {
            map:{
                accessToken: "pk.eyJ1IjoiYmVlbGluZTIwMjAiLCJhIjoiY2s5ZWJ3c3pwMDBrazNzcGMwbDZzNzRvMyJ9.jDC5h8DOtNpMKESdXBnekQ",
                mapStyle: "mapbox://styles/mapbox/dark-v10",
                center: [37.611049, 55.773612],
                zoom: 8,
                geoJsonSource: {
                  id: 'moscow',
                  type: 'vector',
                  url: 'mapbox://beeline2020.5x2bac7r'
                },
                geoJsonlayer: {
                      'id': 'moscow',
                      'type': 'fill',
                      'source': 'moscow',
                      'source-layer': 'moscow-2d5ovk',
                      'layout': {},

                      'paint': {
                        'fill-opacity': 0.8,
                        'fill-color': [
                          'step',
                          ['get', 'covid'],
                          '#000000',
                          100, '#FFFFB2',
                          300, '#FECC5C',
                          500, '#FD8D3C',
                          700, '#F03B20',
                          900, '#BD0026',
                        ],
                        'fill-outline-color': '#ffffff'
                      }
                }
            },
            searchAOValue:null,
            selectedDate:null,
            labelsCalendar: {
                labelToday: 'Сегодня',
                labelNoDateSelected: 'Выберите дату',
                labelCalendar: 'Календарь',
                labelHelp: 'Выбериет дату',
                labelReset: 'x'

            }
      }
    },

    created() {
          this.loadAOS();
          this.mapbox = Mapbox;
    },

    methods: {
      ...mapActions('moscow',['loadAOS']),
      getDataForMap(){
        return window.countries_data
      },
      getDataTable: function(){
          return {
                sortBy: 'value',
                sortDesc: false,
                fields: [
                          { key: 'number', label: 'Рейтинг', sortable: true },
                          { key: 'name', label: 'Район', sortable: true },
                          { key: 'p1', label: '% соблюдающих ', sortable: true },
                          { key: 'p2', label: '% нарушающих ', sortable: true },

                        ],
              items: this.getAOTop
            }
      }
  }
}
</script>

<style>
    .mapboxgl-control-container{
        display:none;
    }
</style>
