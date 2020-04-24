<template>
  <div> 
    <div class="box">
      <BarChart :chart-data="datacollection" :height="200" :styles="myStyles" :options="options"></BarChart>
    </div>
  </div>
</template>

<script>
import BarChart from '../template/BarChart'
 var colors = ["#67001F",
                      "#B2182B",
                      "#D6604D",
                      "#F4A582",
                      "#FDDBC7",
                      "#E0E0E0",
                      "#BABABA",
                      "#878787",
                      "#4D4D4D",
                      "#1A1A1A"];
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
                gridLines: { display:false},
                // barThickness : 30     
         /*       categoryPercentage: 1.0,
            barPercentage: 1.0*/
            }],
              yAxes: [{
                  
                  // ticks: {
                  //     // max: 5,
                  //      min: 0,
                  //     stepSize: 10
                  // }
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
         var data = Array.apply(null, Array(30)).map(function (_, i) {
                  var d =  new Date( Date.now()- i * 24*60*60*1000);
                  return  d.getDate()+"."+(d.getMonth()+1)//+"."+d.getFullYear()
          })
        //data.reverce();
        this.datacollection = {
          labels: data.reverse(),
          datasets: [
            {
              label: 'Абоненты',
              backgroundColor: colors[0],
              data: data.map(function(k){   return {x:k,y: Math.floor(Math.random()*500)}     }),
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