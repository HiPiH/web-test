<template>
    <div>
        <div class="counter">
            <div class="box">
                <h6 class="lh-1"><slot></slot></h6>
                <div class="value ">
                  <div class="list">
                    <div v-for="(item,index) in getValues" :key="index" class="listitem">
                         {{item}}
                    </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:'CounterList',
    props: ['value'],
    computed: {
       getValues: function(){
            var val = this.value;
            if(this.value instanceof Function)
                val =  this.value();
            return val;
        }
    }
}

</script>

<style scoped>

.counter{
    padding-bottom:20px;
}

.counter .list .listitem{
    line-height: 35px;
}
.counter h6{
    font-size:0.7vw;
    padding: 5px 0 10px 0px;
    font-family: Roboto,-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Arial,sans-serif;
    color: #72777a;
    text-align: center;
    height: 30px;
    
}
.counter .green {
      color: #4caf50!important;
}

.counter .red {
        color: #f44336!important;
}

.counter .value{
    text-align: center;
    font-size:1vw;
}


.box {
  border:1px solid #EEE;
  box-shadow: 0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03), 0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03), 0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05), 0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03);
  width: 100%;
  height: 100%;
  background-color: #FFF;
}


</style>