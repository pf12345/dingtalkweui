<template>
	<div class="dingtalkweui-card-view">
		<div class="header">
			<slot name="header"></slot>
		</div>
		<div class="content">
			<slot name="content"></slot>
		</div>
		<div class="footer">
			<slot name="footer"></slot>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'cardView',
		props: {
			// header: {
			// 	type: Boolean,
			// 	default: false,
			// },
			// footer: {
			// 	type: Boolean,
			// 	default: false,
			// }
		}
	}
</script>
<style scoped>
	.dingtalkweui-card-view {
	    font-size: 14px;
	    position: relative;
	    overflow: hidden;
	    margin: 10px;
	    border-radius: 2px;
	    background-color: #fff;
	    background-clip: padding-box;
	    box-shadow: 0 1px 2px rgba(0,0,0,.3);
	}
	.footer, .header {
	    position: relative;
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: flex;
	    min-height: 44px;
	    padding: 10px 15px;
	    -webkit-box-pack: justify;
	    -webkit-justify-content: space-between;
	    justify-content: space-between;
	    -webkit-box-align: center;
	    -webkit-align-items: center;
	    align-items: center;
	}
	.header {
	    font-size: 17px;
	    border-radius: 2px 2px 0 0;
	}
	.footer {
	    color: #6d6d72;
	    border-radius: 0 0 2px 2px;
	}
</style>