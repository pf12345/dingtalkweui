<a name="actionSheet"></a>

## dropdown([options])
dropdown

**Example Image** 
<table border="0">
    <tr>
        <td>
            <img alt="Dingtalk dropdown" src="./images/dropdown_dingtalk.jpeg" width=200 />
            <p>Dingtalk dropdown</p>
        </td>
        <td>
            <img alt="Weui dropdown" src="./images/dropdown_weui.jpeg" width=200 />
            <p>Weui dropdown</p>
        </td>
    </tr>
</table>


**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>object</code> | 配置项 |
| [options.defaultItems] | <code>array</code> | 选项列表 |
| [options.defaultValue] | <code>string</code> | 默认展示选项值 |
| [options.success] | <code>function</code> | 点击确定回调 |

**Example**  

```
<template>
  <div class="hello">
    <h1>DropDown demo</h1>
  </div>
</template>

<script>
export default {
  name: 'DropDown',
  data () {
    return {
      
    }
  },
  mounted() {
    this.$dropdown.show({
      defaultItems: [{
        key: '苹果', //显示文本
        value: '1' //值，
      },{
        key: '梨子',
        value: '2'
      },{
        key: '葡萄',
        value: '3'
      },{
        key: '荔枝',
        value: '4'
      },{
        key: '其他',
        value: '5'
      }],
      defaultValue: '荔枝',
      success(result) {
        console.log(result);
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

```
