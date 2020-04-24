<template>
    <div> 
           <div class="charbox">
              <LineChart class="box" :chart-data="datacollection" :height="200" :styles="myStyles" :options="options"></LineChart>
          </div>
      </div>
</template>

<script>
import LineChart from '../template/LineChart'



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
              
                 barThickness : 30      /*       categoryPercentage: 1.0,
            barPercentage: 1.0*/
            }],
              yAxes: [{
                  ticks: {
                      // max: 5,
                       min: 0,
                      stepSize: 50
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
        var data = Array.apply(null, Array(5)).map(function (_, i) {
                  var d =  new Date( Date.now()+ i * 24*60*60*1000);
                  return  d.getDate()+"."+(d.getMonth()+1)+"."+d.getFullYear()
          })
        this.datacollection = {
          labels: data,
          datasets: [
            {
              label: 'Соблюдающих карантин',
              fill:false,
              backgroundColor: 'rgb(0,0,200,0.5)',
              borderColor:  'rgb(0,0,200,0.5)',
              data: data.map(function(k){   return {x:k,y: Math.floor(Math.random()*500)}     }),
            },
            {
              label: 'Нарушают карантин',
              fill:false,
              backgroundColor: 'rgb(0,200,0,0.5)',
              borderColor: 'rgb(0,200,0,0.5)',
              data: data.map(function(k){   return {x:k,y: Math.floor(Math.random()*500)}     }),
            },
            {
              label: 'Работают',
              fill:false,
              backgroundColor: 'rgb(200,0,0,0.5)',
              borderColor: 'rgb(200,0,0,0.5)',
              data: data.map(function(k){   return {x:k,y: Math.floor(Math.random()*500)}     }),
            },
              {
              label: 'Всего',
              fill:false,
              backgroundColor: 'rgb(200,0,200,0.5)',
              borderColor: 'rgb(200,0,200,0.5)',
              data: data.map(function(k){   return {x:k,y: Math.floor(Math.random()*500)}     }),
            }
          ]
        }
      },

    }
}
</script>