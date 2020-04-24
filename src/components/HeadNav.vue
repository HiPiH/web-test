<template>
    <b-navbar  type="light" variant="light">
     <b-nav-form>
            <b-input-group class="mr-sm-2" prepend="Автообновление">
                <b-form-select v-model="selected" :options="options"></b-form-select>
            </b-input-group>
            <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">
                            <b-icon icon="arrow-repeat" aria-hidden="true"></b-icon>                      
            </b-button>
    </b-nav-form>
   
    <b-collapse id="nav-collapse" is-nav>
        <b-nav-form>
        
           
        </b-nav-form>
      <b-navbar-nav class="ml-auto">
     

        <b-nav-item-dropdown right>
          <template v-slot:button-content>
           <b-icon icon="person-bounding-box" aria-hidden="true"></b-icon>&nbsp;Иван
          </template>
                <b-dropdown-item href="#" disabled="" >Профиль</b-dropdown-item>
                <b-dropdown-item href="#"  disabled="" >Выход</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
    name: "HeadNav",
    data () {
      return {
         selected: 5,
        options: [
            { value: 5, text: '5 секунд' },
            { value: 30, text: '30 секунд' },
            { value: 60, text: '1 минуту' },
            { value: 0, text: 'Никогда' }
        ],
      } 
    }
}
</script>


