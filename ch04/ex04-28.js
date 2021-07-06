// ex04-23.js 복사
var name = 'global';
function returnName(){
	return this.name;
}

// 일반적인 함수로 호출(함수명())
console.log(returnName());

// 객체의 메소드로 호출(객체.메소드명())
var kim = new Object();
kim.name = '김철수';
kim.age = 30;
kim.getName = returnName;

var lee = {
  name: '이영희',
  age: 35,
  getName: returnName
};

// 객체를 생성해서 반환하는 함수
function Person(name, age){
  var obj = {};

  obj.name = name;
  obj.age = age;
  obj.getName = function(){
    return this.name;
  };

  return obj;
}

var kim = Person('김철수', 30);
var lee = Person('이영희', 35);
var hong = Person('홍길동', 40);




console.log(kim.age, kim.getName());
console.log(lee.age, lee.getName());

console.log(kim.getName(), kim.getName.call(window));
console.log(lee.getName(), lee.getName.apply(kim));
console.log(returnName(), returnName.call(lee));


