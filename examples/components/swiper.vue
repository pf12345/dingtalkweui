<template>
	<div style="padding: 20px;">
		<Swiper :auto="true" :list="list"></Swiper>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				list: [{
					url: 'javascript:',
					img: 'http://api.meisupic.com/getImg.php?imgurl=https%3A%2F%2Fstatic5.depositphotos.com%2Fthumbs%2F1001912%2Fimage%2F440%2F4401784%2Fapi_thumb_450.jpg&id=4401784&userid=1001912&imgfile=thumbs'
				}, {
					url: 'javascript:',
					img: 'http://img.hb.aicdn.com/8e40af39c8b2ad100a73021c0add72f83a8d2df6b046-3ktQMS_sq320'
				}, {
					url: 'javascript:',
					img: 'http://img.hb.aicdn.com/5e91958378836ac9d1968bbc257c14bbf22e0b8add2b-XxPjU3_sq320'
				}]
			}
		}
	}
</script>