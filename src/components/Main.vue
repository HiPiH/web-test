<template>

  <div id="bodyReport" :class="[{'collapsed' : collapsed}]">

    <div class="container-fluid">
      <HeadNav class="row header-panel"> </HeadNav>
       <div class="container-fluid" >
            <div class="row main-view-report">
                <router-view />
            </div>
       </div>
    </div>
    <sidebar-menu 
        :menu="menu"
        :collapsed="collapsed"
        :show-one-child="true"
        width="250px"
        @toggle-collapse="onToggleCollapse"/>
  </div> 
</template>







<script>
  import HeadNav from "./HeadNav"
  export default {
   
    data() {
              return {
                  menu: [
                      {
                          header: true,
                          title: 'Beeline vs COVID-19',
                          hiddenOnCollapse: true
                      },
                      {
                   
                          title: 'Весь мир',
                          child: [
                              {
                                  href: '/world/map',
                                  title: 'Карта'

                              },
                              {
                                  href: '/world/table',
                                  title: 'Сводная информация'
                              }
                          ],
                          icon: 'fa fa-globe'
                      },
                      {
             
                          title: 'Россия',
                          icon: 'fas fa-ruble-sign',
                          child: [
                              {
                                  title: 'Москва',
                                    child: [
                                    {
                                        href: '/russia/moscow/map',
                                        title: 'Карта'

                                    },
                                    {
                                        href: '/world/table',
                                        title: 'Сводная'
                                    }
                                ],
                              }
                          ],
                      }
                  ],
                  collapsed: false
            }
  },
 components:{
      HeadNav
    },
  methods: {
    onToggleCollapse (collapsed) {
      console.log(collapsed)
      this.collapsed = collapsed
    }
  }
} 
</script>





<style>

body,
html {
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 18px;
  background-color: #f5f5f5!important;
  color: #262626;
}
#bodyReport {
  padding-left: 250px;
}
#bodyReport.collapsed {
  padding-left: 50px;
}
.v-sidebar-menu .vsm-arrow:after{font-family: FontAwesome}
.v-sidebar-menu .collapse-btn:after {
content: "\f07e";
font-family: FontAwesome;
}

.header-panel{

  /* -webkit-box-shadow: 0 0 11px 0px rgba(0,0,0,0.50);
  -moz-box-shadow: 0 0 11px 0px rgba(0,0,0,0.50);
  box-shadow: 0 0 11px 0px rgba(0,0,0,0.50);
   */
}
.main-view-report{ 
  margin:20px;

}
.vsm--header{}
</style>