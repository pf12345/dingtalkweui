<template>
	<div>
		<div v-if="title" class="weui-cells__title">{{title}}</div>
		<div class="weui-cells">
            <slot></slot>
        </div>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String
			}
		}
	}
</script>