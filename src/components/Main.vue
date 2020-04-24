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
                          title: "",// 'Beeline vs COVID-19',
                          hiddenOnCollapse: true
                      },
                      {
                          title: 'Москва',
                          icon: 'fas fa-ruble-sign',
                          href: '/russia/moscow/map'
                      },
                      {
                          title: 'Зарубежом',
                           icon: 'fa fa-globe',
                          href: '/world/map'
                      }
                      //   ,
                      // {
                   
                      //     title: 'Весь мир',
                      //     child: [
                      //         {
                      //             href: '/world/map',
                      //             title: 'Карта'

                      //         },
                      //         {
                      //             href: '/world/table',
                      //             title: 'Сводная информация'
                      //         }
                      //     ],
                      //     icon: 'fa fa-globe'
                      // },
                      // {
             
                      //     title: 'Россия',
                      //     icon: 'fas fa-ruble-sign',
                      //     child: [
                      //         {
                      //             title: 'Москва',
                      //               child: [
                      //               {
                      //                   href: '/russia/moscow/map',
                      //                   title: 'Карта'

                      //               },
                      //               {
                      //                   href: '/russia/moscow/table',
                      //                   title: 'Сводная'
                      //               }
                      //           ],
                      //         }
                      //     ],
                      // }
                  ],
                  collapsed: false,

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
  height:100%;
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
  margin-bottom:20px;
  /* -webkit-box-shadow: 0 0 11px 0px rgba(0,0,0,0.50);
  -moz-box-shadow: 0 0 11px 0px rgba(0,0,0,0.50);
  box-shadow: 0 0 11px 0px rgba(0,0,0,0.50); */
  
}
.main-view-report{ 
  /* margin:20px; */

}
.main-view-report .row{
  margin-bottom: 20px;
}
.main-view-report .row:last-child, .row:only-child {
  margin-bottom: 0px;
}

.main-view-report .container-fluid {
  height: 100%;
}

.main-view-report .b-table {
  font-size: 0.7rem;
}

.b-table-sticky-header, .table-responsive, [class*="table-responsive-"] {
  margin-bottom: 0px;
}



.main-view-report .box {
  border:1px solid #EEE;
  box-shadow: 0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03), 0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03), 0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05), 0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03);
  width: 100%;
  height: 100%;
  background-color: #FFF;
} 


.main-view-report .box svg {
  height: 100%;
}

.form-controll{

font-size: 0.7rem

}

/*counters*/

.counter{
    padding-bottom:20px;
}
.counter h6{
    font-size:0.7rem;
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
    font-size:2vw;
}

/************************* */


</style>