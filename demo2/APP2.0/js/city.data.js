
var userId = JSON.parse(localStorage.token);
var cityData3 ;

function warehousematerial(){
	
	mui.ajax(localStorage.IP+'common/material/tree', {
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		timeout: 10000, //超时时间设置为10秒；
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + userId.access_token
		},
		success: function(data) {
			console.log(JSON.stringify(data));
			cityData3 = data;
			cityPicker3.setData(cityData3);	
		}
	});
}
