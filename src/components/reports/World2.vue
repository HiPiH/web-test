<template>
 <div class="container-fluid ">
   

 <div class="row  counterline">
      <counter class="col-lg-3 offset-lg-1 col-xl-2 offset-xl-2  " value="+15">Количество вернувшихся на сегодня</counter>
      <counter class="col-lg-3 offset-lg-1 col-xl-2 offset-xl-1 " value="1024">Количество вернувшихся за последние 14 дней </counter>
      <counter class="col-lg-3 offset-lg-1 c col-xl-2 offset-xl-1 " value="-20%">Из них соблюдают карантин  </counter>
  </div>

  <div class="row  line">
 

      <div class="col-xl-6  col-lg-12" > 
           <div class="charbox">
              <BarCHars class="box" :chart-data="datacollection" :height="200" :styles="myStyles"></BarCHars>
          </div>
          </div>

        <div class="col-xl-6 col-lg-12" > 
                 <div class="charbox">
              <LineChart class="box" :chart-data="datacollection" :height="200" :styles="myStyles"></LineChart>
            </div>
          </div>
  </div>  
   <div class="row  line" >
 

        <div class="col-xl-12 col-lg-12" > 
                 <div class="charbox">
              <LineChart class="box" :chart-data="datacollection" :height="200" :styles="myStyles"></LineChart>
              </div>
          </div>
  </div>  
</div>
</template>





<script >

import LineChart from './charts/LineChart'

import BarCHars from './charts/BarCHars'
import counter from "./charts/Counter"


export default { 
  components: {
      LineChart,
      counter,
      BarCHars
    },
  data () {
      return {
        datacollection: [null],
        height: 100
      }
    },
    mounted () {
      this.fillData()
    },
 computed: {
    myStyles () {
      return {
        height:100,
        position: 'relative'
      }
    }
  },
    methods: {
      fillData () {
        this.datacollection = {
          labels: [ "19.04.2020",  "20.04.2020",  "21.04.2020", "22.04.2020"],
          datasets: [
            {
              label: 'Австралия',
              backgroundColor: 'green',
              data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
            }, {
              label: 'Австрия',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
            }, {
              label: 'США',
              backgroundColor: 'orange',
              data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
            }, {
              label: 'Хорватия',
              backgroundColor: 'orange',
              data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
}
</script>










<style>



</style>