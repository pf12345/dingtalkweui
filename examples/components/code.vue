<template>
	<div class="code">
		<pre><code :class="dclass"><slot></slot></code></pre>
	</div>
</template>
<script>
	import $ from 'jquery';
	export default {
		name: 'dwCode',
		created() {
			$(document).ready(function() {
			  $('pre code').each(function(i, block) {
			    hljs.highlightBlock(block);
			  });
			});
		},
		props: {
			dclass: {
				type: String
			}
		}
	}
</script>
<style scoped>
	.code {
		margin: 10px 0;
	}
</style>