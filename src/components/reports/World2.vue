<template>
 <div class="container-fluid ">
   

 <div class="row  counterline">
      <counter class="col-lg-3 offset-lg-1 col-xl-2 offset-xl-2  " value="+15">Количество вернувшихся на сегодня</counter>
      <counter class="col-lg-3 offset-lg-1 col-xl-2 offset-xl-1 " value="1024">Количество вернувшихся за последние 14 дней </counter>
      <counter class="col-lg-3 offset-lg-1 c col-xl-2 offset-xl-1 " value="-20%">Из них соблюдают карантин  </counter>
  </div>

  <div class="row  line">
     <TourinstPerCountry class="col-xl-12  col-lg-12"></TourinstPerCountry>
  </div>  
   <div class="row  line" >
        <TourinstChnaged class="col-xl-12 col-lg-12" > </TourinstChnaged>
  </div>  
</div>
</template>



<script >



import counter from "./charts/Counter"


import TourinstPerCountry from './charts/Worlds/TourinstPerCountry'

import TourinstChnaged from './charts/Worlds/TourinstChnaged'


export default { 
  components: {
      counter,
      TourinstPerCountry,
      TourinstChnaged
    }
}
</script>










<style>



</style>