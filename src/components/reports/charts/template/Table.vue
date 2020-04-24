<template>
    <div>
        <div class="box">
            <b-table 
                :small=true
                :items="getItems"
                :fields="getFields"
                responsive="sm"
                :borderless=false 
                :sticky-header="height">
                        <slot></slot>
            </b-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'tableBlock',
        props: {
            data: {type: Function}  ,
            height: {type: String}
        },
        computed: {
                getFields: function(){
                    
                    return this.data().fields ;
                },
                getItems: function(){

                    return this.data().items ;
                }
        }
    }
</script>