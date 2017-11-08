<template>
	<div class="weui-tabbar">
		<a href="javascript:;" class="weui-tabbar__item" v-for="tab in tabs" @click="chose(tab)">
			<img :src="tab.icon" alt="" class="weui-tabbar__icon" v-if="!tab.dot && !tab.badge">
			<span style="display: inline-block;position: relative;" v-if="tab.dot && !tab.badge">
				<img :src="tab.icon" alt="" class="weui-tabbar__icon">
				<span class="weui-badge weui-badge_dot" style="position: absolute;top: 0;right: -6px;"></span>
			</span>
			<span style="display: inline-block;position: relative;" v-if="tab.badge">
				<img :src="tab.icon" alt="" class="weui-tabbar__icon">
				<span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">{{tab.badge}}</span>
			</span>
			<p class="weui-tabbar__label">{{tab.title}}</p>
		</a>
	</div>
</template>
<script>
	export default {
		props: {
			tabs: {
				type: Array,
				required: true,
				default() {
					return [];
				}
			},
			onChose: {
				type: Function,
				default() {
					return {};
				}
			}
		},
		methods: {
			chose(tab) {
				this.onChose(tab);
			}
		}
	}
</script>