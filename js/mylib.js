var MyLib = {};

// 서버에 ajax 요청을 보낸다.
// var ajax = function(url, method, async, data, dataType, success){
MyLib.ajax = function(url, options={}){
  // options = options || {};
  options.method = options.method || 'get';
  if(options.async == undefined){
    options.async = true;
  }
  options.data = options.data || '';
  options.dataType = options.dataType || 'text';
  // 1. XMLHttpRequest 생성		
  var xhr = new XMLHttpRequest();
  if(options.method.toLowerCase()=='get' && options.data){
    url += '?' + options.data;
    options.data = '';
  }
  // 2. 요청준비(open())
  xhr.open(options.method, url, options.async);
  if(options.success){
    xhr.onload = function(){
      // 4. 응답 데이터 처리
      var result = xhr.responseText;
      if(options.dataType.toLowerCase()=='json'){
        result = JSON.parse(result);
      }    
      options.success(result);
    };
  }
  // 3. 요청(send())
  xhr.send(options.data);
};