// 侧边导航栏
var open = document.getElementById('open')
var close = document.getElementById('close')
var navbarMask = document.getElementById('navbarMask')
var navbar = document.getElementById('navbar')
open.addEventListener('click', function() {
	navbarMask.style.display = 'block'
	navbarMask.style.opacity = 1
	setTimeout(() => {
		navbar.style.transform = 'translateX(0%)'
		navbar.style.WebkitTransform = 'translateX(0%)'
		navbar.style.MozTransform = 'translateX(0%)'
	}, 10)
})
close.addEventListener('click', function() {
	navbar.style.transform = 'translateX(100%)'
	navbar.style.WebkitTransform = 'translateX(100%)'
	navbar.style.MozTransform = 'translateX(100%)'
	navbarMask.style.opacity = 0
	setTimeout(() => {
		navbarMask.style.display = 'none'
	}, 500)
})

// 底部百度地图
var map = new BMap.Map('map'); // 创建Map实例
var position;
map.centerAndZoom(new BMap.Point(116.398232, 39.914714), 15); // 初始化地图,设置中心点坐标和地图级别
map.addControl(
	new BMap.MapTypeControl({
		mapTypes: [BMAP_NORMAL_MAP, BMAP_SATELLITE_MAP, BMAP_HYBRID_MAP]
	})
); //添加地图类型控件
map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
var marker = new BMap.Marker(new BMap.Point(116.398232, 39.914714));
map.addOverlay(marker);
map.panBy(80, -80, true);
map.setMapStyle({
	style: 'grayscale'
});
