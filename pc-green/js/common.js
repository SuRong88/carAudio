var navbar = document.getElementById('navbar')
var banner =document.getElementById('banner')
var body = document.body
var header = document.getElementById('header')
window.onscroll = function() {
	// console.log(document.documentElement.scrollTop)
	// console.log(document.getElementById('banner').offsetHeight)
	if (document.documentElement.scrollTop <=banner.offsetHeight) {
		navbar.style.position = 'relative';
		navbar.style.paddingTop = '0'
		body.style.paddingTop = 0
		header.style.display = 'block'
		// console.log('no')
	} else {
		navbar.style.position = 'fixed';
		navbar.style.paddingTop = '14px'
		body.style.paddingTop = navbar.offsetHeight + 'px'
		header.style.display = 'none'
		// console.log('yes')
	}
};
var map = new BMap.Map('map'); // 创建Map实例
var position;
map.centerAndZoom(new BMap.Point(116.398232,39.914714), 15); // 初始化地图,设置中心点坐标和地图级别
map.addControl(
	new BMap.MapTypeControl({
		mapTypes: [BMAP_NORMAL_MAP, BMAP_SATELLITE_MAP, BMAP_HYBRID_MAP]
	})
); //添加地图类型控件
map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
var marker = new BMap.Marker(new BMap.Point(116.398232,39.914714));
map.addOverlay(marker);
map.panBy(80, -80, true);
map.setMapStyle({
	style: 'grayscale'
});

