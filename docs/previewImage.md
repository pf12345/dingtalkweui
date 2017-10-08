<a name="actionSheet"></a>

## Preview Image([options])
Preview Image 图片预览

**Example Image** 
<table border="0">
    <tr>
        <td>
            <img alt="Dingtalk Preview Image" src="./images/previewImage_dingtalk.jpeg" width=200 />
            <p>Dingtalk Preview Image</p>
        </td>
        <td>
            <img alt="Weui Preview Image" src="./images/previewImage_weui.jpeg" width=200 />
            <p>Weui Preview Image</p>
        </td>
    </tr>
</table>


**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>object</code> | 配置项 |
| [options.url] | <code>string</code> | 显示的图片的ur |
| [options.success] | <code>function</code> | 成功回调 |
| [options.deleteSuccess] | <code>function</code> | weui 点击删除图片时的回调 |

**Example**  

```
<template>
  <div class="hello">
    <h1>PreviewImage demo</h1>
  </div>
</template>

<script>
export default {
  name: 'PreviewImage',
  data () {
    return {
      
    }
  },
  mounted() {
    this.$previewImage.show({
      url: 'https://groups35-images.b0.upaiyun.com/2017/09/wjawi5hg0ff2ntic.jpg',
      success: function() {
        alert('success button');
      },
      deleteSuccess: function() {
        alert('delete button')
      }
    });

    setTimeout(() => {
      this.$previewImage.hide(() => {
        alert('Hide image')
      })
    }, 4000);
  }
}
</script>

<style scoped>

</style>


```
