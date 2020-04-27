
const axios = require('axios');

const state = {

  countries:{}

}

const getters = {


    getCountries(state) {
      return state.countries;
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
    getCountriesForSearch(state) {
      return Object.values(state.countries);
    },
    getCounter1(){
        return "+"+Math.floor(Math.random()*100) ;
    },
    getCounter2(){
        return "-" + Math.floor(Math.random()*100) ;
    },
    getCounter3(sate, getters){
        return getters.getCountriesForSearch.slice(0,5);
    },
    getTableCountry(sate, getters){
          return getters.getCountriesForSearch.map(function(el){ 
                        return {country:  el , value:  Math.floor(Math.random()*500)}
                  })
    },
    getChartN1(state,getter){
          var count = 45000;
          let ret = getter.getDate.map(function(k, i){
                    count =  count*((i > 15)?0.9:1.05);
                    return {
                          x:  k, 
                          y:  Math.floor( count )
                    } 
                }
          );
          return ret;
    }
   
}

const actions = {
    load ({ commit } )  {
          axios.get('/countries.json').then(
          function(data) { 
               commit('update', data.data);
          },
          function(data) { 
               console.error(data);
          }
      )
       
    }
}


const mutations = {
    update (state, countries) {
          state.countries = countries;
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations

}