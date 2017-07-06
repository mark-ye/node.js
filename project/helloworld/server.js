
var express = require('express');
var app = express(); //express 框架
var fs = require("fs");//file
 var confPort =8000; //port
 var confTpl ='assets/'; //html 目錄
 var multer  = require('multer'); 
var cookieParser = require('cookie-parser'); 
var bodyParser = require('body-parser');

//define dir
 var UploadDir  = __dirname+'/Uploads/';
 //use module
app.use(express.static('public')); //使用靜態文件,css,js,images
app.use(cookieParser());//cookie
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(multer({ dest: '/tmp/'}).array('image'));//upload file
//路由
//默認訪問 index.html		
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/"+confTpl+ "index.html" );
});

//get		
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/"+confTpl+ "index.html" );
});

app.get('/process_get', function (req, res) {
 
   // 输出 JSON 格式
   var response = {
       "first_name":req.query.first_name,
       "last_name":req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response),'big5');
});

//post
app.get('/post.html', function (req, res) {
   res.sendFile( __dirname + "/"+confTpl+ "post.html" );
});

app.post('/process_post', urlencodedParser, function (req, res) {
 
   // 输出 JSON 格式
   var response = {
       "first_name":req.body.first_name,
       "last_name":req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response) ,"utf-8");
});

//upload
app.get('/upload.html', function (req, res) {
   res.sendFile( __dirname + "/"+confTpl+ "upload.html" );
});

app.post('/process_upload', function (req, res) {
 
   console.log(req.files[0]);  // 上传的文件信息
 
   var des_file = UploadDir + req.files[0].originalname;
   fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
         if( err )
		 {
              console.log( err );
         }
		 else
		 {
               response = {
                   message:'File uploaded successfully', 
                   filename:req.files[0].originalname
              };
          }
          console.log( response );
          res.end( JSON.stringify( response )  ,"utf-8");
       });
   });
});

//cookie
 
app.get('/cookies', function(req, res) {
  //console.log("Cookies: ", req.cookies);
    response = req.cookies;
	 console.log( response );
   res.end( JSON.stringify( response )  ,"utf-8");
})

 
var server = app.listen(confPort, function () {
 
  var host = server.address().address;
  var port = server.address().port;
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port);
 
});