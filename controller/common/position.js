import request from 'request';

class Position {
	async getAddress(req, res, next) {
		const ip = req.query.ip || req.ip.split(':')[req.ip.split(':').length - 1];
		request(`http://ip.taobao.com/service/getIpInfo.php?ip=${ip}`, (err, resq) => {
			try {
				var data = JSON.parse(resq.body).data;
				console.log(`${new Date().toLocaleString()} ip:${ip} address:${data.country}${data.region}${data.city}${data.isp} `);
				res.jsonp(JSON.parse(resq.body));
			} catch(e) {
				console.log('request error');
				var obj = {
					"code": 0,
					"data": {
						"ip": "1",
						"country": "",
						"area": "",
						"region": "",
						"city": "",
						"county": "",
						"isp": "",
						"country_id": "",
						"area_id": "",
						"region_id": "",
						"city_id": "",
						"county_id": "",
						"isp_id": ""
					}
				};
				res.jsonp(obj);
			}
		})
	}
}

export default new Position();