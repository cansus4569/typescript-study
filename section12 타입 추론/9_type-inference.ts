/** 타입 추론 기본 1 */
var a; // any 추론
var b = 10; // number 추론
var c = 'hello'; // string 추론

// default 값이 없는 경우, any로 추론
// default 값이 있는 경우, default 값으로 추론 (number)
function getD(d = 10) {
  var e = 'hi'; // string 추론
  // return d; // number 추론
  return d + e; // string 추론
}

/** 타입 추론 기본 2 */
/** 인터페이스와 제네릭을 이용한 타입 추론 방식 */
interface Dropdown<T> {
  value: T;
  title: string;
}
var shoppingItem: Dropdown<string> = {
  value: 'abc',
  title: 'hello',
};

/** 타입 추론 기본 3 */
/** 복잡한 구조에서의 타입 추론 방식 */
interface Dropdown1<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<K> extends Dropdown1<K> {
  description: string;
  tag: K;
}

var detailedItem: DetailedDropdown<string> = {
  title: 'abc',
  description: 'ab',
  value: 'a',
  tag: 'a',
};

/** Best Common Type 추론 방식 */
var arr1 = [1, 2, 3]; // number[] 추론
var arr2 = [1, 2, true]; // (number | boolean)[] 추론
var arr3 = [1,2,true,false,'a']; // (string | number | boolean)[] 추론

/** Typescript Language Server 소개 */
/**
 * https://code.visualstudio.com/docs/languages/typescript#_code-suggestions
 * https://code.visualstudio.com/api/language-extensions/language-server-extension-guide
 * https://langserver.org/
 * https://learn.microsoft.com/ko-kr/visualstudio/extensibility/language-server-protocol?view=vs-2019
 * 
 * node_modules/typescript/lib/tsserver.js
 */