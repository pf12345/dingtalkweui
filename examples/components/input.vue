<template>
	<div>
		<dw-form title="个人信息">
			<dw-input title="姓名" v-model="name" placeholder="请输入姓名"></dw-input>

            <dw-input title="手机号" v-model="phone" placeholder="输入你的手机号码"></dw-input>

            <dw-input title="身份证号码" v-model="cardCode" placeholder="输入你的身份证号码"></dw-input>  
        </dw-form>

        <dw-textarea title="经历说明" v-model="desc" placeholder="请填写说明信息"></dw-textarea>
        
        <br>
        <div class="weui-form-preview">
            <div class="weui-form-preview__bd">
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">姓名</label>
                    <span class="weui-form-preview__value">{{name}}</span>
                </div>
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">手机号</label>
                    <span class="weui-form-preview__value">{{phone}}</span>
                </div>
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">身份证号码</label>
                    <span class="weui-form-preview__value">{{cardCode}}</span>
                </div>
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">经历说明</label>
                    <span class="weui-form-preview__value">{{desc}}</span>
                </div>
            </div>
        </div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				name: 'Timi',
				phone: '15123456789',
				cardCode: '513371199101011123',
				desc: '就职于...'
			}
		}
	}
</script>