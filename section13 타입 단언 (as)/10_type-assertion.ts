/** 타입 단언 (type assertion) */
// 수식어 : as 
var a; // 초기화를 하지 않았기 때문에 any 타입으로 추론됨
a = 20; // a 는 number 할당했지만 any 타입으로 추론됨
a = 'a'; // a 는 string 할당했지만 any 타입으로 추론됨
var b = a; // 여전히 a 는 any 타입이므로 b 또한 any 타입으로 추론됨
var c = a as string; // a 는 'as' 수식어로 string 타입으로 단언 => c 는 string 타입으로 추론됨

/** 타입 단언 예제 */
// 주로 DOM API 조작 시 사용되기도 한다.

// <div id="app">hi</div>

var div = document.querySelector('div'); // div 는 HTMLDivElement | null 타입으로 추론됨
if (div) {
  // null 체크해야 div.innerText 에 접근할 수 있음
  div.innerText;
}

var div1 = document.querySelector('#app') as HTMLDivElement; // div1 은 HTMLDivElement 타입으로 단언 => div1 은 HTMLDivElement 타입으로 추론됨
// if (div) {
// null 체크 안해도 div1.innerText 에 접근할 수 있음
div1.innerText;
// }
