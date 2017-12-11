<template>
	<div>
		<card-view>
			<div slot="header">页眉</div>
			<div slot="content">
				<div class="content" >
					<div style="padding: 20px;">
						包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
					</div>
				</div>
					
			</div>
			
			<div slot="footer">页脚</div>
		</card-view>
	</div>
</template>
<script>
	export default {
		name: '',
		data() {
			return {}
		}
	}
</script>
<style scoped>
	.content:before, .content:after {
		content: " ";
		display: block;
		height: 1px;
		width: 100%;
		background: #c8c7cc;
		-webkit-transform: scaleY(.5);
    	transform: scaleY(.5);
	}
</style>