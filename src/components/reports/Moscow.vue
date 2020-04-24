<template>
 <div class="container-fluid ">
    <div class="row">

        <div class="col-6">
            <mapChart 
                :coloredField=getColor
                :centerProjection=[0,0] 
                urlData="/ao.geojson"
                 :getData=getData ></mapChart>
        </div>
        <div class="col-6">
            <div class="row">
                  <div class="col-6">  
                      <b-form-datepicker v-model="selectedDate" 
                                      v-bind="labelsCalendar"
                                       today-button
                                      reset-button
                                      locale="ru"
                                      close-button></b-form-datepicker>
                  </div>
                  <div class="col-6"> 
                      <div class="containermap">  
                            <div class="box">
                                <multiselect v-model="value" :options="searchOption"  placeholder="Районы"  
                                  @search-change="searchCal"
                                    :multiple="true"
                                    ></multiselect>
                            </div>
                      </div>

                  </div>

            </div>
            <div class="row">
                    <KarantinData class="col-xl-12  col-lg-12"></KarantinData>
         

            </div>
            <div class="row">
              
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
            <div class="row">
                  <counter class="col-6" value="10%">Лучший район по % соблюдающих карантин</counter>
                  <counter class="col-6" value="75%">Худший район по % соблюдающих карантин</counter>

            </div>
        </div>
    </div>

</div>
</template>

<script>


import counter from "./charts/Counter"

import mapChart from './charts/template/MapChart.vue'

import KarantinData from './charts/Moscow/KarantinData.vue'

export default {
    name:'moscow1',
    components: {
        mapChart,
        counter,
        KarantinData
    },
   data() {
      return {
            searchOption:[],
            selectedDate:null,
            labelsCalendar: {

                labelToday: 'Сегодня',
                labelNoDateSelected: 'Выберите дату',
                labelCalendar: 'Календарь',
                labelHelp: 'Выбериет дату',
                labelReset: 'x'

            },
            fields: [
              { key: 'number', label: 'Рейтинг', sortable: true },
              { key: 'name', label: 'Район', sortable: true },
              { key: 'p1', label: '% соблюдающих ', sortable: true },
              { key: 'p2', label: '% нарушающих ', sortable: true },

            ],
           
      }
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
       },
       searchCal(){
          this.searchOption =   window.countries_data.features.map(function(el){ 
                return el.properties.name 
          })
       },
      tableCal(){
            var lable = ["ЦАО","ЮВАО","ЮЗАО","САО"];
            return lable.map(function(f,i){ 
                  var p = Math.floor(Math.random()*100);
                  return {
                            number: i+1 ,
                            name:f   ,
                            p1: p,
                            p2: 100-p 
                   };
              });
            
        } ,
  }
}


</script>



<style>

.charbox .table{
  width: 100%;
}
.charbox {
    width: 100%;
   
}
</style>