// 所有搜索通用的js
// 按钮(注意不要与header里面的元素id冲突  open close )
var filterBtn = document.getElementById('filterBtn')
var closeBtn = document.getElementById('closeBtn')
var filterMask = document.getElementById('filterMask')
var resetBtn = document.getElementById('resetBtn')
var confirmBtn = document.getElementById('confirmBtn')
var searchBtn = document.getElementById('searchBtn')
var searchInput = document.getElementById('searchInput')
// 搜索筛选条件
var filter01 = document.getElementById('filter01')
var filter02 = document.getElementById('filter02')
var brandBox = document.getElementById('brandBox')
var filter01Lists = filter01.children
var filter02Lists = filter02.children
var brandLists = brandBox.children
// 搜索按钮
searchBtn.onclick = function(){
	var val = searchInput.value.trim()
	if(!val){
		alert('请输入搜索关键字')
		return false
	}
	// 当前页面跳转
	window.location.href="http://www.jb51.net";
	// 新页面跳转
	window.open("http://www.w3schools.com","_blank");  
}
// 重置按钮
resetBtn.onclick = function() {
	for (let i = 0; i < filter01Lists.length; i++) {
		filter01Lists[i].classList.remove('active')
		filter01Lists[0].classList.add('active')
	}
	for (let i = 0; i < filter02Lists.length; i++) {
		filter02Lists[i].classList.remove('active')
		filter02Lists[0].classList.add('active')
	}
	for (let i = 0; i < brandLists.length; i++) {
		brandLists[i].classList.remove('active')
		brandLists[0].classList.add('active')
	}
}
// 确定按钮
confirmBtn.onclick = function() {
	filterMask.style.display = 'none'
	// 处理
	// 当前页面跳转
	window.location.href = "http://www.jb51.net";
	// 新页面跳转
	window.open("http://www.w3schools.com", "_blank");
}

filterBtn.addEventListener('click', function() {
	filterMask.style.display = 'block'
})
closeBtn.addEventListener('click', function() {
	filterMask.style.display = 'none'
})
for (let i = 0; i < filter01Lists.length; i++) {
	filter01Lists[i].onclick = function() {
		for (let j = 0; j < filter01Lists.length; j++) {
			filter01Lists[j].classList.remove('active')
		}
		filter01Lists[i].classList.add('active')
	}
}
for (let i = 0; i < filter02Lists.length; i++) {
	filter02Lists[i].onclick = function() {
		for (let j = 0; j < filter02Lists.length; j++) {
			filter02Lists[j].classList.remove('active')
		}
		filter02Lists[i].classList.add('active')
	}
}
for (let i = 0; i < brandLists.length; i++) {
	brandLists[i].onclick = function() {
		for (let j = 0; j < brandLists.length; j++) {
			brandLists[j].classList.remove('active')
		}
		brandLists[i].classList.add('active')
	}
}
