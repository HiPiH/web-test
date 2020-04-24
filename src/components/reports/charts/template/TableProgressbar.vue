<template>
    <div>
        <div class="box">
            <b-table 
                :small=true
                :items="getItems"
                :fields="getFields"
                responsive
                fixed
                :borderless=false :sticky-header="height"
>
                    <template v-slot:cell(value)="row">
                        <b-progress 
                                :value="row.value"  
                                show-value 
                                height="20px"   
                                variant="secondary"  
                                :max="500">
                        </b-progress>
                    </template>
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