// 所有搜索通用的js
var searchInput = document.getElementById('searchInput')
var searchButton = document.getElementById('searchButton')
searchButton.onclick = function(){
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

// 搜索筛选条件
var filter01 = document.getElementById('filter01')
var filter02 = document.getElementById('filter02')
var brandBox = document.getElementById('brandBox')
var filter01Lists = filter01.children
var filter02Lists = filter02.children
var brandLists = brandBox.getElementsByTagName('li')
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
// 汽车品牌 更多 显示隐藏
var more = document.getElementById('more')
var hide = document.getElementById('hide')
brandLists.length < 18 ? more.style.display = 'none':''
// 少于十八个品牌隐藏‘更多’按钮
for (let i = 0; i < brandLists.length; i++) {
	// console.log(i)
	brandLists[i].style.display = (i >= 18 ? 'none' : 'flex')
}
more.onclick = function() {
	more.style.display = 'none'
	hide.style.display = 'flex'
	for (let i = 0; i < brandLists.length; i++) {
		brandLists[i].style.display = 'flex'
	}
}
hide.onclick = function() {
	more.style.display = 'flex'
	hide.style.display = 'none'
	for (let i = 0; i < brandLists.length; i++) {
		i >= 18 ? brandLists[i].style.display = 'none' : ''
	}
}
