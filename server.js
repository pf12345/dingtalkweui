var express = require('express');
var path = require('path');
var http = require('http');
var app = express();
var co = require('co');
var crypto = require('crypto');
var yields = require('express-yields');
var https = require("https");
var querystring = require('querystring');
var url = require('url');

var OAPI_HOST = 'https://oapi.dingtalk.com';
var corpId = require('./env').corpId;
var secret = require('./env').secret;


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', function *(req, res) {
	res.render('./index.jade', {});
});


app.get('/getConfig', function *(req, res) {
	var nonceStr = 'abcdefg';
    var timeStamp = new Date().getTime();
    var signedUrl = decodeURIComponent(req.query.url || req.href);

    function g() {
        return co(function *() {
            var accessToken = (yield invoke('/gettoken', {corpid: corpId, corpsecret: secret}))['access_token'];
            var ticket = (yield invoke('/get_jsapi_ticket', {type: 'jsapi', access_token: accessToken}))['ticket'];
            var signature = sign({
                nonceStr: nonceStr,
                timeStamp: timeStamp,
                url: signedUrl,
                ticket: ticket
            });
            return {
                signature: signature,
                nonceStr: nonceStr,
                timeStamp: timeStamp,
                corpId: corpId,
                url: signedUrl
            };
        }).catch(function(err) {
            res.send({
                result: 'FALSE',
                data: JSON.stringify(err)
            });
        });
    }
    try {
        res.send({
            result: 'TRUE',
            data: yield g()
        });
    }catch(e){
        res.send({
            result: 'FALSE',
            data: JSON.stringify(e)
        });
    }
})

app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 8080;
app.set('port', port);


var server = http.createServer(app);

server.listen(port);
console.log('Server 1 Port 8080');



function invoke(path, params) {
    return function(cb) {
        https.get(OAPI_HOST + path + '?' + querystring.stringify(params), function(res) {
            if (res.statusCode === 200) {
                var body = '';
                res.on('data', function (data) {
                    body += data;
                }).on('end', function () {
                    var result = JSON.parse(body);
                    if (result && 0 === result.errcode) {
                        cb(null, result);
                    }
                    else {
                        cb(result);
                    }
                });
            }
            else {
                cb(new Error(response.statusCode));
            }
        }).on('error', function(e) {
            cb(e);
        });
    }
}

function sign(params) {
    var origUrl = params.url;
    var origUrlObj =  url.parse(origUrl);
    delete origUrlObj['hash'];
    var newUrl = url.format(origUrlObj);
    var plain = 'jsapi_ticket=' + params.ticket +
        '&noncestr=' + params.nonceStr +
        '&timestamp=' + params.timeStamp +
        '&url=' + newUrl;

    console.log(plain);
    var sha1 = crypto.createHash('sha1');
    sha1.update(plain, 'utf8');
    var signature = sha1.digest('hex');
    console.log('signature: ' + signature);
    return signature;
}
