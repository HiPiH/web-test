<script>

import {  mixins, Bar } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Bar,
  mixins: [reactiveProp],
  props: ['options'],
  mounted () {
    this.renderChart(this.chartData,  {
      maintainAspectRatio:false
    })
  }
}

</script>

<style scoped>

.charbox{
 display: block;
  /* margin:0 0 0 0 ;
  padding:5px 5px 0 5px ; */
  border:1px solid #EEE;
  /* background-color: #FFF; */
  box-shadow: 0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03), 0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03), 0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05), 0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03);
    width: 100%;
  height:100%;
  
}

.box {
  border:1px solid #EEE;
  box-shadow: 0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03), 0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03), 0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05), 0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03);
  width: 100%;
  height: 100%;
  background-color: #FFF;
}
</style>