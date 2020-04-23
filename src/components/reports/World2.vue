<template>
<div>
 <D3BarChart :config="chart_config" :datum="chart_data"></D3BarChart>
</div>
</template>

<script >
import { D3BarChart } from 'vue-d3-charts';

export default {
  
 components: {
    D3BarChart,
  },
}
</script>