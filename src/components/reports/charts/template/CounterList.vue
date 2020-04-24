<template>
    <div>
        <div class="box counter">
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
.counter .value{
    text-align: center;
    font-size:1vw;
}

.counter .listitem{
    height: 30px;
}
</style>