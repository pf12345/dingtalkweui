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
    this.$cascadepicker.show({
      defaultItems: [{
          label: '广东',
          value: 0,
          children: [{
              label: '广州',
              value: 0,
              children: [{
                  label: '海珠',
                  value: 0
              }, {
                  label: '番禺',
                  value: 1
              }]
          }, {
              label: '佛山',
              value: 1,
              children: [{
                  label: '禅城',
                  value: 0
              }, {
                  label: '南海',
                  value: 1
              }]
          }]
      }, {
          label: '广西',
          value: 1,
          children: [{
              label: '南宁',
              value: 0,
              children: [{
                  label: '青秀',
                  value: 0
              }, {
                  label: '兴宁',
                  value: 1
              }]
          }, {
              label: '桂林',
              value: 1,
              children: [{
                  label: '象山',
                  value: 0
              }, {
                  label: '秀峰',
                  value: 1
              }]
          }]
      }],
      defaultValue: [0, 1, 1],
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
