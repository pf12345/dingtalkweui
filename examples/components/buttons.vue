<template>
	<div>
	    <h1 class="page__title">Long Button</h1>
	    <div class="weui-btn-area"> 
	        <dw-button type="default">default</dw-button>
	        <dw-button type="default" :loading="true">default loading</dw-button>
	        <dw-button type="default" :disabled="true">default disabled</dw-button>

	        <dw-button type="primary">primary</dw-button>
	        <dw-button type="primary" :loading="true">primary loading</dw-button>
	        <dw-button type="primary" :disabled="true">primary disabled</dw-button>

	        <dw-button type="warn">warn</dw-button>
	        <dw-button type="warn" :loading="true">warn loading</dw-button>
	        <dw-button type="warn" :disabled="true">warn disabled</dw-button>

	    </div> 
	    <h1 class="page__title">mini Button</h1>
	    <div class="weui-btn-area"> 
	    	<div>
	    		<dw-button type="default" size="mini">default</dw-button>
		        <dw-button type="default" :loading="true" size="mini">default loading</dw-button>
		        <dw-button type="default" :disabled="true" size="mini">default disabled</dw-button>
	    	</div>
	        
	        <div>
	        	<dw-button type="primary" size="mini">primary</dw-button>
		        <dw-button type="primary" :loading="true" size="mini">primary loading</dw-button>
		        <dw-button type="primary" :disabled="true" size="mini">primary disabled</dw-button>
	        </div>

			<div>
				<dw-button type="warn" size="mini">warn</dw-button>
		        <dw-button type="warn" :loading="true" size="mini">warn loading</dw-button>
		        <dw-button type="warn" :disabled="true" size="mini">warn disabled</dw-button>
			</div>
	        
	    </div>
	</div>
	
</template>
<script>
	import dwCode from './code';
	export default {
		components: {
			dwCode
		}
	}
</script>