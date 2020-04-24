<template>
 <div class="container-fluid ">
    <div class="row">
        <div class="col-12">
            <div class="box">
                <multiselect 
                        v-model="searchCountrtValue" 
                        :options="searchOption"  
                        placeholder="Выбрать страны"  
                        @search-change="loadCoutnryForSearch"
                        :multiple="true"></multiselect>
            </div>
        </div>
      </div>
      <div class="row">
        <div class="col-9">
            <div class="row">
                  <div class="col-3">
                      <div class="row">
                        <counter class="col-12" value="+ 555">
                            Вернулось за вчера
                        </counter>
                      </div>
                      <div class="row">
                        <counter class="col-12" value="- 7984">
                            Всего в мире
                        </counter>
                      </div>
                    <div class="row">
                        <CounterList class="col-12" :value="ListCountryTop5" >
                            ТОП 5 стран с нашими абонентами
                        </CounterList>
                      </div>
                  </div>
                  <mapChart  class="col-9"
                    :coloredField=getColorForMap
                    :centerProjection=[0,0] 
                    urlData="/countries.geojson" >
                  </mapChart>

            </div>
          <div class="row">
                <Sasha1v3 class="col-xl-12  col-lg-12">
                </Sasha1v3>
            
            </div>
        </div>

        <TableProgressbar class="col-3" :data="getDataTable" height="960px">
        </TableProgressbar>

      </div>   
</div>
</template>

<script>


import counter from "./charts/template/Counter"

// import TourinstPerCountry from './charts/Worlds/TourinstPerCountry'

// import TourinstChnaged from './charts/Worlds/TourinstChnaged'

import Sasha1v3 from './charts/Worlds/Sasha1v3'

import CounterList from "./charts/template/CounterList"

import mapChart from './charts/template/MapChart.vue'

import TableProgressbar from './charts/template/TableProgressbar'
// import func from '../../../vue-temp/vue-editor-bridge'


function countriesToRus(name){
  var dict = {"great britain":"великобритания",
"ethiopia":"эфиопия",
"croatia":"хорватия",
"venezuela":"венесуэла",
"azerbaijan":"азербайджан",
"cyprus":"кипр",
"monaco":"монако",
"tanzania":"танзания",
"bangladesh":"бангладеш",
"saudi arabia":"саудовская аравия",
"slovakia":"словакия",
"finland":"финляндия",
"myanmar":"мьянма",
"denmark":"дания",
"mali":"мали",
"france":"франция",
"liberia":"либерия",
"usa":"сша",
"ecuador":"эквадор",
"turkey":"турция",
"new zealand":"новая зеландия",
"jordan":"иордания",
"greece":"греция",
"taiwan":"тайвань",
"channel islands":"нормандские о.",
"bulgaria":"болгария",
"lithuania":"литва",
"french west india":"французская западная индия",
"spain":"испания",
"sierra leone":"сьерра-леоне",
"cape verde":"кабо верде",
"central african republic":"центральноафриканская республика",
"bolivia":"боливия",
"kosovo":"косово",
"salvador":"сальвадор",
"kazakhstan":"казахстан",
"portugal":"португалия",
"algeria":"алжир",
"yemen":"йемен",
"macau":"макао",
"china":"китай",
"malaysia":"малайзия",
"uzbekistan":"узбекистан",
"japan":"япония",
"guinea bissau":"гвинея-биссау",
"senegal":"сенегал",
"belgium":"бельгия",
"dem. rep. congo":"дем. респ. конго",
"guinea":"гвинея",
"uae":"оаэ",
"uganda":"уганда",
"cambodia":"камбоджа",
"latvia":"латвия",
"pakistan":"пакистан",
"south africa":"юар",
"luxembourg":"люксембург",
"norway":"норвегия",
"zambia":"замбия",
"qatar":"катар",
"puerto rico":"пуэрто-рико",
"mozambique":"мозамбик",
"ghana":"гана",
"angola":"ангола",
"mongolia":"монголия",
"tajikistan":"таджикистан",
"botswana":"ботсвана",
"philippines":"филиппины",
"honduras":"гондурас",
"uruguay":"уругвай",
"togo":"того",
"canada":"канада",
"kuwait":"кувейт",
"liechtenstein":"лихтенштейн",
"nepal":"непал",
"singapore":"сингапур",
"slovenia":"словения",
"georgia":"грузия",
"democratic republic of the congo":"демократическая республика конго",
"austria":"австрия",
"isle of man":"остров мэн",
"burundi":"бурунди",
"armenia":"армения",
"albania":"албания",
"tunisia":"тунис",
"hong kong":"гонконг",
"sudan":"судан",
"laos":"лаос",
"romania":"румыния",
"poland":"польша",
"gabon":"габон",
"namibia":"намибия",
"iraq":"ирак",
"kyrgyzstan":"киргизия",
"oman":"оман",
"iran":"иран",
"fr. polynesia":"фр. полинезия",
"andorra":"андорра",
"equat. guinea":"экват. гвинея",
"benin":"бенин",
"hungary":"венгрия",
"peru":"перу",
"kenya":"кения",
"brazil":"бразилия",
"syria":"сирия",
"faroe islands":"фарерские о.",
"antilles":"антильские о-ва",
"panama":"панама",
"montenegro":"черногория",
"guatemala":"гватемала",
"jamaica":"ямайка",
"thailand":"таиланд",
"australia":"австралия",
"israel":"израиль",
"gambia":"гамбия",
"india":"индия",
"fiji":"фиджи",
"switzerland":"швейцария",
"martinique":"мартиника",
"afghanistan":"афганистан",
"netherlands":"нидерланды",
"zimbabwe":"зимбабве",
"bahrain":"бахрейн",
"moldova":"молдавия",
"palestine":"палестина",
"colombia":"колумбия",
"dominican river":"доминиканская р.",
"malta":"мальта",
"rwanda":"руанда",
"seychelles":"сейшельские о-ва",
"cameroon":"камерун",
"turkmenistan":"туркменистан",
"maldives":"мальдивы",
"nigeria":"нигерия",
"bosnia and herzegovina":"босния и герцеговина",
"serbia":"сербия",
"mauritania":"мавритания",
"ukraine":"украина",
"vietnam":"вьетнам",
"car":"цар",
"nicaragua":"никарагуа",
"estonia":"эстония",
"iceland":"исландия",
"lebanon":"ливан",
"guyana":"гайана",
"gibraltar":"гибралтар",
"cote d'ivoire":"кот д'ивуар",
"argentina":"аргентина",
"south korea":"южная корея",
"indonesia":"индонезия",
"sri lanka":"шри-ланка",
"costa rica":"коста рика",
"czech":"чехия",
"italy":"италия",
"niger":"нигер",
"chile":"чили",
"egypt":"египет",
"trinidad and tobago":"тринидад и тобаго",
"cuba":"куба",
"germany":"германия",
"sweden":"швеция",
"macedonia":"македония",
"morocco":"марокко",
"ireland":"ирландия",
"belarus":"белоруссия",
"father mauritius":"о.маврикий",
"belize":"белиз",
"djibouti":"джибути",
"bahamas":"багамские о-ва",
"madagascar":"мадагаскар",
"mexico":"мексика",
"lesotho":"лесото"};

  name = name.toLowerCase();
  //console.log(dict[name]);
  return dict[name];
}

