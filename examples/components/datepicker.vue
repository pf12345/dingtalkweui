<template>
  <div class="hello">
    <h1>DatePicker demo</h1>
  </div>
</template>

<script>
export default {
  name: 'DatePicker',
  data () {
    return {
      
    }
  },
  mounted() {
    this.$datepicker.show({
      defaultValue: '2016-10-01',
      success(result) {
        try {
          alert(JSON.stringify(result))
        }catch(e) {
          alert(result)
        }
      }
    });
  }
}
</script>

<style scoped>

</style>
