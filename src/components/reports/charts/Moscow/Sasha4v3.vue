<template>
  <div> 
    <div class="box" style="padding:30px;">
      <BarChart :chart-data="datacollection" :height="200" :styles="myStyles" :options="options" ref="canvas"></BarChart>
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
                // barThickness : 30     
         /*       categoryPercentage: 1.0,
            barPercentage: 1.0*/
            }],
              yAxes: [{
                  stacked: true ,
                  gridLines: { drawOnChartArea:false},
                  scaleLabel: {
                    display: true,
                    labelString: 'Тысячи человек'
                  }
                  // ticks: {
                  //     // max: 5,
                  //      min: 0,
                  //     stepSize: 10
                  // }
              }]
          },

          title: {
              display: true,
              text: 'Соблюдение режима самоизоляции (% жителей, выходящих на допустимое расстояние)',
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
                  var d1 =  d.getDate()
                  if((""+d1).length == 1 ) d1 = "0"+d1;
                  var d2 =  d.getMonth()+1
                  if((""+d2).length == 1 ) d2 = "0"+d2;
                  return  d1+"."+d2
                  //+"."+d.getFullYear()
          }).reverse();

        this.gradient = this.$refs.canvas.$refs.canvas.getContext("2d").createLinearGradient(0, 0, 0, 450);
        this.gradient.addColorStop(0, "rgba(255, 160, 64,100)");
        this.gradient.addColorStop(0.5, "rgba(255, 160, 64, 0.75)");
        this.gradient.addColorStop(1, "rgba(255, 160, 64, 0.50)");
        var count = 45000;
        var count2 = 45000;
        this.datacollection = {
          labels: data.reverse(),
          datasets: [
            
       {
              label: '% жителей, выходящих на допустимое расстояние',
               backgroundColor: this.gradient ,
               data: data.map(function(k, i ){
                   //console.log(data[i])  
                  
                    if(i > 15)
                    {
                      count2 = count2*0.9;
                    }else{
                         count2 = count2*1.05;
                    }
                   return {
                        x:k, 
                        y:  Math.floor(count2*Math.random()*0.3)
                   } // Math.floor(Math.random()*500)}    
              },
            
              )
         
            },{
              label: 'Количество жителей района',
               backgroundColor:colors[6],
               data: data.map(function(k, i ){
                   //console.log(data[i])  
                  
                    if(i > 15)
                    {
                      count = count*0.9;
                    }else{
                         count = count*1.05;
                    }
                   return {
                        x:k, 
                        y:  Math.floor(count)
                   } // Math.floor(Math.random()*500)}    
              },
            
              )
         
            },
          ]
        }
      },

    }
}
</script>