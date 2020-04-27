
const axios = require('axios');

const state = {

  aos:[]

}

const getters = {


    getAOs(state) {
      if(state.aos.features)
        return state.aos.features;
      return [];
    },
    getAOsForSearch(state,getters) {
      return getters.getAOs.map(function(ao){ return ao.properties.NAME });
    },
    getAOTop(state, getters) {
       return getters.getAOs.map(function(ao, i){ 
              let c = Math.floor(Math.random()*100);
              return {
                      number: i+1 ,
                      name: ao.properties.NAME,
                      p1: c,
                      p2: 100-c 
              }
            }
        ).slice(0,5);
    },
    getCounter1(){
        return Math.floor(Math.random()*100) + "%";
    },
    getCounter2(){
        return Math.floor(Math.random()*100) + "%";
    },
    getDate(){
      return Array.apply(null, Array(30)).map(function (_, i) {
                  var d =  new Date( Date.now()- i * 24*60*60*1000);
                  var d1 =  d.getDate()
                  if((""+d1).length == 1 ) d1 = "0"+d1;
                  var d2 =  d.getMonth()+1
                  if((""+d2).length == 1 ) d2 = "0"+d2;
                  return  d1+"."+d2
          }).reverse();
    },
    getChartN1(state,getter){
          var count = 45000;
          let ret = getter.getDate.map(function(k, i){
                    count =  count*((i > 15)?0.9:1.05);
                    return {
                          x:  k, 
                          y:  Math.floor( count * Math.random()*0.2)
                    } 
                }
          );
          return ret;
    },
    getChartN2(state,getter){
          var count = 45000;
          return getter.getDate.map(function(k, i){
                    count =  count*((i > 15)?0.9:1.05);
                    return {
                          x:  k, 
                          y:  Math.floor( count )
                    } 
                }
          );
    }
   
}

const actions = {
    loadAOS ({ commit } )  {
        axios.get('/moscow.geojson').then(
          function(data) { 
               commit('upadateAOS', data.data);
          },
        function(data) { 
               console.error(data);
          }
      )
       
    }
}


const mutations = {
    upadateAOS (state, aos) {
          state.aos = aos;
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations

}