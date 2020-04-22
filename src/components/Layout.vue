<template>
  <div id="bodyReport" :class="[{'collapsed' : collapsed}]">

    <div class="container-fluid">
        <div class="row header-panel">
            xsdsd

        </div>
          <div class="row">
            <router-view />
        </div>
    </div>

    <sidebar-menu :menu="menu"
        :collapsed="collapsed"
        :show-one-child="true"
        width="250px"
        @toggle-collapse="onToggleCollapse"/>
  </div>
</template>



<script>

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
  background-color: #f2f4f7;
  color: #262626;
}
#bodyReport {
  padding-left: 260px;
}
#bodyReport.collapsed {
  padding-left: 60px;
}
.v-sidebar-menu .vsm-arrow:after{font-family: FontAwesome}
.v-sidebar-menu .collapse-btn:after {
content: "\f07e";
font-family: FontAwesome;
}
</style>