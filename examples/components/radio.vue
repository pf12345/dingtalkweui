<template>
	<div>
		<dw-radio :datas="radioOptions" v-model="radioValue" title="选择国家"></dw-radio>
		<p>radioValue: {{radioValue}}</p>
		<br>

		<dw-radio :on-ok="selected" :datas="radioOptions1" v-model="radioValue1" title="选择国家"></dw-radio>

		<p>radioValue1: {{radioValue1}}</p>
	</div>
</template>
<style scoped>
	p{
		margin: 0 12px;
	}
</style>
<script>
	export default {
		data() {
			return {
				radioOptions: ['中国', '美国', '新加坡', '英国'],
				radioOptions1: [{title: '男', key: 'man'}, {title: '女', 'key': 'woman'}],
				radioValue: '中国',
				radioValue1: ''
			}
		},
		methods: {
			selected(res) {
				alert(JSON.stringify(res))
			}
		}
	}
</script>