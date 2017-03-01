/**
 * 参考文档：http://ask.dcloud.net.cn/article/431
 * 升级文件为JSON格式数据，如下：
 * 
 * 需升级
{
	"status":1,
	"version": "1.0.4",
	"title": "云豹进销存 版本更新",
	"note": "修复部分登录，报单页面的Bug",
	"url": "http://app.joyeon.com/psi/H565FB0B4.wgt"
}
*
* 无需升级
{"status":0}
 */
var server = "http://app.joyeon.com/psi/update1.txt"; //获取升级描述文件服务器地址

function update() {
	mui.getJSON(server, {
		"appid": plus.runtime.appid,
		"version": plus.runtime.version,
		"imei": plus.device.imei
	}, function(data) {
		if (data.status) {
			plus.nativeUI.confirm(data.note, function(event) {
				if (0 == event.index) {
					plus.runtime.openURL(data.url);
				}
			}, data.title, ["立即更新", "取　　消"]);
		}
	});
}

mui.os.plus && !mui.os.stream && mui.plusReady(update);