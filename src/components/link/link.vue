<template>
	<div>
		<a class="weui-cell weui-cell_access" v-if="target != '_current'" :href="href" :target="target">
			<div class="weui-cell__bd">
				<p><slot></slot></p>
			</div>
			<div class="weui-cell__ft">
			</div>
		</a>
		<a class="weui-cell weui-cell_access" v-if="target == '_current'" href="javascript:;" @click="showIframe">
			<div class="weui-cell__bd">
				<p><slot></slot></p>
			</div>
			<div class="weui-cell__ft">
			</div>
		</a>
		<slide-wrap v-model="showSlide" z-index="9999">
			<iframe :src="href" frameborder="0" width="100%" height="100%"></iframe>
		</slide-wrap>
	</div>
	
</template>

<script>
	export default {
		props: {
			href: {
				type: String,
				default() {
					return 'javascript:;'
					
				}
			},
			target: {
				type: String,
				validator (value) {
                    return ['_blank', '_parent', '_self', '_top', '_current'].indexOf(value) != -1;
                },
				default() {
					return '_self'
				}
			}
		},
		methods: {
			showIframe() {
				this.showSlide = true;
			}
		},
		data() {
			return {
				showSlide: false
			}
		}
	}
</script>