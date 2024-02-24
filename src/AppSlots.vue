<template>
  <div class="container">
    <div class="card">
      <h1>{{title}}</h1>
    </div>
    <app-list>
      <template #default="slotProps">
        <span style="color:salmon">
          item: {{slotProps.iter}}
        </span>
      </template>
    </app-list>
    <app-block>
      <p>Текст слота</p>
      <template #headerOfSlot>
        <h1>Заголовок слота</h1>
      </template>
    </app-block>
  </div>
</template>

<script>
import AppBlock from "@/AppBlock.vue";
import AppList from "@/AppList.vue";
export default {
  data() {
    return {
      title: 'Заголовок'
    }
  },
  components: {
    'app-block' : AppBlock,
    'app-list' : AppList
  }
}
</script>

<style lang="scss">

</style>
