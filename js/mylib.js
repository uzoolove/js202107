var MyLib = {};

// Child가 Parent를 상속 받는다.
MyLib.inherite = function(Parent, Child){
  var F = function(){};
  F.prototype = Parent.prototype;
  Child.prototype = new F();
  Child.prototype.constructor = Child;
};

// 배열의 최소값을 반환한다.
// var a = new Array(20, 10, 30);
// a.min()
Array.prototype.min = function(){
  return Math.min.apply(Math, this);
};

// firstLi.remove()
// -> firstLi.parentNode.removeChild(firstLi)
if(!HTMLElement.prototype.remove){
  HTMLElement.prototype.remove = function(){
    this.parentNode.removeChild(this);
  };
}

// Ajax 요청으로 get 방식의 json 데이터를 받아온다.
MyLib.getJSON = function(url, data, success){
  MyLib.get(url, data, success, 'json');
};

// Ajax 요청으로 get 방식의 text 데이터를 받아온다.
MyLib.get = function(url, data, success, dataType){
  var options = {dataType: dataType};
  if(typeof data == 'string'){
    options.data = data;
    options.success = success;
  }else{
    options.success = data;
  }

  MyLib.ajax(url, options);
};

// 서버에 ajax 요청을 보낸다.
// var ajax = function(url, method, async, data, dataType, success){
MyLib.ajax = function(url, options){
  options = options || {};
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