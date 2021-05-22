var mylink=new Array(new link("https://gkzy.jleea.com.cn/","志愿填报系统测试");var a=GetQueryString("i");if(a=="me"){mylink=new Array(new link("https://wj.qq.com/","腾讯问卷"),
new link("https://github.com/prpeilun/prpeilun.github.io","佩伦主页网站"),
new link("https://github.com/prperen/prperen.github.io","佩伦导航网站"),
new link("https://github.com/dsgbz/dsgbz.github.io","广播站网站"),
new link("http://www.17sucai.com/","17 素材"),
new link("html/newone.html?url="+window.location.href,"新链接"),
new link("http://tools.bugscaner.com/chaojiwailian/","外链1"),
new link("https://seo.dmeng.net/","外链2"),
new link("http://www.6ke.com.cn/tool/","外链3"),
new link("https://mp.weixin.qq.com/","微信公众平台"),
new link("http://bj.96weixin.com/","公众号排版"),
new link("http://ppt.koutu.vip/", "素材解析"),
new link("https://www.canva.cn/","Canva"),
new link("http://dsgbz.com/", "广播站官网"),	
new link("http://dsgbz.com/gedan", "歌单整理"),	
new link("http://dsgbz.com/gd", "在线歌单"),	
new link("https://github.com/dsgbz/dsgbz.github.io/edit/main/gd/index.html", "编辑在线歌单"))}
all[0].linkArray=mylink;
if(localStorage.getItem("shoucang")!=null){
var cos=new Array();
cos=localStorage.getItem("shoucang").split("|");
for(var i=0;i<cos.length-1;i++){
	all[0].linkArray.push(new link(cos[i].split("*")[0],cos[i].split("*")[1]))}
}
function newOne(headImg,headName,linkArray){
	var innertext="";innertext+=("<div class='con pt'>");
	innertext+=("<div class='title'><img src='img/icoc/"+headImg+".png'  alt='"+headName+"'/><span>"+headName+"</span></div>");
	for(var i=0;i<linkArray.length;i++){
		innertext+=("<a href='"+linkArray[i].linkName+"' class='btn'");
		if(linkArray[i].name=="+"||linkArray[i].name=="-"||linkArray[i].name=="网站设置")innertext+=(" target='_self'");
		else innertext+=(" target='_blank'");innertext+=(">"+linkArray[i].name+"</a>")}
		innertext+=("</div>");
		document.getElementById("con").innerHTML+=innertext
	}
	for(var i=0;i<all.length;i++){
		newOne(all[i].icoc,all[i].text,all[i].linkArray)
	}
