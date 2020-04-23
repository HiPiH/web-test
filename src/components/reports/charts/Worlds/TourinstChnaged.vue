<template>
    <div  > 
           <div class="charbox">
              <BarChart class="box" :chart-data="datacollection" height="100" :styles="myStyles" :options="options"></BarChart>
          </div>
      </div>
</template>

<script>
import BarChart from '../template/BarChart'


export default { 
  components: {
      BarChart
    },
   props: ['height'],
  data () {
      return {
        datacollection: [null],
        options : {
          scales: {
              yAxes: [{
                  ticks: {
                      // max: 5,
                       min: 0,
                      stepSize: 1
                  }
              }]
          }
        }
      }
    },
    mounted () {
      this.fillData()
    },
 computed: {
    myStyles () {
      return {
      
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
              label: 'Абоненты',
              backgroundColor: 'blue',
              data: [10, 8, 6 ,4 ],

            },
          {
              label: 'Linear (Абоненты)',
              backgroundColor: 'green',
              data: [10, 8, 6 ,4 ],
              type: 'line',
              fill: false,
              
            }
          ]
        }
      },

    }
}
</script>