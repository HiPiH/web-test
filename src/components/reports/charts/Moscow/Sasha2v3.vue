<template>
  <div> 
    <div class="box" style="padding:30px;">
      <BarChart :chart-data="datacollection" :height="200" :styles="myStyles" :options="options" ref="canvas"></BarChart>
    </div>
  </div>
</template>

<script>
import BarChart from '../template/BarChart'
//  var colors = ["#67001F",
//                       "#B2182B",
//                       "#D6604D",
//                       "#F4A582",
//                       "#FDDBC7",
//                       "#E0E0E0",
//                       "#BABABA",
//                       "#878787",
//                       "#4D4D4D",
//                       "#1A1A1A"];
export default { 
  props:{
        optionsChart:{type:Object, default: function() {  return {
                title:'title',
                yTitle:'yTitle',
                label:[]
            };}
        },
        data:{type:Function}
  },
  components: {
      BarChart
    },
  data () {
      return {
        datacollection: {},
        options : {
        animation: {
              duration: 0,
              onComplete: function () {
                  var chartInstance = this.chart,
                      ctx = chartInstance.ctx;
                  ctx.textAlign = 'center';
                  ctx.fillStyle = "rgba(0, 0, 0, 1)";
                  ctx.textBaseline = 'bottom';

                  this.data.datasets.forEach(function (dataset, i) {
                      var meta = chartInstance.controller.getDatasetMeta(i);
                      meta.data.forEach(function (bar, index) {
                          var data =  Math.floor(dataset.data[index].y / 1000);
                          ctx.fillText(data, bar._model.x, bar._model.y );

                      });
                  });
              }
          },
          scales: {
            xAxes: [{
                gridLines: { drawOnChartArea:false},
                stacked: true 
            }],
              yAxes: [{
                  stacked: true ,
                  gridLines: { drawOnChartArea:false},
                  scaleLabel: {
                    display: true,
                    labelString: this.optionsChart.yTitle
                  }
              }]
          },
          title: {
              display: true,
              text: this.optionsChart.title,
             titleAlign:'left'
          },
          legend: {
            display: true,
            position:"bottom"
          }
        }
      }
    },
    mounted () {
       this.datacollection =this.optionsChart.datacollection;
    },
 computed: {
    myStyles () {
      return {
      
        position: 'relative'
      }
    }
  }
}
</script>