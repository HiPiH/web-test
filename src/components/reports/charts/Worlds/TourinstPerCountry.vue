<template>
    <div> 
      <div class="box">
        <BarChart  :chart-data="datacollection" :height="200" :styles="myStyles"  :options="options"></BarChart>
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

	// 	function colorize(d) {
  // console.log(d)
       
  //      return colors[d.day];
  //    //   console.log(arguments)
	// 		// var v = ctx.dataset.data[ctx.dataIndex];
  //     // console.log(v);
	// 		// var c = v < -50 ? '#D60000'
	// 		// 	: v < 0 ? '#F46300'
	// 		// 	: v < 50 ? '#0358B6'
	// 		// 	: '#44DE28';

	// 		// return c;
  //         // var r = function () { return 128+ Math.floor(Math.random()*128) };

  //         // return "rgb("+r()+","+r()+","+r()+",0.7)";
	// 	}
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
                   gridLines: { display:false},
              
                
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
                      backgroundColor: colors.concat(colors).concat(colors).concat(colors).concat(colors).concat(colors).concat(colors),
                      borderColor: colors.concat(colors).concat(colors).concat(colors).concat(colors).concat(colors).concat(colors),
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
        var data = Array.apply(null, Array(30)).map(function (_, i) {
                  var d =  new Date( Date.now()- i * 24*60*60*1000);
                 // return  d.getDate()+"."+(d.getMonth()+1)//+"."+d.getFullYear()
                  return  d;
          }).reverse();
        this.datacollection = {
          labels: data.map(function(d){ return  d.getDate()+"."+(d.getMonth()+1);}),
          datasets: [
            {
              label:  "Всего",
            //  backgroundColor: 'rgb(100,100,100,0.5)',
              //backgroundColor: _. ["red", "blue", "green", "blue", "red", "blue"],
              data: data.map(function(k){   return {x:k.getDate()+"."+(k.getMonth()+1), y: Math.floor(Math.random()*500), day: k.getDay()}     })
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