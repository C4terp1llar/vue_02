<template>
  <div class="card">
    <slot name="headerOfSlot" v-if="$slots.headerOfSlot"></slot>
    <slot>текст не пришел</slot>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  }
}
</script>

<style scoped lang="scss">

</style>