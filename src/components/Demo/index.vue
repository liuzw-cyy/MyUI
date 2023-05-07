<template>
  <div>
    <h1>My Demo Component</h1>
  </div>
</template>

<script>

export default {
  name: 'Demo',
  props: {
    width: {
      type: Number,
      default: 100
    },
  },
  data(){
    return {

    }
  }
}
</script>

<style scoped>
  h1{
      color:red;
  }
</style>