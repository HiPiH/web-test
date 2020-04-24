<template>
    <div>
        <div class="box counter">
            
            <h6 class="lh-1"><slot></slot></h6>
            <div class="value "  v-bind:class="getTypeCounter" > {{value}}</div>
        </div>
    </div>
</template>

<script>

export default {
    name:'counter',
    props: ['value'],
    computed: {
        getTypeCounter () {
            

            if(this.value.trim()[0] == '+')
                return "green";
            if(this.value.trim()[0] == '-')
                return "red";
            return "";
        }
    }
}

</script>

