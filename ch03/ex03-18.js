// 지정한 배열의 모든 요소를 출력한다.
function printArr(arr){
	for(var i=0; i<arr.length; i++){
    console.log(i, arr[i]);
  }
}

var colorArr = ['orange', 'yellow', 'green'];
printArr(colorArr);

// 유사배열객체
var colorObj = {
  
};
printArr(colorObj);