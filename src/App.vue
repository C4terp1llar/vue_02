<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Динамические и асинхронные компоненты</h2>

      <app-btn
          :color="oneColor"
          @action="active = 'one'"
          ref="myBtn"
      >One</app-btn>
      <app-btn
          :color="twoColor"
          @action="active = 'two'"
      >Two</app-btn>
    </div>

    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>
  </div>
</template>

<script>
import AppBtn from "@/AppBtn.vue";
import AppTextTwo from "@/AppTextTwo.vue";
import AppTextOne from "@/AppTextOne.vue";



export default {
  components: {AppBtn, AppTextTwo, AppTextOne},
  data() {
    return {
      active: 'one'
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.componentName = 'new name'
    // }, 1000)

    console.log(this.$refs.myBtn)
  },
  computed:{
    // componentName() {
    //   return 'app-text-' + this.active
    // },
    componentName: {
      get(){
        return 'app-text-' + this.active
      },
      set(value){
        console.log('componentName', value)
      }
    },
    oneColor() {
      return this.active === 'one' ? 'primary' : ''
    },
    twoColor() {
      return this.active === 'two' ? 'primary' : ''
    }
  }
}
</script>

<style lang="scss">

</style>