export default {
    name:'world1',
    components: {

          counter,
          Sasha1v3,
          // TourinstPerCountry,
          // TourinstChnaged,
          CounterList,
          mapChart,
          TableProgressbar

    },
   data() {
      return {
            searchCountrtValue:"",
            searchOption:[]
      }
    },
    methods: {
        getDataTable: function(){
          return {
                      sortBy: 'value',
                      sortDesc: false,
                      fields: [
                                { key: 'country', label: 'Страна', sortable: true },
                                { key: 'value', label: 'Абоненты', sortable: true },
                              ],
                      items: window.countries_data.features.map(function(el){ 
                                    return {country: countriesToRus( el.properties.name) , value:  Math.floor(Math.random()*500)}
                              }).filter(c => c.country != undefined)

              }
        },

        ListCountryTop5: function(){
            return  window.countries_data.features.map(function(el){ 
                                    return countriesToRus( el.properties.name) 
                              })
                .filter(c => c != undefined)
                 .slice(0,5);
        }, 

        loadCoutnryForSearch(){
            this.searchOption =   window.countries_data.features.map(function(el){ 
                  return countriesToRus(el.properties.name )
            })
        } ,

        getColorForMap(){
              // console.log('From the child:', d);
              if(Math.random()< 0.5) return null;
              var r = function () { return 128+ Math.floor(Math.random()*128) };
              return "rgb("+r()+",0,0)";
        },

        getDataForMap(){
          return window.countries_data
        }
    }
}


</script>



<style scoped>

/* 
.state {
  fill: #ccc;
  stroke: #fff;
}
.state:hover {
  fill: #e4ecef;
}


.box{
  height: 100%;
}
.map {
   
     height: 100%; 
    background-color:#FFF;
}
.tooltip{
    background-color: #FFF;
}



.containermap{
  height: 100%;
  padding-bottom: 20px;
}


.charbox{
 display: block;
  border:1px solid #EEE;
  box-shadow: 0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03), 0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03), 0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05), 0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03);
    width: 100%;
  height:100%;
  
} */

</style>