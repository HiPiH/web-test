<template>
    <div  > 
           <div class="charbox">
              <BarChart class="box" :chart-data="datacollection" :height="200" :styles="myStyles" :options="options"></BarChart>
          </div>
      </div>
</template>

<script>
import BarChart from '../template/BarChart'

export default { 
  components: {
      BarChart
    },
  data () {
      return {
        datacollection: {},
        options : {
          scales: {
            xAxes: [{
              
                 barThickness : 30      /*       categoryPercentage: 1.0,
            barPercentage: 1.0*/
            }],
              yAxes: [{
                  ticks: {
                      // max: 5,
                       min: 0,
                      stepSize: 1
                  }
              }]
          },

          title: {
              display: true,
              text: 'Количество вернувшихся абонентов'
          },
          legend: {
            display: true,
            position:"bottom"
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
              backgroundColor: 'rgb(0,0,200,0.5)',
              data: [10, 8, 6 ,4 ],
              trendlineLinear: {
                              style: "black",
                              lineStyle: "dotted",
                              width: 1,

                          }
            }
          ]
        }
      },

    }
}
</script>