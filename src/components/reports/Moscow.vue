<template>
 <div class="container-fluid ">
    <div class="row">
          <div class="col-12"> 
                <div class="box">
                    <multiselect 
                        v-model="searchAOValue" 
                        :options="lableAO"  
                        placeholder="Районы"  
                        :multiple="true" >
                    </multiselect>
                </div>
          </div>

    </div>
    <div class="row">
        <mapChart class="col-6"
            :coloredField=getColorForMap
            :centerProjection=[0,0] 
            urlData="/ao.geojson"
                :getData=getDataForMap ></mapChart>
    
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
                <KarantinData class="col-12"></KarantinData>
            </div>
            <div class="row">
                <TablePSimple class="col-12" :data="getDataTable" height="750px">
                </TablePSimple>
            </div>
            <div class="row">
                  <counter class="col-6" value="10%">Лучший район по % соблюдающих карантин</counter>
                  <counter class="col-6" value="75%">Худший район по % соблюдающих карантин</counter>

            </div>
        </div>
    </div>

</div>
</template>

<script>


import counter from "./charts/template/Counter"

import mapChart from './charts/template/MapChart.vue'

import KarantinData from './charts/Moscow/KarantinData.vue'

import TablePSimple from './charts/template/Table'


export default {
    name:'moscow1',
    components: {
        mapChart,
        counter,
        KarantinData,
        TablePSimple
    },
   data() {
      return {
            lableAO: ["ЦАО","ЮВАО","ЮЗАО","САО"],
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
    methods: {
      getColorForMap(d){
          console.log('From the child:', d);
            if(Math.random()< 0.5) return null;
            var r = function () { return 128+ Math.floor(Math.random()*128) };
            return "rgb("+r()+",0,0)";
      },
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
                      items: this.lableAO.map(function(f,i){ 
                                  var p = Math.floor(Math.random()*100);
                                  return {
                                            number: i+1 ,
                                            name:f   ,
                                            p1: p,
                                            p2: 100-p 
                                  };
                              })

              }
        }
  }
}


</script>
