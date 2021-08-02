const app = getApp();
const videoList = [
	{
		id: 1,
		src: 'https://static-mumway.oss-cn-zhangjiakou.aliyuncs.com/NetworkFrontEnd/qhq/video/1.mp4',
		avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
		name: '嘻嘻哈哈',
		fx: '1.2w',
		collect: '6000',
		forward: '300',
		txt: 'www喂喂喂喂喂喂喂喂喂喂喂喂喂我我我我我我'
	},
	{
		id: 2,
		src: 'https://static-mumway.oss-cn-zhangjiakou.aliyuncs.com/NetworkFrontEnd/qhq/video/2.mp4',
		avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
		name: '乱涂乱画~',
		fx: '1321',
		collect: '235',
		forward: '15',
		txt: '文案我想不出来，瞎写的！！'
	},
	{
		id: 3,
		src: 'https://static-mumway.oss-cn-zhangjiakou.aliyuncs.com/NetworkFrontEnd/qhq/video/3.mp4',
		avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
		name: '吃饭饭',
		fx: '2131',
		collect: '231',
		forward: '152',
		txt: '窃取却无法前五名的Amway案发嘎嘎卡空港委嘎洒发放窃取却无法前五名的Amway案发嘎嘎卡空港委嘎洒发放窃取却无法前五名的Amway案发嘎嘎卡空港委嘎洒发放窃取却无法前五名的Amway案发嘎嘎卡空港委嘎洒发放'
	},
	{
		id: 4,
		src: 'https://static-mumway.oss-cn-zhangjiakou.aliyuncs.com/NetworkFrontEnd/qhq/video/4.mp4',
		avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
		name: '皮卡有点皮',
		fx: '888',
		collect: '3333',
		forward: '123',
		txt: '阿达安慰且而且且其提前我个交接给接我给我饿公共五个全额的群多群翻墙'
	},
	{
		id: 5,
		src: 'https://static-mumway.oss-cn-zhangjiakou.aliyuncs.com/NetworkFrontEnd/qhq/video/5.mp4',
		avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
		name: '太原存货',
		fx: '1.6w',
		collect: '8241',
		forward: '3231',
		txt: '大大大滴滴答答多多多多多多多多多多多多多多多多多多多多多多吾问无为谓吾问无为谓我凄凄切切群群群群群'
	},
	{
		id: 6,
		src: 'https://static-mumway.oss-cn-zhangjiakou.aliyuncs.com/NetworkFrontEnd/qhq/video/6.mp4',
		avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
		name: '安儿童画',
		fx: '163',
		collect: '132',
		forward: '113',
		txt: '企鹅企鹅大撒多无群多群无多无多大大大所大多额企鹅全文'
	},
	{
		id: 7,
		src: 'https://static-mumway.oss-cn-zhangjiakou.aliyuncs.com/NetworkFrontEnd/qhq/video/7.mp4',
		avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
		name: 'git地址',
		fx: '1.1w',
		collect: '3231',
		forward: '679',
		txt: '地址：https://github.com/quhongqiang/poster-canvas这里哟##'
	},
	{
		id: 8,
		src: 'https://static-mumway.oss-cn-zhangjiakou.aliyuncs.com/NetworkFrontEnd/qhq/video/8.mp4',
		avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
		name: '武当王也',
		fx: '2.2w',
		collect: '9842',
		forward: '1313',
		txt: '武当王也武当王也武当王也#武当王也武当王也#'
	},
	{
		id: 9,
		src: 'https://static-mumway.oss-cn-zhangjiakou.aliyuncs.com/NetworkFrontEnd/qhq/video/9.mp4',
		avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
		name: '安和桥下',
		fx: '1314',
		collect: '520',
		forward: '111',
		txt: '地址：https://github.com/quhongqiang/poster-canvas  来这里下载吧~'
	},
	{
		id: 10,
		src: 'https://static-mumway.oss-cn-zhangjiakou.aliyuncs.com/NetworkFrontEnd/qhq/video/10.mp4',
		avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
		name: '达瓦大',
		fx: '1.2w',
		collect: '6000',
		forward: '300',
		txt: '打洼地去厄齐尔群若群奥大大'
	},
	{
		id: 11,
		src: 'https://static-mumway.oss-cn-zhangjiakou.aliyuncs.com/NetworkFrontEnd/qhq/video/11.mp4',
		avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
		name: '焦煤阿达',
		fx: '4537',
		collect: '6214',
		forward: '1323',
		txt: '在吗啊~~~~~我www喂喂喂喂喂喂喂喂喂喂喂喂喂'
	},
	{
		id: 12,
		src: 'https://static-mumway.oss-cn-zhangjiakou.aliyuncs.com/NetworkFrontEnd/qhq/video/12.mp4',
		avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
		name: '扬你骨灰',
		fx: '1.7w',
		collect: '1.2w',
		forward: '6730',
		txt: '厄齐尔群二企鹅窝群二群翁群恶趣味群额'
	},
	{
		id: 13,
		src: 'https://static-mumway.oss-cn-zhangjiakou.aliyuncs.com/NetworkFrontEnd/qhq/video/13.mp4',
		avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
		name: '嘻嘻哈哈',
		fx: '1.2w',
		collect: '6000',
		forward: '300',
		txt: 'www喂喂喂喂喂喂喂喂喂喂喂喂喂我我我我我我'
	},
	{
		id: 14,
		src: 'https://static-mumway.oss-cn-zhangjiakou.aliyuncs.com/NetworkFrontEnd/qhq/video/14.mp4',
		avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
		name: 'git地址',
		fx: '1.2w',
		collect: '6000',
		forward: '300',
		txt: '地址：https://github.com/quhongqiang/poster-canvas'
	},
]
Page({
	data: {
		videos: videoList,
		videoIndex: 0,
		duration: 500,
		deviceInfo: 0
	},
	onLoad: function() {
		// const videos = videoList;
		// setTimeout(() => {
		// 	this.setData({
		// 		videos
		// 	});
		// }, 1000);
		this.getDeviceInfo()
	},
	onChange(e) {
		// console.log('change', e.detail.video);
	},
	onPlay(e) {
		// console.log('play', e.detail.video);
	},
	async getDeviceInfo() {
		let deviceInfo = await wx.getSystemInfo()
		console.log(deviceInfo, 'deviceInfo')
		this.setData({
			deviceInfo: deviceInfo.statusBarHeight
		})
	}
});
