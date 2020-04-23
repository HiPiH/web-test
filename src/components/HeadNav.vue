<template>
   
        <div class="row headnav">
                <div class="navbar-nav mr-auto mt-2 mt-lg-0"></div>
                <div  class="form-inline my-2 my-lg-0"> 
                             <b-dropdown dropleft >
                            <template v-slot:button-content>
                              <b-icon icon="person-bounding-box" aria-hidden="true"></b-icon>&nbsp;Ivan
                            </template>
                            <b-dropdown-item href="#">An item</b-dropdown-item>
                            <b-dropdown-item href="#">Another item</b-dropdown-item>
                        </b-dropdown>
                </div>
        </div>
</template>

<script>
export default {
   name: "HeadNav"
}
</script>


<style>
.headnav{
    background-color: #FFF;
padding:10px;
height: 65px;
    border-bottom: 1px solid rgba(0,0,0,.0625)
}

</style>