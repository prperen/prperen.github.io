alert("通行证仅能生成一次，且2分钟内有效，请及时出校！尽量请在官方渠道申请，一切后果自行承担。")
if("冯天乐 李佳楠 刘佩伦 杨昊儒 潘婷婷 李旭 高铭阳 王鸿有 金敏洙 刘泽 崔浩然 李文镔 殷勇杰".indexOf(name) < 0)
  document.getElementById('body').innerHTML = "<h1 style='color:#F00'>错误 ERROR</h1>";
//拦截安卓回退按钮
history.pushState(null, null, location.href);
window.addEventListener('popstate', function(event) {
    history.pushState(null, null, location.href );
    //此处加入回退时你要执行的代码
	//window.location.href="about:blank";
});


//变换背景颜色
/**
 * 产生随机整数，包含下限值，包括上限值
 * @param {Number} lower 下限
 * @param {Number} upper 上限
 * @return {Number} 返回在下限到上限之间的一个随机整数
 */
function random(lower, upper) {
	return Math.floor(Math.random() * (upper - lower+1)) + lower;
}
//随机设置背景色
function setBGC(){
	var colorArr = new Array("#4395D1","#00A99D","#FBAF5D","#84871C","#9E6B52","#A186BE");
	var i = random(0,5);
	document.getElementById("imgBg").style.background = colorArr[i];
}
setInterval(setBGC,300); 


//2分钟结束
function closePass(){
	document.getElementById("bodyDiv").style.display = 'none';
	document.title = '通行证已失效';
	history.pushState(null, null, location.href);
	window.addEventListener('popstate', function(event) {
		history.pushState(null, null, location.href );
		//此处加入回退时你要执行的代码
		//window.location.href="about:blank";
	});
}
setTimeout(closePass,1200000);



