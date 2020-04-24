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
  var dict = {"great britain":"Великобритания",
"ethiopia":"Эфиопия",
"croatia":"Хорватия",
"venezuela":"Венесуэла",
"azerbaijan":"Азербайджан",
"cyprus":"Кипр",
"monaco":"Монако",
"tanzania":"Танзания",
"bangladesh":"Бангладеш",
"saudi arabia":"Саудовская Аравия",
"slovakia":"Словакия",
"finland":"Финляндия",
"myanmar":"Мьянма",
"denmark":"Дания",
"mali":"Мали",
"france":"Франция",
"liberia":"Либерия",
"usa":"США",
"ecuador":"Эквадор",
"turkey":"Турция",
"new zealand":"Новая Зеландия",
"jordan":"Иордания",
"greece":"Греция",
"taiwan":"Тайвань",
"channel islands":"Нормандские о.",
"bulgaria":"Болгария",
"lithuania":"Литва",
"french west india":"Французская Западная Индия",
"spain":"Испания",
"sierra leone":"Сьерра-Леоне",
"cape verde":"Кабо Верде",
"central african republic":"Центральноафриканская Республика",
"bolivia":"Боливия",
"kosovo":"Косово",
"salvador":"Сальвадор",
"kazakhstan":"Казахстан",
"portugal":"Португалия",
"algeria":"Алжир",
"yemen":"Йемен",
"macau":"Макао",
"china":"Китай",
"malaysia":"Малайзия",
"uzbekistan":"Узбекистан",
"japan":"Япония",
"guinea bissau":"Гвинея-Биссау",
"senegal":"Сенегал",
"belgium":"Бельгия",
"dem. rep. congo":"Дем. Респ. Конго",
"guinea":"Гвинея",
"uae":"ОАЭ",
"uganda":"Уганда",
"cambodia":"Камбоджа",
"latvia":"Латвия",
"pakistan":"Пакистан",
"south africa":"ЮАР",
"luxembourg":"Люксембург",
"norway":"Норвегия",
"zambia":"Замбия",
"qatar":"Катар",
"puerto rico":"Пуэрто-Рико",
"mozambique":"Мозамбик",
"ghana":"Гана",
"angola":"Ангола",
"mongolia":"Монголия",
"tajikistan":"Таджикистан",
"botswana":"Ботсвана",
"philippines":"Филиппины",
"honduras":"Гондурас",
"uruguay":"Уругвай",
"togo":"Того",
"canada":"Канада",
"kuwait":"Кувейт",
"liechtenstein":"Лихтенштейн",
"nepal":"Непал",
"singapore":"Сингапур",
"slovenia":"Словения",
"georgia":"Грузия",
"democratic republic of the congo":"Демократическая республика Конго",
"austria":"Австрия",
"isle of man":"остров Мэн",
"burundi":"Бурунди",
"armenia":"Армения",
"albania":"Албания",
"tunisia":"Тунис",
"hong kong":"Гонконг",
"sudan":"Судан",
"laos":"Лаос",
"romania":"Румыния",
"poland":"Польша",
"gabon":"Габон",
"namibia":"Намибия",
"iraq":"Ирак",
"kyrgyzstan":"Киргизия",
"oman":"Оман",
"iran":"Иран",
"fr. polynesia":"Фр. Полинезия",
"andorra":"Андорра",
"equat. guinea":"Экват. Гвинея",
"benin":"Бенин",
"hungary":"Венгрия",
"peru":"Перу",
"kenya":"Кения",
"brazil":"Бразилия",
"syria":"Сирия",
"faroe islands":"Фарерские о.",
"antilles":"Антильские о-ва",
"panama":"Панама",
"montenegro":"Черногория",
"guatemala":"Гватемала",
"jamaica":"Ямайка",
"thailand":"Таиланд",
"australia":"Австралия",
"israel":"Израиль",
"gambia":"Гамбия",
"india":"Индия",
"fiji":"Фиджи",
"switzerland":"Швейцария",
"martinique":"Мартиника",
"afghanistan":"Афганистан",
"netherlands":"Нидерланды",
"zimbabwe":"Зимбабве",
"bahrain":"Бахрейн",
"moldova":"Молдавия",
"palestine":"Палестина",
"colombia":"Колумбия",
"dominican river":"Доминиканская р.",
"malta":"Мальта",
"rwanda":"Руанда",
"seychelles":"Сейшельские о-ва",
"cameroon":"Камерун",
"turkmenistan":"Туркменистан",
"maldives":"Мальдивы",
"nigeria":"Нигерия",
"bosnia and herzegovina":"Босния и Герцеговина",
"serbia":"Сербия",
"mauritania":"Мавритания",
"ukraine":"Украина",
"vietnam":"Вьетнам",
"car":"ЦАР",
"nicaragua":"Никарагуа",
"estonia":"Эстония",
"iceland":"Исландия",
"lebanon":"Ливан",
"guyana":"Гайана",
"gibraltar":"Гибралтар",
"cote d'ivoire":"Кот д'Ивуар",
"argentina":"Аргентина",
"south korea":"Южная Корея",
"indonesia":"Индонезия",
"sri lanka":"Шри-Ланка",
"costa rica":"Коста Рика",
"czech":"Чехия",
"italy":"Италия",
"niger":"Нигер",
"chile":"Чили",
"egypt":"Египет",
"trinidad and tobago":"Тринидад и Тобаго",
"cuba":"Куба",
"germany":"Германия",
"sweden":"Швеция",
"macedonia":"Македония",
"morocco":"Марокко",
"ireland":"Ирландия",
"belarus":"Белоруссия",
"father mauritius":"о.Маврикий",
"belize":"Белиз",
"djibouti":"Джибути",
"bahamas":"Багамские о-ва",
"madagascar":"Мадагаскар",
"mexico":"Мексика",
"lesotho":"Лесото"};

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