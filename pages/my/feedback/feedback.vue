<template>
	<view class="page">
		<view class="feedback-body">
			<textarea maxlength="255" placeholder="请输入遇到的问题或建议..." v-model="sendDate.content" class="feedback-textare" @input="descInput" />
			<view class="word-count">{{ wordCount }}/255</view>
		</view>
		<button :disabled="submitDisabled" type="primary" class="feedback-submit" @tap="send">提交</button>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	import store from "../../../store/index.js";
	import api from "../../../api/api.js";
	export default {
		computed: mapState(['hasLogin', 'uerInfo', 'token']),
		data() {
			return {
				submitDisabled:true,
				wordCount: 0,
				sendDate: {
					content: ''
				}
			};
		},
		onLoad() {},
		methods: {
			goBack(){
				uni.navigateBack({
					delta: 1
				})
			},
			descInput(){
				this.wordCount = this.sendDate.content.length;
				if(this.sendDate.content.length >= 10){
					this.submitDisabled=false;
				}else{
					this.submitDisabled=true;
				}
			},
			send(){
				if (!this.hasLogin) {
					uni.showModal({
						content: "请先登录",
						success: function (res) {
							if (res.confirm) {
								uni.navigateTo({
									url: '../login/login'
								})
							} else if (res.cancel) {
								return;
							}
						}
					});
				}else{
					var url = api.urls.feedback;
					var data = { feedbackContent:this.sendDate.content };
					api.req.post(url, data, (res) => {
						if(res.code===0){
							uni.showModal({
								content: "反馈成功！",
								showCancel: false
							})
							uni.navigateBack();
						}else{
							uni.showModal({
								content: "反馈失败！",
								showCancel: false
							})
							return;
						}
					});
				}
			},
			...mapMutations(['login'])
		}
	};
</script>

<style>
	page {
		background-color: #efeff4;
	}
	view {
		font-size: 25upx;
	}
	.word-count {
		text-align: right;
		padding: 5upx;
		color: #a9a9a9;
	}
	.feedback-body {
		background: #fff;
	}
	.feedback-textare {
		height: 500upx;
		font-size: 34upx;
		line-height: 50upx;
		width: 750upx;
		box-sizing: border-box;
		padding: 20upx 30upx 0;
	}
	.feedback-submit {
		background-color: #00bfff;
		color: #ffffff;
		margin: 50upx;
		border-radius: 150upx;
		font-size: 35upx;
}
</style>
