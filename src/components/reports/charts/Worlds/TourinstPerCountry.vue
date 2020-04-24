<template>
    <div  > 
           <div class="charbox">
              <BarChart class="box" :chart-data="datacollection" :height="200" :styles="myStyles"  :options="options"></BarChart>
          </div>
      </div>
</template>

<script>
import BarChart from '../template/BarChart'



		function colorize() {
     //   console.log(arguments)
			// var v = ctx.dataset.data[ctx.dataIndex];
      // console.log(v);
			// var c = v < -50 ? '#D60000'
			// 	: v < 0 ? '#F46300'
			// 	: v < 50 ? '#0358B6'
			// 	: '#44DE28';

			// return c;
          var r = function () { return 128+ Math.floor(Math.random()*128) };

          return "rgb("+r()+","+r()+","+r()+",0.7)";
		}
// function addDays(theDate, days) {
//     return new Date(theDate.getTime() + days*24*60*60*1000);
// }
export default { 
  components: {
      BarChart
    },
  data () {
      return {
        datacollection: {},
        height: 100,
        options : {
          
					responsive: true,
          scales: {
            xAxes: [{
                  barThickness : 30  ,
                  type:       "time",
                    time:       {
                        format: 'DD.MM.YYYY',
                        tooltipFormat: 'll'
                    }
            }]
        
              // yAxes: [{
              //     ticks: {
              //         // max: 5,
              //          min: 0,
              //         stepSize: 1
              //     }
              // }]
          },
          elements: {
                  rectangle: {
                    backgroundColor: colorize.bind(null, false),
                     borderColor: colorize.bind(null, true),
                    borderWidth: 1
                  }
                },
          title: {
              display: true,
              text: 'Количество вернувшихся на карантине'
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
          //labels: ["16.04.2020","17.04.2020","18.04.2020", "19.04.2020",  "20.04.2020",  "21.04.2020", "22.04.2020"],
          datasets: [
            {
              label:  "Всего",
            //  backgroundColor: 'rgb(100,100,100,0.5)',
              data: [
                                    {y : this.getRandomInt(),x:"14.04.2020"},
                                     {y : this.getRandomInt(),x:"15.04.2020"},
                                     {y : this.getRandomInt(),x:"16.04.2020"},
                                    {y : this.getRandomInt(),x:"17.04.2020"},
                                    {y : this.getRandomInt(),x:"18.04.2020"}, 
                                    {y : this.getRandomInt(),x:"19.04.2020"}, 
                                    {y : this.getRandomInt(),x:"20.04.2020"}, 
                                    {y : this.getRandomInt(),x:"21.04.2020"}, 
                                    // {x : this.getRandomInt(),y:"22.04.2020"}
                ] 
// ,
//               trendlineLinear: {
//                               style: "black",
//                               lineStyle: "dotted",
//                               width: 1,

//                           }
            },

          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
}
</script>