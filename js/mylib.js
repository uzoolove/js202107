// 서버에 ajax 요청을 보낸다.
var ajax = function(url, method, async, data, dataType, success){
  method = method || 'get';
  if(async == undefined){
    async = true;
  }
  data = data || '';
  dataType = dataType || 'text';
  // 1. XMLHttpRequest 생성		
  var xhr = new XMLHttpRequest();
  if(method.toLowerCase()=='get' && data){
    url += '?' + data;
    data = '';
  }
  // 2. 요청준비(open())
  xhr.open(method, url, async);
  if(success){
    xhr.onload = function(){
      // 4. 응답 데이터 처리
      var result = xhr.responseText;
      if(dataType.toLowerCase()=='json'){
        result = JSON.parse(result);
      }    
      success(result);
    };
  }  
  // 3. 요청(send())
  xhr.send(data);
};