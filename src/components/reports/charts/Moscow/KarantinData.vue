<template>
    <div> 
           <div class="charbox">
              <LineChart class="box" :chart-data="datacollection" :height="200" :styles="myStyles" :options="options"></LineChart>
          </div>
      </div>
</template>

<script>
import LineChart from '../template/LineChart'

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
      LineChart
    },
  data () {
      return {
        datacollection: {},
        options : {
          scales: {
            xAxes: [{
              
                //  barThickness : 30      /*       categoryPercentage: 1.0,sbarPercentage: 1.0*/
            }],
              yAxes: [{
                  // ticks: {
                  //     // max: 5,
                  //      min: 0,
                  //     stepSize: 50
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
        this.datacollection = {
          labels: data,
          datasets: [
            {
              label: 'Соблюдающих карантин',
              fill:false,
              backgroundColor: colors[0],
              borderColor:  colors[0],
              data: data.map(function(k){   return {x:k,y: Math.floor(Math.random()*500)}     }),
            },
            {
              label: 'Нарушают карантин',
              fill:false,
                 backgroundColor: colors[3],
              borderColor:  colors[3],
              data: data.map(function(k){   return {x:k,y: Math.floor(Math.random()*500)}     }),
            },
            {
              label: 'Работают',
              fill:false,
                 backgroundColor: colors[5],
              borderColor:  colors[5],
              data: data.map(function(k){   return {x:k,y: Math.floor(Math.random()*500)}     }),
            },
              {
              label: 'Всего',
              fill:false,
                backgroundColor: colors[7],
              borderColor:  colors[7],
              data: data.map(function(k){   return {x:k,y: Math.floor(Math.random()*500)}     }),
            }
          ]
        }
      },

    }
}
</script>