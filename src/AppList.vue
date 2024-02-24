<template>
<div class="card">
  <ul>
    <li v-for="item in 5">
      <slot :iter="item"></slot>
    </li>
  </ul>
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