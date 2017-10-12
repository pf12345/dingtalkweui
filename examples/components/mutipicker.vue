<template>
  <div class="hello">
    <h1>Mutipicker demo</h1>
  </div>
</template>

<script>
export default {
  name: 'Mutipicker',
  data () {
    return {
      
    }
  },
  mounted() {
    this.$mutipicker.show({
      defaultItems1: [{
          label: '1',
          value: '1'
      }, {
          label: '2',
          value: '2'
      }, {
          label: '3',
          value: '3'
      }],
      defaultItems2: [{
          label: 'A',
          value: 'A'
      }, {
          label: 'B',
          value: 'B'
      }, {
          label: 'C',
          value: 'C'
      }],
      defaultValue: ['3', 'A'],
      success: function(result) {
        try {
          alert(JSON.stringify(result))
        }catch(e) {
          alert(result);
        } 
      }
    });
  }
}
</script>

<style scoped>

</style>
