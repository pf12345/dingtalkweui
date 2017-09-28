<template>
  <div class="hello">
    <h1>ActionSheet demo</h1>
  </div>
</template>

<script>
export default {
  name: 'ActionSheet',
  data () {
    return {
      
    }
  },
  mounted() {
    this.$actionsheet.show({
      title: 'this is actionsheet',
      options: [
        {
          label: '苹果',
          onClick() {
            alert('click 苹果')
          }
        },
        {
          label: '葡萄',
          onClick() {
            alert('click 葡萄')
          }
        },
        {
          label: '栗子',
          onClick() {
            alert('click 栗子')
          }
        }
      ],
      cancelClick: function() {
        alert('click cancel');
      }
    });
  }
}
</script>

<style scoped>

</style>
