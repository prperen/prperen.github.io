alert("通行证仅能生成一次，且2分钟内有效，请及时出校！一切后果自行承担。")
if("冯天乐 李佳楠 刘佩伦 杨昊儒 潘婷婷 李旭 高铭阳 殷勇杰 杜梦琦 刘泽 王鸿有 金敏洙 李文镔 崔浩然".indexOf(name) < 0)
  document.getElementById('body').innerHTML = "<h1 style='color:#F00'>错误 ERROR</h1>";
function f() {
	var da = new Date();
	var d = da.getHours()
	var e = fk(da.getMinutes())
	var f = fk(da.getSeconds())
	$('#theDate').html(d + ":" + e + ":" + f);
}
f();
setInterval(f, 1000);
function pw() {
	var da = new Date();
	var a = da.getFullYear()
  var b = da.getMonth() + 1
  var c = da.getDate()
  var c1 = Math.floor(c / 10)
  var c2 = Math.floor(c % 10)
  var d = da.getHours()
  var d1 = Math.floor(d / 10)
  var d2 = Math.floor(d % 10)
  var e = Math.floor(da.getMinutes() / 10)
  var d3 = Math.floor(((d1 + d2) * c + (c1 + c2) * d) * (a - d) * (a + c) * (d2+1) / (e+1) / 33);
  var password = e + "6" + d3
	return password
}