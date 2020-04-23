<template>
    <div  > 
           <div class="charbox">
              <BarChart class="box" :chart-data="datacollection" :height="100" :styles="myStyles"></BarChart>
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
              backgroundColor: 'yellow',
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